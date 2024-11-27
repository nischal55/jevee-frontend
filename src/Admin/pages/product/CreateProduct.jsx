import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiListBulletsBold } from "react-icons/pi";

const CreateProduct = () => {
  // Dummy categories, subcategories, and child categories
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

  const childCategories = [
    { id: 1, name: "Android Phones", subcategoryId: 1 },
    { id: 2, name: "iPhones", subcategoryId: 1 },
    { id: 3, name: "Gaming Laptops", subcategoryId: 2 },
    { id: 4, name: "Casual Wear", subcategoryId: 3 },
  ];

  const [formData, setFormData] = useState({
    productName: "",
    slug: "",
    price: "",
    discount: "",
    thumbnail: null,
    images: [],
    categoryId: "",
    subcategoryId: "",
    childCategoryId: "",
    status: "active",
  });

  // Filter subcategories and child categories based on selected category and subcategory
  const filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory.categoryId === Number(formData.categoryId)
  );

  const filteredChildCategories = childCategories.filter(
    (childCategory) =>
      childCategory.subcategoryId === Number(formData.subcategoryId)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === "categoryId" && { subcategoryId: "", childCategoryId: "" }), // Reset subcategories and child categories
      ...(name === "subcategoryId" && { childCategoryId: "" }), // Reset child categories
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "thumbnail") {
      setFormData({ ...formData, thumbnail: files[0] });
    } else if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="cardHead -z-[0]">
        <h2 className="text-3xl font-semibold text-[#34395E]">Create Product</h2>
      </div>
      <div className="mx-8 px-4 py-4 my-4 shadow-md">
        <Link
          to="/admin/products"
          className="bg-blue-500 w-fit text-white my-4 py-2 flex items-center px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <PiListBulletsBold /> Products
        </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Select */}
          <div className="flex flex-col">
            <label htmlFor="categoryId" className="text-sm font-semibold my-1">
              Category <span className="text-red-500">*</span>
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
              className="text-sm font-semibold my-1"
            >
              Subcategory <span className="text-red-500">*</span>
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

          {/* Child Category Select */}
          <div className="flex flex-col">
            <label
              htmlFor="childCategoryId"
              className="text-sm font-semibold my-1"
            >
              Child Category <span className="text-red-500">*</span>
            </label>
            <select
              id="childCategoryId"
              name="childCategoryId"
              value={formData.childCategoryId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={!formData.subcategoryId}
            >
              <option value="">Select a Child Category</option>
              {filteredChildCategories.map((childCategory) => (
                <option key={childCategory.id} value={childCategory.id}>
                  {childCategory.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label
              htmlFor="productName"
              className="text-sm font-semibold my-1"
            >
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-semibold my-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Discount */}
          <div className="flex flex-col">
            <label htmlFor="discount" className="text-sm font-semibold my-1">
              Discount (%)
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Thumbnail */}
          <div className="flex flex-col">
            <label htmlFor="thumbnail" className="text-sm font-semibold my-1">
              Thumbnail <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Images */}
          <div className="flex flex-col">
            <label htmlFor="images" className="text-sm font-semibold my-1">
              Additional Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleFileChange}
              accept="image/*"
              multiple
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label htmlFor="status" className="text-sm font-semibold my-1">
              Status
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

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
