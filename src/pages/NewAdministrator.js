import InputUploadImagePerfil from '../../components/inputs/InputUploadImagePerfil'
import InputPhone from '../../components/inputs/InputPhone'
import InputName from '../../components/inputs/InputName'
import { ButtonDownload } from '../../components/Button'
import Breadcrumb from '../../components/Breadcrumb'

const NewAdministrator = () => {
  return (
    <div className="">
      <Breadcrumb />
      <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-center lg:justify-center px-3">
        <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
          <InputUploadImagePerfil border="dashed" text='Subir Foto' color='accent' />
          <div className="mx-7  md:pl-15 lg:w-200" >
            <h2 className="text-2xl text-accent font-bold mb-4">Completa los datos del nuevo administrador</h2>
            <InputName labelName='Nombres' placeholder='' />
            <InputName labelName='Apellidos' placeholder='' />
            <InputName labelName='E-mail' placeholder='' />
            <div className=" lg:flex  lg:gap-13">
              <div className="lg:w-1/2">
                <InputName labelName='DNI' placeholder='' />
              </div>
              <div className="relative mb-3 lg:w-1/2">
                <InputPhone />
              </div>
            </div>
            <div className=" lg:flex  lg:gap-13">
              <div className="lg:w-1/2">
                <InputName labelName='Fecha de Nacimiento' placeholder='' />
              </div>
              <div className="lg:w-1/2">
                <InputName labelName='Fecha de Ingreso' placeholder='' />
              </div>
            </div>
            <InputName labelName='Area' placeholder='' />
            <InputName labelName='Cargo' placeholder='' />
            <div className="w-32 mx-auto mt-7">
              <ButtonDownload width="small" text="CREAR CUENTA" color='primary' outline={true} border='2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewAdministrator
