import "./css/banner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import banners.

import { useGetAllBannerQuery } from "../../Redux/api/api";
import { Link } from "react-router-dom";

export type Tbanner = {
  bannerId: string;
  bannerUrl: string;
  route: string;
  created: string; // ISO date string
  updated: string; // ISO date string
};

const BannerSlider = () => {
  const { data } = useGetAllBannerQuery({ offset: 0, limit: 2000 });

  const banner: Tbanner[] = data?.data?.result;

  return (
    <div className="w-full h-[200px] lg:h-[500px] mt-6 rounded-lg overflow-hidden">
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
        {banner?.map((item: Tbanner) => {
          return (
            <SwiperSlide key={item.bannerId}>
              <Link to={item.route||"/"}>
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.bannerUrl}
                alt=""
              />{" "}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
