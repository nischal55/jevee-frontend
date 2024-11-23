import React from 'react'
import BrandsFilterCheckbbox from './BrandsFilterCheckbbox'
import { useParams } from "react-router-dom";
import ProductsHolder from '../../data/ProductsHolder';


const BrandsFilter = () => {
    
    const { category } = useParams();
    const products = ProductsHolder[category] || [];
  
    // Create a Set to store unique brands
    const uniqueBrands = new Set(products.map((product) => product.brand));

    // Convert the Set back to an array for mapping
    const brandsArray = Array.from(uniqueBrands);
    
  return (

    <div className="">
         <div className="m-5 ">
                    <h1 className='font-semibold text-lg text-gray-700 ml-3'>Brands</h1>

                    <div className="p-3">
                        <input className='border-2 border-gray-400 rounded-full px-4 py-2 outline-none' type="search" placeholder='Search'/>
                    </div>
                    <div className=" border-b-gray-400 w-full border-b-2 p-2 flex justify-between h-80 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200 no-scrollbar-arrows overflow-auto ">
                <div className="w-full justify-between flex  flex-col h-1/3 ">

                {
            brandsArray.map((elem)=>{ // Map over the unique brands array
              return <BrandsFilterCheckbbox key={elem} brands={elem} />
            })
          }

                    
                    </div>
                    </div>
            </div>
    </div>
  )
}

export default BrandsFilter
