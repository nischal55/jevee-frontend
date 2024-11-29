import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";


export default function InsideProductPage() {
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2023-01-12/b0/b0d13a8c2d692b5b25b328bcc1e8167d719985cd",
    "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2023-01-12/72/72aa738d8370e28ac5baa2796a3d140ca1c72650",
    "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2023-01-12/32/32d851f6da862019ee1297aa566a7a9eb3c996c4",
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="container mx-auto px-4 py-6 bg-white my-4 mb-10">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 mr-2 mt-3">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className={`border rounded-lg p-2 w-20 h-20 cursor-pointer ${mainImage === thumbnail ? "border-[#f692c4]" : ""
                  }`}
                onClick={() => setMainImage(thumbnail)} // Update main image on click
              >
                <img src={thumbnail} alt={`Thumbnail ${index + 1}`} width={80} height={80} />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 bg-white p-8 rounded shadow relative h-[600px] border-[#edeef1] mt-3">
            <span className="absolute top-4 left-4 text-[#7e70e8] px-3 py-1 text-sm font-medium rounded shadow-lg">
              BESTSELLER
            </span>
            <img className="h-[500px] w-[500px] mt-5" src={mainImage} alt="Main Product" width={400} height={400} />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="relative flex items-center">
            <h1 className="text-[28px] pr-10 leading-tight">
              Minimalist 10% Niacinamide Face Serum 30ml
            </h1>
            <GrFavorite size={30} className="absolute right-0 top-0 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2">
            {/* Star Rating */}
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <span className=" text=[16px]  text-[#161616]">4.6/5&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 126 Ratings and 54 reviews</span>
          </div>
          <div className="mt-4 border border-tPrimary-300"></div>
          <p className=" text-[16px] text-[#4ADEDE] font-bold">In Stock</p>
          <div>
            {/* Increment Decrement Button */}
            <div className="flex items-center gap-4 mt-20 text-[16px]">
              Quantity
              <button onClick={decrement} className="px-3 py-1.5">
                <FaMinusCircle color="#c8c6c5" size={23} />
              </button>
              <span className="flex items-center justify-center w-10 h-10 border border-[#e5e7eb] text-gray-700 font-medium p-6">
                {quantity}
              </span>
              <button onClick={increment} className="px-3 py-1.5">
                <FaPlusCircle color="#c8c6c5" size={23} />
              </button>
            </div>
            <div className="mt-4 border border-tPrimary-300"></div>
            <div className="mt-4 flex flex-col items-center float-end">
              <span className="text-[24px] text-[#F25CA8]">NPR. 961</span>
              <span className="pb-1 text-sm sm:text-md font-light text-right">(Inclusive of all taxes)</span>
              <button className="mt-4 px-4 py-2 bg-[#f25ca8] text-white rounded hover:shadow-lg">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
