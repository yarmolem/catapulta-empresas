/* import logo from '../../assets/imgs/logo.svg' */
import { UserSolidIcon } from '../../assets/icons'
import logo from '../../assets/imgs/logo.svg'
const index = () => {
  return (
    <div className=" h-22 flex  w-full justify-between items-center md:justify-end  
                     px-6 bg-white border-b shadow-lg">
      <img src={logo} className="w-40 md:hidden"/>
    
      <UserSolidIcon className="text-orange-700" />
      
    </div>
  )
}

export default index
