import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Navigation } from "swiper";

export default function TagSlider({tag,setTag}) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="!flex">
            <button
          onClick={() => setTag("funny")}
          className={`btn btn-xs rounded-full ${tag === "funny" ? "" : "btn-outline"}`}
        >
          All
        </button>
        <button
          onClick={() => setTag("funny")}
          className={`btn btn-xs rounded-full ${
            tag === "funny" ? "" : "btn-outline"
          }`}
        >
          Sunday Suspense
        </button>
        <button
          onClick={() => setTag("thriller")}
          className={`btn btn-xs rounded-full ${
            tag === "thriller" ? "" : "btn-outline"
          }`}
        >
          Radio Milan
        </button>
        <button
          onClick={() => setTag("horror")}
          className={`btn btn-xs rounded-full ${
            tag === "horror" ? "" : "btn-outline"
          }`}
        >
          Thriller Station
        </button>
        <button
          onClick={() => setTag("bhoot")}
          className={`btn btn-xs rounded-full ${
            tag === "bhoot" ? "" : "btn-outline"
          }`}
        >
          Bhoot.com
        </button>
        <button
          onClick={() => setTag("bhoot")}
          className={`btn btn-xs rounded-full ${
            tag === "bhoot" ? "" : "btn-outline"
          }`}
        >
          Bhoot.com
        </button>
        </SwiperSlide>
        <SwiperSlide className="!flex">
           
        <button
          onClick={() => setTag("bhoutiggota")}
          className={`btn btn-xs rounded-full ${
            tag === "bhoutiggota" ? "" : "btn-outline"
          }`}
        >
          Bhoutiggota
        </button>
        <button
          onClick={() => setTag("land")}
          className={`btn btn-xs rounded-full ${
            tag === "land" ? "" : "btn-outline"
          }`}
        >
          Thriller Land
        </button>
        <button
          onClick={() => setTag("notey")}
          className={`btn btn-xs rounded-full ${
            tag === "notey" ? "" : "btn-outline"
          }`}
        >
          Notry Gachtolar golpo
        </button>
        <button
          onClick={() => setTag("studio")}
          className={`btn btn-xs rounded-full ${
            tag === "studio" ? "" : "btn-outline"
          }`}
        >
          Bhoot Studio
        </button>
        <button
          onClick={() => setTag("others")}
          className={`btn btn-xs rounded-full ${
            tag === "others" ? "" : "btn-outline"
          }`}
        >
          Others
        </button></SwiperSlide>
      </Swiper>
    </>
  );
}
