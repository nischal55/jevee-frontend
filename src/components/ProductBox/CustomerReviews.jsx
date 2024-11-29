import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegFlag } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

const CustomerReviews = ({activeTab}) => {
  const reviews = [
    {
      id: 1,
      rating: 3,
      name: "Asmin Adhikari",
      date: "Sunday 25 June 2023",
      review: `A so so product for acne prone skin. It mentions that it is properly designed for the acne prone skin. However, the texture feels like it is more suitable for the dry skin out there. So, not really happy with this one.`,
      image: "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2021-10-18/06/0694007a0f1f25c957149f41cb68f7dbfe8eac8e",
      likes: 1,
      dislikes: 0,
    },
    {
      id: 2,
      rating: 5,
      name: "Sahara Dahal",
      date: "Tuesday 15 February 2022",
      review: `My skin is loving it. It's acne prone.`,
      image: null,
      likes: 1,
      dislikes: 0,
    },
    {
      id: 3,
      rating: 4,
      name: "Rina Salami Magar",
      date: "Thursday 2 December 2021",
      review: `Great product!`,
      image: null,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 4,
      rating: 5,
      name: "Barsha Khadka",
      date: "Friday 14 January 2022",
      review: `Amazing results! Highly recommend.`,
      image: null,
      likes: 0,
      dislikes: 0,
    },
  ];

  return (
    <div className="">
    <div className="bg-white">
      {/* Customer Rating Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Customer Rating</h2>

        <div className="flex items-start mt-4 space-x-8">
          {/* Left side content: Rating score */}
          <div className="flex flex-col items-center gap-4 border-r p-4">
            <span className="text-4xl font-bold">
              4.3{" "}
              <span className="text-blue-500 text-3xl inline-block align-middle">
                <FaStar />
              </span>
            </span>
            <span className="text-gray-500">63 Rating</span>
          </div>

          {/* Right side content: Rating bars */}
          <div className="space-y-2 w-52">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div className="flex items-center gap-2" key={index}>
                <span className="text-sm">{rating}</span>
                <FaStar size={10} color="skyblue" />
                <div className="flex-1 bg-gray-200 h-1 rounded-full">
                  <div
                    className={`h-1 rounded-full ${
                      rating === 5
                        ? "bg-blue-500 w-[60%]"
                        : rating === 4
                        ? "bg-blue-400 w-[40%]"
                        : rating === 3
                        ? "bg-blue-300 w-[20%]"
                        : "bg-blue-200 w-[10%]"
                    }`}
                  ></div>
                </div>

                <span className="text-sm">
                  {rating === 5
                    ? 38
                    : rating === 4
                    ? 13
                    : rating === 3
                    ? 7
                    : rating === 2
                    ? 2
                    : 3}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Photo */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Customer Photo</h2>
        <img
          src="https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2023-09-13/c4/c426d6526c6b77a009c8794b9913ab094338390f"
          alt="Customer Photo"
          className="w-24 h-24 object-cover border border-gray-300 rounded-md mt-4"
        />
      </div>

      {/* Customer Review Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Customer Review</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-lg">
              {/* Header */}
              <div className="flex items-center gap-4">
                {/* Left side: Rating and Star */}
                <div className="flex items-center gap-1 bg-[#7263e6] p-2 rounded-xl">
                  <span className="text-sm text-white">{review.rating}</span>
                  <span className="text-yellow-500 inline-block align-middle">
                    <FaStar />
                  </span>
                </div>

                {/* Right side: Name and Date */}
                <div className="flex flex-1 justify-between items-start ml-2">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-2 text-gray-700 ml-12">{review.review}</p>

              {/* Optional Image */}
              {review.image && (
                <img
                  src={review.image}
                  alt="Review"
                  className="w-32 h-32 object-cover border border-gray-300 rounded-md mt-4 ml-12"
                />
              )}

              {/* Likes and Actions */}
              <div className="flex items-center gap-6 mt-4 ml-12 justify-between">
                <div className="flex items-center gap-1">
                  <button className="flex items-center">
                    <AiOutlineLike />{" "}
                    <span className="ml-1">{review.likes}</span>
                  </button>
                  <button className="flex items-center">
                    <AiOutlineDislike />{" "}
                    <span className="ml-1">{review.dislikes}</span>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button>
                    <FaRegFlag />
                  </button>
                  <button>
                    <SlOptions />
                  </button>
                </div>
              </div>
              <div className="mt-4 border border-[#e7e9ec]"></div>
            </div>
          ))}
        </div>

        {/* Read More */}
        {activeTab&&<div className="text-blue-500 text-[16px] cursor-pointer hover:underline flex items-center justify-center">
          Read More <FaAngleRight size={20}/>
        </div>}
        
      </div>
    </div>
    </div>
  );
};

export default CustomerReviews;
