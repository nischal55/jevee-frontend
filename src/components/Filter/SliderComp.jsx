import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import "../../index.css";

const SliderComp = ({ setFilteredPrice }) => {
  const [values, setValues] = useState([30, 17500]);

  // Update parent with the selected price range
  const handleChange = (newValues) => {
    setValues(newValues);
    if (setFilteredPrice) {
      setFilteredPrice(newValues);
    }
  };

  return (
    <div>
      <div className="m-5">
        <div className="w-full">
          <h3 className="font-semibold text-lg text-gray-700">Price Range</h3>
          <small className="text-gray-500 font-medium text-xs">Select Price Range</small>
          <div className="values font-light">NPR.{values[0]} - NPR.{values[1]}</div>
          <ReactSlider
            className="slider w-full h-1 bg-pink-200 mt-6 rounded-lg"
            thumbClassName="thumb w-4 h-4 bg-pink-500 rounded-full cursor-pointer"
            trackClassName="track bg-pink-400 rounded-lg"
            value={values}
            onChange={handleChange}
            min={30}
            step={10}
            max={17500}
            renderThumb={(props) => <div {...props} />}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
