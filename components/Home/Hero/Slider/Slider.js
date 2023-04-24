import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="md:!h-96 sm:!h-64 !h-44">
            <div className="bg-[url('https://img.youtube.com/vi/4JqWHLZye80/maxresdefault.jpg')] w-full h-full bg-cover bg-center  flex justify-center items-center">
            <div className="absolute h-full w-full backdrop-blur-sm backdrop-brightness-90 backdrop-hue-rotate-30 backdrop-contrast-75 flex flex-col px-4 justify-center items-center py-2 rounded-md">
                <div>
                <h2 className="md:text-3xl text-center text-info font-bold">Pashaner Khudha Part 1 | Gajendra Kumar Mitra | Mirchi Bangla</h2>
                <div className="flex justify-center my-3">
                <Link className="btn btn-xs md:btn-md md:w-44 btn-primary" href={'#'}>Download</Link>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="md:!h-96 sm:!h-64 !h-44">
            <div className="bg-[url('https://img.youtube.com/vi/4JqWHLZye80/maxresdefault.jpg')] w-full h-full bg-cover bg-center  flex justify-center items-center">
            <div className="absolute h-full w-full backdrop-blur-sm backdrop-brightness-90 backdrop-hue-rotate-30 backdrop-contrast-75 flex flex-col px-4 justify-center items-center py-2 rounded-md">
                <div>
                <h2 className="md:text-3xl text-center text-info font-bold">Pashaner Khudha Part 1 | Gajendra Kumar Mitra | Mirchi Bangla</h2>
                <div className="flex justify-center my-3">
                <Link className="btn btn-xs md:btn-md md:w-44 btn-primary" href={'#'}>Download</Link>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="md:!h-96 sm:!h-64 !h-44">
            <div className="bg-[url('https://img.youtube.com/vi/4JqWHLZye80/maxresdefault.jpg')] w-full h-full bg-cover bg-center  flex justify-center items-center">
            <div className="absolute h-full w-full backdrop-blur-sm backdrop-brightness-90 backdrop-hue-rotate-30 backdrop-contrast-75 flex flex-col px-4 justify-center items-center py-2 rounded-md">
                <div>
                <h2 className="md:text-3xl text-center text-info font-bold">Pashaner Khudha Part 1 | Gajendra Kumar Mitra | Mirchi Bangla</h2>
                <div className="flex justify-center my-3">
                <Link className="btn btn-xs md:btn-md md:w-44 btn-primary" href={'#'}>Download</Link>
                </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
