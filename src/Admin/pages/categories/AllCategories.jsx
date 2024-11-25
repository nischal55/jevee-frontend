import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AllCategories = () => {
    return (

        <>
            <div className="cardHead -z-[0]">
                <h2 className='text-3xl font-semibold text-[#34395E]'>Create Product Category </h2>
            </div>
            <div className="mx-8 px-4 py-4 my-4  shadow-md">
                <Link to={"/admin/product-category/create"} className="bg-blue-500 flex w-fit items-center text-white my-4 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                   <FaPlus /> Add
                </Link>
            feature not added 
            </div>

        </>
    )
}

export default AllCategories