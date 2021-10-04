import React, { useState } from 'react'
import vector from '../../assets/imgs/Vector.svg'
const DropdonwnTipo1 = ({ title, content }) => {
    const [show, setShow] = useState(false);
    const handleShow=()=>{
        setShow(e=>!e);
    }
    return (
        <div className="my-3 px-1">
            <div className="relative bg-dropdown rounded-xl w-full 
            text-white font-bold text-lg px-10 py-5 ">
                {title}
                <img className={`absolute cursor-pointer ${show&&"transform rotate-180"} `}
                    src={vector}
                    style={{ right: "20px ", top: "20px" }}
                    onClick={handleShow}
                    />
            </div>
            {(show) && <div className={` bg-accent-400 text-white px-10 py-5`}>
                {content}
            </div>}
        </div>
    )
}
export default DropdonwnTipo1;