import { useGetAllBrandQuery, useGetAllCategoryQuery } from "../../Redux/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/CategoryCarosel.css";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
interface TproductCategory {
  _count: {
    productId: number;
  };
  categoryId: string;
  logo: string;
  name: string;
  slug: string;
  created: string; // ISO 8601 timestamp
  updated: string; // ISO 8601 timestamp
}

const BrandCarosel = () => {
  const { data } = useGetAllBrandQuery({ offset: 0, limit: 200 });
  const category: TproductCategory[] | undefined = data?.data?.result;

  return (
    <div>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        navigation={false}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {category?.map((item: TproductCategory) => (
          <SwiperSlide>
            <Link to={"/"} className="">
              <img className="!h-[100px] !w-[150px] !object-contain border p-2 border-black rounded-md"  src={item.logo} alt="" />{" "}
              <span className="font-semibold">{item.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarosel;
