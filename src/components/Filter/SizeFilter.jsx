import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SizeFilter = ({ setFilteredSizes, sizes, selectedSizes = [] }) => {
  const [selectedSizesLocal, setSelectedSizesLocal] = useState(selectedSizes);
  const [searchQuery, setSearchQuery] = useState(""); 



  const [isClicked, setIsClicked] = useState(false);

   const toggleClick = () => {
    setIsClicked(!isClicked);
  };
   const handleSizeSelection = (size) => {
    if (selectedSizesLocal.includes(size)) {
      setSelectedSizesLocal(selectedSizesLocal.filter(s => s !== size));
    } else {
      setSelectedSizesLocal([...selectedSizesLocal, size]);
    }
  };

   useEffect(() => {
    setFilteredSizes(selectedSizesLocal);
  }, [selectedSizesLocal, setFilteredSizes]);

   const filteredSizes = sizes.filter(size =>
    size.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="m-5">
      <h3 className="font-semibold text-lg text-gray-700">Size</h3>
      

       <div onClick={toggleClick} className=  "my-2 mr-2 h-10 flex items-center rounded-full p-2 bg-gray-100 ">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-1 mr-3" />
        <input
          type="search"
          placeholder="Search Sizes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="w-full p-1 bg-gray-100 border-none focus:outline-none"
        />
      </div>

      <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-full">
        {filteredSizes && filteredSizes.length > 0 ? (
          filteredSizes.map((size, index) => (
           <div key={index} className="flex px-1 items-center font-light justify-between py-2.5 pr-2 border-t-2 border-gray-300">
              <label htmlFor={`size-${size}`} className="text-sm">{size}</label>
              <input
                type="checkbox"
                id={`size-${size}`}  
                className="w-4 h-4"
                checked={selectedSizesLocal.includes(size)}
                onChange={() => handleSizeSelection(size)}
              />
            </div>
          ))
        ) : (
          <p>No sizes found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default SizeFilter;