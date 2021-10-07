import React from 'react'
import { ButtonDownload } from '../Button'

const CouponCards = ({ color, logo, title }) => {
    return (
        <div className={`flex border justify-between items-center border-${color}
                          w-full lg:w-192 p-4 border-l-8 rounded-md`}>
            <div className="flex items-center">
                <img src={logo} />
                <p className="text-gray-200 text-base ml-6">{title}</p>
            </div>
            <ButtonDownload
                customClass=''
                text='Descargar'
                width='large'
                color={color}
                border=''
                outline={false}
            />
        </div>
    )
}

export default CouponCards
