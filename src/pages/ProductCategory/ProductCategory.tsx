import React from 'react'
import { useParams } from 'react-router-dom'
const ProductCategory: React.FC = () => {

    const { categoryName } = useParams()
    console.log(categoryName)

  return (
    <div>
      <div>
      <h1>Products in: {categoryName}</h1>
      {/* You can fetch products or display dynamic content based on the category here */}
    </div>
    </div>
  )
}

export default ProductCategory
