// import React, { useState } from 'react'

// import Image from 'next/image';
// import Watch1 from "../../../public/Watch1.jpg"
// import Watch2 from "../../../public/Watch2.jpg"
// import Image1 from "../../../public/imggggggg.jpeg"
// import Tabsimg from "../../../public/tab.jpeg"
// import HeadPhone from "../../../public/Headphone.jpeg"
// import Laptopmy from "../../../public/laptopmy.jpeg"




// const Firstsitepage = () => {



//     const arr1 = [{
//         categery: "Watches",
//         productname: "VOYO VBOOK V3Pro",
//         productprice: 400,
//         productimage: Watch1
//     },
//     {
//         categery: "Watches",
//         productname: "VOYO VBOOK V3Pro",
//         productprice: 400,
//         productimage: Watch2
//     },
//     {
//         categery: "Mobile",
//         productname: "vivo",
//         productprice: 400,
//         productimage: Image1
//     },
//     {
//         categery: "Mobile",
//         productname: "vivo",
//         productprice: 400,
//         productimage: Image1
//     },
//     {
//         categery: "Tab",
//         productname: "Infinix",
//         productprice: 400,
//         productimage: Tabsimg
//     },
//     {
//         categery: "Tab",
//         productname: "Infinix",
//         productprice: 400,
//         productimage: Tabsimg
//     },
//     {
//         categery: "Headphone",
//         productname: "Oppo",
//         productprice: 400,
//         productimage: HeadPhone
//     },
//     {
//         categery: "Laptop",
//         productname: "hp",
//         productprice: 400,
//         productimage: Laptopmy
//     }


//     ]
//     const [cardproductitem, setCardproductitem] = useState([])
//     const [componentreload, setcomponentreload] = useState(0)

//     const multipleAdditems = (c) => {
//         cardproductitem.push(c)
//         setCardproductitem(cardproductitem)

//         setcomponentreload(Math.random())
//         console.log(cardproductitem)
//     }




//     // 
//     const [valueShow, setValueShow] = useState('')
//     const Laptops = () => {
//         setValueShow('Laptop')
//     }
//     const mobilePhones = () => {
//         setValueShow('Mobile')
//     }
//     const AlleadPhones = () => {
//         setValueShow('Headphone')
//     }
//     const AllmyWatches = () => {
//         setValueShow('Watches')
//     }
//     const Tabs = () => {
//         setValueShow('Tab')
//     }

//     const filterarray = arr1.filter((c) => c.categery === (valueShow))

//     return (
//         <>
//             <div className='my-20'>

//                 <div className=' mt-20 flex justify-center sm:mt-32 '  >
//                     <div className='border-[1px]  border-gray-200 sm:flex sm:flex-wrap mx-4'>
//                         {/*  */}
//                         <div className=' hover:bg-[#0063d1]  py-8 text-center hover:text-white font-title relative sm:py-9  ' id='diamond'>

//                             <div onClick={Laptops} className='px-12 py-9  border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-gray-200 hover:border-0 '  >
//                                 <p className='text-[16px] font-[500]   '>Laptop pro</p>
//                                 <p className='text-[12px] font-[400] pt-2'>3 Items Available</p>
//                             </div>
//                         </div>

//                         {/* 2 */}
//                         <div onClick={mobilePhones} className='hover:bg-[#0063d1] hover:text-white  relative py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
//                             <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-gray-200   '  >
//                                 <p className='text-[16px] font-[500]  text-[#222] '>Mobile</p>
//                                 <p className='text-[12px] font-[400] text-[#555]  pt-2'>1 Items Available</p>
//                             </div>
//                         </div>
//                         {/*  */}
//                         <div onClick={AlleadPhones} className='hover:bg-[#0063d1] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
//                             <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-gray-200  '  >
//                                 <p className='text-[16px] font-[500]  text-[#222] '>HeadPhone</p>
//                                 <p className='text-[12px] font-[400] text-[#555]  pt-2'> 2 Items Available</p>
//                             </div>
//                         </div>
//                         {/*  */}
//                         <div onClick={AllmyWatches} className='hover:bg-[#0063d1] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
//                             <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9 border-b-[1px] border-gray-200 sm:border-b-0 sm:border-r-[1px] sm:border-gray-200    '  >
//                                 <p className='text-[16px] font-[500]  text-[#222] '>Watch</p>
//                                 <p className='text-[12px] font-[400] text-[#555]  pt-2'>4 Items Available</p>
//                             </div>
//                         </div>
//                         {/*  */}
//                         <div onClick={Tabs} className='hover:bg-[#0063d1] hover:text-white  relative  py-8 px-4 sm:px-0 text-center  font-title ' id='diamond'>
//                             <div className='hover:border-0 px-8  py-9 sm:px-12 sm:py-9   '  >
//                                 <p className='text-[16px] font-[500]  text-[#222] '>Tab</p>
//                                 <p className='text-[12px] font-[400] text-[#555]  pt-2'>5 Items Available</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>

//             {/*  */}
//             <div className='flex justify-center'>
//                 {
//                     filterarray.map((c) => {
//                         return (
//                             <>
//                                 <div className=" mt-34 w-[10%]  my-28 border-2 border-gray-100 mt-3 text-center " >

//                                     <Image className=" mx-auto " src={c.productimage} width={150} height={230} />

//                                     <h2 className='text-black text-[16px]  font-[500] py-2 hover:text-[#0063d1] '>
//                                         {c.productname}
//                                     </h2>
//                                     <h2 className='pb-4'>
//                                         <span><del className='text-[#d4d4d4] text-[18px] font-[500] '> {c.productprice} </del></span> <span className='text-black text-[18px] font-[500] ' > {(c.productprice) - (c.productprice * 30 / 100)}  </span>

//                                     </h2>
//                                     <button onClick={() => multipleAdditems(c)} className='mb-5 px-8 py-2 bg-red-500 text-white text-sm'>Add To Card </button>
//                                 </div>
//                             </>
//                         )
//                     })
//                 }
//             </div>

//             <div className=' pb-11'>
//                 <h2 className='text-center'>add card items list</h2>
//                 {
//                     cardproductitem.map((c) => {
//                         return (
//                             <>
//                                 <div key={componentreload} >

//                                     <h1> {c.productname} </h1> <br />
//                                     <h1> {c.productprice} </h1>
//                                     <h1> {cardproductitem.length} </h1>
//                                 </div>

//                             </>
//                         )
//                     })
//                 }

//             </div>


//         </>
//     )
// }

// export default Firstsitepage


import React from 'react'

const Create1BlogPost = () => {
  return (
    <div>
      
    </div>
  )
}

export default Create1BlogPost
