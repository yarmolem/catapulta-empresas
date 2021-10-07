const Card = ({ icon, color = 'pink-600', number = '84', text = 'Usuarios activos' }) => {
    return (
      <div className={`max-w-44 max-h-44 bg-${color} flex flex-col text-white items-center 
                      py-5 px-8 rounded-2xl mt-1 border justify-center`}>
        <div className="mt-1">
          <img className='' src={icon} alt="" />
        </div>
        <p className='font-bold text-3xl mb-2'>{number}</p>
        <p className='font-bold text-md tracking-widest text-center '>{text}</p>
      </div>
    )
  }
  
  export default Card