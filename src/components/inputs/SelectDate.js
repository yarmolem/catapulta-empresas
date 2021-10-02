import React from 'react'

const SelectDate = ({ dateList }) => {
    return (
        <div className="my-3 mx-1 ">
            <select
                name="date"
                className="w-full border border-accent py-2 pl-5 rounded-md font-bold text-sm font-bold
                focus:ring-2 focus:ring-accent focus:border-accent-500 "
                style={{color:"rgba(0,0,0,0.4)"}}
                >
            
                <option
                    value=""
                >
                    Selecione la fecha
                </option>
                {
                    dateList.map(date =>
                        <option
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
