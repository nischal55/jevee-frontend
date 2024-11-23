import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard1 = ({ image, name, price, discount }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPrice = price * (1 - parseInt(discount) / 100);

  const truncatedName = name.length > 23 ? `${name.substring(0, 23)}...` : name;

  return (
    <div
      className="w-full sm:w-64 bg-white shadow-md cursor-pointer overflow-hidden border border-gray-200 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div
        className={` transition-all duration-300 ${
          isHovered ? "h-48" : "h-64"
        }`}
      >
        <img
          src={image}
          alt={name}
          className={`w-full h-full ease-in-out transition-all duration-300 object-cover rounded-md ${
            isHovered ? "h-56 scale-90 mx-auto w-auto" : "h-full"
          }`}
        />
      </div>

      
      <div className="p-4 text-center">
        <h3 className="text-md font-medium text-gray-800">{truncatedName}</h3>
        <div className="flex justify-center gap-1">
        
          <h1 className=" text-pink-500 text-lg font-semibold">NPR. {discountPrice.toFixed(2)}</h1> <h1 className="font-extrabold">|</h1>
          <span className=" text-pink-500 text-lg font-bold">
            {discount} off
          </span>
        
        </div>
        <div className="flex justify-center gap-1">
        <div className="text-gray-400 text-xs line-through">
          <p>{price.toFixed(2)}</p>
          
        </div>
        <div className="text-xs"><p>Save NPR. {(price - discountPrice).toFixed(2)}</p></div>
      </div>
      </div>
      

      {/* Button Section (adjust size dynamically on hover) */}
      <div
        className={ `px-3 gap-2 bg-white border-t border-gray-200 transition-all duration-300 ${
          isHovered ? "opacity-100 h-16" : "opacity-0 h-0"
        } flex items-center justify-between`}
      >
        <button
          className="text-gray-400 hover:text-pink-500 transition-colors"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FontAwesomeIcon
            icon={isFavorite ? faSolidHeart : faRegularHeart}
            className="w-5 h-5"
          />
        </button>
        <button className="bg-pink-500 flex-1 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-pink-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard1;
