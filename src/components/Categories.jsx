import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

function Categories() {
  const [cur, setCurr] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const carouselRef = useRef(null);
  const categories = [
    {
      name: 'Skin',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Hair',
      subCategories: [
        {
          name: "mindoxril",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Fragrances',
      subCategories: [
        {
          name: "scent",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Makeup',
      subCategories: [
        {
          name: "mak",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: "Kid's Fashion",
      subCategories: [
        {
          name: "clothes",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Gadgets & Accessories',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Home Appliances & Television',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Women Fashion',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Mom & Baby',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },

    {
      name: 'Personal Care',
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        },
        {
          name: "Cleansers",
          products: [
            "Cleanser", "Face Wash", "Scrubs & Exfollators", "Facial Wipes", "Makeup Remover"
          ]
        }
      ]
    },
  ]
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
    <div className="container relative mx-auto hidden lg:block">
      <button className='mx-2 z-10 absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full' onClick={scrollPrev}

      >
        <FaChevronLeft />
      </button>
      <div
        ref={carouselRef}
        className="mx-4 flex overflow-x-auto gap-8 no-scrollbar"
      >
        {categories.map((category, index) => (
          <ShowLinks category={category} key={index} />
        ))}
      </div>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full"
        onClick={scrollNext}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Categories;

function ShowLinks({ category }) {
  const [isHovered, setIsHovered] = useState(false);
  const categoryScroll = useRef(null)
  const scrollNext = () => {
    if (categoryScroll.current) {
      categoryScroll.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (categoryScroll.current) {
      categoryScroll.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  return (
    <div
      className=" group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="cursor-pointer text-nowrap">{category.name}</h3>

      {/* {isHovered && ( */}
      <div className=" hidden group-hover:flex absolute top-6 left-0 bg-white shadow-lg p-4 w-full z-50" >
        <div className="flex flex-nowrap overflow-x-auto space-x-4 h-fit max-w-full no-scrollbar relative" ref={categoryScroll}>
          <button
            className='mx-2 z-10 fixed  top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full'
            onClick={scrollPrev}

          >
            <FaChevronLeft />
          </button>
          {category.subCategories.map((subcategory, index) => (
            <div
              key={index}
              className={`flex-none w-60 h-96   mb-4  rounded-md p-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}`}
            >
              <h4 className="font-semibold underline">{subcategory.name}</h4>
              <ul className=" ml-4">
                {subcategory.products.map((product, prodIndex) => (
                  <li key={prodIndex} className="text-gray-700">
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            className="fixed right-44 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full"
            onClick={scrollNext}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}