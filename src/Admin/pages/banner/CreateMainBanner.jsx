import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createMainBanner } from "../../../Redux/Slice/bannerSlice";
import { useNavigate } from "react-router-dom";

const CreateMainBanner = () => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || images.length === 0) {
      toast.error("Please provide a title and upload at least one image.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    images.forEach((image) => formData.append("images", image));
    try {
      const result = await dispatch(createMainBanner(formData));
      if (result.payload.success) {
        toast.success("Banner created successfully");
        navigate('/admin/banner/main-banner/');
      } else {
        toast.error(result.payload.message || "Banner creation failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the banner");
    }
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className='text-3xl font-semibold text-[#34395E]'>Create Product Category </h2>
      </div>

      <div className="mx-8 px-4 py-4 my-4  shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-600 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter banner title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="images" className="block text-gray-600 font-medium">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="mt-1 text-sm text-gray-500">You can upload multiple images.</p>
          </div>

          {/* Preview */}
          <div className="flex flex-wrap gap-4">
            {Array.from(images).map((image, index) => (
              <div key={index} className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Create Banner
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMainBanner;
