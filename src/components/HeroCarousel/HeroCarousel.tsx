import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';

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
  const carouselData = [
    {
      image: '/bike_4.png',
      title: 'Innovation',
      description: `A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions, offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.`,
    },
    {
      image: '/bike_3.png',
      title: 'Innovation',
      description: `A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions, offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.`,
    },
    {
      image: '/bike_4.png',
      title: 'Innovation',
      description: `A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions, offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.`,
    },
    {
      image: '/bike_3.png',
      title: 'Innovation',
      description: `A solar bike is an eco-friendly electric bike powered by solar energy, combining sustainable transportation with effortless mobility. It reduces carbon emissions, offers a smooth ride with minimal maintenance, and is ideal for cost-effective, clean commuting.`,
    },
  ];
  


const HeroCarousel:React.FC = () => {
  return (

      <Carousel 
      className=' hidden md:bg-gray-200 mt-8'
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
         //autoPlay={deviceType !== "mobile" ? true : false}
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
           
              {carouselData.map((item, index) => (
                  <CarouselItem
                      key={index}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                  />
              ))}
          

        
      </Carousel>
    
  )
}

export default HeroCarousel
