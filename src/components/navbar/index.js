
import React, { useContext, useEffect, useState } from 'react'

import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBagShopping, FaBasketShopping, FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Logo from "../../../public/navbar/OnlineStorelogo.png"
import Link from 'next/link';

import TopBar from './topbar';
import Magnet from '../Magnet';
import { CartData } from '../../../context/cart';

const Navbar = () => {
  const { ProductLoad, basket } = useContext(CartData);
  const [openIcon, setopenIcon] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  const toggleButtton = () => {
    setMenuOpen(!menuOpen)
  }

  const spancross = () => {
    setMenuOpen(false)
  }

  const iconsToggle = () => {
    setopenIcon(true)
  }
  const iconsclose = () => {
    setopenIcon(false)
  }
  // 
  const mytotal = () => {
    return basket.reduce((total, value) => total + value.productprice, 0)
  }
  useEffect(() => {

    setTimeout(() => {
      if (ProductLoad) {
        setopenIcon(true);
        console.log("Menu opened!");
      }
    }, 2000);


  }, [ProductLoad]);
  return (
    <>
      <TopBar />

      <div className='dropParent py-3 flex justify-around items-center bg-black  border-t-[1px] border-b-[1px] border-gray-200'>
        <div >
          <Image className="object-cover w-32 " src={Logo} />
        </div>
        <div >
          <ul className={`${menuOpen ? 'block' : 'hidden'} text-white hidden md:flex md:space-x-16
           font[500] md:text-md 2xl:text-md uppercase`} >
            <li className='uppercase '>
              <Link href={'/'} >Home</Link>
            </li>
            <li className='uppercase'>
              <Link href={'/about'} >About</Link>
            </li>
            <div className='relative ' >
              <li id='product' className='uppercase flex '>
                <Link href={'/product'} >Product </Link> <RiArrowDropDownLine />
                <div className={`z-[999999999999999] drop hidden shadow-xl absolute top-5 rounded-lg left-[-50px] right-0 bg-black  w-60`} >
                  <ul className='text-left py-7 ' >
                    <li className=' pb-3 px-7 border-b border-[#778899]'>
                      <Link className='  ' href={'/mobile'}> Mobile Phone  </Link>
                    </li>
                    <li className=' py-3 px-7 border-b border-[#778899]'>
                      <Link className='  ' href={'/watch'}> Watch  </Link>
                    </li>
                    <li className=' py-3 px-7 border-b border-[#778899]'>
                      <Link className='  ' href={'/mobile'}> Laptop  </Link>
                    </li>
                    <li className=' py-3 px-7 border-b border-[#778899]'>
                      <Link className='  ' href={'/headphone'}> Headphone  </Link>
                    </li>
                    <li className=' pt-3 px-7 '>
                      <Link className='  ' href={'/tab'}> Tab  </Link>
                    </li>
                  </ul>
                </div>
              </li>

            </div>

            <li className='uppercase '>
              <Link href={'/contact'} >Contact</Link>
            </li>

          </ul>

        </div>

        <div className='flex gap-5 items-center text-[28px] '>
          <div onClick={toggleButtton} className='md:hidden  text-[#f5b908] text-[30px] cursor-pointer text-right'>
            {menuOpen ? "X" : "☰"}
          </div>


          <p className='bg-[#55e6a5] text-white p-2 rounded-full  '>
            < FaSearch className='text-[20px]' />
          </p>
          {/*  */}

          <div className=' relative' onClick={iconsToggle} >
            <p className={` bg-[#55e6a5]  text-white p-2 rounded-full flex `} >

              <FaCartShopping className='text-[20px]' />

            </p>
            <p className='absolute top-0 cursor-pointer  ml-[26px] mt-[-17px]'>
              <span className='text-black bg-white p-1 px-2 font-bold rounded-full  text-[15px] '>

                {basket.length}
              </span>

            </p>
          </div>

        </div>
      </div>


      <div className={` flex justify-end  `} >
        <div id='sideicontoggle' className={` ${openIcon ? 'w-[350px] duration-500' : 'w-[0px] duration-500'}  pt-5 text-right shadow-2xl z-[999999999] bg-black`}  >
          <span onClick={iconsclose} className='border-[1px] border-gray-400 mx-8 px-[12px] py-[4px]  rounded-full text-xl text-[13px] text-[#7c7878fc] ml-5 cursor-pointer'> X  </span>

          {/* Shopping Cart */}
          <div>
            <p className=' w-full text-xl text-left  pt-5 px-8 pb-2 font-[700] border-b-[1px] border-gray-200 uppercase text-white'>Shopping Cart</p>
          </div>
          <div className=' overflow-auto p-8'>

            {basket.map((b) => {
              return (

                <div className='py-3 border-b-[1px] border-gray-200 flex gap-6 '>
                  <Magnet>
                    <Image src={b.productimage} className='w-[70px] h-[70px] object-cover rounded-full ' />
                  </Magnet>
                  <h2 className=' text-left my-auto '>
                    <span className=' text-lg font-[400] capitalize text-left text-white'> {b.productname} </span>
                    <h1 className=' text-lg font-bold  text-white'>Rs {b.productprice}PKR </h1>
                  </h2>
                </div>
              )
            })}

            {/*  es cart ko nichy ly k jna ha  */}
            <div className=' '>

              <div className='flex justify-between border-t-[1px] border-gray-300  pt-5'>
                <div >
                  <h2 className='text-lg font-[400] text-white'>Subtotal:</h2>
                </div>

                <div className='text-[#f07f13] text-lg font-[500]'>
                  Rs {mytotal()}
                </div>
              </div>
              <div className=' text-center grid mt-5'>
                <button className='text-md font-semibold py-2  rounded-full bg-gray-100  '  onClick={iconsclose}>Continue Shopping</button>
                <button className='text-md font-semibold text-white py-2 px-24 rounded-full bg-[#f07f13] mt-3 '>
                  <Link href={'/checkout'} >CHECKOUT</Link>
                </button>
              </div>

            </div>
            {/*  */}
          </div>


        </div>

      </div>


      <div className={`${menuOpen ? 'block' : 'hidden'} bg-[#f6f7fb] md:hidden border-b-[1px] border-gray-200 w-full backgrounfshadow `}
        id="navLinks">
        <ul className={`    space-y-9 font-[500]  pl-4`} >


          <p className={` flex justify-end `}  >
            <span onClick={spancross} className={` flex items-center border-[1px] border-gray-400  cursor-pointer px-[14px]
             py-[4px] rounded-[5px]
     text-xl text-[13px] mt-10 text-[#7c7878fc] mr-3`} > x </span>

          </p>


          <li>
            <Link href={'/'} >Home</Link>
          </li>
          <li>
            <Link href={'/about'} >About</Link>
          </li>
          <li>
            <Link href={'/product'} >Product </Link>
          </li>
          <li>
            <Link href={'/contact'} >Contact</Link>
          </li>
          <li>
            <Link href={'/pages'} >Pages</Link>
          </li>

          <li>
            <Link href={'/blog'} >Blog</Link>
          </li>

        </ul>


      </div>





    </>
  )
}

export default Navbar
