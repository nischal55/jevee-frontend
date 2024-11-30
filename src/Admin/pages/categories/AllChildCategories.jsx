import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const AllChildCategories = () => {
  const [childCategorys, setChildCategorys] = useState([])
  const [limit, setLimit] = useState(10)
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const [status, setStatus] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      setChildCategorys(res.data.products)
     setTotal(res.data.total);
    }).catch((err) => {
      console.error("Failed to fetch products:", err);
    });
 }, [])

 useEffect(() => {
  if (status !== null) {
    axios.put(`https://jevee-frontend.vercel.app/admin/product-category/editcategory`)
      .then(() => toast("Status updated successfully"))
      .catch(() => toast.error("Something went wrong"));
  }
}, [status]);

 function deleteChildCategory(id){
  axios
  .delete(`https://jevee-frontend.vercel.app/admin/product-category/deleteCategory/${id}`)
  .then((res) => {
    toast(`Child Category deleted successfully`, { autoClose: 2000 });
    setCategorys(childCategorys.filter((childCategory) => childCategory.id !== id));
  })
  .catch((err) => {
    console.error("Error:", err);
  });
}

function handleLimit(e) {
  setLimit(parseInt(e.target.value, 10));
}

function handleSearch(e) {
  const searchValue = e.target.value.toLowerCase();
  const filtered = childCategorys.filter((childCategory) =>
    childCategory.title.toLowerCase().includes(searchValue)
  );
  setChildCategorys(filtered);
}

function handleEditcategory(childCategory) {
  navigate('', { state: { childCategorydata: childCategory } });
}

const totalPages = Math.ceil(total / limit);

const handlePrevious = () => {
  if (currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
  }
};

const handleNext = () => {
  if (currentPage < totalPages) {
    setCurrentPage((prev) => prev + 1);
  }
};

const startIndex = (currentPage - 1) * limit;
const showResult = childCategorys.slice(startIndex, startIndex + limit);

    return (

        <>
            <div className="cardHead -z-[0] flex flex-col md:flex-row justify-between gap-4">
                <h2 className='text-3xl font-semibold text-[#34395E]'>Product Child Category</h2>
                <div className='flex text-[12px] gap-2'>
                <Link to="/admin/product-category" className='text-blue-500 hover:underline decoration-blue-500'>Product Category</Link>
                  /
                  <Link to="/admin/product-sub-category" className='text-blue-500 hover:underline decoration-blue-500'>Product Sub Category</Link>
                  /
                  <h2 className='text-slate-500'>Product Child Category</h2>

                </div>
            </div>
            <div className="mx-8 pt-4 pb-10">
                <Link to={"/admin/product-category/create"} className="bg-blue-500 flex w-fit items-center gap-1 text-white my-4 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                   <FaPlus /> Add New
                </Link>
            
            <div className='px-[25px] py-4 w-full rounded bg-[#FFFFFF] mb-10'>

            <div className='flex flex-col md:flex-row justify-between text-[14px]'>
      <div className='flex items-center gap-2'>
       <label htmlFor="items">Show:</label>
       <select name="items" id="items" className='outline-none border py-2' onChange={handleLimit}>
         <option value="10">10</option>
         <option value="25">25</option>
         <option value="50">50</option>
         <option value="100">100</option>
       </select>
       entries
      </div>
      <div className='flex items-center gap-2'>
       <label htmlFor="search">Search:</label>
      <input type="text" id='search' className='outline-none text-[13px] border py-[5px] px-2' onChange={handleSearch}/>
      </div>
     </div>
     <div className='py-10 overflow-x-auto'>
     
     <table className='w-full'>
 <thead className='border-b-[1.5px]'>
   <tr className='font-semibold text-[13px] text-[#263143]'>
   <th className='w-1/7 p-2 text-center'>SN</th>
   <th className='w-1/7 p-2 text-center'>Child Category</th>
   <th className='w-1/7 p-2 text-center'>Slug</th>
   <th className='w-1/7 p-2 text-center'>Sub Category</th>
   <th className='w-1/7 p-2 text-center'>Category</th>
   <th className='w-1/7 p-2 text-center'>Status</th>
   <th className='w-1/7 p-2 text-center'>Action</th>
   </tr>
 </thead>
 <tbody className='text-zinc-500'>
   {showResult.length > 0 ? showResult.map((childCategory,index) => (
     <tr key={index} className='text-center'>
       <td className='w-1/7 p-2'>{childCategory.id}</td>
       <td className='w-1/7 p-2'>{childCategory?.childCategory}</td>
       <td className='w-1/7 p-2'>{childCategory?.slug}</td>
       <td className='w-1/7 p-2'>{childCategory?.subCategory}</td>
       <td className='w-1/7 p-2'>{childCategory?.title}</td>
       <td className='w-1/7 p-2'>
       

       <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div onClick={()=>setStatus(!status)} className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{childCategory.status ?"Active":"Inactive"}</span>
</label>


       </td>
       <td className='w-full py-8 flex justify-center items-center gap-1'>
        <div className='h-8 w-8 bg-blue-600 flex justify-center items-center text-white rounded'>
        <button onClick={()=>handleEditcategory(childCategory)}><FaEdit /></button>
        </div>
       <div className='h-8 w-8 bg-red-500 flex justify-center items-center text-white rounded'>
       <button onClick={()=>deleteChildCategory(childCategory.id)}><MdDeleteOutline className='bg-red-500'/></button>
       </div>
       
       </td>
     </tr>
   )) : (
     <tr>
       <td colSpan="6" className='py-4 text-center'>No data found</td>
     </tr>
   )}
 </tbody>
</table>
   </div>
   <hr />
   <div className='py-5 flex flex-col md:flex-row gap-y-5 justify-between items-center'>
     <h2 className='text-slate-500 text-sm'>Showing {startIndex + 1} to {startIndex + limit} of {total} entries</h2>
   

<div className='flex items-center gap-4'>
<button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
<h2 className='bg-[#6777EF] w-[35px] h-[35px] flex items-center justify-center text-white rounded-md'>{currentPage}</h2>
<button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
</div>
</div>

            </div>
            <hr />
            </div>

        </>
    )
}

export default AllChildCategories