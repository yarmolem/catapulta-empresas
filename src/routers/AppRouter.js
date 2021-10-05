import React, { useContext, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import App from '../App'
import Login from '../pages/login/Login'
import Dashboard from '../pages/layout/Dashboard'
import { AuthContext } from '../context/auth/AuthState'

// Sistema de rutas principales

const HomeRoutes = () => {
  return (
    <>
      <Route exact path="/" component={App} />
      <Route exact path="/dashboard" component={Dashboard} />
    </>
  )
}

const AuthRoutes = () => {
  return (
    <>
      <Route exact path="/auth/login" component={Login} />
    </>
  )
}

const AppRouter = () => {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const isAuth = user.trim() !== ''

  console.log(history)

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    } else {
      history.push('/auth/login')
    }
  }, [isAuth])

  return (
    <div>
      <Switch>{isAuth ? HomeRoutes() : AuthRoutes()}</Switch>
    </div>
  )
}

export default AppRouter
