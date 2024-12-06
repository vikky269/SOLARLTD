import { Link } from "react-router-dom"


const Footer = () => {
  return (
  <div className="flex flex-col bg-gray-100">
     <div className="bg-gray-100 pt-12  gap-4 flex flex-col md:flex-row justify-between">
        {/** LOGO AND COMPANY DESCRIPTION */}
      <div className="px-3 md:px-6 flex flex-col w-full md:w-1/3 max-w-lg">
        <img src="/solar.png" alt="" className="cursor-pointer" />
        <span className=" text-[14px] md:text-sm font-medium">
            At We Can Solar Ltd, we are on a mission to
            revolutionize the transportation industry by harnessing the power of
            solar energy and electric mobility. Established with a vision of
            sustainability, our company is dedicated to producing cutting-edge
            electric bikes that combine performance, affordability, and
            eco-consciousness.
        </span>
      </div>

      {/**PRODUCTS */}
          <div className="w-full md:w-1/3">
              <div className="flex flex-wrap">
                  {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex items-center justify-center cursor-pointer">
                          <img src={`/product2${4 + index}.png`} alt="Product" className="w-20 h-20 mb-2" />
                          <div className="flex flex-col">
                              <span className="font-bold">Aliquam erat volutpat</span>
                              <span className="text-[#F7931E]">$22.00</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

     {/** USEFUL LINKS */}
      <div className=" flex flex-col gap-3 w-full md:w-1/3 px-5">
              <div className="cursor-pointer flex flex-col gap-2">
                  <span className="font-bold text-2xl">Useful Links</span>
                  <Link to="/" className="hover:text-[#F7931E]">Multiple Branches</Link>
                  <Link to="/" className="hover:text-[#F7931E]">Take Franchise</Link>
                  <Link to="/" className="hover:text-[#F7931E]">Scheduled Offers</Link>
                  <Link to="/" className="hover:text-[#F7931E]">More Links</Link>
              </div>

              <div className="flex flex-col gap-2">
                  <span className="font-bold text-2xl">Connect With Us</span>
                   <Link to="/" className="hover:text-[#F7931E]">Facebook</Link>
                   <Link to="/" className="hover:text-[#F7931E]">Twitter</Link>
                   <Link to="/" className="hover:text-[#F7931E]">Instagram</Link>
                   <Link to="/" className="hover:text-[#F7931E]">Whatsapp</Link>
              </div>
      </div>

      {/** CONTACT */}
      <div className=" flex flex-col gap-3 md:w-1/3 mt-4 md:mt-0 px-5">
              <div>
                  <h2 className="font-bold text-xl">Contact Details</h2>
                  <p>Address: 3548 Columbia Mine Road, Wheeling, West Virginia, 26003 </p>
                  <p>Phone: (123) 456-7890</p>
                  <p>Email: shopnow@store.com contact@top.com</p>
              </div>

              <div>
                  <span className="font-bold text-2xl">Offline Store</span>
                   <p>Lagos</p>
                   <p>Ikeja</p>
                   <p>Lekki</p>
                   <p>Bananna Island</p>
              </div>
      </div>
</div>
    
{/** COPYRIGHT */}

          <div className="mt-20 text-center text-lg font-bold border-gray-200 border-2 py-4">
              <p>
                  &copy; {new Date().getFullYear()} We can Solar Ltd.
              </p>

          </div>

    </div>

  )
}

export default Footer
