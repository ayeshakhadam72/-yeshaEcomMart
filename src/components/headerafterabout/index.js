import Link from 'next/link'
import React from 'react'
import { PiGreaterThan } from "react-icons/pi";

const Headerafterabout = ({Aboutus, givespace }) => {
  return (
   <>
   <div className= {` ${ givespace} bg-[#f6f7fb] p-7 mt-5 `}  >
    <ul className='flex gap-5 items-center text-[14px] sm:pl-[350px] font-title font-[500] '>
        <li className='text-[#777777] '>
            <Link href={'/home'}>Home  </Link>
        </li>

        <li>
            <Link className='text-[10px]' href={'/'}><PiGreaterThan /></Link>
        </li>
        <li className='text-[#464646]'>
            <Link href={'/about us'}>{Aboutus} </Link>
        </li>
    </ul>
   </div>
   </>
  )
}

export default Headerafterabout
