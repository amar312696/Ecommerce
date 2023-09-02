import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[13rem] mx-3 border'>

        <div className='h-[12rem] w-[9rem]'>
            <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/x/k/1/l-mens-kurta-tap-in-original-imagn47hwbpwfqnt.jpeg?q=70"
            alt="" />
        </div>
        <div className='p-4 text-left'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
        </div>
        


    </div>
  )
}

export default HomeSectionCard