/* import logo from '../../assets/imgs/logo.svg' */
import { UserSolidIcon, MenuIcon } from '../../assets/icons'
const index = () => {
  return (
    <div className="flex-1 h-22 flex  w-full items-center justify-between px-6 border-b shadow-lg">
      <MenuIcon className="text-orange-700" />
      <div className="flex gap-2 ">
        {/*  <img className="w-32" src={logo} /> */}
        <UserSolidIcon className="text-orange-700" />
      </div>
    </div>
  )
}

export default index
