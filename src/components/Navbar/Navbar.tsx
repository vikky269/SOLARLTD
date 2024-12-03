import { LuSearch } from "react-icons/lu";
import { LuHeart} from "react-icons/lu";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaIndent } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
const Navbar = () => {

  const category2 = ["Accesories", "Audio", "Camera", "New Arrival", "Computer & Laptop", "Home Appliances", "On sale", "Smart Phones", "Video Games", "Watches", "Electric Iron", "Power Bank" ]

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible)
      
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const generateLink = (item: string) => {
    if (item === "Home") return "/"
    if (item === "Shop") return "/Shop"
    if (item  === "Contact us") return "/contact"
   const formattedCategory = item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
   return `/product-category/${formattedCategory}`
 }



  return (
    <div ref={dropdownRef} className="w-full py-1 px-2 border-b-2 border-gray-300 pb-3 md:border-none md:pb-1">
      {/* Mobile Layout */}
      <div className="relative flex flex-col items-center justify-between md:hidden">

        <div className="flex items-center justify-between w-full">
          <Link to="/" className="hover:scale-[1.02] pt-2">
            <img src="/solar.png" className="w-25 h-20 p-1 cursor-pointer" />
          </Link>

          <FaIndent  size={25} className="text-black  cursor-pointer" 
           onClick={toggleDropdown} 
          
          />

{dropdownVisible && (
        <div className="absolute top-16 mt-2 left-2 bg-white border border-gray-300 rounded-md shadow-md w-56 z-50">
          <ul className="flex flex-col">
            {category2.map((item) => (
              <li key={item} className="p-2 hover:bg-gray-100">
                <Link
                  to={generateLink(item)}
                  className="block text-gray-700 hover:text-black"
                  onClick={() => setDropdownVisible(false)} // Close dropdown on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

          <div className="flex gap-4 px-2">
            <Link to="/favorite">
              <LuHeart size={25} className="text-black" />
            </Link>
            <Link to="/Login">
              <FaUser size={25} className="text-black" />
            </Link>
            <Link to="/cart">
              <FaCartArrowDown size={25} className="text-black" />
            </Link>
          </div>

        </div>

        
        <form className="w-full mt-4 flex justify-center items-center border-gray-300 border-2 rounded-md pl-2 focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
          <input type="text" className="outline-none flex-1" placeholder="Search..." />
          <div className="bg-black w-16 h-10 rounded-md flex justify-center items-center">
            <LuSearch size={28} className="text-white cursor-pointer" />
          </div>
        </form>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <Link to="/" className="hover:scale-[1.02] flex justify-center items-center mb-1">
          <img src="/solar.png" className="w-44 h-24 cursor-pointer py-3 px-3" />
        </Link>
        <form className="max-w-[400px] sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center border-gray-300 border-2 rounded-md pl-2 focus-within:border-gray-500 focus-within:border-dotted transition-all duration-300">
          <input type="text" className="outline-none flex-1" placeholder="Search..." />
          <div className="bg-black w-16 h-10 rounded-md flex justify-center items-center">
            <LuSearch size={28} className="text-white cursor-pointer" />
          </div>
        </form>
        <div className="flex justify-center items-center gap-6 px-6">
          <Link to="/favorite">
            <LuHeart size={30} className="text-black" />
          </Link>
          <Link to="/Login">
            <FaUser size={30} className="text-black" />
          </Link>
          <Link to="/cart">
            <FaCartArrowDown size={30} className="text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;