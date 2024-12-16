 import "./css/banner.css"

 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Autoplay, Pagination } from 'swiper/modules';


 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';


// import banners.

import banner1 from "../../../assets/banner/banner.png"
import banner2 from "../../../assets/banner/banner2.jpg"
import banner3 from "../../../assets/banner/banner3.webp"
import banner4 from "../../../assets/banner/banner4.webp"




const BannerSlider = () => {
    return (
        <div className="lg:w-[50%]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /> </SwiperSlide>
        
      </Swiper>
      
    </div>
    );
};

export default BannerSlider;