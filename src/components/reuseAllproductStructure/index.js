import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";

import Image from 'next/image';
import productdata from '../productdata';

const ProductClickItems = ({basket, Addproduct , ali }) => {

  console.log(ali, 'propbbasket')
 


    // sb sy phly basket ki ak state bhny gi wo ak array ho gi ak button ka function bhny ga onclick ka os mei sy 
    //add to card button ap ki product ka data state vali array mein push ho ga like basket like state 


   

    const [valueShow, setValueShow] = useState('')
    const Laptops = () => {
        setValueShow('Laptop')
    }
    const mobilePhones = () => {
        setValueShow('Mobile')
    }
    const AlleadPhones = () => {
        setValueShow('Headphone')
    }
    const AllmyWatches = () => {
        setValueShow('Watches')
    }
    const Tabs = () => {
        setValueShow('Tab')
    }


    const filterarray = productdata.filter((b) => b.categery === (valueShow))

    return (
        <>

            {/*  */}
            <div className='my-10'>

                <div className=' flex justify-center  '  >
                    <div className='border-[1px]  border-[#7fd858] sm:flex sm:flex-wrap mx-4'>
                        {/* bg-[#0063d1] */}

                        <div className=' hover:bg-gradient-to-r from-[#f5b908] to-[#7fd858]  py-8 text-center hover:text-white font-title relative sm:py-9  ' id='diamond'>

                            <div onClick={Laptops} className='px-12 py-9  border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-[#7fd858] hover:border-0 '  >
                                <p className='text-[16px] font-[500]   '>Camera pro</p>
                                <p className='text-[12px] font-[400] pt-2'>3 Items Available</p>
                            </div>
                        </div>

                        {/* 2 */}
                        <div onClick={mobilePhones} className='hover:bg-gradient-to-r from-[#f5b908] to-[#7fd858] hover:text-white  relative py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
                            <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-[#7fd858]  '  >
                                <p className='text-[16px] font-[500]  text-[#222] '>Mobile</p>
                                <p className='text-[12px] font-[400] text-[#555]  pt-2'>1 Items Available</p>
                            </div>
                        </div>
                        {/*  */}
                        <div onClick={AlleadPhones} className='hover:bg-gradient-to-r from-[#f5b908] to-[#7fd858] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
                            <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-[#7fd858] '  >
                                <p className='text-[16px] font-[500]  text-[#222] '>HeadPhone</p>
                                <p className='text-[12px] font-[400] text-[#555]  pt-2'> 2 Items Available</p>
                            </div>
                        </div>
                        {/*  */}
                        <div onClick={AllmyWatches} className='hover:bg-gradient-to-r from-[#f5b908] to-[#7fd858] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
                            <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-[#7fd858]    '  >
                                <p className='text-[16px] font-[500]  text-[#222] '>Watch</p>
                                <p className='text-[12px] font-[400] text-[#555]  pt-2'>4 Items Available</p>
                            </div>
                        </div>
                        {/*  */}
                        <div onClick={Tabs} className='hover:bg-[#0063d1] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
                            <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9   '  >
                                <p className='text-[16px] font-[500]  text-[#222] '>Tab</p>
                                <p className='text-[12px] font-[400] text-[#555]  pt-2'>5 Items Available</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='flex justify-center w-full'>
        <div className='w-[80%] flex flex-wrap gap-10  justify-center  '>


                {
// map method ak thra ka (type of) loop hota ha or hum es sy array k andr object ko access kr laity ha 

                    filterarray.slice(0,10).map((b) => {
                        return (
                            
            
                            <div className="relative hover:mr-[-10px]  bg-white
                             hover:border-2 border-gradient-to-r from-[#f5b908] to-[#7fd858]  mt-3 text-center " >
<div>
<Image className=" mx-auto  " src={b.productimage} width={252} height={254}  />
{/* width={150} height={230} */}
</div>
      <div>
      <h2 className='text-black text-[16px]  font-[500] py-2 hover:text-[#161880] '>
                                    {b.productname}
                                </h2>
                                <h2 className='pb-4'>
                                    <span><del className='text-[#d4d4d4] text-[18px] font-[500] '>  {b.productprice} </del></span> <span className='pl-1 text-xl'>Rs:</span> <span className='text-black text-[18px] font-[500]  ' > {(b.productprice) - (b.productprice * 30 / 100)}  </span>

                                </h2>
                                {/* onClick={() => { Addproduct(data)}} jb hum ksi product ko aadd to cart kry gy to ya sirf osi specific card{object} ka data argument mein pass kry ga or hum function mein os specific card k data  ko parameter sy access kr lain gy .. */}
                                <button onClick={() => { Addproduct(b)}} className='mb-5 px-8 py-2 bg-[#017227] 
                                hover:bg-gradient-to-r from-[#f5b908] to-[#7fd858]  text-white text-sm'>Add To Card </button>
                                <div className='absolute bottom-[89%]  '>
{/* gradient-to-r from-[#f5b908] to-[#7fd858] */}
  <h2 className='bg-gradient-to-r from-[#f5b908]   text-white ml-3 px-3  rounded-tl-lg rounded-br-lg'>
    New
  </h2>
</div>
        </div>                         
                               
                            </div>
          
                        )
                    })
                }
            </div>
            </div>

            {/* <div className='my-12 '> */}
                {/* {
                    basket?.map((b) => {
                        return (
                            <>
                                <div key={componentreload}  >
                                    <h1>{b.productname} </h1>
                                    <h1>{b.productprice} </h1>
                                    <h1> {basket.length} </h1>
                                </div>

                            </>
                        )
                    })
                } */}

            {/* </div> */}
        </>
    )
}

export default ProductClickItems
