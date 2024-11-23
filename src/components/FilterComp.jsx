import React from "react";

import "../index.css";
import BrandsFilter from "./Filter/BrandsFilter";
import SizeFilter from "./Filter/SizeFilter";
import Slider from "./Filter/SliderComp";



const FilterComp = () => {


 

  return (
    <>
      <div className="items-start bg-white w-72 h-full mr-0 ml-0 border-r-2 justify-start">
        <div className="flex justify-between pt-5 px-3">
          <h1
            className="font-semibold text-lg text-gray-700"
            id="filter-heading"
          >
            Filter
          </h1>
          <h3 className="font-semibold cursor-pointer text-sm text-pink-700">
            Reset
          </h3>
        </div>
        <BrandsFilter/>
        <SizeFilter />
        <Slider />
      </div>
    </>
  );
};

export default FilterComp;
