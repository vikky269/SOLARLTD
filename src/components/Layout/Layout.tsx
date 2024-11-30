import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import CategoryLinks from "../Category/CategoryLinks"
import Footer from "../Footer/Footer"
const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
         <div className="hidden md:block">
           <CategoryLinks />
         </div>
      </div>

      <main>
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
