import Image from 'next/image';
import React, { useContext } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";


import Link from 'next/link';
import { CartData } from '../../../context/cart';
const Mycheckout = () => {

    const { basket } = useContext(CartData)

    const mytotal = () => {
        return basket.reduce((total, value) => total + value.productprice, 0)
    }
    return (
        <>
            <div className='w-[70%] m-auto'>
                <div className='md:flex gap-16  py-16'>
                    {/* div 1 */}
                    <div className=' md:w-1/2 pr-2 md:pr-0'>
                        <div className='pl-10'>
                            {/* step1 */}
                            <div className='  '>
                                <h2 className=' text-xl  font-semibold'>1.  <span className='pl-3 '> Contact Information</span> </h2>

                                <div className=' border-l-[1px] border-gray-400 pb-2  '>

                                    <div className='pl-8 my-4'>
                                        <h2 className='  '>We'll use this email to send you details and updates about your order</h2>
                                        {/* <h2 className=' border-[1px] rounded-sm border-gray-400 py-2 pl-2 mt-4 ' > Email adress </h2> */}
                                        <form action="">
                                            <input type="text" placeholder='Email adress' className=' w-full py-2 pl-2 mt-4  border-[1px]  rounded-sm border-gray-400' />
                                        </form>
                                    </div>

                                </div>
                            </div>
                            {/* step2 */}
                            <div className=''>
                                <h2 className=' text-xl  font-semibold'>2.  <span className='pl-3 '>  Shipping adress </span> </h2>
                                <div className='border-l-[1px] border-gray-400 pb-2 '>

                                    <div className='pl-8 my-4'>
                                        <h2>Enter the address when you want your order delivered. </h2>
                                        <form action="">

                                            <div className='mt-4 space-x-2 flex '>
                                                <input type="text" placeholder='First name' className=' w-1/2 py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                                <input type="text" placeholder='Last name' className=' w-1/2 py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4'>
                                                <input type="text" placeholder='Country / Region' className=' w-full py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4'>
                                                <input type="text" placeholder='Street adress' className=' w-full py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4'>
                                                <input type="text" placeholder='Apartment, suite, unit, etc. (optional)' className=' w-full py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4'>
                                                <input type="text" placeholder='Town / City' className=' w-full py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4'>
                                                <input type="text" placeholder='Postcode / ZIP' className=' w-full py-2 pl-2 border-[1px]  rounded-sm border-gray-400 ' />
                                            </div>

                                            <div className='mt-4 flex items-center'>
                                                <input type="checkbox" className='w-6 h-5' />
                                                <label className='pl-2 py-2'>use same address for billing</label>
                                            </div>

                                        </form>






                                    </div>

                                </div>


                            </div>

                            {/* step3 */}
                            <div className='mt-4'>
                                <h2 className=' text-xl  font-semibold'>3.  <span className='pl-3 '> Shipping option</span> </h2>
                                <div className=' border-l-[1px] border-gray-400 pb-2 w-full '>
                                    <h2 className='pl-8 my-4  flex justify-between '> <span>Free Shipping</span> <span className='text-md'>Rs 0</span> </h2>

                                </div>
                            </div>
                            {/* step4 */}
                            <div className='mt-4'>
                                <h2 className=' text-xl  font-semibold w-full '>3.  <span className='pl-3 '> Payment options </span> </h2>

                                <div className=' border-l-[1px] border-gray-400 pb-2  '>

                                    <div className='ml-8 my-4 border-2 border-gray-200 '>
                                        <div className='pl-4 py-4'>
                                            <h2 className=' font-semibold text-lg '>Cash On Delivery</h2>
                                            <p>Order Placed Before 2pm Will Be Delivered On The Same Day In Lahore . Free Delivery On Orders . Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni tenetur quasi quod inventore error? In veniam, at officiis sequi voluptatem laborum aut, unde mollitia magnam cupiditate, fuga ea sit!</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>



                    {/* div2 */}
                    <div className='md:w-1/2 md:px-20 pl-10 pr-2 ' >
                        <div className=' border-t-[1px] border-gray-200  '>

                            {/* step1 */}
                            <div className='pt-5'>
                                <h2 className=' flex items-center justify-between'>
                                    <span>Order Summary</span> <span> <MdKeyboardArrowUp /> </span>
                                </h2>
                                {/* .......mean step */}
                                <div className='pt-5'>

                                    {
                                        basket.map((b, index) => {
                                            return (
                                                <>
                                                    <div key={index} className='  flex gap-8 items-center border-b-[1px] border-gray-200 pb-10 pt-10 '>
                                                        <div className='relative'>
                                                            
                                                            <Image src={b.productimage} className='rounded-full w-[100px] h-[100px] object-cover shadow-lg' />
                                                        </div>
                                                        <div className=''>
                                                            <h2 className=' text-lg'>
                                                                <p> <span> {b.productname} </span>
                                                                    <span className='pl-2 text-lg text-[#f07f13] font-semibold '>Rs {b.productprice}</span></p>
                                                            </h2>

                                                        </div>
                                                    </div>
                                                </>

                                            )
                                        })
                                    }






                                </div>



                             
                                {/* step 4 */}
                                <div className=' py-10 flex justify-between border-b-[1px]  border-gray-200  '>
                                    <div >
                                        <h2 className='text-lg font-[400]'>Subtotal:</h2>
                                    </div>

                                    <div className='text-[#f07f13] text-lg font-[500]'>
                                        Rs {mytotal()}
                                    </div>
                                </div>

                                {/* step5 */}

                                <div className='py-10 border-b-[1px] border-gray-200  text-gray-500 font-semibold '>
                                    <h2 className='  flex justify-between '> <span className='text-xl'> Shipping</span> <span className='text-lg  '>Rs 0</span> </h2>
                                    <h2 className='py-2' >Free Shipping</h2>
                                    <h2 > Shipping to Punjab, Pakistan</h2>
                                </div>

                                {/* step6 */}
                                <div className=' py-10 flex justify-between text-gray-500 font-semibold '>
                                    <div >
                                        <h2 className='text-xl  '>Total :</h2>
                                    </div>

                                    <div className='text-[#f07f13] text-lg '>
                                        Rs {mytotal()}
                                    </div>
                                </div>




                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Mycheckout
