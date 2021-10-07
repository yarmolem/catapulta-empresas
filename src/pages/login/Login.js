import logo from '../../assets/imgs/logo.svg'
import imagenLogin from '../../assets/imgs/imagen-login.png'
import InputName from '../../components/inputs/InputName'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthState'
// import ForgotPassword from '../../components/ForgotPassword'
/* import { MenuIcon } from '../../icons' */
/* import { AlertForgotPassword } from '../../components/Alert/index'
 */
const Login = () => {
  const { loginAction } = useContext(AuthContext)
  
  const handleLogin = (e) => {
    e.preventDefault()
    //localStorage.setItem('user', JSON.stringify({user: 'Percy',}))
    loginAction({
      user: 'Percy Córdova',
      email: 'cordova@gmail.com',
      rol: 'asdaw'
    })
  }

  return (
    <div className="h-screen flex">
      <img
        className="hidden md:block w-full h-full object-cover"
        src={imagenLogin}
        alt=""
      />
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center w-11/12">
          <img className="w-72 sm:w-80 mb-7" src={logo} alt="" />
          {/*  <MenuIcon className="text-blue-300" /> */}
          {/* <ForgotPassword /> */}
          {/* <AlertForgotPassword /> */}
          <form className="w-64 sm:w-80" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <InputName label="Usuario" className="mb-4" type="text" placeholder="user" />
              <InputName label="Contraseña" type="password" placeholder="Password" />
              <a
                href="#"
                className="text-orange-500 text-sm my-2 underline italic "
              >
                Olvidaste la contraseña
              </a>

              <button
                type="submit"
                className="w-full sm:w-56 sm:mx-auto bg-orange-700 text-white px-4 font-semibold py-1 rounded-lg mt-4 outline-none disabled:opacity-50"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
