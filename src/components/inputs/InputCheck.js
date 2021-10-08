import React,{useState} from 'react'
import icon_path from '../../assets/imgs/Path.svg'
import icon_danger from '../../assets/imgs/danger-checkbox.svg'
const InputCheck = ({name,id,textLabel=""}) => {
    const [show, setShow] = useState(false);
    const handleShow=()=>{
        setShow(e=>!e);
    }
    return (
        <div className="">

            <input
                type="checkbox"
                name={name}
                id={id}
                className="hidden"
            />
            <label
                htmlFor={id}
                className="pl-7 relative cursor-pointer  "
                onClick={handleShow}
            > {textLabel}
                <span className={`absolute flex justify-center w-6 h-6 rounded-full 
                border-accen border-20 left-0 top-0 ${show&&"bg-warn border-none"}`
                }> 
               {(show)
               ?<img className="w-2.5" src={icon_path}/>
               :<img className="" src={icon_danger}/>
               }
                </span>
            </label>

        </div>
    )
}
export default InputCheck
