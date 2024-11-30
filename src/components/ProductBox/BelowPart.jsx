import React, { useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoThumbsup } from "react-icons/go";
import { IoChatbubblesSharp } from "react-icons/io5";
import Faqs from "./Faqs";
import CustomerReviews from "./CustomerReviews";
import { CiWarning } from "react-icons/ci";

const BelowPart = () => {
  const products = [
    {
      title: "Island Magic Extra Virgin Coconut Oil",
      price: "448.91",
      originalPrice: "670",
      rating: "4.6/5",
      discount: "33%",
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      title: "Organic Aloe Vera Gel",
      price: "300.50",
      originalPrice: "400",
      rating: "4.8/5",
      discount: "25%",
      imgSrc: "https://via.placeholder.com/150",
    },
  ];

  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    { name: "Description", icon: <IoNewspaperOutline /> },
    { name: "Rating & Review", icon: <GoThumbsup /> },
    { name: "FAQs", icon: <IoChatbubblesSharp /> },
  ];

  return (
    <div className="container mx-auto">
      {/* Tabs Section */}
      <div className="grid grid-cols-3 gap-6 max-w-5xl rounded-t-lg">
        <div className="col-span-3 flex rounded-t-lg text-[16px]">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-5 py-3 rounded-t-lg transition-all duration-300 ${
                activeTab === tab.name
                  ? "bg-blue-500 text-white"
                  : "bg-[#e5e5e5] text-black hover:bg-[#d2d2d2]"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-12">
        {/* Left Section: Product Details and Disclaimer */}
        <div className="col-span-10 space-y-4 w-full pt-5 p-7 bg-white">
          {activeTab === "Description" && (
            <div className="flex space-x-4">
              {/* Product Details Section */}
              <div className="w-10/12">
                <h2 className="font-bold text-lg">Product Details</h2>
                <ul className="space-y-2 text-sm text-gray-700 list-disc leading-loose">
                  <li>
                    REMOVES & PREVENTS ACNE MARKS & BLEMISHES: High grade pure Vitamin B3 (Niacinamide) added in this serum is clinically proven to reduce acne marks & dark spots in 2 weeks, resulting in even complexion or tone. Regular daily use prevents future spots & uneven skin tone. No more blemishes, only clear healthy skin!
                  </li>
                  <li>
                    BALANCES OIL & REDUCES OPEN PORES: Gives you much needed clear matt look throughout the day by balancing oil, controlling sebum activity & reducing pore congestion. Improves skin texture by reducing visible pores, redness and inflammations. It along with Aloe Vera acts as anti-inflammatory and soothes your skin. No more greasy face or enlarged pores!
                  </li>
                  <li>
                    ANTI-ACNE & IMPROVES SKIN BARRIER: Niacinamide and Zinc duo prevents breakouts or pimples owing to their strong antimicrobial properties. Daily dose of this Antioxidant Vitamin B3 (Niacinamide) serum repairs skin barrier, boosting dermal immunity. Say bye bye to Sun damage, pollution damage or damage from other toxic chemicals or allergens with strong natural defense of your skin!
                  </li>
                  <li>
                    CLEAN & TRANSPARENT BEAUTY: This serum is (i) Fragrance-free (ii) Silicones-free (iii) Sulfates-free (iv) Parabens-free (v) Essential Oils-free and (vi) Dyes-free. Also, it is non-comedogenic, oil-free, and hypoallergenic. Formulated at pH 5.5 - 6.5 with Niacinamide PC by Royal DSM, Netherlands and is guaranteed to contain less than 100 ppm residual nicotinic acid (which, at higher concentration may result in unpleasant skin sensations)
                  </li>
                  <li>
                    SUITS NORMAL to OILY SKIN: Niacinamide is proven safe ingredients for all skin types and that is why it is so popular but 10% Niacinamide is best daily serum for oily skin or acne prone skin. People with dry or sensitive skin can use Minimalist 5% Niacinamide with 1% Hyaluronic Acid for extra hydration.
                  </li>
                </ul>
              </div>

              {/* Disclaimer Section (Side by Side with Product Details) */}
              <div className="w-3/12">
                <div className="rounded w-full h-full p-4 border-l border-[#e5e7eb]">
                  <CiWarning size={30} />
                  <h3 className="font-bold text-lg text-[14px]">Disclaimer</h3>
                  <p className="text-sm text-gray-700">
                  The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of the physician or other qualified health provider with any question you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Rating & Review" && (
            <div>
              <CustomerReviews activeTab={activeTab}/>
            </div>
          )}
          {activeTab === "FAQs" && (
            <div>
              <Faqs />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BelowPart;
