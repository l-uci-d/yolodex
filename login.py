from flask import Flask, redirect, url_for, session, request, jsonify
import boto3
from botocore.exceptions import ClientError

app = Flask(__name__)

# Cognito configuration
COGNITO_REGION = 'ap-southeast-2'
COGNITO_USER_POOL_ID = 'ap-southeast-2_Gq51H57rD'


cognito_client = boto3.client('cognito-idp', region_name=COGNITO_REGION)

@app.route('/signup', methods=['POST'])
def signup():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    try:
        response = cognito_client.sign_up(
            ClientId=COGNITO_CLIENT_ID,
            Username=username,
            Password=password,
            UserAttributes=[
                {
                    'Name': 'email',
                    'Value': email
                },
            ]
        )
        return jsonify({"message": "User signed up successfully!"}), 200
    except ClientError as e:
        return jsonify({"error": e.response['Error']['Message']}), 400

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    try:
        response = cognito_client.initiate_auth(
           
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': username,
                'PASSWORD': password,
            }
        )
        session['access_token'] = response['AuthenticationResult']['AccessToken']
        return jsonify({"message": "Login successful!"}), 200
    except ClientError as e:
        return jsonify({"error": e.response['Error']['Message']}), 400

@app.route('/logout')
def logout():
    session.pop('access_token', None)
    return redirect(url_for('index'))

@app.route('/profile')
def profile():
    access_token = session.get('access_token')
    if not access_token:
        return redirect(url_for('login'))

    try:
        response = cognito_client.get_user(
            AccessToken=access_token
        )
        return jsonify(response['UserAttributes']), 200
    except ClientError as e:
        return jsonify({"error": e.response['Error']['Message']}), 400

@app.route('/')
def index():
    return 'Welcome to the Flask Cognito Integration Example!'

if __name__ == '__main__':
    app.run(debug=True)
