import BannerSlider from "../Component/BannerSlider";
import HomeAllProducts from "../Component/HomeAllProducts";
import HomeAsideSorting from "../Component/HomeAsideSorting";
import HomeFlashSale from "../Component/HomeFlashSale";
import HomeProductCategory from "../Component/HomeProductCategory";

const Home = () => {
  return (
    <div className="flex px-3 lg:px-0 flex-col gap-16">
      <HomeProductCategory />
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-5">
          <BannerSlider />
          <HomeFlashSale />
        </div>
      </div>
      
      <div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-[20%] bg-white lg:bg-gray-300 px-4 pt-10 rounded-xl pb-4 lg:pb-0 lg:min-h-[calc(100vh-232px)] lg:sticky top-0">
            <HomeAsideSorting />
          </div>
          <div className="lg:w-[80%]">
            <HomeAllProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
