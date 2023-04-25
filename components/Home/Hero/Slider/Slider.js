import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import Link from "next/link";
import axios from "axios";

export default function Slider() {
  // loading
  const [loading,setLoading] = useState(true)
  // files 
  const [files,setFiles] = useState([])
  useEffect(()=>{
    axios.get(`/api/featured`)
    .then(res=>{
      setFiles(res.data)
      setLoading(false)
    })
  },[])
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          loading ?  <div className="md:!h-96 my-3 sm:!h-64 !h-44 bg-gray-400 animate-pulse flex items-center justify-center w-full">
            <div className="w-full mx-12 space-y-4">
            <div className="bg-gray-300 animate-pulse h-6 w-full rounded-full "></div>
            <div className="bg-gray-300 animate-pulse h-6 w-96 mx-auto rounded-full "></div>
            </div>
          </div>
          :
            files?.map(file=> <SwiperSlide key={file._id} className="md:!h-96 my-3 sm:!h-64 !h-44">
          <div style={{backgroundImage:`url(${file.thumb})`}} className={`w-full h-full bg-cover bg-center  flex justify-center items-center`}>
          <div className="absolute h-full w-full backdrop-blur-sm backdrop-brightness-90 backdrop-hue-rotate-30 backdrop-contrast-75 flex flex-col px-4 justify-center items-center py-2 rounded-md">
              <div>
              <h2 className="md:text-3xl text-center text-info font-bold">{file.title}</h2>
              <div className="flex justify-center my-3">
              <Link className="btn btn-xs md:btn-md md:w-44 btn-primary" href={`/file/${file._id}`}>Download</Link>
              </div>
              </div>
          </div>
          </div>
      </SwiperSlide>)
        
        }
       
      </Swiper>
    </>
  );
}
