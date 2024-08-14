from flask import Flask, redirect, url_for, request, session, render_template
import boto3
import uuid
import jwt
import requests

app = Flask(__name__)
app.secret_key = b'\x8d\x94\xff\xd3\xf6\xd0\xc1b\xc7\xb6D\x86\x1c\xc1f\xef'

dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')
table = dynamodb.Table('yolodex')

app.config['COGNITO_REGION'] = 'ap-southeast-2'
app.config['COGNITO_USERPOOL_ID'] = 'ap-southeast-2_mVe4UmjV1'
app.config['COGNITO_APP_CLIENT_ID'] = '41lhcieum35ca9k1k5vr212vn9'
app.config['COGNITO_APP_CLIENT_SECRET'] = 'u3m0r452e2du19pn5khmjqqts851p6oojpr5bokmaogagcd7p0n'
app.config['COGNITO_REDIRECT_URL'] = 'https://127.0.0.1:5000/callback'
app.config['COGNITO_DOMAIN'] = 'https://yolodex-signin.auth.ap-southeast-2.amazoncognito.com'

@app.route('/login')
def login():
    cognito_domain = app.config['COGNITO_DOMAIN']
    client_id = app.config['COGNITO_APP_CLIENT_ID']
    redirect_uri = app.config['COGNITO_REDIRECT_URL']
    login_url = (
        f"{cognito_domain}/login?client_id={client_id}&response_type=code&scope=email+openid+phone&redirect_uri={redirect_uri}"
    )
    return redirect(login_url)

@app.route('/callback')
def callback():
    code = request.args.get('code')
    if code:
        cognito_domain = app.config['COGNITO_DOMAIN']
        client_id = app.config['COGNITO_APP_CLIENT_ID']
        client_secret = app.config['COGNITO_APP_CLIENT_SECRET']
        redirect_uri = app.config['COGNITO_REDIRECT_URL']

        token_url = f"{cognito_domain}/oauth2/token"
        response = requests.post(
            token_url,
            auth=(client_id, client_secret),
            data={
                'grant_type': 'authorization_code',
                'client_id': client_id,
                'code': code,
                'redirect_uri': redirect_uri
            }
        )

        token_json = response.json()
        id_token = token_json.get('id_token')

        if id_token:
                decoded_token = jwt.decode(id_token, options={"verify_signature": False})
                print(decoded_token)  # Debugging: Print the entire decoded token
                
                # Extract a meaningful name from the token
                user_name = decoded_token.get('name') or decoded_token.get('preferred_username') or decoded_token.get('email') or 'User'
                session['user'] = {'id_token': id_token, 'name': user_name}
                
                return redirect(url_for('index'))
        else:
            return "Login failed", 401

    return "No code provided", 400

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return redirect(url_for('index'))

@app.route('/')

def index():
    if 'user' not in session:
        return redirect(url_for('login'))

    user_logged_in = True
    response = table.scan()
    items = response['Items']
    return render_template('index.html', items=items, user_logged_in=user_logged_in)

@app.route('/add_item', methods=['POST'])
def add_item():
    name = request.form['name']
    description = request.form['description']
    item_id = str(uuid.uuid4())

    table.put_item(
        Item={
            'itemID': item_id,
            'name': name,
            'description': description,
        }
    )
    return redirect(url_for('index'))

@app.route('/edit_item/<item_id>', methods=['POST'])
def edit_item(item_id):
    response = table.get_item(Key={'itemID': item_id})
    item = response.get('Item')

    if item:
        return render_template('edit_item.html', item=item)
    else:
        return redirect(url_for('index'))

@app.route('/update_item/<item_id>', methods=['POST'])
def update_item(item_id):
    name = request.form['name']
    description = request.form['description']

    table.update_item(
        Key={'itemID': item_id},
        UpdateExpression='SET #name = :name, #description = :description',
        ExpressionAttributeNames={'#name': 'name', '#description': 'description'},
        ExpressionAttributeValues={':name': name, ':description': description}
    )
    return redirect(url_for('index'))

@app.route('/delete_item/<item_id>', methods=['POST'])
def delete_item(item_id):
    table.delete_item(Key={'itemID': item_id})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(ssl_context=('cert.pem', 'key.pem'), debug=True)
