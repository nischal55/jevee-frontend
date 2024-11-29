import React, { useState, useEffect } from 'react';
import BrandsFilter from '../../Filter/BrandsFilter';
import SliderComp from '../../Filter/SliderComp';
import SizeFilter from '../../Filter/SizeFilter';
import products from '../../../data/product';
import { useParams } from 'react-router-dom';

const FilterpageMview = ({ closeDiv, setFilteredBrands, setFilteredSizes, setFilteredPrice }) => {
  const { category, subCategory, childCategory } = useParams();  
const [activeComponent, setActiveComponent] = useState('price');  

const [filteredProducts, setFilteredProducts] = useState([]);
const [filteredBrandsLocal, setFilteredBrandsLocal] = useState([]);
const [filteredSizesLocal, setFilteredSizesLocal] = useState([]);
const [filteredPriceLocal, setFilteredPriceLocal] = useState([0, 5000]);
const [selectedBrands, setSelectedBrands] = useState([]);
const [selectedSizes, setSelectedSizes] = useState([]);

 useEffect(() => {
  const filtered = products.filter(product => {
    if (childCategory) {
      return (
        product.category === category &&
        product.subCategory === subCategory &&
        product.childCategory === childCategory
      );
    }
    if (subCategory) {
      return product.category === category && product.subCategory === subCategory;
    }
    return product.category === category;
  });

  setFilteredProducts(filtered);

   const brands = [...new Set(filtered.map(product => product.brand))];
  const sizes = [...new Set(filtered.map(product => product.size))];

  setFilteredBrandsLocal(brands);
  setFilteredSizesLocal(sizes);
}, [category, subCategory, childCategory]);

 useEffect(() => {
  setFilteredBrands(selectedBrands);
  setFilteredSizes(selectedSizes);
  setFilteredPrice(filteredPriceLocal);
}, [selectedBrands, selectedSizes, filteredPriceLocal, setFilteredBrands, setFilteredSizes, setFilteredPrice]);

 const handleBrandChange = (brands) => setSelectedBrands(brands);
 const handleSizeChange = (sizes) => setSelectedSizes(sizes);
const handlePriceChange = (price) => setFilteredPriceLocal(price);

 const handleReset = () => {
  setSelectedBrands([]);
  setSelectedSizes([]);
  setFilteredPriceLocal([0, 5000]);
  setFilteredBrands([]);
  setFilteredSizes([]);
  setFilteredPrice([0, 5000]);
};


  return (
    <div className="flex max-h-[60vh] flex-col h-screen">
       <div className="flex flex-grow pl-3">
         <div className="flex flex-col bg-gray-200 text-start">
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'price' ? 'bg-white text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('price')}
          >
            Price
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'brands' ? 'bg-white text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('brands')}
          >
            Brands
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'size' ? 'bg-white text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('size')}
          >
            Size
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-gray-50">
          {activeComponent === 'brands' && (
            <BrandsFilter
              setFilteredBrands={handleBrandChange}
              brands={filteredBrandsLocal}
              selectedBrands={selectedBrands}
            />
          )}
          {activeComponent === 'size' && (
            <SizeFilter
              setFilteredSizes={handleSizeChange}
              sizes={filteredSizesLocal}
              selectedSizes={selectedSizes}
            />
          )}
          {activeComponent === 'price' && <SliderComp setFilteredPrice={handlePriceChange}/>}
          {!activeComponent && (
            <div className="text-lg text-gray-500">No filter selected.</div>
          )}
        </div>
      </div>

       <div className="flex justify-end bg-gray-100">
        <button
          className="py-2 px-4 w-full bg-gray-300 rounded hover:bg-gray-400"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="py-2 px-4 w-full bg-green-500 text-white rounded hover:bg-green-600"
          onClick={closeDiv}  
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FilterpageMview;
