import React, { useState } from 'react'
import vector from '../../assets/imgs/Vector.svg'
const DropdonwnTipo1 = ({ title, children }) => {
    const [show, setShow] = useState(false);
    const handleShow=()=>{
        setShow(e=>!e);
    }
    return (
        <div className="">
            <div className="relative bg-accent rounded-xl w-full 
            text-white font-bold text-xl px-10 py-5 ">
                {title}
                <img className={`absolute p-3 cursor-pointer ${show&&"transform rotate-180"} `}
                    src={vector}
                    style={{ right: "20px ", top: "10px" }}
                    onClick={handleShow}
                    />
            </div>
            {(show) && <div className={`flex justify-center item-center pt-7 pb-12`}>
                {children}
            </div>}
        </div>
    )
}
export default DropdonwnTipo1;