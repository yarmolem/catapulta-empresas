import { useState, useEffect } from "react"
import InputName from "./components/inputs/InputName"
import InputPhone from "./components/inputs/InputPhone"
import InputUploadImage from "./components/inputs/InputUploadImage"
import SelectDate from "./components/inputs/SelectDate"
import InputTextArea from "./components/inputs/InputTextArea"
import DropdonwnTipo1 from "./components/dropdown/DropdonwnTipo1"
import DropdonwnTipo2 from "./components/dropdown/DropdonwnTipo2"
import InputCheck from "./components/inputs/InputCheck"
import InputUploadImagePerfil from "./components/inputs/InputUploadImagePerfil"

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../src/views/auth/Login'
import Layout from '../src/views/layout/Dashboard'


const App = () => {
  const [isAuth, setisAuth] = useState(false)
  const dateList = ["10-10-2021", "11-11-2021", "22-12-2021"];
  const filterList = ["Edad", "Año", "XXXXXXXX"];

  const DriverPages = (history) => {
    useEffect(() => {
      history.push('/')
    }, [])



    return (
      <>
        <Route exact path="/" component={Layout} />
        {/*     <Route exact path="/nuevo-despacho" component={NuevoDespacho} />
        <Route exact path="/lista-despacho" component={ListaDespachos} />
        <Route exact path="/editar-despacho/:id" component={EditarDespacho} /> */}
      </>
    )
  }
  const AuthPages = () => {
    return <Route exact path="/auth/login" >
      <Login setisAuth={setisAuth} />
    </Route>
  }

  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          {isAuth ? DriverPages(history) : AuthPages(history)}
          <Redirect to={isAuth ? '/' : '/auth/login'} />
        </Switch>
      </BrowserRouter>

      <InputName
        labelName="Nombre"
        inputColor=""
      />
      <SelectDate dateList={dateList} />
      <InputPhone />
      <InputUploadImage />
      <InputTextArea />
      <DropdonwnTipo2 filterList={filterList} />
      <DropdonwnTipo1 title="Votaciones" content="fjkhfjhwejfhewkfwekhkwehekwlfhweklfhweflkhekwl" />
      <InputCheck name="js" id="js" textLabel="JAVASCRIPT" />
      <InputUploadImagePerfil />
    </div>


  )
}

export default App
