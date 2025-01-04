import Image from 'next/image'
import React from 'react'


import Imageabout from "../../../public/Imageabout.png"
const Bannerabout = () => {
  return (
    
    <>
 <div className='mt-4 px-2   md:flex md:justify-around md:py-11 md:gap-24 '>

<div className='w-[100%]  pt-10 md:pt-0 justify-center text-center md:text-start  md:w-1/2 flex md:justify-end  md:items-center '>
<div className='w-[60%] ' >
    <h2 className='text-5xl md:text-6xl xl:text-8xl font-bold text-gray-200 pb-2'>HISTORY</h2>

    <h2 className='mt-[-40px] text-sm text-[#98c35a] font-semibold'>OUR HISTORY</h2>
<h2 className='text-xl  sm:text-2xl 2xl:text-4xl text-black font-bold'>Creative and renovate fashion trends</h2>
<p className='py-3 text-gray-500 '>Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>

<div className=' sm:flex  gap-10'>
    <div className='pt-7 sm:pt-0'>
        <h2 className="text-4xl text-[#98c35a] font-semibold">12</h2>
        <h2 className="text-sm text-black">Years Experience</h2>
    </div>
    <div className='pt-7 sm:pt-0'>
    <h2 className="text-4xl text-[#98c35a] font-semibold">20K</h2>
    <h2 className="text-sm text-black">Happy Customers</h2>
    </div>
    <div className='pt-7 sm:pt-0'>
    <h2 className="text-4xl text-[#98c35a] font-semibold">100%</h2>
    <h2 className="text-sm text-black">Clients Satisfaction</h2>
    </div>
</div>


</div>
</div>

{/* 2nd div */}
<div className='w-1/2  m-auto pt-10 md:pt-0'>
<Image src={Imageabout} />
</div>

   </div>


    </>
  )
}

export default Bannerabout
