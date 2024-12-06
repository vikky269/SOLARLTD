import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/mockProducts'
import Specifications from '../../components/Specifications/Specifications';

const ProductDetails:React.FC = () => {

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <p>Invalid product ID</p>;
    }

    const product = products.find((item) => item.id === id);

    if (!product) {
        return <p>Product not found</p>;
    }

  return (

    <div className="p-6 flex flex-col gap-6  items-center md:gap-12 justify-center">
           
         

          <div className='flex  gap-6 justify-center flex-col md:flex-row items-center md:justify-start'>
              {/* Product Image */}
              <div className="cursor-pointer">
                  <img
                      src={product.image}
                      alt={product.name}
                      className="md:w-[70%]  w-[85%] border-dotted border-2 border-black rounded-lg"
                  />
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                  <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg md:max-w-[18rem] mb-4 text-gray-600">{product.description}</p>
                  <div className="text-xl font-bold mb-4">
                      <span>${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                          <span className="ml-2 text-gray-400 line-through">
                              ${product.originalPrice.toFixed(2)}
                          </span>
                      )}
                  </div>
                  {product.sale && (
                      <span className="text-red-500 text-sm font-semibold mb-4">On Sale!</span>
                  )}

                  <button className="mt-4 max-w-[18rem] py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                      Add to Cart
                  </button>
              </div>
          </div>


    {/**Specifications */}

          <div>
            <h1 className='font-medium text-2xl md:text-3xl mb-7'>See Specifications Below</h1>
            <Specifications />
          </div>
</div>
  )
}

export default ProductDetails
