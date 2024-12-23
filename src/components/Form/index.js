import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";

const Form = () => {
  return (
    <>
   <div className='w-full pt-20'>
    <div className='w-[90%] xl:w-[60%]  mx-auto   '>

<div class="pt-20 pb-10 border-b-[1px] border-gray-600 w-[100%]  text-center ">
    <h2 className='lg:text-5xl text-black font-title font-[700] uppercase text-2xl'>Stay In Touch</h2>
    <p className='lg:text-xl text-[#4a4a50] pt-3 font-rubik uppercase text-xl'>Don't Hesitate to Contact Us</p>
</div>
<div className=' flex justify-center mt-[-19px]'>
<FaRegEnvelope className='text-[35px] text-[#4a4a50]  ' />
</div>

{/* form */}
<div className='py-10 text-white '>
    <div className='lg:flex lg:justify-center'>
<form action="">

<div className='flex flex-col gap-3 lg:flex-row flex-wrap'>
    <input  class="px-4 py-[8px] lg:px-16 bg-black"  type="text" placeholder="Email"/>
    <input class="px-4 py-[8px] lg:px-16 bg-black" type="text" placeholder="Name"/>
  <input  class="px-4 py-[8px] lg:px-16 bg-black"  type="text" placeholder="Subject"/>
</div>

<div class="pt-10">
  <textarea class="w-[100%] bg-black px-4" rows="5"  id="">Message</textarea>
</div>

<div class="text-center py-10">
<button class="uppercase border-2 border-white bg-[#4a4a50]  px-12 py-3">Submit</button>
</div>


</form>
    </div>
</div>


{/*  */}
    </div>

   </div>

    </>
  )
}

export default Form
