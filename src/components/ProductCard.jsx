import { Link } from "react-router-dom";


export default function ProductCard({ product = {} }) {
  const {
    name,
    price,
    discountPrice,
    discountPercentage,
    imageUrls,
    href,
    rating,
    reviewCount,
    tag,
  } = product;

  return (
    <Link
      to={href}
      className="group transition-all duration-300 border-gray-100/30 flex min-w-[161px] lg:min-w-[214px] flex-col self-center overflow-hidden rounded-lg border h-[312px] lg:h-[385px] shadow-md bg-[#FFFFFF] text-black"
    >
      <div className="relative w-full h-[272px] px-2 mx-auto">
        {/* Conditionally Render Tag */}
        {tag && (
          <div className="absolute z-10 top-2 left-2 bg-white text-blue-500 text-sm px-1 py-1 rounded-md shadow-sm">
            {tag}
          </div>
        )}

        {/* Star Rating */}
        {rating > 0 && reviewCount > 0 && (
          <div className="absolute z-10 bottom-1 left-2 text-black text-xs px-2 py-1 rounded-md flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-black"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>
              {rating}/5 ({reviewCount})
            </span>
          </div>
        )}

        {/* Product Image */}
        <img
          alt={name}
          src={imageUrls[0]}
          className="peer absolute top-0 right-0 h-full w-full object-contain"
        />
      </div>
      <div className="overflow-hidden py-2 px-2">
        <div className="space-y-1">
          {/* Name */}
          <h3 className="text-xs sm:text-lg leading-[1.1] sm:leading-[1.2] text-2-clamp h-7 text-center sm:h-[44px] mb-1">
            {name.length > 36 ? `${name.slice(0, 36)}...` : name}
          </h3>
          {/* Pricing */}
          <div className="text-center text-xs sm:text-base lg:text-lg xl:text-xl">
            <span className="text-[#F25CA8] leading-none">
              <span className="text-xxs sm:text-xs lg:text-sm xl:text-base font-medium xl:font-normal">
                NPR.
              </span>{" "}
              {discountPrice}
            </span>
            <span className="text-[#F25CA8] font-bold border-l leading-none pl-1 ml-1 xl:text-lg">
              {discountPercentage}% Off
            </span>
          </div>
          <div className="text-[9px] xxs:text-xxs md:text-xs leading-none text-center space-x-1 whitespace-nowrap ">
            <span className="line-through">NPR. {price.toFixed(2)}</span>
            <span>Save NPR. {(price - discountPrice).toFixed(2)}</span>
          </div>
        </div>
        <div className="lg:hidden group-hover:block mb-7 mt-2 pb-3">
          <div className="flex items-center space-x-2">
            {/* Wishlist Button */}
            <button
              aria-label="Add to Wishlist"
              className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
              >
                <path d="M249.73,455.36a12.61,12.61,0,0,1-9.27-4L66.28,277.18A136.18,136.18,0,0,1,162.91,44.64a137.55,137.55,0,0,1,85.51,29.75l1.87,1.46,1.86-1.48a135.35,135.35,0,0,1,85.48-29.73c36.11,0,70.43,14.15,96.66,39.84a137.26,137.26,0,0,1,39.25,96.61,135.63,135.63,0,0,1-39.82,96.63L259.63,451.27C256.35,454.06,253.2,455.36,249.73,455.36ZM162.91,71.19c-29.84,0-57.58,11.3-78.09,31.81a110.1,110.1,0,0,0,0,155.63l164.9,164.9L414.63,259.18a109.89,109.89,0,0,0,31.81-78.09c0-29.63-11.09-57.36-31.23-78.06a110.42,110.42,0,0,0-155.12,0,12.73,12.73,0,0,1-18.55,0C219.9,82.47,192,71.19,162.91,71.19Z" />
              </svg>
            </button>
            {/* Add to Cart */}
            <button
              onClick={(e) => handleAddToCart(e, product)}
              className="flex-1 bg-[#F25CA8] text-white py-2 rounded-sm hover:shadow-md hover:bg-[#F25CA8]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
