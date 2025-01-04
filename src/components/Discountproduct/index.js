
import Image from 'next/image'
import React from 'react'
import Sidepic from "../../../public/Sidepic.jpg"
import Link from 'next/link'
import Reusecard from '../reusecard'
// import Watch1 from "../../../public/Watch1.jpg"
// import Watch2 from "../../../public/Watch2.jpg"
// import Watch3 from "../../../public/Watch3.jpg"
// import Watch4 from "../../../public/Watch4.jpg"
// import Watch5 from "../../../public/Watch5.jpg"
import Productdata from '../productdata'
const Discountproduct = ({ Addproduct, b, loader }) => {
    return (
        <>
            <div className='mt-7 flex justify-center px-2 gap-4 2xl:mx-60 '>
                <div>
                    <Image src={Sidepic} />
                </div>
                {/* sec dev */}



                <div>

                    <div className=' text-center lg:flex lg:justify-between border-b-2 border-gray '>

                        <div className='text-2xl font-semibold'>
                            <h2>Discount Product</h2>
                        </div>
                        {/*  */}
                        <div>
                            <ul className=' justify-center text-[11px] my-3 lg:my-0 flex sm:text-xl font-semibold space-x-5  '>
                                <li className='hover:text-[#eb6a2a]'>
                                    <Link href={'/On Sell'} >On Sell</Link>
                                </li>
                                <li className='hover:text-[#eb6a2a]'>
                                    <Link href={'/Hot Sell'} >Hot Sell</Link>
                                </li>
                                <li className='hover:text-[#eb6a2a]'>
                                    <Link href={'/Trend'} >Trend</Link>
                                </li>
                                <li className='hover:text-[#eb6a2a]'>
                                    <Link href={'/Best Sell'} >Best Sell</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* cards */}
                    {/* 3in cards es mein  */}
                    <div className={`justify-center flex gap-5 flex-wrap ${loader && 'opacity-50'}`}>

                        {
                            Productdata.slice(19, 25).map((b) => {
                                return (
                                    <Reusecard Addproduct={Addproduct} image={b.productimage} b={b} border={'border-none rounded-2xl  shadow-md text-center  m-auto  '} heading={b.productname} price={'$720.00'} pricenew={b.productprice} />

                                )
                            })
                        }

                    </div>
                    {/* 3in card next mein */}


                    {/*  */}
                </div>
            </div>
        </>
    )
}

export default Discountproduct
