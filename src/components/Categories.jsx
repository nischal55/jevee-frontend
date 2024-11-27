import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

function Categories() {
  const [cur, setCurr] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const carouselRef = useRef(null);
 
  const categories = [
    {
      name: "Skin",
      subCategories: [
        {
          name: "Cleansers",
          products: [
            "Cleanser",
            "Face Wash",
            "Scrubs & Exfollators",
            "Facial Wipes",
            "Makeup Remover",
          ],
        },
        {
          name: "Body Care",
          products: [
            "Soaps",
            "Lotions & Creams",
            "Oils",
            "Body Butter",
            "Shower Gels & Body Wash",
            "Anti-stretch Mark Creams",
            "Massage Oils",
            "Body Glitter",
            "Bath Oil",
            "Bath Scrubs",
          ],
        },
        { name: "Kits & Combos", products: ["Combos", "Facial Kits"] },
        { name: "Sun Care", products: ["Body Sunscreenen", "Face Sunscreen"] },
        { name: "Masks", products: ["Masks & Peels", "Sheet Masks"] },
        {
          name: "Eye Care",
          products: ["Under Eye Creams & Serums", "Eye Makeup Remover"],
        },
        {
          name: "Lip Care",
          products: [
            "Lip Balm",
            "Lip Lightener",
            "Lip Scrubs",
            "Lip Serums",
            "Lip Butter",
          ],
        },
        { name: "Toners", products: ["Toners", "Mists"] },
        {
          name: "Moisturizers",
          products: [
            "Face Moisturizer & Day Cream",
            "Serums & Essence",
            " Gel",
            "Night Cream",
            "Face Oil",
            "Face",
            "Bb & Cc Creams",
          ],
        },
        { name: "Hands & Feet", products: ["Foot Cream", "Hand Cream"] },
      ],
    },

    {
      name: "Hair",
      subCategories: [
        {
          name: "Hair Styling",
          products: [
            "Hair Gels, Waxes, Creams",
            "Pomades & Clays",
            "Hair Spray",
            "Hair Colour",
          ],
        },
        {
          name: "Hair Care",
          products: [
            "Hair Oil",
            "Conditioner",
            "Shampoo",
            "Hair Serum",
            "Hair Creams & Masks",
            "Hair Butter",
            "Hair Clipper",
          ],
        },
        { name: "Kits & Combos", products: ["Hair Kits", "Combos"] },
        {
          name: "Tools & Accessories",
          products: [
            "Rollers & Curlers",
            "Hair Combs",
            "Dryers & Styles",
            "Straighteners",
          ],
        },
      ],
    },

    {
      name: "Fragrances",
      subCategories: [
        {
          name: "Men's Fragrances",
          products: ["Body Mists", "Perfume (edt & Eap)", "Deodorants"],
        },
        {
          name: "Women's Fragrances",
          products: ["Perfume (edt & Eap)", "Body Mists", "Deodorants"],
        },
      ],
    },

    {
      name: "Makeup",
      subCategories: [
        {
          name: "Lips",
          products: [
            "Lip Tint",
            "Lip Gloss",
            "Lip Balm",
            "Lipstick",
            "Liquid Lipstick",
            "Lip Liner",
            "Lip Crayon",
          ],
        },
        { name: "Body", products: ["Body Glitter"] },
        {
          name: "Eyes",
          products: [
            "Eye Shadow",
            "Mascara",
            "Eye Brow Enhancers",
            "False Eyelashes",
            "Eyeliner",
            "Kajal",
            "Eye Primer",
            "Contact Lenses",
          ],
        },
        {
          name: "Face",
          products: [
            "Makeup Remover",
            "Highlights",
            "Face Primer",
            "Foundation",
            "Concealer",
            "Loose Powder",
            "Contour",
            "Setting Spray",
            "Blush",
            "Bb & Cc Creams",
            "Compact",
            "Bronzer",
          ],
        },
        {
          name: "Tools & Brushes",
          products: [
            "Makeup Pouches",
            "Blush Brush",
            "Eye Brush",
            "Powder Brush",
            "Sponges & Applicators",
            "Face Brush",
            "Brush Sets",
            "Sharpeners",
            "Eyelash Curlers",
            "Mirrors",
            "Face & Eye Brush",
          ],
        },
        {
          name: "Makeup Accessories",
          products: ["Makeup Organizer", "Makeup Bags"],
        },
        {
          name: "Makeup Kits",
          products: ["Eye Palettes", "Face Palettes", "Lip Palettes"],
        },
        { name: "Kits & Combos", products: [] },
        {
          name: "Nails",
          products: [
            "Artificial Nails",
            "Medicure & Pedicure Kits",
            "Nail Care",
            "Nail Polish",
            "Nail Polish Remover",
          ],
        },
      ],
    },

    {
      name: "Kid's Fashion",
      subCategories: [
        { name: "Bags", products: [] },
        { name: "Accessories", products: [] },
        { name: "Essentials", products: ["Bibs", "Napkins"] },
        { name: "Footwear", products: [] },
        {
          name: "Girl Fashion",
          products: [
            "Leggings Set",
            "Pajamas & Leggings",
            "Sets & Suits",
            "Frocks & Dresses",
            "Shorts, Skirts & Jeans",
            "Socks",
            "Gift Set",
            "Sweater",
            "Sweat Shirts & Jackets",
            "Tops & T-shirts",
            "Onesies & Rompers",
            "Nightwear",
            "Caps",
            "Inner Wear & Thermals",
          ],
        },
        {
          name: "Boy Fashion",
          products: [
            "Party Wear",
            "Sets & Suits",
            "Caps",
            "Shirts",
            "Shorts & Jeans",
            "Socks",
            "Gift Set",
            "Sweater",
            "Sweat Shirts & Jackets",
            "Tops & T-Shirts",
            "Trousers",
            "Inner Wear & Thermals",
          ],
        },
      ],
    },

    {
      name: "Gadgets & Accessories",
      subCategories: [
        {
          name: "Wearables",
          products: [
            "Smart Watch",
            "Fitness Trackers",
            "Smart Glasses",
            "Smart Trackers",
            "Gesture Control",
            "Wearable Accessories",
          ],
        },
        {
          name: "Mobile Phones",
          products: ["Landlines", "Accessories", "Smart Phones"],
        },
        {
          name: "Audio",
          products: [
            "Wireless Earbuds",
            "Soundbar",
            "Hi-fi Systems",
            "Home Theater Systems",
            "karaoke Systems",
            "Microphones",
            "Speakers",
            "Headphones",
            "Accessories",
            "Earphones",
          ],
        },
        {
          name: "Office Solutions",
          products: ["Others", "Cables & Converters"],
        },
      ],
    },

    {
      name: "Home Appliances & Television",
      subCategories: [
        {
          name: "Large Appliances",
          products: [
            "Water Heater& Geyser",
            "Microwave Oven",
            "Gas Stoves",
            "Chimney",
            "Dish Washer",
          ],
        },
        {
          name: "Small Appliances",
          products: [
            "Mixers",
            "Electric Kettles",
            "Rice COokers",
            "Irons",
            "Vacuum Cleaners",
          ],
        },
      ],
    },

    {
      name: "Women Fashion",
      subCategories: [
        {
          name: "Western Wears",
          products: [
            "T-shirts",
            "Blazzers",
            "Dresses",
            "Shirts",
            "Shorts",
            "Skirts",
            "Tops",
            "Trousers & Bottoms",
            "Jackets",
            "Jeans",
            "Jumpsuits",
          ],
        },
        {
          name: "Indian & Fusion Wear",
          products: ["Kurtis Kurtas And Tunics"],
        },
        { name: "Footwear", products: ["Ballerinas", "Boots", "Formal Shoes"] },
        {
          name: "Bags",
          products: [
            "Shoulder & Cross Bags",
            "Makeup Kits & Pouches",
            "Hand Bags",
            "Tote Bags",
          ],
        },
        {
          name: "Jewellery",
          products: [
            "Pendants",
            "Bracelets & Bangles",
            "Earrings",
            "Necklaces",
            "Rings",
          ],
        },
      ],
    },

    {
      name: "Mom & Baby",
      subCategories: [
        { name: "Anime", products: ["Action Figures"] },
        {
          name: "Baby Food & Formula",
          products: ["Baby Food", "Baby Formula"],
        },
        {
          name: "Baby Care",
          products: [
            "Lotions & Creams",
            "Baby Bedding",
            "Baby Grooming",
            "Baby Oil",
            "Baby Powder",
            "Bath Accessories",
            "Blanket & Wrappers",
            "Body Wash & Soaps",
            "Diaper Accessories",
            "Diapers",
            "Hair Oil",
            "Nail Care",
            "Rash Cream",
            "Shampoo & Conditioner",
            "Sunscreen",
            "Teeth & Dental Care",
            "Wipes & Buds",
          ],
        },
        {
          name: "Kids Care",
          products: ["Dental Care", "Body Wash & Soaps", "Sunscreen"],
        },
        {
          name: "Health & Safety",
          products: [
            "Detergents & Cleansers",
            "Medicine Dropper",
            "Mosquito Repelient",
            "Nose & Ear Care",
            "Potty Seat",
            "Prams, Stroller & Car Seats",
            "Safety Gear",
          ],
        },
        { name: "Kids & Combos", products: ["Combos", "Gift Sets", "Kits"] },
        {
          name: "Maternity Care",
          products: [
            "Breast Firming Gels & Creams",
            "Nipple Creams",
            "Nutritional Supplements",
          ],
        },
        {
          name: "Maternity Wear",
          products: ["Maternity Bra", "Maternity Tops", "Maternity Dress"],
        },
        {
          name: "Nursing & Feeding",
          products: [
            "Bibs",
            "Breast Pads",
            "Breast Pumps",
            "Cleaning & Feeding",
            "Accessories",
            "Feeding Bottle, Bowl & Nipples",
            "Slippers & Cups",
            "Teethers & Soothers",
          ],
        },
        {
          name: "Toys & Games",
          products: [
            "Early Toys",
            "Dolls & Action Figures",
            "Indoor & Outdoor",
            "Educational Toys",
          ],
        },
        {
          name: "Baby Apparel",
          products: [
            "T-shirts & Tops",
            "Clothing Sets",
            "Rompers & Onsies",
            "Sleepwear & Innerwear",
          ],
        },
      ],
    },

    {
      name: "Personal Care",
      subCategories: [
        {
          name: "Bath & Shower",
          products: [
            "Conditioner",
            "Soaps",
            "Shampoo",
            "Shower Gels & Body Wash",
            "Body Wash",
            "Bath Salts",
          ],
        },
        { name: "Face", products: ["Face Wash", "Moisturizer", "Face Wipes"] },
        {
          name: "Home & Health",
          products: [
            "Adult Diapers",
            "Nutritional Supplements",
            "Others",
            "Essential Oil",
            "Toilet Seat Sanitizer",
            "Insect Repellients",
          ],
        },
        {
          name: "Feminine Hygiene",
          products: [
            "Pantyliners",
            "Sanitary Napkins",
            "Intimate Hygiene",
            "Shaving & Hair Removal",
            "Menstrual Cups",
            "Cotton Pads",
            "Urination Funnel",
            "Pain Relief Patches",
          ],
        },
        {
          name: "Dental Care",
          products: [
            "Toothpaste",
            "Manual Toothbrush",
            "Mouthwash",
            "Teeth Powder",
            "Electric Toothbrush",
          ],
        },
        {
          name: "Men's Grooming",
          products: [
            "Shaving Cream, Foams & Gels",
            "Razors & Cartridges",
            "Shavers & Trimmers",
            "Pre & Post Shaves",
          ],
        },
        {
          name: "Beard Care",
          products: [
            "Beard Colour",
            "Beard Serum",
            "Beard Comb",
            "Beard Softner",
            "Beard Wash",
            "Beard Oil",
            "Moustache Oil",
            "Beard Wax",
          ],
        },
        { name: "Covid Essentials", products: [] },
        {
          name: "Body",
          products: [
            "Lotions & Creams",
            "Hair Removal",
            "Deodorants",
            "Scrubs & Exfoliants",
            "Talcum Powder",
            "Sunscreen",
          ],
        },
        {
          name: "Kits & Combos",
          products: ["Combos", "Personal Care Kits", "Kits", "Gift Sets"],
        },
      ],
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
    <div className="container relative mx-auto hidden lg:block">
      <button className='my-auto mx-2 z-10 absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full' onClick={scrollPrev}

      >
        <FaChevronLeft />
      </button>
      <div
        ref={carouselRef}
        className="mx-8 z-40 h-10 flex items-center overflow-x-auto gap-10 no-scrollbar bg-white"
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
      <h3 className="cursor-pointer text-nowrap text-sm">{category.name}</h3>

      {/* {isHovered && ( */}
      <div className=" hidden group-hover:flex absolute top-7 left-0 bg-white shadow-lg p-4 w-full z-30" >
        <div className="flex flex-nowrap overflow-x-auto space-x-4 h-fit max-w-full no-scrollbar relative" ref={categoryScroll}>
          <button
            className='mx-2 z-10 fixed left-12 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 rounded-full'
            onClick={scrollPrev}

          >
            <FaChevronLeft />
          </button>
          {category.subCategories.map((subcategory, index) => (
            <div
              key={index}
              className={`flex-none w-60 h-96   mb-4  rounded-md p-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}`}
            >
              <h4 className="font-semibold underline text-sm">{subcategory.name}</h4>
              <ul className="text-sm mt-2">
                {subcategory.products.map((product, prodIndex) => (
                  <li key={prodIndex} className="text-gray-700">
                    {product}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            className="fixed right-14 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-200 shadow-md p-2 mr-[-20px] rounded-full"
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