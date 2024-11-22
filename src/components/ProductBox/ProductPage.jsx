import React from 'react'
import ProductsHolder from '../../data/ProductsHolder'
import ProductCard1 from './ProductCard1'


const ProductPage = () => {

    
  return (
    <>
    <div className="flex flex-wrap justify-center gap-3 bg-white">
    {ProductsHolder.map(elem => (
        <ProductCard1
          key={elem.id} 
          id={elem.id} 
          name={elem.name} 
          discount={elem.discount}
          price={elem.price} 
          image={elem.image}
          />
      
       
    ))
    }
    </div>
    </>
  )
}

export default ProductPage


