import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
