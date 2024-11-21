import React from 'react'
import BrandCard from './BrandCard'

const BrandsForYou = () => {
    const brands = [
        {
            imageSrc: {
                mobile: 'https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/91e38140-0609-49f3-87eb-86044a4de8d6.webp',
                desktop: 'https://jevee.s3.us-east-2.amazonaws.com/cms/featured-banner/5720ba03-9edc-4ef9-9b15-bdd348f9c60a.webp',
            },
            altText: 'Upto 33% Off',
            link: '/products/brands/cerave-512',
            title: 'Upto 33% Off',
            subtitle: 'Cerave',
        },
    ];
    return (
        <div className='grid grid-cols-2 mb-8  items-center gap-4 justify-between lg:grid-cols-4 '>
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
            {brands.map((brand, index) => (
                <BrandCard
                    key={index}
                    imageSrc={brand.imageSrc}
                    altText={brand.altText}
                    link={brand.link}
                    title={brand.title}
                    subtitle={brand.subtitle}
                />
            ))}
        </div>
    )
}

export default BrandsForYou