import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";

const CreateChildCategory = () => {

  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Furniture" },
  ];

  const subcategories = [
    { id: 1, name: "Mobiles", categoryId: 1 },
    { id: 2, name: "Laptops", categoryId: 1 },
    { id: 3, name: "Men's Wear", categoryId: 2 },
    { id: 4, name: "Women's Wear", categoryId: 2 },
    { id: 5, name: "Sofas", categoryId: 3 },
    { id: 6, name: "Tables", categoryId: 3 },
  ];

  const [formData, setFormData] = useState({
    childCategoryName: "",
    slug: "",
    status: "active",
    categoryId: "",
    subcategoryId: "",
  });


  const filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory.categoryId === Number(formData.categoryId)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "categoryId" && { subcategoryId: "" }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">
          Create Child Category
        </h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/product-child-category"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Child Categories
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
            
          {/* Category Select */}
          <div className="flex flex-col">
            <label
              htmlFor="categoryId"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Category
              <span className="text-red-500"> *</span>
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Select */}
          <div className="flex flex-col">
            <label
              htmlFor="subcategoryId"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Subcategory
              <span className="text-red-500"> *</span>
            </label>
            <select
              id="subcategoryId"
              name="subcategoryId"
              value={formData.subcategoryId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={!formData.categoryId}
            >
              <option value="">Select a Subcategory</option>
              {filteredSubcategories.map((subcategory) => (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>

          {/* Child Category Name */}
          
          <div className="flex flex-col">
            <label
              htmlFor="childCategoryName"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Child Category Name
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              id="childCategoryName"
              name="childCategoryName"
              value={formData.childCategoryName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Slug */}
          <div className="flex flex-col">
            <label
              htmlFor="slug"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Slug
              <span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="text-gray-700 text-sm my-1 font-semibold"
            >
              Status
              <span className="text-red-500"> *</span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateChildCategory;
