
import bPeru from '../../assets/imgs/bandera_peru.svg'
import ArrowDown from '../../assets/imgs/iconArrowDown.svg'
import iconSuma from '../../assets/imgs/iconSuma.svg'
import { ButtonDownload } from '../../components/Button'

const Profile = () => {
  return (
    <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-end">
      <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
        <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
          <div className="w-44 h-44 sm:w-52 sm:h-52 border-2 border-accent rounded-full ">
            <img src="" />
          </div>
          <div className="w-32">
            <ButtonDownload width="small" text="Cambiar" color='second' />
          </div>
        </div>
        <div className="mx-7 md:border-l-2 md:pl-15 lg:w-200" >
          <h2 className="text-2xl text-red-700 font-bold mb-4">Datos Generales</h2>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Nombre
            </label>
          </div>
          <input
            className="  w-full text-gray-500 border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder="Lindley"
          />
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Direccion
            </label>
          </div>
          <input
            className="  w-full text-gray-500 border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          /> <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Razon Social
            </label>
          </div>
          <input
            className="  w-full text-gray-500 border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          />
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <label
                className=" text-lg tracking-tight font-bold text-gray-100 "
                htmlFor="name"
              >Correo Electronico
              </label>
              <input
                className=" w-full text-gray-500 border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
            </div>
            <div className="lg:w-1/2">
              <label
                className=" text-lg tracking-tight font-bold text-gray-100"
                htmlFor="name"
              >Telefono
              </label>

              <input
                className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
            </div>
          </div>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Area de la Empresa
            </label>
            <div className="flex gap-1">
              <input
                className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
              <img
                src={iconSuma}
                className="cursor-pointer -mt-3"
                onClick
              />
            </div>
          </div>
          <h2 className="text-2xl text-red-700 font-bold my-4">Datos del Administrador Principal de la Empresa</h2>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Nombres
            </label>
          </div>
          <input
            className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder="Lindley"
          />
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Apellidos
            </label>
          </div>
          <input
            className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          /> <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Correo Electronico
            </label>
          </div>
          <input
            className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          />
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <label
                className=" text-lg tracking-tight font-bold text-gray-100"
                htmlFor="name"
              >DNI
              </label>
              <input
                className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
            </div>
            <div className="relative mb-3 lg:w-1/2">
              <label
                className="text-lg tracking-tight font-bold text-gray-100"
                htmlFor="number"
              >Celular
              </label>

              <div className=" flex absolute top-10 left-3 gap-x-1" >
                <img src={bPeru} className="" />
                <img src={ArrowDown} className="cursor-pointer " />
              </div>

              <input
                type="text"
                className=" text-gray-500 w-full border border-accent py-2 pl-15 outline-none
                text-lg tracking-tight focus:ring-2 focus:ring-accent focus:border-accent-500 placeholder-gray-500"
                placeholder="912 345 678"
                id="number"
              />
            </div>
          </div>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Area
            </label>
          </div>
          <input
            className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          />
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Cargo
            </label>
          </div>
          <input
            className=" text-gray-500 w-full border border-accent mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
            name="name"
            type="text"
            id="name"
            placeholder=""
          />
          <div className="w-32 mx-auto mt-7">
            <ButtonDownload width="small" text="Siguiente" color='second' outline={true} border='2' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile
