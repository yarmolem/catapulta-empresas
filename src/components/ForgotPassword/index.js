const ForgotPassword = () => {
  return (
    <div className="w-80 sm:w-96  border-orange-700 border-2 px-9 py-8 rounded-3xl">
      <form className="flex flex-col">
        <input
          className="border-b-2 text-base border-gray-300 w-full mb-9 outline-none text-gray-200 underline"
          type="text"
          placeholder="Ingresar Usuario"
        ></input>

        <button className="px-15 py-1 bg-white border-2 w-full sm:w-52 sm:mx-auto rounded-lg font-semibold border-orange-700 text-orange-700">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
