const InputText = ({ label = '', type = 'text', className = '' }) => {
  return (
    <div className={`flex flex-col w-full mx-auto  ${className}`}>
      <label htmlFor="user">{label}</label>
      <input
        type={type}
        name="user"
        className="border mt-1 border-orange-500 rounded-md  py-1  px-3 outline-none text-base  focus:border-orange-700 underline text-gray-200 italic"
      />
    </div>
  )
}

export default InputText
