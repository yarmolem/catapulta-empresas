const Card = ({ icon, color = 'pink-600', number = '84', text = 'Usuarios activos' }) => {
    return (
      <div className={`max-w-44 max-h-44 bg-${color} flex flex-col text-white items-center gap-y-1 pt-5 pb-5 px-8 rounded-2xl mt-1`}>
        <div className="mt-1">
          <img className='w-full' src={icon} alt="" />
        </div>
        <p className='font-bold text-3xl'>{number}</p>
        <p className='font-bold text-md tracking-widest text-center '>{text}</p>
      </div>
    )
  }
  
  export default Card