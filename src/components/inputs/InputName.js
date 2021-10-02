import React from 'react'

const InputName = ({ labelName }) => {
    return (
        <div className="my-3 mx-1">
            <div>
                <label
                    className="text-on-warn text-lg tracking-tight font-bold "
                    htmlFor="name"

                >{labelName}
                </label>
            </div>

            <input
                className=" w-full border border-accent text-on-warn outline-none
                py-2 pl-4  focus:ring-2  focus:border-accent-500
                focus:ring-2 focus:ring-accent focus:border-accent-500"
                name="name"
                type="text"
                id="name"
                
            />

        </div>
    )
}

export default InputName
