import React from "react";
import { useParams } from "react-router-dom";
import ProductsHolder from "../../data/ProductsHolder";
import ProductCard1 from "./ProductCard1";


const ProductPage = () => {
  const { category } = useParams(); // Extract category from URL
  

  // Get products for the given category
  const products = ProductsHolder[category] || []; // Fallback to empty array
  

  return (
    <div className="w-full items-start ml-10 flex flex-col">
      <div className="px-4 pb-4 pt-5">
        <h1 className="font-light text-gray-700">Categories</h1>
        <p className="text-lg text-gray-500">{category}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 bg-white">
        {products.length > 0 ? (
          products.map((elem) => (
            <ProductCard1
          key={elem.id} 
          id={elem.id} 
          name={elem.name} 
          discount={elem.discount}
          price={elem.price} 
          image={elem.image}
          />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

