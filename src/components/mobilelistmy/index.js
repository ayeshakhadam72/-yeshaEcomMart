





import React from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'


const Mobilelist = ( {Addproduct}) => {
  return (
   <>

   <div className='flex justify-center'>

   <div className='w-[80%] flex gap-10 flex-wrap '>
{
  Productdata.slice(10 , 20).map((b) =>{
    return(
      <Reusecard border={'border-none hover:text-[#161880]'} image={b.productimage}  heading =  {b.productname} price= {'$720.00'} pricenew= {b.productprice} b={b} Addproduct={Addproduct} 
      graytext={b.productstock} />
    )
  })

}


</div>

   </div>

   </>
  )
}

export default Mobilelist
