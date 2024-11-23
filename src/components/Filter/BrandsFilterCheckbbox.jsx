import React from 'react'

const BrandsFilterCheckbbox = ({brands}) => {
  return (
    <>
     <div className="w-full justify-between flex p-2 border-t-gray-400 border-t-2">
                        <label htmlFor={brands}>{brands}</label>
                        <input className='items-center w-4' type="checkbox" name="" id={brands} />
                    </div>
    </>
  )
}

export default BrandsFilterCheckbbox
