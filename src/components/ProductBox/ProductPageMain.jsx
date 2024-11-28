import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductPage from './ProductPage';
import FilterComp from '../Filter/FilterComp';
import products from '../../data/product';  
import SortFilterButton from './ResponsiveDD/SortFilterButton';

const ProductPageMain = () => {
  const { category, subCategory } = useParams();  
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState([0, 5000]);

  

  // Filter products based on selected category, subcategory, and filters
  const filteredProducts = products.filter(product => {
    const isCategoryMatch = product.category === category;
    const isSubCategoryMatch = subCategory ? product.subCategory === subCategory : true;
    const isBrandMatch = filteredBrands.length === 0 || filteredBrands.includes(product.brand);
    const isSizeMatch = filteredSizes.length === 0 || filteredSizes.includes(product.size);
    const isPriceMatch = product.price >= filteredPrice[0] && product.price <= filteredPrice[1];
  
    return isCategoryMatch && isSubCategoryMatch && isBrandMatch && isSizeMatch && isPriceMatch;
  });
  
  // Filtered products based on the selected filters
  



  // Get unique brands and sizes from filtered products
  const uniqueBrands = [...new Set(filteredProducts.map(product => product.brand))];
  const uniqueSizes = [...new Set(filteredProducts.map(product => product.size))];

  return (
    <section className="bg-gray-200 min-h-screen">
       <div className="flex flex-col">
      <div className="block lg:hidden">
            <SortFilterButton 
            uniqueBrands={uniqueBrands}
            uniqueSizes={uniqueSizes}
            setFilteredBrands={setFilteredBrands}
            setFilteredSizes={setFilteredSizes}
            setFilteredPrice={setFilteredPrice}
            />
          </div>
      <p className="mx-16 pt-10 mb-5 text-xs text-gray-500">
        <span className="text-blue-400">Home</span>
        {` > ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        {subCategory && ` > ${subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}`}
      </p>

      <div className="flex bg-white mx-1 lg:mx-16 lg:pr-9">
       
        <div className="hidden lg:block">
          {/* Pass the filtered brands, sizes, and price setter to FilterComp */}
          <FilterComp
            availableBrands={uniqueBrands}
            availableSizes={uniqueSizes}
            setFilteredBrands={setFilteredBrands}
            setFilteredSizes={setFilteredSizes}
            setFilteredPrice={setFilteredPrice}
          />
        </div>

        
          

          <ProductPage
            filteredBrands={filteredBrands}
            filteredSizes={filteredSizes}
            filteredPrice={filteredPrice}
            filteredProducts={filteredProducts} 
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPageMain;

