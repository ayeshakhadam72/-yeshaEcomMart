import Image from 'next/image'
import React, { useState } from 'react'


import Watch1 from "../../../public/Watch1.png"
import Watch2 from "../../../public/Watch2.png"
import Tabs from "../../../public/TopTab2.png"
import HeadPhone1 from "../../../public/headphone2.png"
import Productdata from '../productdata'

const Reusestructure = ({Addproduct}) => {


    // const arr1 = [{
    //     categery : "Watches" ,
    //     productname: "VOYO VBOOK V3Pro",
    //     productprice: 400,
    //     productimage: Watch1
    // },
    // {
    //     categery : "Watches" ,
    //     productname: "VOYO VBOOK V3Pro",
    //     productprice: 400,
    //     productimage: Watch2
    // },
    // {
    //     categery : "Watches" ,
    //     productname: "VOYO VBOOK V3Pro",
    //     productprice: 400 ,
    //     productimage: Watch2
    // },
    // {
    //     categery : "Watches" ,
    //     productname: "VOYO VBOOK V3Pro",
    //     productprice: 540,
    //     productimage: Watch2
    // },
    // {
    //     categery : "Watches" ,
    //     productname: "VOYO VBOOK V3Pro",
    //     productprice: 400,
    //     productimage: Watch2
    // },
    // {
    //     categery : "Mobile" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: Image1
    // }
    // ,
    // {
    //     categery : "Mobile" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: Image1
    // },
    // {
    //     categery : "Mobile" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: Image1
    // },
    // {
    //     categery : "Mobile" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: Image1
    // }
    // ,
    // {
    //     categery : "Tab" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: Tabs
    // }
    // ,
    // {
    //     categery : "Headphone" ,
    //     productname: "vivo",
    //     productprice: 400,
    //     productimage: HeadPhone
    // }
    // ]
// let xyz = 'mobile'
// mein ny aak array mein category Mobile Tab Headphone Watches pass krni ha
// phir valueshow variable ko v.categery k equal rhk daina ha 
//  const valueshow = ['Mobile' , 'Tab' , 'Headphone' , 'Watches']

//onclick fun mein mobile set krna ha mobile value text
// ReferenceError: Cannot access 'valueShow' before initialization

const [valueShow , setValueShow] = useState('Mobile' ,'Headphone' )
const mobilePhone = () => {
   setValueShow('Mobile' )
}
 const Headphone = () => {
    setValueShow('Headphone')
 }
 const Watches = () => {
    setValueShow('Watches')
 }
 const Tab = () => {
    setValueShow('Tab')
 }
 

//  ak dynamic value jo k filter ARRAY K SHMNY equal ho gi or wo same value hr on click mein chnge ho gi like headphone k onclick mein wo variable ki value headphone ho jye gy or mobile mein mobile


const filterarray = Productdata.filter((v) => v.categery === valueShow )



    return (
        <>
<div className='flex  justify-center pb-10 pt-20 border-t-[1px] border-gray-200 mt-20 '>
    <div className='flex flex-wrap gap-20 justify-center '>
    <div className='px-9 py-16 rounded-full bg-[#f37b3f] hover:bg-black  border-2 border-black
    hover:border-2 hover:border-[#f37b3f]'>  
         <button onClick={mobilePhone}  className=' text-white text-sm'>Mobile Phone</button></div>
         <div className='px-10 py-16 rounded-full  bg-black hover:bg-[#f37b3f]  border-2
          border-[#f37b3f]  hover:border-2 hover:border-black'>
         <button onClick={Headphone}  className=' text-white text-sm'>HeadPhone</button></div>

<div className='px-12 py-16 rounded-full bg-[#f37b3f] hover:bg-black  border-2
 border-black hover:border-2 hover:border-[#f37b3f]'>
         <button onClick={Watches} className=' text-white text-sm'>Watches</button>

</div>
<div  className='px-14 py-16 rounded-full  bg-black hover:bg-[#f37b3f] border-2 
border-[#f37b3f] hover:border-2 hover:border-black '>
         <button onClick={Tab} className=' text-white text-sm'>Tablets</button>
         </div>     
         
         
            </div>
         </div>

            <div className='flex flex-wrap justify-center space-x-5 '>
                {
                filterarray.map((b) => {

                        return (
                            <>
                                <div className=" md:mt-10  border-2 border-gray-100 mt-3 text-center " >

                                    <Image className=" mx-auto " src={b.productimage} width={180} height={230} />
                                    <h2 className='text-[#b6b6b7] text-sm font-title hover:text-[#0063d1] '>
                                        Graytext of this page
                                    </h2>
                                    <h2 className='text-black text-[16px]  font-[500] py-2 hover:text-[#f37b3f] '>
                                        {b.productname}

                                    </h2>
                                    <h2 className='pb-4'>
                                        <span><del className='text-[#d4d4d4] text-[18px] font-[500] '> {b.productprice} </del></span> <span className='text-black text-[18px] font-[500] ' > { (b.productprice) - (b.productprice * 30 / 100 ) }  </span>
                                    </h2>
                                    <button onClick={() => { Addproduct(b)}} className='mb-5 px-8 py-2 bg-black hover:bg-[#f37b3f] text-white text-sm'>Add To Card </button>
                                </div>
                            </>
                        );
                    }
                    )
                }

            </div>




        </>




    )

    
}

export default Reusestructure


