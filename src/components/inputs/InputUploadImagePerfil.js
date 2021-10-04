import React from 'react'
import { ButtonDownload } from '../Button'

const InputUploadImagePerfil = () => {
    return (
        <div className="mx-1 my-3 flex flex-col justify-items-center align-center">
            <div className="w-52 h-52 border-2 border-accent rounded-full">
                <img src=""/>
            </div>
            <ButtonDownload 
            width="large"
            customClass=" w-28"
            outline={false}
            color="accent"
            />
        </div>
    )
}

export default InputUploadImagePerfil
