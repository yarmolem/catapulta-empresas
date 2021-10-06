import React from 'react'

const SelectDate = ({ dateList,titleSelect,name }) => {
    return (
        <div className="my-3 mx-1 ">
            <select
                name={name}
                className="w-full border border-accent py-2 pl-5 rounded-md font-bold text-sm font-bold
                focus:ring-2 focus:ring-accent focus:border-accent-500 "
                style={{color:"rgba(0,0,0,0.4)"}}
                >
            
                <option
                    value=""
                >
                    {titleSelect}
                </option>
                {
                    dateList.map(date =>
                        <option
                            className="text-dropdown border text-center"
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
