import Image from 'next/image'
import React from 'react'
import Productdata from '../productdata'


const Reusecard = ({image ,graytext ,heading ,price,pricenew ,border ,Addproduct,b }) => {
  return (
    <>
   

    {/*  */}
  
  

 
        <div className= {`${border} shadow-2xl rounded-2xl  border-[1px] border-gray-300  mt-3  sm:my-10   `} >

        {/* width={300} height={300}  */}
        <Image src={image}   width={252} height={254} />
                <h2 className='text-[#b6b6b7] text-sm font-semibold '>
                    {graytext }
                </h2>
                <h2  className='text-black text-xl font-semibold py-2 hover:text-[#eb6a2a] '>
                {heading}
        
                </h2>
                <h2 >
               <span><del className='text-[#b6b6b7] text-sm'> {price} </del></span> <span className='text-black text-xl font-semibold ' >{pricenew} </span> 
                </h2>
                <button  onClick={() => { Addproduct(b)}}  className='mb-5 px-8 py-2 mt-4 bg-black hover:bg-[#eb6a2a] text-white text-sm'>Add To Card </button>
            </div>
    
       
     
   
     </>
   
  )
}

export default Reusecard
