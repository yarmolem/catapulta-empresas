import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import HamburguesBtn from '../../components/Btn-Hamburguers/hamburguesBtn'
import { useState } from 'react'
const Layout = ({ children }) => {

const [show,setShow]= useState(true);

const handleClick=()=>{

  setShow(e=>!e);
}

  return (
    <div className="flex w-full relative ">
      <Sidebar 
      show={show}
      handleClick={handleClick}
      />
      <div className="w-full">
        <Header />
        {children}
      </div>

      <HamburguesBtn 
      handleClick={handleClick}
      show={show}
      />
    </div>
  )
}

export default Layout
