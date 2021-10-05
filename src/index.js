import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import client from './apollo'
import AppRouter from './routers/AppRouter'
import { ApolloProvider } from '@apollo/client'
import AuthState from './context/auth/AuthState'

import { BrowserRouter as Router } from 'react-router-dom'

const Entry = () => (
  <ApolloProvider client={client}>
    <AuthState>
      {/*envuelve toda mi aplicacion con un provider personalizado*/}
      <Router>
        <AppRouter />
      </Router>
    </AuthState>
  </ApolloProvider>
)

ReactDOM.render(<Entry />, document.getElementById('root'))
