import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductPage from './ProductPage';
import FilterComp from '../Filter/FilterComp';
import products from '../../data/product';  
import SortFilterButton from './ResponsiveDD/SortFilterButton';

const ProductPageMain = () => {

  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState(null); // 'asc' for low to high, 'desc' for high to low
  const [sortState, setSortState] = useState(null);



  const { category, subCategory , childCategory } = useParams(); 

  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState([0, 5000]);

  

   const filteredProducts = products.filter(product => {
    const isCategoryMatch = product.category === category;
    const isSubCategoryMatch = subCategory ? product.subCategory === subCategory : true;
    const isChildCategoryMatch = childCategory ? product.childCategory === childCategory : true;
    const isBrandMatch = filteredBrands.length === 0 || filteredBrands.includes(product.brand);
    const isSizeMatch = filteredSizes.length === 0 || filteredSizes.includes(product.size);
    const isPriceMatch = product.price >= filteredPrice[0] && product.price <= filteredPrice[1];
  
    return isCategoryMatch && isChildCategoryMatch && isSubCategoryMatch && isBrandMatch && isSizeMatch && isPriceMatch;
  });
    
  console.log(filteredProducts);
  

  const filteredFinalProducts = filteredProducts
  .filter((product) => {
    const isBrandMatch = !filteredBrands.length || filteredBrands.includes(product.brand);
    const isSizeMatch = !filteredSizes.length || filteredSizes.includes(product.size);
    const isPriceMatch = product.price >= filteredPrice[0] && product.price <= filteredPrice[1];
    return isBrandMatch && isSizeMatch && isPriceMatch;
  })
  .sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0; // No sorting
  });

  const showCase = () => {
    if (sortState === "asc") {
      return "Price: Low to High";
    } else if (sortState === "desc") {
      return "Price: High to Low";
    } 
  };



   const uniqueBrands = [...new Set(filteredProducts.map(product => product.brand))];
  const uniqueSizes = [...new Set(filteredProducts.map(product => product.size))];

  return (
    <section className="bg-gray-100 mb-20 min-h-screen">
       <div className="flex flex-col">
      <div className="block lg:hidden">
            <SortFilterButton 
            setSortOrder={setSortOrder}
            setSortState={setSortState}
            showCase={showCase()}
            uniqueBrands={uniqueBrands}
            uniqueSizes={uniqueSizes}
            setFilteredBrands={setFilteredBrands}
            setFilteredSizes={setFilteredSizes}
            setFilteredPrice={setFilteredPrice}
            />
          </div>
          <div className="hidden lg:block">
      <p className="mx-16 pt-10 mb-5 text-xs text-gray-500">
        <span className="text-blue-400">Home</span>
        {` > ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        {subCategory && ` > ${subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}`}
      </p>
      </div>
      <div className="flex lg:bg-white mx-1  pb-3 lg:pb-14 lg:mx-16 lg:pr-9">
       
        <div className="hidden lg:block">
           <FilterComp
            setSortOrder={setSortOrder}
            setSortState={setSortState}
            availableBrands={uniqueBrands}
            availableSizes={uniqueSizes}
            setFilteredBrands={setFilteredBrands}
            setFilteredSizes={setFilteredSizes}
            setFilteredPrice={setFilteredPrice}
          />
        </div>

        
          

          <ProductPage
            setSortOrder={setSortOrder}
            setSortState={setSortState}
            showCase={showCase()}
            filteredBrands={filteredBrands}
            filteredSizes={filteredSizes}
            filteredPrice={filteredPrice}
            filteredFinalProducts={filteredFinalProducts} 
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPageMain;