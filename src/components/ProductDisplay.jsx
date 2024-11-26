import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const carouselRef = useRef(null);

  const categories = [
    {
      name: 'Skin',
      subCategories: [
        {
          name: "Cleansers",
          products: ["Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"]
        },
      ]
    },
    {
      name: 'Hair',
      subCategories: [
        {
          name: "Cleansers",
          products: ["Shampoo", "Conditioner", "Hair Masks", "Hair Oil"]
        },
      ]
    },
    {
      name: 'Fragrances',
      subCategories: [
        {
          name: "Perfumes",
          products: ["Eau de Parfum", "Eau de Toilette", "Body Sprays"]
        },
      ]
    },
    {
      name: 'Makeup',
      subCategories: [
        {
          name: "Face Makeup",
          products: ["Foundation", "Concealer", "Blush", "Bronzer"]
        },
      ]
    },
    {
      name: "Kid's Fashion",
      subCategories: [
        {
          name: "Clothing",
          products: ["T-shirts", "Dresses", "Shoes", "Accessories"]
        },
      ]
    },
    {
      name: 'Gadgets & Accessories',
      subCategories: [
        {
          name: "Accessories",
          products: ["Smartwatches", "Headphones", "Chargers", "Cables"]
        },
      ]
    },
    {
      name: 'Home Appliances & Television',
      subCategories: [
        {
          name: "Home Appliances",
          products: ["Microwaves", "Air Conditioners", "Washing Machines"]
        },
      ]
    },
    {
      name: 'Women Fashion',
      subCategories: [
        {
          name: "Clothing",
          products: ["Sarees", "Dresses", "Jewelry", "Shoes"]
        },
      ]
    },
    {
      name: 'Mom & Baby',
      subCategories: [
        {
          name: "Baby Care",
          products: ["Diapers", "Baby Food", "Toys", "Strollers"]
        },
      ]
    },
    {
      name: 'Personal Care',
      subCategories: [
        {
          name: "Grooming",
          products: ["Razors", "Shaving Cream", "Body Lotions", "Soaps"]
        },
      ]
    },
  ];

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className='h-10 hidden lg:flex'>
      <div className='container relative'>
        <div className='flex justify-center items-center'>
          <button
            className='mx-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10'
            onClick={scrollPrev}
          >
            <FaChevronLeft />
          </button>
          <div
            ref={carouselRef}
            className='flex py-2 overflow-auto gap-x-4 text-sm whitespace-nowrap scroll-smooth min-h-10'
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className='px-2 cursor-pointer'
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.name}
                {hoveredCategory === category.name && (
                  <div className='my-1'>
                    {category.subCategories.map((subcategory, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="font-semibold my-3 underline bg-red-300">{subcategory.name}</h3>
                        <ul>
                          {subcategory.products.map((product, prodIndex) => (
                            <li key={prodIndex}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className='mx-2 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10'
            onClick={scrollNext}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
