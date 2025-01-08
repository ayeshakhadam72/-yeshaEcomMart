import Link from 'next/link'
import React from 'react'

const NavbarTypenameproducts = () => {
    return (
        <>

            <div className='flex justify-center '>
                <div className=''>
                    <h2 className=' text-2xl sm:text-4xl uppercase text-center font-semibold pt-16 pb-5 '>Trending Products</h2>
                    <ul className='text-sm items-center  flex space-x-2 sm:space-x-4 md:space-x-10 sm:text-xl font-semibold '>


                        <li className='bg-black text-white p-3 rounded-md px-5 ' >
                            <span  >Mobile</span>
                        </li>
                        <li className=' '>
                            <span > Watch</span>
                        </li>



                        <li className=' '>
                            <span>Camera</span>
                        </li>
                        <li className=' '>
                            <span>Tablet</span>
                        </li>
                        <li className=' '>
                            <span  >HeadPhone</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NavbarTypenameproducts
