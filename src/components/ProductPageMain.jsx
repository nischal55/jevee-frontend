import React from "react";
import { useParams } from "react-router-dom";
import FilterComp from "./FilterComp";
import ProductPage from "./ProductBox/ProductPage";

const ProductPageMain = () => {
  const { category , subCategory } = useParams();
 
  

  return (
    <section className="bg-gray-200 min-h-screen">
      <p className="mx-16 pt-10 mb-5 text-xs text-gray-500">
        <span className="text-blue-400">Home</span>
        {` > ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        {` > ${subCategory ? subCategory.charAt(0).toUpperCase() + category.slice(1) : ""}`}
      </p>

      <div className="flex bg-white  mx-14 gap-0 ">
        <FilterComp />
        <ProductPage />
      </div>
    </section>
  );
};

export default ProductPageMain;
