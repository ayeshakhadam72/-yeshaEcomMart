

import Image from 'next/image'
import React from 'react'
import Canada from "../../../public/Canada.png"
import Brazil from "../../../public/Brazil.png"
import Saudi from "../../../public/Saudi.png"
import Uk from "../../../public/Uk.png"
import Usa from "../../../public/Usa.png"
import Singapore from "../../../public/Singapore.png"


const Country = () => {
  return (
    <>
    <div className='  lg:flex   justify-center lg:space-x-10 my-3 bg-[#f6f7fb] py-10  text-2xl'>

<div className='flex justify-center pt-6 lg:pt-0 '>
        <div className='   lg:flex    lg:border-gray-500 lg:border-r-2 py-2 lg:pr-10'>
            <Image className='m-auto' src={Canada} />
            <p className='lg:px-5 lg:m-[-7px]  lg:text-sm'>Canada</p>
        </div>
        </div>      
        {/*  */}
        <div  className='flex justify-center pt-6 lg:pt-0 '>
        <div className=' lg:flex   lg:border-gray-500 lg:border-r-2 py-2  lg:pr-10'>
            <Image className='m-auto' src={Brazil} />
            <p className='lg:px-5 lg:m-[-7px] lg:text-sm'>Brazil</p>
        </div>
        </div>
 <div  className='flex justify-center pt-6 lg:pt-0 '>
        <div className=' lg:flex   lg:border-gray-500 lg:border-r-2 py-2 lg:pr-10'>
            <Image className='m-auto' src={ Singapore} />
            <p className='lg:px-5 lg:m-[-7px] lg:text-sm'> Singapore</p>
        </div>
        </div>
<div  className='flex justify-center  pt-6 lg:pt-0'>
        <div className=' lg:flex   lg:border-gray-500 lg:border-r-2 py-2 lg:pr-10'>
            <Image className='m-auto' src={Saudi} />
            <p className='lg:px-5 lg:m-[-7px]  lg:text-sm'>Saudi</p>
        </div>
        </div>

<div  className='flex justify-center  pt-6 lg:pt-0'>
        <div className=' lg:flex   lg:border-gray-500 lg:border-r-2 py-2 lg:pr-10'>
            <Image className='m-auto' src={Usa} />
            <p className='lg:px-5 lg:m-[-7px] lg:text-sm'>Usa</p>
        </div>
        </div>

<div  className='flex justify-center  pt-6 lg:pt-0'>
        <div className=' lg:flex   '>
            <Image className='m-auto' src={Uk} />
            <p className='lg:px-5 lg:m-[-7px] lg:text-sm'>Uk</p>
        </div>

        </div>

      
    </div>
    </>
  )
}

export default Country
