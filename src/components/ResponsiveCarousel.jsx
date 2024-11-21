import React, { useRef } from 'react';

const ResponsiveCarousel = () => {
    const carouselRef = useRef(null);

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            {/* Carousel */}
            <div
                className="flex flex-nowrap gap-4 container mx-auto overflow-x-auto no-scrollbar"
                ref={carouselRef}
            >
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="min-w-[200px] max-w-[200px] min-h-[160px] bg-violet-500 flex items-center justify-center text-white text-lg font-bold"
                    >
                        Item {index + 1}
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
                &#8592;
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
                &#8594;
            </button>
        </div>
    );
};

export default ResponsiveCarousel;
