
import Image from 'next/image'
import React from 'react'


const CardsAbout = ({Image1,founder,fonyWilliamson}) => {
  return (
  <>
  <div  className=' '>
<Image src={Image1}  className=' w-[252px] h-[254px]  rounded-full hover:mt-[-10px] bg-white hover:border-[1px] border-black ' />
<div className='mt-5 hover:mb-[-20px]'>
 <h2 className='text-blue-600 text-xl font-semibold text-center '>{founder}</h2>
 <h2 className='text-black text-xl font-semibold text-center'> {fonyWilliamson}</h2>

  </div>
  </div>
  
  </>
  )
}

export default CardsAbout