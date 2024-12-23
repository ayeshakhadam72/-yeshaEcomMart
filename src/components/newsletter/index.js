import React from 'react'



const Newsletterabout = () => {
  return (
  <>
<div className='flex justify-center gap-72 bg-[#f9f9f9] py-10 '>

    <div>
        <p className='text-black text-xl '>Newsletter & Get Updates</p>
        <p className='text-gray-500 text-sm'>Sign up for our newsletter to get up-to-date from us</p>
    </div>

    <div className='m-0'>
        <input className='px-8 py-2 border-2 border-gray-200 rounded-l-lg ' type='text' placeholder='Enter Your Mail Here .... ' /> <button className='rounded-r-lg bg-blue-500 px-8 py-2 text-white hover:bg-[#35b737] '>SUBMIT</button>
    </div>
</div>


  </>
  )
}

export default Newsletterabout
