import React from 'react'
import Card from '../../components/Card'
import banner from '../../assets/imgs/bannerUser-p.png'
import icon_equipo from '../../assets/imgs/equipo 1-p.svg'
import icon_users from '../../assets/imgs/usersActives-p.svg'
import icon_usersNoActives from '../../assets/imgs/userInActives-p.svg'
import icon_usersPhoto from '../../assets/imgs/userPhoto-p.svg'
import icon_usersWithoutPhoto from '../../assets/imgs/usersWithoutPhoto.svg'
import icon_reconocimientos from '../../assets/imgs/reconocimientos.svg'
import grafica from '../../assets/imgs/img-grafica.PNG'
// import Sidebar from '../../components/Sidebar'
import SelectDate from '../../components/inputs/SelectDate'
import { ButtonDownload } from '../../components/Button'

const DashboardVista1 = () => {
    const filterList = ["Edad", "Año", "XXXXXXXX"];

    return (
        <div className="flex">

            {/* <div className="hidden md:block">
                <Sidebar />
            </div> */}
            <div className="w-full md:px-7 border">
                <div className="relative banner mb-5 md:mb-11">
                    <div className="text-white bg-black opacity-50 absolute left-0 bottom-0 right-0 top-0">
                    </div>
                    <div>
                        <img src={banner} className="h-30 w-full" />
                    </div>
                    <p className="text-3xl md:text-4xl  top-1/3 left-5 md:left-12 text-white absolute">
                        Bienvenid@, luis fernando
                    </p>

                </div>

                <div className="cards  flex flex-wrap flex-col items-center sm:flex-row justify-between  ">
                    <Card
                        icon={icon_equipo}
                        number={124}
                        text="Usuarios registrados"
                        color="purple"
                    />
                    <Card
                        icon={icon_users}
                        number={124}
                        text="Usuarios activos"
                        color="brown"
                    />
                    <Card
                        icon={icon_usersNoActives}
                        number={124}
                        text="Usuarios inactivos"
                        color="on-warn"
                    />
                    <Card
                        icon={icon_usersPhoto}
                        number={65}
                        text="Usuarios con fotos"
                        color="orange"
                    />
                    <Card
                        icon={icon_usersWithoutPhoto}
                        number={14}
                        text="Usuarios sin fotos"
                        color="turquoise"
                    />
                    <Card
                        icon={icon_reconocimientos}
                        number={216}
                        text="Reconocimientos"
                        color="purple"
                    />

                </div>
                <div className="mt-12  md:flex  mb-5">
                    <div className="md:w-2/3 md:mr-16">
                        <div className="relative bg-dropdown rounded-xl w-full 
                                    text-white font-bold text-base  md:text-lg 
                                    md:px-10 px-4 text-center md:py-5 py-3 mb-9">
                            Frecuencia de ingreso a la aplicacion
                        </div>
                        <img src={grafica} />
                    </div>

                    
                    <div className="mx-1 md:mx-0 border border-dropdown px-6 py-8 mt-6 md:mt-0 md:w-1/3 ">
                        <p className="text-dropdown font-bold ml-1 mb-6 ">Seleccione según su preferencia:</p>
                        <p className="ml-1">Frecuencia</p>
                        <SelectDate dateList={filterList} titleSelect="Filtrar" name="frecuencia" />
                        <p className="ml-1">Fecha</p>
                        <SelectDate dateList={filterList} titleSelect="Seleccione la fecha" name="fecha" />
                        <p className="ml-1">Área</p>
                        <SelectDate dateList={filterList} titleSelect="Seleccionar área" name="fecha" />
                        <div className="mt-5 flex justify-center">
                            <ButtonDownload
                                customClass=''
                                text='Generar Reporte'
                                width="large"
                                color='dropdown'
                                border='drpdown'
                                outline={false}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardVista1