from flask import *
import boto3
import uuid
from flask_cognito import CognitoAuth

app = Flask(__name__)

# Configure DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')
table = dynamodb.Table('yolodex')


@app.route('/')
def index():
    # Fetch all items from DynamoDB
    response = table.scan()
    items = response.get('Items', [])

    return render_template('index.html', items=items)

@app.route('/add_item', methods=['POST'])
def add_item():
    # Get form data
    name = request.form['name']
    description = request.form['description']


    # Generate a unique item ID
    item_id = str(uuid.uuid4())

    # Insert new item into DynamoDB
    table.put_item(
        Item={
            'itemID': item_id,
            'name': name,
            'description': description,

        }
    )

    return redirect(url_for('index'))

if __name__ == '__main__':
   app.run(ssl_context=('cert.pem', 'key.pem'), debug=True)
