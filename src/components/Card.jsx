import React from 'react';  

const Card = () => {  
  const cardData = [  
    {  
      title: "Receive Your Package Anywhere in Nepal",  
      description: "We do nationwide deliveries with standardized shipping rates.",  
      image: "https://www.jeevee.com/_next/static/media/about_1.d54c0222.png",  
      bgColor: "bg-pink-400",  
    },  
    {  
      title: "Be the First to Know New Deals",  
      description: "We'll send you information on the latest deals & offers.",  
      image: "https://www.jeevee.com/_next/static/media/about_2.90aca069.png",  
      bgColor: "bg-purple-400",  
    },  
    {  
      title: "Find Everything from Baby, Beauty to Health",  
      description: "We house 1000 genuine brands & 45,000+ products.",  
      image: "https://www.jeevee.com/_next/static/media/about_3.5757140e.png",  
      bgColor: "bg-blue-400",  
    },  
    {  
      title: "Never Forget Your Password",  
      description: "Access your account securely with our reliable biometric login system.",  
      image: "https://www.jeevee.com/_next/static/media/about_4.9a3036d2.png",  
      bgColor: "bg-indigo-400",  
    },  
    {  
      title: "Make Your Payments Securely",  
      description: "Use our multiple safe payment gateways online for all your shopping.",  
      image: "https://www.jeevee.com/_next/static/media/about_5.1e2bc1d8.png",  
      bgColor: "bg-teal-400",  
    },  
    {  
      title: "Shop in Your Language",  
      description: "We’re bilingual! Find all your health, beauty & babycare essentials in Nepali & English.",  
      image: "https://www.jeevee.com/_next/static/media/about_6.78e001d6.png",  
      bgColor: "bg-pink-400",  
    },  
    {  
      title: "Fall in Love with Shopping",  
      description: "Fulfill all your wants, needs, whims & “don’t need but love” buys here.",  
      image: "https://www.jeevee.com/_next/static/media/about_7.72cbfad7.png",  
      bgColor: "bg-purple-400",  
    },  
    {  
      title: "Seek & You Will Find",  
      description: "Filter out unnecessary products and get to ones you want easily.",  
      image: "https://www.jeevee.com/_next/static/media/about_8.bdddb165.png",  
      bgColor: "bg-gradient-to-r from-cyan-400 to-purple-500",
 
    },  
  ];  

  return (  
    <div className="grid mb-6 grid-cols-1 p-0 lg:p-4 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3 gap-0">  
      {cardData.map((item, index) => (  
        <div  
          key={index} 

          className={`flex-1 ${item.bgColor} ${index === cardData.length - 1 ? 'lg:col-span-2' : ''} p-6 flex flex-col  justify-center text-white`}  
        > 
        
          <h2 className="text-xl font-medium mb-2 pb-3 w-2/3 line-clamp-2">{item.title}</h2>  
          <p className={`text-center text-xs md:text-sm mb-2 pb-2 w-2/3 ${index === 5 ? "line-clamp-3" : "line-clamp-2"}`}>{item.description}</p>  
          <div className={` ${index < 3 || index ===7 ? ' md:items-end mr-0 justify-end' : ''}`}>
  
                        <img  
                            src={item.image}  
                            alt={item.title}  
                            className={`mt-4 max-w-xs  ${index <= 3 ? 'pl-16 pb-0 m-0 inset-0 ' : 'mb-auto '}`} // Optional margin logic  
                        />  
                    </div>  
          
        </div>  
      ))}  
    </div>  
  );  
};  

export default Card;