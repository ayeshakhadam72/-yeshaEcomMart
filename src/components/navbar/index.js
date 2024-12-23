
import React, { useState } from 'react'
import { PiVan } from "react-icons/pi";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaEarthEurope, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Logomy from "../../../public/Logomy2.png"
import Link from 'next/link';
import Watch2 from '../../../public/Watch2.jpg'

const Navbar = ({ cart , basket }) => {
  // const [mycategory , setMycategory] = useState(true)

  //  const [totalsum , setTotalsum] = useState()
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
    return basket.reduce((total , value ) => total + value.productprice , 0 )
  }

  
 

  return (
    <>
      <div className={`h-100%  hidden text-white bg-gradient-to-r from-[#f5b908] to-[#7fd858]  md:flex md:justify-around py-4 text-[14px] font-rubik font[500]`} >
        <div className='flex  w-[70%] justify-center items-center gap-8'>
          <div >
            <h2 className='flex items-center gap-2 border-r-[1px] border-gray-300  pr-10'><PiVan /> Free Delivery</h2>  </div>
          <div>
            <p className='flex items-center gap-2 border-r-[1px] border-gray-300  pr-10'> <FaEarthEurope /> Returns Policy</p>
          </div>
          <div>
            <p className='flex items-center gap-4'>Follow Us <FaFacebookF /> <FaInstagram /> <FaTwitter />  <FaPinterestP />
            </p>
          </div>

        </div>
        {/* 2nd dev */}
        <div className=' w-[30%] m-auto text-center '>
          <p className='lg:pr-64'>Login</p>
        </div>

      </div>

      {/* navbar className='h-[150px] w-[150px] ' */}
      <div className=' flex justify-around items-center bg-black py-2  border-t-[1px] border-b-[1px] border-gray-200'>
        <div className=' lg:pl-28 2xl:pl-64'>
          <Image className=" h-[120px] w-[120px] object-cover sm:h-[110px] sm:w-[120px] hover:ml-[-20px] " src={Logomy}  />
        </div>
        <div >
          <ul className={`${menuOpen ? 'block' : 'hidden'} text-white hidden md:flex md:space-x-16
           font[500] md:text-lg 2xl:text-xl`} >
            <li className='hover:border-b-2 hover:border-yellow-500 '>
              <Link href={'/'} >Home</Link>
            </li>
            <li className='hover:border-b-2 hover:border-yellow-500 '>
              <Link href={'/about'} >About</Link>
            </li>
            <div  >
            <li id=' parent' className='hover:border-b-2 hover:border-yellow-500 flex '>
              <Link href={'/product'} >Product   </Link> <RiArrowDropDownLine />
            </li>
            </div>
            
            <li className='hover:border-b-2 hover:border-yellow-500 '>
              <Link href={'/contact'} >Contact</Link>
            </li>
            



          </ul>

        </div>

        <div className='flex gap-5 items-center text-[28px] '>
          <div onClick={toggleButtton} className='md:hidden  text-[#f5b908] text-[30px] cursor-pointer text-right'>
            {menuOpen ? "X" : "☰"}
          </div>

          
          <p className='text-[#f5b908] '>
            < FaSearch className='text-[30px]' />
          </p>
          {/*  */}

          <p className={` text-[#7fd858] text-[20px] xl:pr-56 flex `} onClick={iconsToggle} >
         
            <FaBagShopping className='text-[30px]'  />
            { basket.length }
          </p>

        </div>
      </div>
      {/* dropdown product */}
      <div className=  { `  mydropdown absolute  left-[52%] mt-[-65px] bg-red-400 w-[140px] `} >
      <ul  className='text-center' >
        <li>
        <Link className=' border-b-2 border-[#f07f13] ' href={'/mobile'}> Mobilephone  </Link>
        </li>
        <li className='text-center pt-3'>
        <Link className=' border-b-2 border-[#f07f13] '  href={'/watch'}> Watch  </Link>
        </li>
        <li className='text-center py-3'>
        <Link className=' border-b-2 border-[#f07f13] '  href={'/mobile'}> Laptop  </Link>
        </li>
        <li>
        <Link className=' border-b-2 border-[#f07f13] '  href={'/headphone'}> Headphone  </Link>
        </li>
        <li className='text-center pt-3'>
        <Link className=' border-b-2 border-[#f07f13] '  href={'/tab'}> Tab  </Link>
        </li>
      </ul>
    </div>
      {/* addtocart  */}
      <div className={`${openIcon ? 'block ' : 'hidden'} flex justify-end `} >
        <div id='sideicontoggle' className='pt-5 text-right shadow-xl '  >
          <span onClick={iconsclose} className='border-[1px] border-gray-400 mx-8 px-[12px] py-[4px]  rounded-full text-xl text-[13px] text-[#7c7878fc] ml-5'> X  </span>

          {/* Shopping Cart */}
        <div>
        <p className=' w-full text-xl text-left  pt-5 px-8 pb-2 font-[700] border-b-[1px] border-gray-200 '>Shopping Cart</p>
          </div>  
          <div className=' overflow-auto p-8'>

     { basket.map((b) => { 
      return(
    
        <div className='py-3 border-b-[1px] border-gray-200 flex gap-6 '>
        <Image src={ b.productimage } className='w-[70px] h-[70px] object-cover rounded-full ' />
        <h2 className=' text-left my-auto '>
          <span className=' text-lg font-[400] capitalize text-left '> {b.productname} </span>
          <h1 className=' text-lg font-bold  '>Rs {b.productprice}PKR </h1>
        </h2>
      </div>
     )
     })}

     {/*  es cart ko nichy ly k jna ha  */}
<div className=' '>

     <div className='flex justify-between border-t-[1px] border-gray-300  pt-5'>
<div >
<h2 className='text-lg font-[400]'>Subtotal:</h2>
</div>

 <div className='text-[#f07f13] text-lg font-[500]'>
 Rs {  mytotal() }
     </div>
     </div>  
     <div className=' text-center mt-5'>
<button className='text-md font-semibold py-2 px-24 rounded-full bg-gray-100  '>VIEW CART</button>
<button className='text-md font-semibold text-white py-2 px-24 rounded-full bg-[#f07f13] mt-3 '>
<Link href={'/checkout'} >CHECKOUT</Link>  
  </button>
</div>

     </div>
     {/*  */}
           </div>


        </div>

      </div>


      {/* left toggle */}
      <div className= {`${menuOpen ? 'block' : 'hidden'} bg-[#f6f7fb] md:hidden border-b-[1px] border-gray-200 w-full backgrounfshadow `} 
      id="navLinks">
        <ul className={`    space-y-9 font-[500]  pl-4`} >


          <p className={` flex justify-end `}  >
            <span onClick={spancross} className={` flex items-center border-[1px] border-gray-400  px-[14px]
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



      {/* click button and hide */}
  
    
    </>
  )
}

export default Navbar
