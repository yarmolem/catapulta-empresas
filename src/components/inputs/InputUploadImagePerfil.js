import React from 'react'
import { ButtonDownload } from '../Button'

const InputUploadImagePerfil = ({ border = 'solid', text = 'Cambiar', color = 'primary' }) => {
  return (
    <div className=" my-10 flex flex-col justify-center items-center md:justify-start gap-y-6">
      <div className={`w-44 h-44 sm:w-52 sm:h-52 border-2 border-primary rounded-full border-${border}`}>
        <img src="" />
      </div>
      <ButtonDownload width="small" text={text} color={color} outline={false} />
    </div >
  )
}

export default InputUploadImagePerfil
