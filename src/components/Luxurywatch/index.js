import Image from 'next/image'
import React from 'react'


import Topbrand7 from "../../../public/Topbrand7.png"
const Luxurywatch = () => {
  return (
    <>
 <div className='mt-6  bg-[#f6f7fb] md:flex md:justify-around md:py-11 md:gap-24 '>



<div className='w-1/2 md:flex md:justify-end  m-auto pt-10 md:pt-0'>
<Image src={Topbrand7} width={500} height={500} />
</div>


{/* 2nd div */}
<div className='w-[100%]  pt-10 md:pt-0 justify-center text-center md:text-start  md:w-1/2 flex md:justify-start  md:items-center '>
<div className='w-[60%] ' >
<h2 className='text-xl md:text-2xl xl:text-4xl text-black font-semibold'>We are the leading Luxury watch retailer in UK </h2>
<p className='py-3 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum laudantium doloremque rem suscipit facilis. </p>



<button className='bg-black px-8 text-sm py-3 lg:px-10  text-white hover:bg-[#f37b3f] '>VIEW COLLECTION</button>
</div>
</div>
   </div>

    </>
  )
}

export default Luxurywatch
