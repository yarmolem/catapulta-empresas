import React,{useState} from 'react'
import icon_path from '../../assets/imgs/Path.svg'
const InputCheck = ({name,id,textLabel}) => {
    const [show, setShow] = useState(false);
    const handleShow=()=>{
        setShow(e=>!e);
    }
    return (
        <div className="mx-1 my-3">

            <input
                type="checkbox"
                name={name}
                id={id}
                className="hidden"
            />
            <label
                htmlFor={id}
                className="pl-7 relative cursor-pointer inline-block"
                onClick={handleShow}
            > {textLabel}
                <span className={`absolute flex justify-center w-6 h-6 rounded-full 
                border-dropdown border-2 left-0 top-0 ${show&&"bg-turquoise border-none"}`
                }> 
               {(show)&& <img className="w-2.5" src={icon_path}/>}
                </span>
            </label>

        </div>
    )
}
export default InputCheck
