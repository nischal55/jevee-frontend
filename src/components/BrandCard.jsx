import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ imageSrc, altText, link, title, subtitle }) => {
    return (
        <Link
            href={link}
            className="cursor-pointer relative pb-[52px] sm:pb-[73px] app-rounded"
        >

            <div className="app-rounded overflow-hidden w-full relative z-0">

                <div className="relative sm-force-hide" style={{ aspectRatio: '0.664 / 1' }}>
                    <img
                        src={imageSrc.mobile}
                        alt={altText}
                        className="object-cover md:hidden absolute inset-0 w-full h-full"
                    />
                    <img
                        src={imageSrc.desktop}
                        alt={altText}
                        className="object-cover hidden md:block absolute inset-0 w-full h-full"
                    />
                </div>
            </div>


            <div className="flex flex-col items-center justify-center text-center p-2.5 sm:p-4 h-[55px] sm:h-[77px] bg-white absolute bottom-0 left-0 right-0 z-negative rounded-b-[var(--border-radius)]">
                <div
                    className="w-full font-black text-base sm:text-[17px] text-secondary-500 leading-tight truncate"
                    title={title}
                >
                    {title}
                </div>
                <div
                    className="w-full text-xs sm:text-sm leading-tight truncate"
                    title={subtitle}
                >
                    {subtitle}
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;
