// src/AboutUs.js  
import React from 'react';  
import Card from './Card';
   


const AboutUs = () => {  
  return (  
    <div>
    <section className="bg-gray-100 p-3 font-sans sm:p-11 space-y-6 sm:space-y-10
     rounded-lg shadow-md text-[#161616f5] text-sm sm:text-base  flex-col ">  
      <h2 className="text-xl font-medium  mb-5 text-{20px} sm:text-4xl sm:mb-10  max-w-[386px] max-h-[28px]">About Us</h2>  
        <div className='text-xs  sm:text-lg font-medium m-0 mb-2 sm:mb-3 '>
        Nepal’s No.1 Health, Baby & Beauty Store
      </div>
      <div className=' mb-5 sm:mb-6 sm:w-7/12 space-y-6 sm:space-y-10 '>
      <p className='  md:line-clamp-2'>
      Initially established in 2019 with the aim of digitizing the healthcare sector, Jeevee moved towards setting up as an online hub not just for health but baby and beauty products as well.
      </p>
      <p className=' md:line-clamp-2'>
      Undeniably, bringing affordable, quality healthcare to the masses with just one tap is what primarily 
      Jeevee aims at.
      </p>
      <p className=' md:line-clamp-2'>
      Alongside, Jeevee slowly stretched its wings to an online marketplace platform and aimed to 
       personify itself as Nepal’s largest e-commerce in health, Baby, and beauty categories.
      </p>
      <p>
      And all in all the tech company was solidified to cater to customer needs and provide them with the best shopping experience and thrived to provide quality, authentic and reliable products at an affordable price with innovative technology.
      </p>
      <p>
      Additionally, prompt nationwide delivery, standardized shipping rates, certain ease in communication, and booking orders also come aligned while meeting customer satisfaction.
      </p>
      <p >
      With 1500+ brands and 3 Lakhs+ products, Jeevee offers a wide range of curated collections of makeup, skincare, hair care, fragrance, makeup, personal care, household, appliances, and health and wellness categories.
      </p>
      <div className=''>
        <h2 className='font-bold text-lg sm:text-2xl mb-3 sm:mb-6'>
        Our Key Features
        </h2>
        <div className='text-xs sm:text-lg font-medium mb-2 sm:mb-3'>
        1. Nepal’s No.1 Health, Baby & Beauty Store
      
        </div>
        <div className='mb-5 sm:mb-6 pl-3.5 sm:pl-6'>
            <p className=''> 
            Apart from being a prominent player in the healthcare arena, we have expanded our domain to cater to the overall head-to
            
            -toe, daily needs of consumers and babies positioning itself as the #1 Health, Baby, and Beauty Store.
            </p>
        </div>
        <diV className='text-xs sm:text-lg font-medium mb-2 sm:mb-3'>
         2. 100% Authentic Products.
      
        </diV>
        <div className='mb-5 sm:mb-6 pl-3.5 sm:pl-6'>
            <p className=''> 
            We have a dedicated team who ensures the quality and authenticity of the products before sourcing them in our store from brands and authorized distributors.
            </p>
        </div>
        <diV className='text-xs sm:text-lg font-medium mb-2 sm:mb-3'>
        3. Nepal’s First Semi-Automated Fulfillment Center
      
        </diV>
        <div className='mb-5 sm:mb-6 pl-3.5 sm:pl-6'>
            <p className=''> 
            Whilst stepping up the efforts for a wider market presence and addressing the demands of every customer, Jeevee has reorganized a fulfillment center of 15,800 sqft where the team operates day-in-day- out to provide on-time delivery for 90% of orders.
            </p>
        </div>
        <diV className='text-xs sm:text-lg font-medium mb-2 sm:mb-3'>
        4. Completely Homegrown
      
        </diV>
        <div className='mb-5 sm:mb-6 pl-3.5 sm:pl-6'>
            <p className=''> 
            What sets us apart is our home-grown foundation, we share complete locally-based human resources, driven to bring change in standards of society with the flexibility of online shopping.
            </p>
        </div>
        <p className='mb-5 sm:mb-6'>
        We have a talented team of Nepali Software Engineers fully committed to the development of functional app/web applications while incorporating the most effective design principles, robust architecture, analytics, and ML/AI models behind the scene.
        </p>
      </div>
      </div>

    </section>  
    <div>
    <Card/>
    </div>
    
    </div>
    
    
  );  
};  

export default AboutUs;