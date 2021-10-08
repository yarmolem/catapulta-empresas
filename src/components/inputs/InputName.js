const InputName = ({ labelName = 'Nombre', placeholder = 'Lindley', type = 'text' }) => {
  return (

    <div>
      <label
        className=" text-lg tracking-tight font-bold text-on-warn"
        htmlFor="name"
      >{labelName}
      </label>

      <input
        className="  w-full text-on-warn border border-primary mb-4 outline-none py-2 pl-4  focus:ring-2  focus:ring-2 focus:ring-accent focus:border-accent-500"
        name="name"
        type={type}
        id="name"
        placeholder={placeholder}
      />
      {/* Input de Percy
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
                py-2 pl-4  focus:ring-2 focus:ring-2 focus:ring-accent focus:border-accent-500"
          name="name"
          type="text"
          id="name"
          placeholder={placeholder}

        />
      </div> */}
    </div>
  )
}

export default InputName
