/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const awsExports = {
    "aws_project_region": env.process.env.REACT_APP_PROJECT_REGION,
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

const initialState = { name: '12 Kombuchas', description: 'R$109,90' }

const App = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <Heading level={1}>Oi {user.username}</Heading>
      <Button onClick={signOut} style={styles.button}>Deslogar</Button>
      <h2>Clube Vege</h2>
      <input

        style={styles.input}
        value={formState.name}
        placeholder="12 kombuchas" 
        disabled
      />
      <input

        style={styles.input}
        value={formState.description}
        placeholder="R$109,00"
        disabled
      />
      <button style={styles.button} onClick={addTodo}>Contratar</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App);