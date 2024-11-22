import React from 'react'
import "../index.css"
import BrandsFilter from './Filter/BrandsFilter'
import SizeFilter from './Filter/SizeFilter'
import Slider from './Filter/SliderComp'

const FilterComp = () => {
  return (
    <>
        <div className="items-center bg-white w-full mr-0 ml-0 justify-center">
           <BrandsFilter/>
           <SizeFilter/>
           <Slider/>
        </div>
    </>
  )
}

export default FilterComp
