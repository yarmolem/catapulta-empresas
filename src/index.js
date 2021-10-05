import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import client from './apollo'
import AuthState from './context/auth/AuthState'
import { ApolloProvider } from '@apollo/client'
import AppRouter from './routers/AppRouter'

const Entry = () => (
  <ApolloProvider client={client}>
    <AuthState>{/*envuelve toda mi aplicacion con un provider personalizado*/}
      <AppRouter />
    </AuthState>
  </ApolloProvider>
)

ReactDOM.render(<Entry />, document.getElementById('root'))
