import excel from '../../assets/imgs/excel.svg'
export const ButtonOffice = ({ type = 'button', office = excel }) => {
  return (
    <div className="flex justify-center">
      <button type={type} className='flex items-center font-semibold underline text-on-warn  text-label  gap-x-2 w-72 px-10' >
        <img src={office} alt="" />
        <p>Descargar Historial</p>
      </button>
    </div>

  )
}

export const ButtonDownload = ({ type = 'button', text = 'Descargar', width = 'small', color = 'primary', border = '2', outline = false }) => {
  if (width === 'small') {
    if (outline === true) {
      return (
        <input type={type} className={`cursor-pointer  text-${color}-500  px-6 py-2 bg-transparent  rounded-md text-center border-${border} border-${color}-500 font-semibold text-base `} value={text} />
      )
    } else {
      return (
        <input type={type} className={`cursor-pointer bg-${color}-500 px-6 py-2 text-white rounded-md text-center border-${border} border-${color}-500  font-medium text-base  `} value={text} />
      )
    }
  } else if (width === 'medium') {
    if (border === !'') {
      if (outline === true) {
        return (
          <input type={type} className={`cursor-pointer  text-${color}  px-9 py-1 tracking-widest bg-transparent rounded-md text-center border border-${color} font-semibold text-md  `} value={text} />
        )
      } else {
        return (
          <input type={type} className={`cursor-pointer bg-${color} px-9 py-1 tracking-widest text-white  rounded-md text-center border border-${color}  font-semibold text-md  `} value={text} />
        )
      }
    } else {
      if (outline === true) {
        return (
          <input type={type} className={`cursor-pointer  text-${color}  px-9 py-1 tracking-widest bg-transparent rounded-md text-center border${border} border-${color} font-semibold text-md  `} value={text} />
        )
      } else {
        return (
          <input type={type} className={`cursor-pointer bg-${color} px-9 py-1 tracking-widest text-white  rounded-md text-center border${border} border-${color}  font-semibold text-md  `} value={text} />
        )
      }
    }
  } else if (width === 'large') {
    if (outline === true) {
      return (
        <input type={type} className={`cursor-pointer  text-${color} w-full px-8 py-2 tracking-wide bg-transparent   rounded-md text-center border-${border} border-${color} font-medium text-base  `} value={text} />
      )
    } else {
      return (
        <input type={type} className={`cursor-pointer bg-${color} w-full px-8 py-2 tracking-wide text-white border-${border} border-${color} rounded-md text-center  font-medium text-base  `} value={text} />
      )
    }
  }
}
