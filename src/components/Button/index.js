import excel from "../../assets/imgs/excel.svg";
export const ButtonOffice = ({
  type = "button",
  office = excel,
  onClick = () => {},
}) => {
  console.log("onclick : ", onClick);
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        type={type}
        className="flex items-center font-semibold underline text-on-warn  text-label  gap-x-2 w-72 px-10"
      >
        <img src={office} alt="" />
        <p>Descargar Historial</p>
      </button>
    </div>
  );
};

export const ButtonDownload = ({
  type = "button",
  text = "Descargar",
  width = "small",
  color = "primary",
  border = "2",
  outline = false,
}) => {
  if (width === "small") {
    if (outline === true) {
      return (
        <button type={type} className={` text-${color}-500  px-6 py-2 bg-transparent w-full rounded-md text-center border-${border} border-${color}-500 font-semibold text-base `} value={text} >
          {text}
        </button>
      )
    } else {
      return (
        <button type={type} className={` bg-${color}-500 px-6 py-2 text-white w-full rounded-md text-center border-${border} border-${color}-500  font-medium text-base  `} value={text} >
          {text}
        </button>
      )
    }
  } else if (width === "medium") {
    if (border === !"") {
      if (outline === true) {
        return (
          <button type={type} className={`  text-${color}  px-9 py-1 tracking-widest w-full bg-transparent rounded-md text-center border border-${color} font-semibold text-md  `} value={text} >
            {text}
          </button>
        )
      } else {
        return (
          <button type={type} className={` bg-${color} px-9 py-1 tracking-widest w-full text-white  rounded-md text-center border border-${color}  font-semibold text-md  `} value={text} >
            {text}
          </button>
        )
      }
    } else {
      if (outline === true) {
        return (
          <button type={type} className={`  text-${color}  px-9 py-1 tracking-widest bg-transparent w-full rounded-md text-center border${border} border-${color} font-semibold text-md  `} value={text} >
            {text}
          </button>
        )
      } else {
        return (
          <button type={type} className={` bg-${color} px-9 py-1 tracking-widest text-white  rounded-md w-full text-center border${border} border-${color}  font-semibold text-md  `} value={text} >
            {text}
          </button>
        )
      }
    }
  } else if (width === "large") {
    if (outline === true) {
      return (
        <button type={type} className={`  text-${color} w-full px-8 py-2 tracking-wide bg-transparent   rounded-md text-center border-${border} border-${color} font-medium text-base  `} value={text} >
          {text}
        </button>
      )
    } else {
      return (
        <button type={type} className={` bg-${color} w-full px-8 py-2 tracking-wide text-white border-${border} border-${color} rounded-md text-center  font-medium text-base  `} value={text} >
          {text}
        </button>
      )
    }
  }
};
