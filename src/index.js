import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import client from './apollo'
import AuthState from './context/auth/AuthState'
import { ApolloProvider } from '@apollo/client'

const Entry = () => (
  <ApolloProvider client={client}>
    <AuthState>
      <App />
    </AuthState>
  </ApolloProvider>
)

ReactDOM.render(<Entry />, document.getElementById('root'))
