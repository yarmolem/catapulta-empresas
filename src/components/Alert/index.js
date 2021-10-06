import closeX from '../../assets/images/close-x.svg'
import closeO from '../../assets/images/close-o.svg'
import closeXSolid from '../../assets/images/close-x-solid.svg'
import mail from '../../assets/images/mail.svg'

export const AlertIncorrect = () => {
  return (
    <div className="">
      <div className="flex flex-col w-88. h-72 px-4 pt-4 pb-7 justify-items-center bg-orange-700 rounded-3xl items-center shadow-md">
        <img src={closeX} className="w-8 self-end"></img>
        <img src={closeO} className="w-22 mb-8"></img>
        <p className="text-white font-semibold text-center w-36 text-xl leading-6 ">
          El usuario y/o contraseña es incorrecto.
        </p>
      </div>
    </div>
  )
}

export const AlertForgotPassword = () => {
  return (
    <div className="">
      <div className="flex flex-col w-80 h-72 px-4 pt-4 pb-7 justify-items-center bg-orange-700 rounded-3xl items-center shadow-md">
        <img src={closeXSolid} className="w-8 self-end"></img>
        <p className="text-white font-semibold text-xl">Usuario enviado</p>
        <img src={mail} className="w-22 my-6"></img>
        <p className="text-white font-medium text-center w-60 text-base ">
          Te hemos enviado un enlace para reestablecer tu contraseña a tu correo
          electrónico.
        </p>
      </div>
    </div>
  )
}
