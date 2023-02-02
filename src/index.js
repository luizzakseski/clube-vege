import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter } from 'react-router-dom';

import { Amplify }  from 'aws-amplify'

const awsExports = {
    "aws_project_region": process.env.REACT_APP_PROJECT_REGION,
    "aws_cognito_identity_pool_id": process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    "aws_cognito_region": process.env.REACT_APP_COGNITO_REGION,
    "aws_user_pools_id": process.env.REACT_APP_USER_POOLS_ID,
    "aws_user_pools_web_client_id": process.env.REACT_APP_USER_POOLS_WEB_CLIENT_ID,
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "BIRTHDATE",
        "GENDER",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OPTIONAL",
    "aws_cognito_mfa_types": [
        "TOTP"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS",
            "REQUIRES_UPPERCASE"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": process.env.REACT_APP_USER_FILES_S3_BUCKET,
    "aws_user_files_s3_bucket_region": process.env.REACT_APP_USER_FILES_S3_BUCKET_REGION,
    "aws_appsync_graphqlEndpoint": process.env.REACT_APP_APPSYNC_GRAPHQLENDPOINT,
    "aws_appsync_region": process.env.REACT_APP_APPSYNC_REGION,
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_appsync_apiKey": process.env.REACT_APP_APPSYNC_APIKEY,
};



Amplify.configure(awsExports);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
