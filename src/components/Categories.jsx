import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

function Categories() {
  const [cur, setCurr] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState(null);
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
        }
      ]
    },

    {
      name: 'Hair',
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
      name: 'Fragrances',
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
      name: 'Makeup',
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
      name: "Kid's Fashion",
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
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth > 1024) {
        setItemsPerPage(9);
      } else if (window.innerWidth === 1024) {
        setItemsPerPage(7);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const currentCategories = categories.slice(cur, cur + itemsPerPage);
  const disablePrev = cur === 0;
  const disableNext = cur + itemsPerPage >= categories.length;

  function prev() {
    setCurr((curr) => Math.max(0, curr - 1));
  }

  function next() {
    setCurr((curr) => Math.min(categories.length - itemsPerPage, curr + 1));
  }

  return (
    <div className='h-10 hidden lg:flex'>
      <div className='container relative'>
        <div className='flex justify-center items-center overflow-hidden '>
          <div className='flex py-2 justify-between gap-x-4 text-sm min-h-10 z-20'>
            {currentCategories.map((category, index) => (
              <div key={index} className='px-2 cursor-pointer' onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.name}
                {
                  hoveredCategory === category.name && <div className='my-1'>
                    {category.subCategories.map((subcategory, index) => <div key={index}>
                      <h3 className="font-semibold my-3 underline">{subcategory.name}</h3>
                      <ul>
                        {subcategory.products.map((product, prodIndex) => (
                          <li key={prodIndex} className="">{product}</li>
                        ))}
                      </ul>
                    </div>)}
                  </div>
                }
              </div>
            ))}
          </div>
          <button className='mx-2 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full' onClick={prev} disabled={disablePrev}>
            <FaChevronLeft />
          </button>
          <button className='mx-2 absolute right-0 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-gray-200 p-2 rounded-full' onClick={next}
            disabled={disableNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
