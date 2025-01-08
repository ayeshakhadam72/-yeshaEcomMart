import React, { useState } from 'react'
import { TopBarMessage } from '../../../../utiles/topbarmessage'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const TopBar = () => {
    const [topBarShow, setTopBarShow] = useState(true);
    const TopBarButton = () => {
        setTopBarShow(false)
    }

    return (
        <>
            {topBarShow && (
                <div className={`h-100%  overflow-hidden hidden text-white bg-gradient-to-r from-[#000000] to-[#55e6a5]  md:flex md:justify-around py-2 text-[14px] font-rubik font[500]`} >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="scrolling-text"
                    >
                        {TopBarMessage.map((message, index) => (
                            <SwiperSlide key={index} className="text-center">

                                <p className='text-md uppercase'>
                                    {message}

                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <span onClick={TopBarButton} className='mx-6 mb-1 text-md text-black cursor-pointer'>

                        x

                    </span>
                </div>


            )}
        </>
    )
}

export default TopBar
