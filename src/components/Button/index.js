// import excel from '../../assets/images/excel.svg'
export const ButtonOffice = ({ office /* = excel */ }) => {
  return (
    <button className='cursor-pointer flex items-center font-semibold text-gray-200 gap-x-2 w-52'>
      <img src={office} alt="" />
      <p>Descargar Historial</p>
    </button>
  )
}

export const ButtonDownload = ({ 
  customClass = '',
  text = 'Descargar',
  width = '',
  color = '',
  border = '',
  outline = false,
  
}) => {
  if (width === 'small') {
    if (outline === true) {
      return (
        <button className={`${customClass} flex algin-center justify-center cursor-pointer text-${color}-500  px-6 py-2 bg-transparent  rounded-md text-center border-${border} border-${color}-500 font-semibold text-base `}>
          {text}
        </button>
      )
    } else {
      return (
        <button className={`${customClass} flex algin-center justify-center cursor-pointer bg-${color}-500 px-6 py-2 text-white rounded-md text-center border-${border} border-${color}-500  font-medium text-base `}>
          {text}
        </button>
      )
    }
  } else if (width === 'medium') {
    if (border === !'') {
      if (outline === true) {
        return (
          <button className={`${customClass} flex algin-center justify-center cursor-pointer text-${color}  px-9 py-1 tracking-widest bg-transparent rounded-md text-center border border-${color} font-semibold text-md `}>
            {text}
          </button>
        )
      } else {
        return (
          <button className={`${customClass} flex algin-center justify-center cursor-pointer bg-${color} px-9 py-1 tracking-widest text-white  rounded-md text-center border border-${color}  font-semibold text-md `}>
            {text}
          </button>
        )
      }
    } else {
      if (outline === true) {
        return (
          <button className={`${customClass} flex algin-center cursor-pointer justify-center text-${color}  px-9 py-1 tracking-widest bg-transparent rounded-md text-center border${border} border-${color} font-semibold text-md `}>
            {text}
          </button>
        )
      } else {
        return (
          <button className={`${customClass} flex algin-center cursor-pointer justify-center bg-${color} px-9 py-1 tracking-widest text-white  rounded-md text-center border${border} border-${color}  font-semibold text-md `}>
            {text}
          </button>
        )
      }
    }
  } else if (width === 'large') {
    if (outline === true) {
      return (
        <button className={`${customClass} cursor-pointer text-${color}  px-8 py-2 tracking-wide bg-transparent   
          rounded-md text-center border-${border} border-${color} 
          flex algin-center justify-center
          font-medium text-base `}>
          {text}
        </button>
      )
    } else {
      return (
        <button className={`${customClass}  bg-${color} px-8 py-2 tracking-wide text-white 
          border-${border} border-${color} rounded-md text-center  
          flex algin-center justify-center font-medium text-base cursor-pointer`}>
          {text}
        </button>
      )
    }
  }
}