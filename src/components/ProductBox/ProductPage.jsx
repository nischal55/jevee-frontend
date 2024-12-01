import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
import { useParams } from 'react-router-dom';

const ProductPage = ({showCase, filteredFinalProducts,setSortState, setSortOrder }) => {
  const { category, subCategory, childCategory } = useParams();

  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Helper to capitalize the first letter of a string
  const capitalize = (str) => str?.charAt(0).toUpperCase() + str.slice(1);

  // Resolve the displayed category name
  const displayCategory = capitalize(childCategory || subCategory || category || '');

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="px-3 flex flex-col">
      {/* Header */}
      <div className="py-3 flex justify-between items-center">
        <div>
          <h1 className="text-sm font-light">Categories</h1>
          <p className="text-2xl font-light">{displayCategory || 'Products'}</p>
        </div>

        {/* Sort Dropdown */}
        <div className="relative hidden lg:block" ref={dropdownRef}>
          <button
            onClick={() => setIsSortDropdownVisible((prev) => !prev)}
            className="text-sm text-gray-700 w-56 rounded-full border-gray-400 border"
          >
            <div className="flex w-full items-start justify-between px-3 py-2.5">
              <p>
             {
              showCase? showCase : "Sort By"
             }</p>
              
              
              <svg
                className="ml-1 w-[22px] h-[22px] inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isSortDropdownVisible && (
            <div className="absolute z-20 right-0 mt-2 w-48 bg-white shadow-md border rounded">
              <ul className="py-2 text-sm text-gray-700">
                <li
                  onClick={() => {
                    
                setSortState("asc");
                setSortOrder("asc");
              
                    setIsSortDropdownVisible(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: Low to High
                </li>
                <li
                  onClick={() => {
                    setSortState("desc");
                setSortOrder("desc");
                    setIsSortDropdownVisible(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="products-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFinalProducts.length > 0 ? (
          filteredFinalProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found matching the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
