import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import CenterAlign from "../../Helper/CenterAlign";
import ReviewCard from "../../Ui/ReviewCard";
import getReviewData from "./DemoData";
import Tittle from "../../Ui/Tittle";


export default function UserReview() {
  return (
    <CenterAlign>
      
      <div className="px-4 lg:px-0">
      <Tittle text="Customer Testimonials" />
        <Swiper
        data-aos="fade-down"
          centeredSlides={true}
          pagination={{
            type: "custom",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
              
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {getReviewData()?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ReviewCard
                user={item.user}
                img={item.photo}
                ratings={item.review}
                testimonials={item.testimonial}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CenterAlign>
  );
}
