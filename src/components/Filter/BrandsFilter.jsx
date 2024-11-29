import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BrandsFilter = ({ brands = [], setFilteredBrands, selectedBrands = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle brand selection
  const handleBrandSelection = (brand) => {
    const updatedSelection = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setFilteredBrands(updatedSelection);
  };

  // Filter the brands based on the search query
  const filteredBrands = brands.filter(brand =>
    brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-5">
      <h3 className="font-semibold text-lg text-gray-700">Brands</h3>

      {/* Search bar */}
      <div className="h-10 flex font-light items-center rounded-full mr-2 my-2 p-2 bg-gray-100">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-1 bg-gray-100 border-none focus:outline-none"
        />
      </div>

      {/* Brand list */}
      <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300 pr-2 scrollbar-track-transparent max-h-80">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, index) => (
            <div key={index} className="flex px-1 items-center font-light justify-between py-2.5 pr-2 border-t-2 border-gray-300">
              <label htmlFor={brand} className="text-sm">{brand}</label>
              <input
                type="checkbox"
                id={brand}
                className="w-4 h-4"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandSelection(brand)}
                aria-checked={selectedBrands.includes(brand)}
                aria-label={`Select ${brand}`}
              />
            </div>
          ))
        ) : (
          <p>No brands found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BrandsFilter;