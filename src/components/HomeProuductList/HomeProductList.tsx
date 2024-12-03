import React from 'react'
import products from '../../data/mockProducts'
import { useState } from 'react'
import HomeProductCard from './HomeProductCard'
const HomeProductList:React.FC = () => {

    const [hoveredCardId, setHoveredCardId] = useState<number | null>(null)

  return (

       <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 gap-4 cursor-pointer">

              {products.map((product) => (
               <HomeProductCard
               key={product.id}
               product={product}
               isHovered={hoveredCardId === product.id} // Pass hover state as prop
               onHover={() => setHoveredCardId(product.id)} // Set hovered card
               onLeave={() => setHoveredCardId(null)} // Reset hover state
             />
              ))}
          </div>
      
  )
}

export default HomeProductList
