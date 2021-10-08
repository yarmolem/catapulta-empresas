import React from 'react'

const SelectDate = ({ dateList,titleSelect,name }) => {
    return (
        <div className="my-3 mx-1 ">
            <select
                name={name}
                className="w-full border border-accent py-2 pl-5 rounded-md font-bold text-base font-bold
                focus:ring-2 focus:ring-accent focus:border-primary-500 cursor-pointer "
                style={{color:"rgba(0,0,0,0.4)"}}
                >
            
                <option
                    value=""
                    className="text-accent"
                >
                    {titleSelect}
                </option>
                {
                    dateList.map(date =>
                        <option
                            className="text-accent "
                            value={date}
                            key={date}
                        >
                           {date} 
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectDate
