
import Image from 'next/image'
import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Watch3 from "../../../public/Watch3.png"

const Addtoardproduct = () => {

    const array1 = [{
        productname : "Diamond Watches" ,
        productprice : 500 ,
        productimage : Watch3

    }]

const [productCount ,  setProductcount]    =  useState(0)

const Addproduct = () => {
    setProductcount (productCount + 1)
}



  return (
    <>
    <div className='flex justify-center'>
{

    array1.map((a) => {
        return(
            <>
             <div className=" mt-34 w-[10%]  my-28 border-2 border-gray-100 mt-3 text-center   "  >
                <p className='pl-3 pt-3 flex '><FiShoppingCart className='text-2xl' /> 
                 <span className='border-2 border-gray-500
                 px-[5px] py-[0px] rounded-xl text-[13px] ' > productCount </span>
                  </p>
             
                <Image className=" mx-auto " src={a.productimage} width={150} height={230} />
               
               <h2 className='text-black text-[16px]  font-[500] py-2 hover:text-[#0063d1] '>
                   {a.productname}
               </h2>
               <h2 className='pb-4'>
                   <span><del className='text-[#d4d4d4] text-[18px] font-[500] '> {a.productprice} </del></span> <span className='text-black text-[18px] font-[500] ' > { (a.productprice)- (a.productprice * 50 /100 ) } </span>
               </h2>
          <button onClick={Addproduct} className='mb-5 px-8 py-2 bg-red-500 text-white text-sm'>Add To Card </button>

          </div>
            
            </>
        )
    })
}

    </div>
    
    
    </>
  )
}

export default Addtoardproduct
