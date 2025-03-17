import { useGetAllCategoryQuery } from "../../Redux/api/api";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/CategoryCarosel.css";

import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import CloneElement from "../../Utils/CloneElement";
import HomeBrandAndCategorySkleton from "./skleton/HomeBrandAndCategorySkleton";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { searchByCategory } from "../../Redux/feathcer/ProductSearchingSlice";
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

const CategoryCarosel = () => {
  const { data, isLoading } = useGetAllCategoryQuery({ offset: 0, limit: 200 });
  const category: TproductCategory[] | undefined = data?.data?.result;

  const move = useNavigate();
  const dispatch = useAppDispatch();

  return data ? (
    <div>
      <Swiper
        slidesPerView={2.5}
        breakpoints={{
          640: { slidesPerView: 2.5, spaceBetween: 15 },
          768: { slidesPerView: 3.5, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {category?.map((item: TproductCategory) => (
          <SwiperSlide>
            <button
              onClick={() => {
                dispatch(searchByCategory(item.name));
                move("/all-product");
              }}
            >
              <img
                className="!h-[100px] !w-[150px] !object-contain border-2 p-2 border-gray-200 rounded-md"
                src={item.logo}
                alt=""
              />{" "}
              <span className="font-semibold">{item.name}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div className="grid grid-cols-5 gap-6">
      <CloneElement
        count={isLoading ? 5 : 0}
        element={<HomeBrandAndCategorySkleton />}
      />
    </div>
  );
};

export default CategoryCarosel;
