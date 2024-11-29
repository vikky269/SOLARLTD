import React from 'react'
import products from '../../data/mockProducts'
const HomeProductList:React.FC = () => {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 cursor-pointer">
      {products.map((product) => (
        <div key={product.id} className="p-4 rounded-lg hover:bg-white hover:rounded-lg hover:shadow-xl transition-all">
          <img src={product.image} alt={product.name} className="w-full h-40  object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-500">{product.sale ? "Sale" : "Regular Price"}</p>
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
          )}
          <p className="text-sm mt-1">{product.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomeProductList
