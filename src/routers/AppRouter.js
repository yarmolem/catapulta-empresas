import React, {  useContext, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import App from '../App'
import Login from '../pages/login/Login'
//import Dashboard from '../pages/layout/Dashboard'
import { AuthContext } from '../context/auth/AuthState'
import DashboardVista1 from '../pages/Dashboard/DashboardVista1'
import Profile from '../pages/profile/Profile'
import ProfilePageTwo from '../pages/profile/ProfilePageTwo'


// Sistema de rutas principales

const HomeRoutes = () => {

  return (
    <>
      
      <Route exact path="/" component={DashboardVista1} />
      <Route exact path="/componentes" component={App} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profilePageTwo" component={ProfilePageTwo} />
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
  const isAuth = JSON.parse(localStorage.getItem('user'))|| user.trim() !== ''

  

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
