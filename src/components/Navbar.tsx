import { LuSearch } from "react-icons/lu";
import { LuHeart} from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <div className="flex items-center justify-between w-full py-1 px-2">
      <Link to="/" className="hover:scale-[1.02]">
          <img src="/solar.png" className="w-48 h-24 p-1 cursor-pointer" />
      </Link>
        <form className="max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center border-gray-300 border-2 rounded-md px-1 py-1 focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
            <input type="text" className="outline-none flex-1" placeholder="Search..." />
              <div className="bg-[#3A9B34] w-16 h-10 rounded-md flex justify-center items-center">
                <LuSearch  size={28} className="text-white cursor-pointer" />
              </div>
        </form>

        <div className="flex justify-center items-center cursor-pointer gap-6 px-6">
            <Link to="/favorite">
               <LuHeart size={30}  className="text-[#3A9B34]" />
            </Link>
             <Link to="/Login">
               <FaUser size={30}  className="text-[#3A9B34]" />
             </Link>
             <Link to="/cart">
               <FaCartArrowDown size={30}  className="text-[#3A9B34]" />
             </Link>
        </div>
    </div>
  )
}

export default Navbar
