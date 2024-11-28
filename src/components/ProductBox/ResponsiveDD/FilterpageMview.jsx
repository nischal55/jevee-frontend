import React, { useState, useEffect } from 'react';
import BrandsFilter from '../../Filter/BrandsFilter';
import SliderComp from '../../Filter/SliderComp';
import products from '../../../data/product';
import SizeFilter from '../../Filter/SizeFilter';
import { useParams } from 'react-router-dom';


const FilterpageMview = ({availableBrands, availableSizes, setFilteredBrands, setFilteredSizes, setFilteredPrice}) => {

  const {category, subcategory} = useParams()

      const [selectedBrands, setSelectedBrands] = useState([])
      const [selectedSizes, setSelectedSizes] = useState([])
      const [filteredProducts, setFilteredProducts] = useState([])
      const [filteredBrandsLocal, setFilteredBrandsLocal] = useState([])
      const [filteredSizesLocal, setFilteredSizesLocal] = useState([])
      


      useEffect(() => {
        const filtered = products.filter(product => {
          if (subcategory){
            return product.category === category && product.subCategory === subcategory
          } else {
            return product.category === category
          }
      })
      
      setFilteredProducts(filtered);


      const brands = [...new Set(filtered.map(product => product.brand))];
      const sizes = [...new Set(filtered.map(product => product.size))];
      setFilteredBrandsLocal(brands);
      setFilteredSizesLocal(sizes);



    }, [category, subcategory])

    
    
      useEffect(() => {
        setFilteredBrands(selectedBrands);
        setFilteredSizes(selectedSizes);

      }, [selectedBrands, selectedSizes, setFilteredBrands, setFilteredSizes, setFilteredPrice])
      
      const handleBrandChange = (brands) => {
        setSelectedBrands(brands);
      };
      const handleSizeChange = (sizes) => {
        setSelectedSizes(sizes);
      };

      const handleReset = () => {
        setSelectedBrands([]);
        setSelectedSizes([]);
        setFilteredBrands([]);
        setFilteredSizes([]);
        setFilteredPrice([0, 5000]);
      };








  const [activeComponent, setActiveComponent] = useState('brands'); // Default to 'brands'

  
  return (
    <div className="flex max-h-[60vh] flex-col h-screen">
      {/* Content Section */}
      <div className="flex flex-grow pl-3">
        {/* Toggle Buttons */}
        <div className="flex flex-col bg-gray-200 text-start">
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'price' ? 'bg-white  text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('price')}
          >
            Price
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'brands' ? 'bg-white  text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('brands')}
          >
            Brands
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === 'size' ? 'bg-white  text-pink-500' : ''
            }`}
            onClick={() => setActiveComponent('size')}
          >
            Size
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-gray-50">
          {activeComponent === 'brands' && 
          <BrandsFilter 
          setFilteredBrands={handleBrandChange} 
          brands={filteredBrandsLocal} 
          selectedBrands={selectedBrands} 
        />
          }
          {activeComponent === 'size' && 
          <SizeFilter 
          setFilteredSizes={handleSizeChange} 
          sizes={filteredSizesLocal} 
          selectedSizes={selectedSizes} 
        />
          }
          {activeComponent === 'price' && <SliderComp/>}
          {!activeComponent && (
            <div className="text-lg text-gray-500">No filter selected.</div>
          )}
        </div>
      </div>

      {/* Reset and Done Buttons */}
      <div className="flex justify-end  bg-gray-100">
        <button
          className="py-2 px-4 w-full bg-gray-300 rounded hover:bg-gray-400"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="py-2 px-4 w-full bg-green-500 text-white rounded hover:bg-green-600"
          onClick=""
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FilterpageMview;


