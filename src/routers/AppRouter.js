import React, { useContext, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
//import App from '../App'
import Layout from "../pages/layout";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import { AuthContext } from "../context/auth/AuthState";
//import ProfilePageTwo from '../pages/profile/ProfilePageTwo'
import DashboardVista1 from "../pages/Dashboard/DashboardVista1";
//import App from '../App'
import AwardView1 from "../pages/award management/AwardView1";
import Administrator from "../pages/BD Admin/Administrator";
import NewAdministrator from "../pages/BD Admin/NewAdministrator";
import NewsManagement from "../pages/newsManagement/NewsManagement";
import BdEmpleados from "../pages/BD Empleados/BdEmpleados";
//import Communications from "../pages/communications/Communications";

// Sistema de rutas principales

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={DashboardVista1} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/premiaciones" component={AwardView1} />
        <Route exact path="/administrador" component={Administrator} /> 
        <Route exact path="/empleados" component={BdEmpleados} />   
        <Route
          exact
          path="/administrador/crear-nuevo-administrador"
          component={NewAdministrator}
        />
        <Route exact path="/gestion-noticias" component={NewsManagement} />
        {/*<Route exact path="/gestion-noticias/comunicaciones" component={Communications} />*/}
      </Switch>
    </Layout>
  );
};

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
    </Switch>
  );
};

const AppRouter = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const isAuth = JSON.parse(localStorage.getItem("user")) || user.trim() !== "";

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    } else {
      history.push("/auth/login");
    }
  }, [isAuth]);

  return <div>{isAuth ? HomeRoutes() : AuthRoutes()}</div>;
};

export default AppRouter;
