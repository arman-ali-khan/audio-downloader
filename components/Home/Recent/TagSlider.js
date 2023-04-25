import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./styles.module.css";

// import required modules
import { Navigation, FreeMode } from "swiper";

export default function TagSlider({tag,setTag}) {
  return (
    <>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("funny")}
className={`btn btn-xs rounded-full w-full ${tag === "funny" ? "" : "btn-outline"}`}
>
All
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("funny")}
className={`btn btn-xs rounded-full w-full ${
  tag === "funny" ? "" : "btn-outline"
}`}
>
Sunday Suspense
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("thriller")}
className={`btn btn-xs rounded-full w-full ${
  tag === "thriller" ? "" : "btn-outline"
}`}
>
Radio Milan
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("horror")}
className={`btn btn-xs rounded-full w-full ${
  tag === "horror" ? "" : "btn-outline"
}`}
>
Thriller Station
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("bhoot")}
className={`btn btn-xs rounded-full w-full ${
  tag === "bhoot" ? "" : "btn-outline"
}`}
>
Bhoot.com
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("bhoot")}
className={`btn btn-xs rounded-full w-full ${
  tag === "bhoot" ? "" : "btn-outline"
}`}
>
Bhoot.com
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("bhoutiggota")}
className={`btn btn-xs rounded-full w-full ${
  tag === "bhoutiggota" ? "" : "btn-outline"
}`}
>
Bhoutiggota
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("land")}
className={`btn btn-xs rounded-full w-full ${
  tag === "land" ? "" : "btn-outline"
}`}
>
Thriller Land
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("notey")}
className={`btn btn-xs rounded-full w-full ${
  tag === "notey" ? "" : "btn-outline"
}`}
>
Notry Gachtolar golpo
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("studio")}
className={`btn btn-xs rounded-full w-full ${
  tag === "studio" ? "" : "btn-outline"
}`}
>
Bhoot Studio
</button>
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
        <button
onClick={() => setTag("others")}
className={`btn btn-xs rounded-full w-full ${
  tag === "others" ? "" : "btn-outline"
}`}
>
Others
</button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}






 




