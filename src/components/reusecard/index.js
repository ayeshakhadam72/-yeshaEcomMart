import Image from 'next/image'
import React, { useState } from 'react'
import Productdata from '../productdata'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineStar } from "react-icons/md";

const Reusecard = ({ image, New, view, myproduct, graytext, heading, price, pricenew, border, Addproduct, b }) => {
  const [loader, setLoader] = useState();
console.log('sa')
  return (
    <>
      <div className={`${border} bg-white group relative sameclass shadow-2xl rounded-xl  border-[1px] border-gray-300   `} >

        <div className=''>
          <Image src={image} className={`${border}`} width={252} height={254} />
        </div>
        <div className='Quick Shop  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex 
justify-center  absolute  bottom-[36%] w-full bg-[#161880] hover:bg-black ' >
          <button onClick={() => { Addproduct(b) }} className='flex gap-1 text-white text-md p-3   '>
            <span className='flex items-center'><IoCartOutline className='text-xl ' /></span>
            <span>Quick Shop</span>  </button>
        </div>

        <div className='absolute bottom-[89%]  '>
          <h2 className='bg-[#161880] text-white ml-3 px-3  rounded-tl-lg rounded-br-lg'>
            {New}
          </h2>
        </div>

        <div onClick={() => { Addproduct(b) }} className='absolute bottom-[87%] left-[80%] '>
          <div className=''>
            <button className='     opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md shadow-2xl
    bg-white hover:bg-[#161880] text-black hover:text-white px-2 py-1  '><CiHeart className='text-2xl' /></button>
          </div>

        </div>

        <div className='pl-5'>

          <h2 className={`${border} text-black text-lg font-semibold py-2   `} >
            {heading} </h2>

          <h2>
            <span className='text-black text-md font-semibold ' >Rs: {pricenew} </span>
          </h2>
          <h2 className='pt-2 flex gap-1'>
            <span className='flex text-yellow-500 items-center text-lg '>
              <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></span>

            <span className='text-md' >{view}</span>
          </h2>
          <h2 className='text-[#337239]  pt-2 pb-5 '>
            <li > <span className='text-md'>{graytext}</span>  </li>
          </h2>

        </div>
      </div>




    </>

  )
}

export default Reusecard
