import React from 'react'
import Reusecard from '../reusecard'


import Productdata from '../productdata'

const MyBestDealsproductx = ({Addproduct}) => {
  return (
    <>
    
<div className='w-full flex justify-center mt-20'>
<div className=' w-[80%] '>
<h2 className='text-3xl font-semibold '>Best Deals Product</h2>
<div className='w-full  xl:flex gap-3 mt-10'>

<div className=' lg:w-[30%] sideayeshamy'>
<div className= ' pl-3  pt-5 rounded-lg  text-white ' >
<h2 className='text-2xl font-semibold  '>Hot Deals</h2>
<p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid sequi voluptate neque.</p>
<button className='bg-white text-black px-4 py-2 rounded-md' >Show Now</button>

</div>
</div>
{/*  */}
<div className='xl:w-[70%] flex gap-4 flex-wrap'>
{
  Productdata.slice(0,8).map((b) =>{
    return(
      <Reusecard border={' rounded-lg  border-none hover:text-[#161880]'} image={b.productimage}  heading =  {b.productname} price= {'$720.00'} pricenew= {b.productprice} b={b} Addproduct={Addproduct} 
      graytext={b.productstock}  />
    )
  })

}


</div>


</div>



</div>
</div>

    </>
  )
}

export default MyBestDealsproductx
