import React from 'react'

const DropdonwnTipo2 = ({ filterList }) => {
    return (
        <div className="my-3 mx-1 ">
            <select
                name="filter"
                className="w-full border border-accent py-2 pl-15 pr-10 rounded-md 
             text-lg font-bold text-accent
            focus:ring-2 focus:ring-accent focus:border-accent-500 ">

                <option value="">
                    Filtrar
                </option>
                {
                    filterList.map(filter =>
                        <option
                            value={filter}
                            key={filter}
                        >
                            {filter}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default DropdonwnTipo2


