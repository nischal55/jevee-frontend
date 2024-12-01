import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BrandsFilter from "./BrandsFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import SizeFilter from "./SizeFilter";
import Slider from "./SliderComp";
import products from "../../data/product";

const FilterComp = ({
  handleReset,
  setFilteredBrands,
  setFilteredSizes,
  setFilteredPrice,
  activeComponent,
  setActiveComponent,
  sizes,
  brands,
  selectedBrands,
  selectedSizes,
}) => {
  
  return (
    <div className="">
      <div className="flex justify-between px-5 pt-3 items-center">
        <h1 className="text-xl font-bold">Filter</h1>
        <button
          className="text-pink-500 flex justify-center px-3 items-center gap-1 font-thin text-sm"
          onClick={handleReset}
        >
          Reset
          <FontAwesomeIcon icon={faRotate} className="font-thin" />
        </button>
      </div>
      <div className="min-w-72">
        {/* BrandsFilter */}
        {setFilteredBrands.length > 0 ? (
          <BrandsFilter
          setFilteredBrands={setFilteredBrands}
          brands={brands}
          selectedBrands={selectedBrands}
        />
        ) : (
          <p>No brands available for this category.</p>
        )}

        {/* SizeFilter */}
        {setFilteredSizes.length > 0 ? (
          <SizeFilter
          setFilteredSizes={setFilteredSizes}
          sizes={sizes}
          selectedSizes={selectedSizes}
        />
        ) : (
          <p>No sizes available for this category.</p>
        )}

        {/* Price Filter */}
        <Slider setFilteredPrice={setFilteredPrice} />
      </div>
    </div>
  );
};

export default FilterComp;
