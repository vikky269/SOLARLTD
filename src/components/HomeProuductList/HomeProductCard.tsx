import React from 'react'
import { Link } from 'react-router-dom'
import { LuHeart } from 'react-icons/lu'


interface ProductCardProps {
    product: {
        id: number;
        image: string;
        name: string;
        sale: boolean;
        price: number;
        originalPrice?: number;
        description: string;
    };
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}

const HomeProductCard: React.FC<ProductCardProps> = ({ product, isHovered, onHover, onLeave }) => {
    return (
        <div key={product.id} className="relative px-4 py-3 rounded-lg hover:bg-white hover:rounded-lg hover:shadow-xl transition-all w-full"
            onMouseEnter={onHover} // Trigger hover
            onMouseLeave={onLeave} // Reset hover
            style={{ minHeight: '350px' }} 
        >
            <img src={product.image} alt={product.name} className="w-full" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.sale ? "Sale" : "Regular Price"}</p>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
                <p className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
            )}
            <p className="text-sm mt-1 mb-14">{product.description}</p>

            {/* Add to Cart & Wishlist Icon */}
            {isHovered &&
                (<div className="absolute bottom-3 left-3 flex gap-3 items-center">
                    <button className="px-4 py-2 bg-black text-white rounded-lg">
                        Add to Cart
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                        <Link to="/favorite">
                            <LuHeart size={30} className="text-black" />
                        </Link>
                    </button>
                </div>)}

        </div>
    )
}

export default HomeProductCard
