import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import App from '../App';
import { AuthContext } from '../context/auth/AuthState';
import Dashboard from '../pages/layout/Dashboard';
import Login from '../pages/login/Login';





//sistema de rutas principales

const AppRouter = () => {
    const pepe =useContext(AuthContext);
    console.log(pepe);
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} /> 
                    <Route exact path="/componentes" component={App}/>
                    <Route exact path="/dashboard" component={Dashboard}/>               
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
