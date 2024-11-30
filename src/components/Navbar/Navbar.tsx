import { LuSearch } from "react-icons/lu";
import { LuHeart} from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full py-1 px-2 border-b-2 border-gray-300 pb-3 md:border-none md:pb-1">
      {/* Mobile Layout */}
      <div className="flex flex-col items-center justify-between md:hidden">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="hover:scale-[1.02]">
            <img src="/solar.png" className="w-25 h-20 p-1 cursor-pointer" />
          </Link>
          <div className="flex gap-4 px-2">
            <Link to="/favorite">
              <LuHeart size={25} className="text-[#3A9B34]" />
            </Link>
            <Link to="/Login">
              <FaUser size={25} className="text-[#3A9B34]" />
            </Link>
            <Link to="/cart">
              <FaCartArrowDown size={25} className="text-[#3A9B34]" />
            </Link>
          </div>
        </div>
        <form className="w-full mt-4 flex justify-center items-center border-gray-300 border-2 rounded-md pl-2 focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
          <input type="text" className="outline-none flex-1" placeholder="Search..." />
          <div className="bg-[#3A9B34] w-16 h-10 rounded-md flex justify-center items-center">
            <LuSearch size={28} className="text-white cursor-pointer" />
          </div>
        </form>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <Link to="/" className="hover:scale-[1.02] flex justify-center items-center mb-1">
          <img src="/solar.png" className="w-48 h-24 cursor-pointer" />
        </Link>
        <form className="max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center border-gray-300 border-2 rounded-md pl-2 focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
          <input type="text" className="outline-none flex-1" placeholder="Search..." />
          <div className="bg-[#3A9B34] w-16 h-10 rounded-md flex justify-center items-center">
            <LuSearch size={28} className="text-white cursor-pointer" />
          </div>
        </form>
        <div className="flex justify-center items-center gap-6 px-6">
          <Link to="/favorite">
            <LuHeart size={30} className="text-[#3A9B34]" />
          </Link>
          <Link to="/Login">
            <FaUser size={30} className="text-[#3A9B34]" />
          </Link>
          <Link to="/cart">
            <FaCartArrowDown size={30} className="text-[#3A9B34]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// <div className="flex items-center justify-between w-full py-1 px-2">
//       <Link to="/" className="hover:scale-[1.02]">
//           <img src="/solar.png" className="w-48 h-24 p-1 cursor-pointer" />
//       </Link>
//         <form className="max-w-[600px] sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center border-gray-300 border-2 rounded-md pl-2  focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
//             <input type="text" className="outline-none flex-1" placeholder="Search..." />
//               <div className="bg-[#3A9B34] w-16 h-10 rounded-md flex justify-center items-center">
//                 <LuSearch  size={28} className="text-white cursor-pointer" />
//               </div>
//         </form>

//         <div className="flex justify-center items-center cursor-pointer gap-6 px-6">
//             <Link to="/favorite">
//                <LuHeart size={30}  className="text-[#3A9B34]" />
//             </Link>
//              <Link to="/Login">
//                <FaUser size={30}  className="text-[#3A9B34]" />
//              </Link>
//              <Link to="/cart">
//                <FaCartArrowDown size={30}  className="text-[#3A9B34]" />
//              </Link>
//         </div>
//     </div>