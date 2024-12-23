import Link from 'next/link';
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";


const Marketo = () => {
  return (
   <>
   <div>
    <h2 className='mt-16 text-black text-3xl  font-[900] font-title text-center'>Marketo <span className='font-bold text-[#f37b3f]'>.</span></h2>
   </div>
   <div className='my-16 flex justify-center gap-24 flex-wrap px-2'>
<div className='font-title'>
    <h2 className='text-[#999]  text-[24px] font-[500] '>Got Question? Call us 24/7</h2>
    <h2 className="text-black text-[22px] "> [80] 1017 197</h2>
    <p className="text-sm text-[#777] py-5 "> <i>  17 Princess Road, London, Greater<br/> London NW1 8JR, UK</i> </p>
    <button className='flex gap-1 items-center rounded-lg bg-[#f07f13] px-8 text-sm py-4 lg:px-8 text-white hover:bg-[#f37b3f] '> <FaMapMarkerAlt />    View On Map </button>
</div>
{/*  */}
<div>
    <h2 className="text-[#999] text-2xl font-[500]">We Using</h2>
    <h2 className="heading text-[#444] text-[22px] font-[500] ">Safe Payments</h2>
    <h2 className="p-5"></h2>
    <h2 className=' text-black text-[16px] font-[500]'>Secured by: </h2>
</div>
{/*  */}
<div>
    <h2 className="heading text-[#1c1c24] text-[18px] font-[500] font-title ">Quick Links</h2>
    <ul className=' text-sm text-[#777] font-title '>
        <li className='hover:text-[#eb6a2a] pt-4'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a]  pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li >
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
    </ul>
</div>
{/*  */}
<div>
<h2 className="heading text-[#1c1c24] text-[18px] font-[500] font-title ">Our Stores</h2>
<ul className='text-sm text-[#777] font-title '>
        <li className='hover:text-[#eb6a2a] pt-4'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a]  pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li >
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
        <li className='hover:text-[#eb6a2a] pt-2'>
            <Link href={'/'} >Support Center</Link>
        </li>
    </ul>
</div>
   </div>

   <div className='bg-black  md:flex justify-center py-8 text-white gap-[600px] '>
    <h2 className='text-center text-sm '>Copyrights By Xpeedstudio - 2018</h2>
    <h2 className='text-center '>Allow payment base on
    </h2>
   </div>
   </>
  )
}

export default Marketo
