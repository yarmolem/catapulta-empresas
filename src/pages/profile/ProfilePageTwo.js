import { ButtonDownload } from "../../components/Button"
import iconSuma from "../../assets/imgs/iconSuma.svg"

const ProfilePageTwo = () => {
  return (
    <div className="w-full pb-8 md:max-w-280 lg:max-w-320 xl:max-w-360 mx-auto md:flex md:justify-end">
      <div className="flex flex-col md:flex-row md:justify-end md:mt-10 md:mb-8 md:gap-x-10 " >
        <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
          <div className="w-44 h-44 sm:w-52 sm:h-52 border-2 border-administrator rounded-full ">
            <img src="" />
          </div>
          <div className="w-32">
            <ButtonDownload width="small" text="Cambiar" color='administrator' type='button' border='2' />
          </div>
        </div>
        <div className="mx-7 md:border-l-2 md:pl-15 lg:w-200" >
          <h2 className="text-2xl text-administrator font-bold mb-4">Datos Generales</h2>
          <div className=" lg:flex  lg:gap-13">
            <div className="lg:w-1/2">
              <label
                className=" text-lg tracking-tight font-bold text-gray-100 "
                htmlFor="name"
              >Nombre del Principio 1
              </label>
              <input
                className=" w-full text-gray-500 border border-administrator mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
            </div>
            <div className="lg:w-1/2">
              <div>
                <label
                  className=" text-lg tracking-tight font-bold text-gray-100"
                  htmlFor="name"
                >Area de la Empresa
                </label>
                <div className="flex">
                  <input
                    className=" text-gray-500 w-full border border-administrator mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
                    name="name"
                    type="text"
                    id="name"
                    placeholder=""
                  />
                  <button type="button" className=" flex-0 tracking-tight px-8 rounded-none h-10 bg-administrator text-white text-sm  mr-2">Subir imagen</button>
                  <img
                    src={iconSuma}
                    className="cursor-pointer  -mt-3"
                    onClick
                  />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl text-administrator font-bold my-4">Información de la Empresa</h2>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Logo de la Empresa
            </label>
            <div className="flex">
              <input
                className=" text-gray-500 w-full border border-administrator mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
                name="name"
                type="text"
                id="name"
                placeholder=""
              />
              <button type="button" className=" flex-0 tracking-tight px-8 rounded-none h-10 bg-administrator text-white text-sm  mr-2">Subir imagen</button>
            </div>
          </div>
          <div>
            <label
              className=" text-lg tracking-tight font-bold text-gray-100"
              htmlFor="name"
            >Parte 1
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
          {/* FALTA LA PARTE DEL TEXTAREA */}
          <div className="w-32 mx-auto mt-7">
            <ButtonDownload width="small" text="Siguiente" color='administrator' outline={true} border='2' />
          </div>
        </div>
      </div>

    </div >
  )
}

export default ProfilePageTwo
