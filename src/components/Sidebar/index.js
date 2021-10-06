import logo from '../../assets/imgs/logo.svg'
import iconDashboard from '../../assets/imgs/icon-dashboard.svg'
import iconProfile from '../../assets/imgs/icon-profile.svg'
import iconCompanies from '../../assets/imgs/icon-companies.svg'
import iconNews from '../../assets/imgs/icon-news.svg'
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

const Sidebar = ({show,handleClick}) => {









  return (
    <div className={`w-full  sm:w-44 h-screen flex flex-col border-r border-gray-400 shadow-xl 
       hidde md:relative 
       absolute top-22 z-10 bg-white text-white min-h-full text-orange
       ${show&&"hidden"}
    `}>
      <img className="sm:w-4/5 my-8 self-center hidden" src={logo}></img>
      <nav className="text-base font-semibold w-full">
        <ul className="flex flex-col md:pl-4  gap-y-4">
          {/* {links.map(({ url, name }) => (
            <li className="flex  items-center  pl-2 py-3 rounded-l-full bg-gray-100">
              <img className="" src={url} />
              <span className="text-2xl sm:text-base ml-2">{name}</span>
            </li>
          ))} */}
          <li className=" pl-2 py-3 md:rounded-l-full bg-gray-100 ">
            <Link to='/profile' 
            className="flex  items-center "
            onClick={()=>handleClick()}
            >
              <img className="" src={iconDashboard}></img>
              <span className="text-2xl sm:text-base ml-2  text-white">Dashboard</span>
            </Link>
          </li>
          <li className="flex  items-center  pl-2 py-3">
            <img className="" src={iconProfile}></img>
            <span className="text-2xl sm:text-base ml-3">Perfil General</span>
          </li>
          <li className="flex  items-center  pl-2 py-3">
            <img className="" src={iconCompanies}></img>
            <span className="text-2xl sm:text-base ml-2">BD Empresas</span>
          </li>
          <li className="flex  items-center  pl-2 py-3   ">
            <img className="" src={iconNews}></img>
            <span className="text-2xl sm:text-base ml-2">
              Gestión de Noticias
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
