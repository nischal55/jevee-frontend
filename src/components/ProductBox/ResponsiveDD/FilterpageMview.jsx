import React, { useState, useEffect } from "react";
import BrandsFilter from "../../Filter/BrandsFilter";
import SliderComp from "../../Filter/SliderComp";
import SizeFilter from "../../Filter/SizeFilter";


const FilterpageMview = ({
  handleReset,
  closeDiv,
  setFilteredBrands,
  setFilteredSizes,
  setFilteredPrice,
  sizes,
  brands,
  selectedBrands,
  selectedSizes,
}) => {
  
  const [activeComponent, setActiveComponent] = useState('brands');

  return (
    <div className="flex max-h-[70vh] flex-col h-screen">
      <div className="flex flex-grow pl-3">
        <div className="flex flex-col bg-gray-200 text-start">
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === "price" ? "bg-white text-pink-500" : ""
            }`}
            onClick={() => setActiveComponent("price")}
          >
            Price
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === "brands" ? "bg-white text-pink-500" : ""
            }`}
            onClick={() => setActiveComponent("brands")}
          >
            Brands
          </button>
          <button
            className={`py-3 px-4 border-b-2 border-gray-100 ${
              activeComponent === "size" ? "bg-white text-pink-500" : ""
            }`}
            onClick={() => setActiveComponent("size")}
          >
            Size
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-gray-50">
          {activeComponent === "brands" && (
            <BrandsFilter
              setFilteredBrands={setFilteredBrands}
              brands={brands}
              selectedBrands={selectedBrands}
            />
          )}
          {activeComponent === "size" && (
            <SizeFilter
              setFilteredSizes={setFilteredSizes}
              sizes={sizes}
              selectedSizes={selectedSizes}
            />
          )}
          {activeComponent === "price" && (
            <SliderComp setFilteredPrice={setFilteredPrice} />
          )}
          {!activeComponent && (
            <div className="text-lg text-gray-500">No filter selected.</div>
          )}
        </div>
      </div>

      <div className="flex justify-end px-2.5 pb-1 bg-gray-100">
        <button
          className="py-2 px-4 w-full bg-[#6D5EDF] text-white "
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="py-2 px-4 w-full bg-pink-500 text-white  "
          onClick={closeDiv}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default FilterpageMview;
