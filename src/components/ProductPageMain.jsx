import React from 'react'
import FilterComp from './FilterComp'
import ProductPage from './ProductBox/ProductPage'

const ProductPageMain = () => {
  return (
    <section className='bg-gray-200 min-h-screen'>
      <h1 className='mx-20 pt-10 mb-5 text-s text-gray-500'><span className='text-blue-400'>Home</span>{` > skin`}</h1>

    <div className='flex bg-white justify-center mx-20 gap-0 '>
      <FilterComp/>
      <ProductPage/>
    </div>
    </section>
  )
}

export default ProductPageMain
