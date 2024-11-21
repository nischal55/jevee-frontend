import React from 'react';

const ResponsiveBanner = ({ smallImage, largeImage, aspectRatio = '3.73 / 1', className = '', altText = '', ...props }) => {
    return (
        <div
            className={`relative my-4  py-4 ${className}`}
            style={{ aspectRatio }}
            {...props}
        >
            <span className=" inset-0 block overflow-hidden">
                <img
                    alt={altText}
                    src={largeImage}

                    className=" hidden sm:block inset-0 object-cover "
                />
                <img
                    alt={altText}
                    src={smallImage} className="sm:hidden  object-cover w-full h-full " />
            </span>
        </div>
    );
};

export default ResponsiveBanner;
