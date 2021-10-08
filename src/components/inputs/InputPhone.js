import React from 'react'
import bPeru from '../../assets/imgs/banderaPeru.jpg'
import ArrowDown from '../../assets/imgs/iconArrowDown.svg'
const InputPhone = () => {
  return (

    <div className="relative">
      <label
        className="text-lg tracking-tight font-bold text-on-warn"
        htmlFor="number"
      >Celular
      </label>

      <div className="flex absolute top-10 left-3 gap-x-1" >
        <img src={bPeru} className="" />
        <img src={ArrowDown} className="cursor-pointer " />
      </div>

      <input
        type="text"
        className=" text-on-warn w-full border border-primary mb-4 py-2 pl-15 outline-none
                text-lg tracking-tight focus:ring-2 focus:ring-primary focus:border-primary-400 placeholder-text-on-warn"
        placeholder="912 345 678"
        id="number"
      />

      {/* input de percy
       <div className="relative my-3 mx-1 ">
      <div>
        <label
          className="text-on-warn text-lg tracking-tight font-bold "
          htmlFor="number"
        >Celular
        </label>
      </div>
      <div className="border flex absolute top-9 left-3" >
        <img src={bPeru} className="" />
        <img src={ArrowDown} className="cursor-pointer" />
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
    </div> */}
    </div>

  )
}

export default InputPhone
