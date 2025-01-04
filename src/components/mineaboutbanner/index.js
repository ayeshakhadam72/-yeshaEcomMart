import Image from 'next/image'
import React from 'react'


// import Mineaboutbanner from "../../../public/mineaboutbanner.jpg"
const Mineabout = () => {
  return (
    <div  id='aboutbanner' className='flex justify-end items-end lg:items-center '>
<div className='text-black lg:w-[40%] bg-white p-8'>
  <h2 className='text-4xl font-semibold '>Story About Us</h2>
  <p className='py-5'>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>
  <p> <span className='text-2xl font-semibold '>Founder</span> Alex Turner </p>
</div>
    </div>
  )
}

export default Mineabout
