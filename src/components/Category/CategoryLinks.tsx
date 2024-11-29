import { FaIndent } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState, useRef,useEffect } from "react"

const category = ["Home", "Shop", "Most Popular", "Onsale", "Computer & Laptop", "Home Appliances", "Contact us" ]

const category2 = ["Accesories", "Audio", "Camera", "New Arrival", "Computer & Laptop", "Home Appliances", "On sale", "Smart Phones", "Video Games", "Watches", "Electric Iron", "Power Bank" ]
const CategoryLinks = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const generateLink = (item: string) => {
         if (item === "Home") return "/"
         if (item === "Shop") return "/Shop"
         if (item  === "Contact us") return "/contact"
        const formattedCategory = item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
        return `/product-category/${formattedCategory}`
      }
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


  return (
    <div ref={dropdownRef} className=" relative border-gray-300 border-2 px-4 py-[2px] flex items-center gap-4">

      <div onClick={toggleDropdown} className="bg-[#3A9B34] rounded-md flex items-center p-2 gap-4 cursor-pointer">
        <FaIndent  size={30} className="text-white "/>
        <span className="text-2xl text-white">All Categories</span>
      </div>

      {dropdownVisible && (
        <div className="absolute top-full mt-2 left-2 bg-white border border-gray-300 rounded-md shadow-md w-56 z-50">
          <ul className="flex flex-col">
            {category2.map((item) => (
              <li key={item} className="p-2 hover:bg-gray-100">
                <Link
                  to={generateLink(item)}
                  className="block text-gray-700 hover:text-[#3A9B34]"
                  onClick={() => setDropdownVisible(false)} // Close dropdown on link click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

       <div className="flex gap-8">
       {category.map((item)=> {
            return (
                <Link  to={generateLink(item)} className="cursor-pointer hover:scale-[1.02] hover:text-[#3A9B34] transition-all duration-300" key={item}>
                    <span key={item}>{item}</span>
                </Link>
            )
        })}
       </div>
    </div>
  )
}

export default CategoryLinks
