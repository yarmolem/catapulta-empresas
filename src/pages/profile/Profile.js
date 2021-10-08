import { ButtonDownload } from '../../components/Button/index'
import InputName from '../../components/inputs/InputName'
import InputPhone from '../../components/inputs/InputPhone'
import InputUploadImage from '../../components/inputs/InputUploadImage'
import InputUploadImagePerfil from '../../components/inputs/InputUploadImagePerfil'

const Profile = () => {
  return (
    <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-center lg:justify-center px-3">
      <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
        <InputUploadImagePerfil />
        <div className="mx-7 md:border-l-2 md:pl-15 lg:w-200" >
          <h2 className="text-2xl text-primary font-bold mb-4">Datos Generales</h2>
          <InputName labelName='Nombre' placeholder='Lindley' />
          <InputName labelName='Direcccion' placeholder='' />
          <InputName labelName='Razon Social' placeholder='' />
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <InputName labelName='Correo Electronico' placeholder='' />
            </div>
            <div className="lg:w-1/2">
              <InputName labelName='Telefono' placeholder='' />
            </div>
          </div>
          <InputUploadImage text="Area de la Empresa" icon={true} button={false} />
          <h2 className="text-2xl text-primary font-bold my-4">Datos del Administrador Principal de la Empresa</h2>
          <InputName labelName='Nombres' placeholder='' />
          <InputName labelName='Apellidos' placeholder='' />
          <InputName labelName='Correo Electronico' placeholder='' />
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <InputName labelName='DNI' placeholder='' />
            </div>
            <div className="mb-3 lg:w-1/2">
              <InputPhone />
            </div>
          </div>
          <InputName labelName='Area' placeholder='' />
          <InputName labelName='Cargo' placeholder='' />
          <div className="w-32 mx-auto mt-7">
            <ButtonDownload width="small" text="Siguiente" color='primary' outline={true} border='2' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile
