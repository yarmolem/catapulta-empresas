import React from 'react'

import b_peru from '../../assets/imgs/Group 99.jpg'
import icono_select from '../../assets/imgs/Layer 2.svg'
const InputPhone = () => {


    return (
        <div className="relative my-3 mx-1 ">
            <div>
                <label
                    className="text-on-warn text-lg tracking-tight font-bold "
                    htmlFor="number"
                >Celular
                </label>
            </div>
            <div className="border flex absolute " style={{ top: "55%", left: "15px" }}>
                <img src={b_peru} className="" />
                <img src={icono_select} className="cursor-pointer" />
            </div>

            <input
                type="text"
                className=" w-full border border-accent py-2 pl-15 outline-none
                text-lg tracking-tight text-on-warn
             focus:ring-2 focus:ring-accent focus:border-accent-500 placeholder-gray-500
             "
                placeholder="912 345 678"
                id="number"
            />



        </div>
    )
}

export default InputPhone
