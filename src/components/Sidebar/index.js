import logo from '../../assets/imgs/icon-Logo-AE.svg'
import iconDashboard from '../../assets/imgs/icon-Dashboard-AE.svg'
import iconBd from '../../assets/imgs/icon-Bd-AE.svg'
import iconEmpleados from '../../assets/imgs/icon-Empleados-AE.svg'
import iconPremiaciones from '../../assets/imgs/icon-Premiaciones-AE.svg'
import iconBonificaciones from '../../assets/imgs/icon-Bonificaciones-AE.svg'
import iconMedallas from '../../assets/imgs/icon-Medallas-AE.svg'
import iconNoticias from '../../assets/imgs/icon-GestionNoticias-AE.svg'
import iconGestionQa from '../../assets/imgs/icon-GestionQ&A-AE.svg'
import { Link } from 'react-router-dom'
//import { useState } from 'react'

// const links = [
//   {
//     url: iconDashboard,
//     name: 'Dashboard'
//   },
//   {
//     url: iconProfile,
//     name: 'Perfil General'
//   }
// ]

const Sidebar = ({ show, handleClick }) => {









  return (
    <div className={`w-full  md:w-52 h-screen flex flex-col border-r border-gray-400 shadow-xl 
       hidde md:sticky md:top-0 
       absolute top-24 z-10 bg-white min-h-full text-accent
       ${show && "hidden"}
    `}>
      <img className="sm:w-4/5 my-8 self-center hidden md:block" src={logo}></img>
      <nav className="text-base font-semibold w-full">
        <ul className="flex flex-col md:pl-2  ">
          {/* {links.map(({ url, name }) => (
            <li className="flex  items-center  pl-2 py-3 rounded-l-full bg-gray-100">
              <img className="" src={url} />
              <span className="text-2xl sm:text-base ml-2">{name}</span>
            </li>
          ))} */}
          <li className=" pl-1 py-3 pmd:rounded-l-full pbg-gray-100  ">
            <Link to='/'
              className="flex  items-center "
              onClick={() => handleClick()}
            >
              <img className="" src={iconDashboard}></img>
              <span className="text-2xl sm:text-base ml-2  text-whites">Dashboard</span>
            </Link>
          </li>

          <li className="flex  items-center  pl-1 py-3 ">
            <Link to='/administrador'
              className="flex  items-center "
              onClick={() => handleClick()}>
              <img className="" src={iconBd}></img>
              <span className=" text-2xl sm:text-base ml-2">BD Administrador</span>
            </Link>

          </li>

          <li className="flex  items-center  pl-1 py-3 ">
            <Link to='/components'
              className="flex  items-center "
              onClick={() => handleClick()}

            >
              <img className="" src={iconEmpleados}></img>
              <span className="text-2xl sm:text-base ml-2">BD Empleados</span>
            </Link>

          </li>

          <li className="flex  items-center  pl-1 py-3   ">
            <Link to='/premiaciones'
              className="flex  items-center "
              onClick={() => handleClick()}
            >
              <img className="" src={iconPremiaciones}></img>
              <span className="text-2xl sm:text-base ml-2">
                Gestión de Premiaciones
              </span>
            </Link>

          </li>

          <li className="flex  items-center  pl-1 py-3   ">
            <img className="" src={iconBonificaciones}></img>
            <span className="text-2xl sm:text-base ml-2">
              Gestión de Bonificaciones
            </span>
          </li>

          <li className="flex  items-center  pl-1 py-3   ">
            <img className="" src={iconMedallas}></img>
            <span className="text-2xl sm:text-base ml-2">
              Gestión de Medallas
            </span>
          </li>

          <li className="flex  items-center  pl-1 py-3   ">
            <img className="" src={iconNoticias}></img>
            <span className="text-2xl sm:text-base ml-2">
              Gestión Noticias
            </span>
          </li>

          <li className="flex  items-center  pl-1 py-3   ">
            <img className="" src={iconGestionQa}></img>
            <span className="text-2xl sm:text-base ml-2">
              Gestión de Q&A
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
