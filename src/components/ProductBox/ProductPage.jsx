import React from 'react';
import ProductCard from '../ProductCard';
import { useParams } from 'react-router-dom';

const ProductPage = ({ filteredBrands, filteredSizes, filteredPrice, filteredProducts }) => {
  const { category, subCategory , childCategory } = useParams();

  const productsToFilter = Array.isArray(filteredProducts) ? filteredProducts : [];

  const filteredFinalProducts = productsToFilter.filter((product) => {
    const isBrandMatch = filteredBrands.length === 0 || filteredBrands.includes(product.brand);
    const isSizeMatch = filteredSizes.length === 0 || filteredSizes.includes(product.size);
    const isPriceMatch = product.price >= filteredPrice[0] && product.price <= filteredPrice[1];

    return isBrandMatch && isSizeMatch && isPriceMatch;
  });

  return (
    <div className="px-3 flex flex-col">
      <div className="py-3">
        <h1 className="text-sm font-light">Categories</h1>
       
        <p className="text-2xl font-light">
           {childCategory 
  ? childCategory.charAt(0).toUpperCase() + childCategory.slice(1) 
  : (subCategory 
      ? subCategory.charAt(0).toUpperCase() + subCategory.slice(1) 
      : category.charAt(0).toUpperCase() + category.slice(1))

          }
        </p>
      </div>

      <div className="products-list grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFinalProducts.length > 0 ? (
          filteredFinalProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;