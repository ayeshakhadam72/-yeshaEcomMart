import React from 'react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowRightLong } from "react-icons/fa6";
import CosmosBackground from '../cosmos-background';

const MyProductBanners = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center mt-10">
        <div className="mx-10 lg:mx-0 lg:w-[80%] 2xl:flex 2xl:gap-2 ">
          <div className=' 2xl:w-[70%] '>
            <Swiper
              modules={[Pagination, Scrollbar]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('Slide changed')}
            >

              <SwiperSlide >

                <div id="bgbanner1" className='w-full ' >
                  <div className='h-full w-full flex text-start items-center'>
                    <div className='text-white pl-10'>
                      <h2 className='text-[50px] font-semibold ' >Galaxy Folding Phones</h2>
                      <p className='py-[12px] font-semibold text-lg '>Which can vary depending on the brand and <br /> model electronic device.</p>
                      <button className='bg-white hover:bg-black hover:text-white font-semibold text-black
                   px-5 py-3 mt-[12px] rounded-lg flex items-center gap-2'>Shop Now
                        <FaArrowRightLong /></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div id="bgbanner2" className='w-full'>
                  <div className='h-full w-full flex text-start items-center'>
                    <div className='text-white pl-10'>
                      <h2 className='text-[50px] font-semibold ' >Modern Mobile Phones</h2>
                      <p className='py-[12px] font-semibold text-lg '>Mobile phone technology has advanced rapidly <br />over the years, with various</p>
                      <button className='bg-white hover:bg-black hover:text-white font-semibold
                   text-black px-5 py-3 mt-[12px] rounded-lg flex items-center gap-2'>Shop Now
                        <FaArrowRightLong /></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div id="bgbanner3" className='w-full'>

                  <div className='h-full w-full flex text-start items-center'>
                    <div className='text-white pl-10'>
                      <h2 className='text-[50px] font-semibold ' > Motorola Edge Phone </h2>
                      <p className='py-[12px] font-semibold text-lg '>Mobile phone technology has advanced rapidly <br />over the years, with various.</p>
                      <button className='bg-white hover:bg-black hover:text-white font-semibold
                   text-black px-5 py-3 mt-[12px] rounded-lg flex items-center gap-2'>Shop Now
                        <FaArrowRightLong /></button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='2xl:w-[29%]   '>


            <div className='mt-5 2xl:mt-0 sm:flex sm:space-x-2  2xl:flex-col 2xl:space-x-0  text-white' >
              <div id='bgbanner4'>
                <div className='pl-6 pt-10' >
                  <h2 className='text-2xl font-semibold '>Special Discount</h2>
                  <p className='font-semibold pt-2 pb-3 text-lg '>UP TO 50% OFF</p>
                  <button className='border-b-[1px] border-white'>Shop Now</button>
                </div>
              </div>

              {/* 2nd img */}
              <div id='bgbanner15' className='mt-5 sm:mt-0 2xl:mt-5'>
                <div className='pl-6 pt-10' >
                  <h2 className='text-2xl font-semibold '>Hot Deals</h2>
                  <p className='font-semibold pt-2 pb-3 text-lg '>UP TO 30% OFF</p>
                  <button className='border-b-[1px] border-white'>Shop Now</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>


      {/*  */}
      <div className=' mx-10 lg:mx-0 lg:flex lg:justify-center mt-8 '>
        <div className='lg:w-[80%]'>
          <div className='sm:flex sm:gap-5 '>
            <div id='bgbanner16' className=' flex items-center'>
              <div className='pl-10 text-white'>
                <h2 className=' text-3xl 2xl:text-[35px] font-semibold '>Apple MacBook Air</h2>
                <button className='bg-white hover:bg-black hover:text-white font-semibold
 text-black px-5 py-3 mt-[12px] rounded-lg flex items-center gap-2'>Shop Now   <FaArrowRightLong /></button>
              </div>
            </div>
            {/* 2nd  */}
            <div id='bgbanner17' className=' flex items-center mt-5 sm:mt-0'>
              <div className='pl-10 text-white'>
                <h2 className='text-3xl 2xl:text-[35px] font-semibold '>Lenovo ThinkPad X1</h2>
                <button className='bg-white hover:bg-black hover:text-white font-semibold
 text-black px-5 py-3 mt-[12px] rounded-lg flex items-center gap-2'>Shop Now   <FaArrowRightLong /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProductBanners;
