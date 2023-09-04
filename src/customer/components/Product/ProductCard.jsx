import React from 'react'
import './ProductCard.css'
const ProductCard = ({data}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img
            className='h-full w-full object-cover object-left-top'
            // src="https://rukminim2.flixcart.com/image/832/832/l2z26q80/top/9/x/e/xl-top117-rajovati-original-image7fxkzgh5tvk.jpeg?q=70"
            src={data.imageUrl}
            alt=""
            />
        </div>
        <div className='textPart bg-white p-3 text-left'>
            <div>
                <p className='font-bold opacity-60'>{data.brand}</p>
                <p>{data.description}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{data.discountedPrice}</p>
                <p className='line-through opacity-50'>{data.price}</p>
                <p className='text-green-600 font-semibold'>{data.discountPresent}</p>
            </div>

        </div>
    </div>
  )
}

export default ProductCard