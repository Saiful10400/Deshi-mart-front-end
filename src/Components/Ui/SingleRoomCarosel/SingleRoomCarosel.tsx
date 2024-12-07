import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const SingleRoomCarosel = ({images}) => {
    console.log(images)
    return (
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
            style={{ cursor: "pointer" }}
            key={idx}
          >
            <img className="w-full h-[60vh] object-cover" src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default SingleRoomCarosel;