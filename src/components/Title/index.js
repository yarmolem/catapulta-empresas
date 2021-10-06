const index = ({ title = 'Juana Sofia' }) => {
  return (
    <div className='w-full bg-red-200 py-4 sm:py-6'>
      <h1 className='text-gray-100 font-bold text-2xl sm:text-3xl uppercase tracking-wider text-center'>{title}</h1>
    </div>
  )
}

export default index
