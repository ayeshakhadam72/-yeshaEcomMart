import Link from 'next/link'
import React from 'react'

const NavbarTypenameproducts = () => {
  return (
   <>
    
   <div className='flex justify-center'>
   <div className='w-[85%] sm:w-[80%]'>
 <h2 className=' text-2xl sm:text-4xl font-semibold pt-16 pb-5 '>Trending Products</h2>
 <ul className='text-sm  flex space-x-2 sm:space-x-4 md:space-x-10 sm:text-xl font-semibold '>


 <li className='hover:border-b-2 border-[#161880] hover:text-[#161880] ' >
        <Link href={'/mobil'} >Mobile</Link>
    </li>
 <li className='hover:border-b-2 border-[#161880] hover:text-[#161880] '>
        <Link href={'/watch'}> Watch</Link>
    </li>

  
 
    <li className='hover:border-b-2 border-[#161880] hover:text-[#161880] '>
        <Link href={'/laptop'} >Camera</Link>
    </li>
    <li className='hover:border-b-2 border-[#161880] hover:text-[#161880] '>
        <Link href={'/tablet'} >Tablet</Link>
    </li>
    <li className='hover:border-b-2 border-[#161880] hover:text-[#161880] '>
        <Link href={'/headphone'} >HeadPhone</Link>
    </li>
 </ul>
</div>
   </div>

   </>
  )
}

export default NavbarTypenameproducts
