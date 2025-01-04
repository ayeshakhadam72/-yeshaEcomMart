import Image from 'next/image'
import React from 'react'



const AgainreuseProduct = ({image2 ,graytext ,heading ,price,pricenew ,border,space, Addproduct ,b}) => {
  return (
    <>
    <div className= {`${border}   mt-3  sm:my-1 sm:px-4 sm:py-1 `} >

<Image className= {`${space} m-auto sm:m-auto rounded-full `} src={image2} width={254} height={300} />
        {/* <h2 className='text-[#b6b6b7] text-sm font-title hover:text-[#0063d1] '>
            {graytext }
        </h2> */}
        <h2  className='text-black text-[16px]  font-[500] py-2 hover:text-[#f37b3f] '>
        {heading}

        </h2>
        <h2 className='pb-4'>
       <span><del className='text-[#d4d4d4] text-[18px] font-[500] '>{price} </del></span> <span className='text-black text-[18px] font-[500] ' > Rs: {pricenew} </span> 
        </h2>
        <button onClick={() => { Addproduct(b)}} className='mb-5 px-8 py-2 mt-4 hover:bg-black bg-[#017227] text-white text-sm'>Add to cart</button>
    </div>
    </>
  )
}

export default AgainreuseProduct


