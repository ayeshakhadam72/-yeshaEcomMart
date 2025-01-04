import React from 'react'



const Newsletterabout = () => {
  return (
  <>
<div className='flex justify-center  bg-[#f9f9f9] py-10 '>
<div className='px-2 sm:px-0 lg:w-[80%] gap-2 md:justify-between md:flex '>


<div>
        <p className='text-black text-xl '>Newsletter & Get Updates</p>
        <p className='text-gray-500 text-sm'>Sign up for our newsletter to get up-to-date from us</p>
    </div>

    <div className='flex m-0 mt-5 md:mt-0'>
        <input className='px-4 md:px-8 py-2 border-2 border-gray-200 rounded-l-lg ' type='text' placeholder='Enter Your Mail Here .... ' /> <button className='rounded-r-lg bg-blue-500 px-4 md:px-8 py-2 text-white hover:bg-[#35b737] '>SUBMIT</button>
    </div>
</div>
  
</div>


  </>
  )
}

export default Newsletterabout
