import React from 'react'

const Title = ({color,title}) => {
    return (
        <div className={` bg-red-400  py-7 
                        text-center font-bold text-2xl mb-14`}>
           <p className={`text-${color}`}>{title}</p> 
        </div>
    )
}

export default Title
