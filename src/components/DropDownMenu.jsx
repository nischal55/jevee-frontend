import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { BiCategory } from "react-icons/bi";
import { BsTag } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

function DropDownMenu({ closeMenu }) {
  const [active, setActive] = useState("categories")
  const [showCategory, setShowCategory] = useState()
  const [showProducts, setShowProducts] = useState("")
  const [showSubCategory, setShowSubCategory] = useState("")

  const alphabets = ["ALL","#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 7;
  const totalItems = alphabets.length;
  const visibleAlphabets = alphabets.slice(currentIndex, currentIndex+itemsPerPage)

  function prevPage () {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  const nextPage = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const disablePrev = currentIndex <= 0;
  const disableNext = currentIndex >= totalItems - itemsPerPage;

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
  return (
    <div className="inset-0 w-full h-[100vh] rounded-t-lg flex flex-col bg-white">
      <div className="px-4 py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <IoMenuSharp className="flex text-2xl" />
          <Link
            to="/"
            className="min-h-[15px] min-w-[72px] md:h-[21px] md:w-[102px]"
          >
            <img
              src="https://www.jeevee.com/_next/static/media/logo.b826b85b.svg"
              alt="jevee logo"
            />
          </Link>
        </div>
        <div onClick={closeMenu} className="p-1 bg-[#EFEFEF] rounded-full">
          <RxCross2 className="text-xl" />
        </div>
      </div>
      <hr className="bg-black" />

      <div className="px-4 py-4 w-full flex">
        <div
          className={`px-[10px] py-[10px] w-[50%] flex gap-2 items-center rounded-t-md ${
            active === "categories"
              ? "bg-[#4BD9E0] rounded-t-3xl bg-gradient-to-r from-[#4ADDDE] via-[#848FFC] to-[#C663FC] text-white"
              : "bg-[#EFEFEF]"
          }`}
          onClick={() => setActive("categories")}
        >
          <BiCategory className="text-xl" />
          Categories
        </div>
        <div
          className={`px-[10px] py-[10px] w-[50%] flex gap-2 items-center rounded-t-md ${
            active === "brands"
              ? "bg-[#4BD9E0] rounded-t-md bg-gradient-to-r from-[#4ADDDE] via-[#848FFC] to-[#C663FC] text-white"
              : "bg-[#EFEFEF]"
          }`}
          onClick={() => setActive("brands")}
        >
          <BsTag className="text-xl" />
          Brands
        </div>
      </div>

      {active === "categories" && (
        <div className="overflow-y-auto pb-10 px-[10px] pt-[10px]">
          <h2 className="font-semibold text-lg text-[#848FFC] mb-4 pl-2">
            Shop by categories
          </h2>
          {categories.map((category, index) => {
            return (
              <ul key={index} className="flex flex-col px-2 cursor-pointer">
              
              <li
  className={`flex pl-2 justify-between items-center font-semibold py-5 border-b-[1.5px] ${
    showCategory === category.name ? "text-[#F25CA8]" : ""
  }`}
  onClick={() => {
    if (showCategory === category.name) {
      // Collapse the category if it's already expanded
      setShowCategory("");
      setShowSubCategory("");
      setShowProducts("");
    } else {
      // Expand the category
      setShowCategory(category.name);
      setShowSubCategory("");
      setShowProducts("");
    }
  }}
>
  {category.name}
  <FaAngleDown
    className={`${showCategory === category.name ? "hidden" : "flex"}`}
  />
  <FaAngleUp
    className={`${showCategory === category.name ? "flex" : "hidden"}`}
  />
</li>

{/* Subcategories */}
{showCategory === category.name &&
  category.subCategories.map((subcategory, index) => (
    <ul
      key={index}
      className="flex flex-col px-[10px] cursor-pointer w-full"
    >
      <li>
        <div
          className="border-b-[1.5px] flex justify-between items-center py-5"
          onClick={() => {
            if (showSubCategory === subcategory.name) {
              setShowSubCategory("");
              setShowProducts("");
            } else {
              setShowSubCategory(subcategory.name);
              setShowProducts("");
            }
          }}
        >
          {subcategory.name}
          {showSubCategory === subcategory.name ? (
            <FaAngleUp />
          ) : (
            <FaAngleDown />
          )}
        </div>
      </li>

      {/* Products */}
      {showSubCategory === subcategory.name &&
        subcategory.products.map((product, index) => (
          <ul
            key={index}
            className="flex flex-col px-[10px] cursor-pointer w-full border-b-[1.5px]"
          >
            <li className="flex w-full justify-between items-center py-5">
              {product}
            </li>
          </ul>
        ))}
    </ul>
  ))}



              </ul>
            );
          })}
        </div>
      )}

      {
        active === "brands" && <div className="px-[10px]">
<div className='flex items-center border p-2 rounded-full'>
         <GoSearch className='text-black text-xl'/>
         <input type="search" className='outline-none bg-transparent px-2 w-full' placeholder='Search brands'/>
         </div>

         <div className='relative flex items-center'>
         <div className='mx-4 mt-4 flex items-center w-full'>
             {
              visibleAlphabets.map(alphabet=> 
                <div  key={alphabet} onClick={()=>setActive(alphabet)} className={`py-1 mx-2 ${active === alphabet ? "text-pink-500" : ""} px-1 hover:border-b-2  hover:border-b-pink-500`}>{alphabet}</div>
              )
             }
         </div>
         <div className="mx-2 absolute inset-y-0 top-3 left-[-20px] flex items-center justify-center w-10">
        <button
          onClick={prevPage}
          disabled={disablePrev}
          className={`rounded-full border p-2 shadow-xl ${disablePrev ? 'bg-white cursor-default' : ''}`}
        >
         <FaChevronLeft />
        </button>
      </div>
      <div className="mx-2 absolute inset-y-0 top-3 right-[-20px] flex items-center justify-center w-10 ">
        <button
          onClick={nextPage}
          disabled={disableNext}
          className={`rounded-full border pl-2 shadow-xl ${disableNext ? 'bg-white cursor-default' : ''}`}
        >
         <FaAngleRight />
        </button>
      </div>
         </div>
        
         <div className='bg-[#FEF2F2] flex flex-col items-center py-4 my-5'>
          <h2 className='text-xl text-[#F25CA8]'>could not connect to inventory</h2>
          <p>Retry</p>
         </div>
        </div>
      }
    </div>
  );
}

export default DropDownMenu;
