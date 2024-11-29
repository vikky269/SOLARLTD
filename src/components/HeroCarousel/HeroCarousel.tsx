import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

//   interface Props {
//     deviceType?: string;
//   }


const HeroCarousel:React.FC = () => {
  return (

      <Carousel 
      className='bg-gray-200 mt-8 hidden md:block'
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
         // autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
         // deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
      >
          <div className='mt-6 flex justify-center items-center gap-8'>
              {/**CAROUSEL IMAGE */}
              <div className='cursor-pointer'>
                  <img src="/bike_4.png" alt="" />
              </div>

              {/**CAROUSEL TEXT */}
              <div className='flex flex-col w-full md:w-1/2'>
                  <span className='text-xl uppercase tracking-wide text-[#3A9B34] font-bold mb-4'>Innovation</span>
                  <div>
                      <span className='text-6xl font-bold text-[#3A9B34]'>Premium Gadgets</span>
                  </div>

                  <p className='leading-8 font-normal mt-6 text-[20px]'>
                      A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions,
                      offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.
                  </p>

                  <div className='flex items-center cursor-pointer mt-6 gap-5'>
                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Shop now
                          </button>
                      </Link>

                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Know more
                          </button>
                      </Link>
                  </div>
              </div>
          </div>

          <div className='mt-6 flex justify-center items-center gap-8'>
              {/**CAROUSEL IMAGE */}
              <div className='cursor-pointer'>
                  <img src="/bike_3.png" alt="" />
              </div>

              {/**CAROUSEL TEXT */}
              <div className='flex flex-col w-full md:w-1/2'>
                  <span className='text-xl uppercase tracking-wide text-[#3A9B34] font-bold mb-4'>Innovation</span>
                  <div>
                      <span className='text-6xl font-bold text-[#3A9B34]'>Premium Gadgets</span>
                  </div>

                  <p className='leading-8 font-normal mt-6 text-[20px]'>
                      A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions,
                      offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.
                  </p>

                  <div className='flex items-center cursor-pointer mt-6 gap-5'>
                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Shop now
                          </button>
                      </Link>

                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Know more
                          </button>
                      </Link>
                  </div>
              </div>
          </div>



          <div className='mt-6 flex justify-center items-center gap-8'>
              {/**CAROUSEL IMAGE */}
              <div className='cursor-pointer'>
                  <img src="/bike_4.png" alt="" />
              </div>

              {/**CAROUSEL TEXT */}
              <div className='flex flex-col w-full md:w-1/2'>
                  <span className='text-xl uppercase tracking-wide text-[#3A9B34] font-bold mb-4'>Innovation</span>
                  <div>
                      <span className='text-6xl font-bold text-[#3A9B34]'>Premium Gadgets</span>
                  </div>

                  <p className='leading-8 font-normal mt-6 text-[20px]'>
                      A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions,
                      offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.
                  </p>

                  <div className='flex items-center cursor-pointer mt-6 gap-5'>
                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Shop now
                          </button>
                      </Link>

                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Know more
                          </button>
                      </Link>
                  </div>
              </div>
          </div>




          <div className='mt-6 flex justify-center items-center gap-8'>
              {/**CAROUSEL IMAGE */}
              <div className='cursor-pointer flex items-center justify-center pl-12'>
                  <img src="/bike_3.png" alt=""  className='object-center'/>
              </div>

              {/**CAROUSEL TEXT */}
              <div className='flex flex-col w-full md:w-1/2'>
                  <span className='text-xl uppercase tracking-wide text-[#3A9B34] font-bold mb-4'>Innovation</span>
                  <div>
                      <span className='text-6xl font-bold text-[#3A9B34]'>Premium Gadgets</span>
                  </div>

                  <p className='leading-8 font-normal mt-6 text-[20px]'>
                      A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions,
                      offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.
                  </p>

                  <div className='flex items-center cursor-pointer mt-6 gap-5'>
                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Shop now
                          </button>
                      </Link>

                      <Link to="/">
                          <button className='py-2 px-6 text-lg  text-white bg-[#3A9B34] rounded-md hover:bg-[#2D832F] transition-all duration-300'>
                              Know more
                          </button>
                      </Link>
                  </div>
              </div>
          </div>

      </Carousel>
    
  )
}

export default HeroCarousel
