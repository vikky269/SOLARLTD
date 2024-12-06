import React from 'react';
import { Link } from 'react-router-dom';

interface CarouselItemProps {
  image: string;
  title: string;
  description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, title, description }) => {
  return (
    <div className='hidden mt-6 md:flex justify-center items-center gap-8 py-12'>
      {/* CAROUSEL IMAGE */}
      <div className='cursor-pointer'>
        <img src={image} alt={title} className='h-[90%] ' />
      </div>

      {/* CAROUSEL TEXT */}
      <div className='flex flex-col w-full md:w-1/2'>
        <span className='text-xl uppercase tracking-wide text-black font-bold mb-4'>{title}</span>
        <div>
          <span className='text-6xl font-bold text-black'>Solar Bikes</span>
        </div>

        <p className='leading-8 font-normal mt-6 text-[20px]'>
          {description}
        </p>

        <div className='flex items-center cursor-pointer mt-6 gap-5'>
          <Link to="/">
            <button className='py-2 px-6 text-lg text-white bg-green-800  hover:translate-y-[-2px] rounded-md  transition-all duration-300'>
              Shop now
            </button>
          </Link>

          <Link to="/">
            <button className='py-2 px-6 text-lg text-white bg-black   hover:translate-y-[-2px] rounded-md transition-all duration-300'>
              Know more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;

