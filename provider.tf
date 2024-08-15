provider "aws" {
  region = "ap-southeast-2"
}


resource "aws_cognito_user_pool" "pool" {
  name = "yolodex.users"

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_numbers   = true
    require_uppercase = true
  }

  auto_verified_attributes = ["email"]
}


resource "aws_cognito_user_pool_client" "pool" {
  name         = "yolodex.users"
  user_pool_id = aws_cognito_user_pool.pool.id

  allowed_oauth_flows             = ["code"]
  allowed_oauth_scopes            = ["email", "openid", "profile"]
  callback_urls                   = ["https://127.0.0.1:5000/callback"] 
  logout_urls                     = ["https://127.0.0.1:5000/logout"]   
  supported_identity_providers    = ["COGNITO"]
  allowed_oauth_flows_user_pool_client = true

  prevent_user_existence_errors   = "ENABLED"
}

resource "aws_cognito_user_pool_domain" "pool" {
  domain      = "yolodex--signin" 
  user_pool_id = aws_cognito_user_pool.pool.id
}

output "user_pool_id" {
  value = aws_cognito_user_pool.pool.id
}

output "user_pool_client_id" {
  value = aws_cognito_user_pool_client.pool.id
}

output "user_pool_domain" {
  value = aws_cognito_user_pool_domain.pool.domain
}
