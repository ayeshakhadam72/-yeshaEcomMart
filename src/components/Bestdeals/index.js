import React from 'react'


import Deal1 from "../../../public/Deal1.jpg"
import Deal2 from "../../../public/Deal2.jpg"
import Deal3 from "../../../public/Deal3.jpg"
import Deal4 from "../../../public/Deal4.jpg"
import Link from 'next/link'
import AgainreuseProduct from '../Againreuseproductfour'
import Productdata from '../productdata'
const Bestdeal = ({ Addproduct , b}) => {
  return (
   <>
   <div className=' mt-32'>
    <div className='flex w-[100%] justify-center '>
<div className=' lg:w-[60%]'>
<div className=' text-center lg:flex  lg:justify-between border-b-[1px] border-green-200  w-[100%]  pb-1'>
{/* gradient-to-r from-[#f5b908] to-[#7fd858] */}
    <div className=' text-2xl lg:text-3xl xl:text-4xl text-[#1c1c24] font-title font-[500]'> 
        <h2>You may also like :</h2>
    </div>
    {/*  */}
    <div className='flex items-center'>
<ul className=' justify-center  text-[18px] my-3 lg:my-0 flex font-title space-x-5 font-[500] '>
    {/* <li className='hover:text-[#f07f13] '>
        <Link href={'/On Sell'} >On Sell</Link>
    </li>
    <li className='hover:text-[#f07f13]'>
        <Link href={'/Hot Sell' } >Hot Sell</Link>
    </li>
    <li className='hover:text-[#f07f13]'>
        <Link href={'/Trend'} >Trend</Link>
    </li>
    <li className='hover:text-[#f07f13]'>
        <Link href={'/Best Sell'} >Best Sell</Link>
    </li> */}
    <p  className='text-lg'>
    "Grab the Best Deals Today – Limited Time Offers!"</p>
</ul>
    </div>

    </div>
    </div>
    </div>
{/* cards */}
{/* 3in cards es mein  */}
<div className=' w-full flex justify-center gap-4 mt-5 '>
<div className=' w-[100%] flex justify-center' >
<div className='w-[80%]  sm:flex flex-wrap justify-center '>
{/* border-b-[1px] sm:border-b-0 sm:border-r-[1px] border-gray-200 */}
    {
        Productdata.slice(0,5).map((b) =>{
            return(
                <AgainreuseProduct image2 ={b.productimage } space={'py-2  '} border={' text-center '}  heading = {b.productname}  pricenew={b.productprice} Addproduct={Addproduct} b={b} />
                
                
               
            )
        })
    }

</div>
</div>



</div>
    {/*  */}
    </div>
   </>
  )
}

export default Bestdeal
