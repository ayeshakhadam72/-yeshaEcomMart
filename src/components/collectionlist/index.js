import Image from 'next/image'
import React from 'react'


import MPhone7 from "../../../public/Mphone7.png"

import Watch10 from "../../../public/Watch10.png"

import Headphone3 from "../../../public/headphone9.png"

import TopTab9 from "../../../public/TopTab9.webp"
import BtLp1 from "../../../public/btLp1.png"
import Magnet from '../Magnet'


const Collectionlist = () => {
    return (
        <>

            <div className='flex justify-center  mt-20'>
                <div className='  px-10 lg:px-0 lg:w-[80%]'>
                    <h2 className=' text-4xl font-semibold pb-10'>Collection list</h2>

                    <div className=' space-y-6 sm:space-y-0 flex flex-wrap  sm:space-x-10'>
                        <div className='box1 ' >
                            <div className=' '>
                                <Magnet>

                                    <Image src={MPhone7} className=' w-[252px] h-[254px] rounded-full ' />
                                </Magnet>
                            </div>
                            <div className='text-center pt-5'>
                                <h2 className='text-xl font-semibold uppercase'>Smart Phone</h2>
                            </div>
                        </div>
                        {/* 2 */}

                        <div className='box2' >
                            <div className=' '>
                                <Magnet>

                                    <Image src={Watch10} className=' w-[252px] h-[254px] rounded-full ' />
                                </Magnet>
                            </div>
                            <div className='text-center pt-5'>
                                <h2 className='text-xl font-semibold uppercase'>Smart Phone</h2>
                            </div>
                        </div>
                        {/* 3 */}

                        <div className='box3' >
                            <div className=' '>
                                <Magnet>

                                    <Image src={Headphone3} className=' w-[252px] h-[254px] rounded-full  bg-white' />
                                </Magnet>
                            </div>
                            <div className='text-center pt-5'>
                                <h2 className='text-xl font-semibold uppercase'>Smart Phone</h2>
                            </div>
                        </div>

                        {/* 4 */}

                        <div className='box4' >
                            <div className=' '>
                                <Magnet>

                                    <Image src={TopTab9} className=' w-[252px] h-[254px] rounded-full ' />
                                </Magnet>
                            </div>
                            <div className='text-center pt-5'>
                                <h2 className='text-xl font-semibold uppercase'>Smart Phone</h2>
                            </div>
                        </div>


                        {/* 5 */}

                        <div className='box5' >
                            <div className=' '>
                                <Magnet>

                                    <Image src={BtLp1} className=' w-[252px] h-[254px] rounded-full ' />
                                </Magnet>
                            </div>
                            <div className='text-center pt-5'>
                                <h2 className='text-xl font-semibold uppercase'>Smart Phone</h2>
                            </div>
                        </div>






                        {/*  */}
                    </div>
                </div>
            </div>



        </>
    )
}

export default Collectionlist
