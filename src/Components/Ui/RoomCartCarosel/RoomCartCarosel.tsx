import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

const RoomCartCarosel = ({ images }) => {
  const [autoPlay,setAutoPlay]=useState(false)
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{delay:2000,pauseOnMouseEnter:true}}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images?.map((item, idx) => (
          <SwiperSlide
            onMouseEnter={() => setAutoPlay(true)}
            onMouseLeave={() => setAutoPlay(true)}
            style={{ cursor: "pointer" }}
            key={idx}
          >
            <img className="w-full h-full object-cover" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RoomCartCarosel;
