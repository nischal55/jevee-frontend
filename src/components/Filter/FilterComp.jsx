import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BrandsFilter from './BrandsFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import SizeFilter from './SizeFilter';
import Slider from './SliderComp';  
import products from '../../data/product';  

const FilterComp = ({ setFilteredBrands, setFilteredSizes, setFilteredPrice }) => {
  const { category, subCategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredBrandsLocal, setFilteredBrandsLocal] = useState([]);
  const [filteredSizesLocal, setFilteredSizesLocal] = useState([]);
  const [filteredPriceLocal, setFilteredPriceLocal] = useState([0, 5000]);  
  const [selectedBrands, setSelectedBrands] = useState([]);  
  const [selectedSizes, setSelectedSizes] = useState([]); 

  useEffect(() => {
     const filtered = products.filter(product => {
      if (subCategory) {
        return product.category === category && product.subCategory === subCategory;
      }
      return product.category === category;  
    });
    
    setFilteredProducts(filtered) ;

     const brands = [...new Set(filtered.map(product => product.brand))];
    const sizes = [...new Set(filtered.map(product => product.size))];
    
    setFilteredBrandsLocal(brands);  
    setFilteredSizesLocal(sizes);  
  }, [category, subCategory]);

  useEffect(() => {
     setFilteredBrands(selectedBrands);
    setFilteredSizes(selectedSizes);
    setFilteredPrice(filteredPriceLocal);
  }, [selectedBrands, selectedSizes, filteredPriceLocal, setFilteredBrands, setFilteredSizes, setFilteredPrice]);

   const handleBrandChange = (brands) => setSelectedBrands(brands); 
  const handleSizeChange = (sizes) => setSelectedSizes(sizes);  
  const handlePriceChange = (price) => setFilteredPriceLocal(price); 

  return (
    <div className="">
      <div className="flex justify-between px-5 pt-3 items-center">
            <h1 className='text-xl font-bold'>Filter</h1>
            <button
              className="text-pink-500 flex justify-center px-3 items-center gap-1 font-thin text-sm"
             
            >
              Reset
              <FontAwesomeIcon icon={faRotate} className='font-thin' />
            </button>
          </div>
      <div className="min-w-72">
        <BrandsFilter 
          setFilteredBrands={handleBrandChange} 
          brands={filteredBrandsLocal} 
          selectedBrands={selectedBrands} 
        />
        <SizeFilter 
          setFilteredSizes={handleSizeChange} 
          sizes={filteredSizesLocal} 
          selectedSizes={selectedSizes} 
        />
        <Slider setFilteredPrice={handlePriceChange} />
      </div>
    </div>
  );
};

export default FilterComp;
