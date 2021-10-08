import { useState } from 'react'
import iconSuma from '../../assets/imgs/iconSuma.svg'
const InputUploadImage = ({ text = 'Area de la Empresa', button = true, icon = true, placeholder = '' }) => {
  const [newAreaCompany, setNewAreaCompany] = useState('')
  const updateNewAreaCompany = e => setNewAreaCompany(e.target.value)

  const createNewAreaCompany = () => {
    console.log(newAreaCompany)
    setNewAreaCompany('')
  }

  if (button && icon) {
    return (
      <div className="mb-4">
        <label
          className=" text-lg tracking-tight font-bold text-on-warn"
          htmlFor="name"
        >{text}
        </label>
        <div className="flex">
          <input
            className=" text-on-warn w-full border border-primary  outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-primary-400"
            name="name"
            type="text"
            id="name"
            placeholder={placeholder}
          />
          <button type="button" className="flex-0 tracking-tight px-8 rounded-none h-10.5 bg-primary text-white text-sm  ">Subir imagen</button >
          <img
            src={iconSuma}
            className="cursor-pointer self-center ml-2"
          />
        </div>
      </div>
    )
  } else if (button) {
    return (
      <div className="mb-4">
        <label
          className=" text-lg tracking-tight font-bold text-on-warn"
          htmlFor="name"
        >{text}
        </label>
        <div className="flex">
          <input
            className=" text-on-warn w-full border border-primary  outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-primary-400"
            name="name"
            type="text"
            id="name"
            placeholder={placeholder}
          />
          <button type="button" className="flex-0 tracking-tight px-8 rounded-none h-10.5 bg-primary text-white text-sm  mr-2">Subir imagen</button >
        </div>
      </div>
    )
  } else {
    return (
      <div className="mb-4">
        <label
          className=" text-lg tracking-tight font-bold text-on-warn"
          htmlFor="name"
        >{text}
        </label>
        <div className="flex">
          <input
            className=" text-on-warn w-full border border-primary  outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-administrator-400"
            name="name"
            type="text"
            id="name"
            placeholder={placeholder}
            value={newAreaCompany}
            onChange={updateNewAreaCompany}
          />
          <button onClick={createNewAreaCompany}> <img src={iconSuma} className="cursor-pointer self-center ml-2" /></button>
        </div>
      </div>
    )
  }
}

export default InputUploadImage
