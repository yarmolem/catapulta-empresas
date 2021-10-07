import React from 'react'
import { ButtonDownload } from '../Button'

const AwardCard = ({ color, text }) => {
    return (
        <div className={`border-${color} border-2 w-full h-96 border-dashed 
                        md:w-119 px-5  flex flex-col justify-center items-center`}
        >

            <p className={`text-${color} font-bold text-3xl text-center  `}>{text}</p>
            <div className="w-72 mt-14">
            <ButtonDownload
               customClass = 'w-full'
               text = 'CREAR PREMIACIÓN'
               width = 'large'
               color = {color}
               border = ''
               outline = {false}
             />
            </div>
             
        </div>
    )
}

export default AwardCard
