import BannerSlider from "../Component/BannerSlider";
import BrandList from "../Component/BrandList";
import CategoriesList from "../Component/CategoriesList";
import FlashSaleProduct from "../Component/FlashSaleProduct";
import Newsletter from "../Component/Newsletter";
import RecentProducts from "../Component/RecentProducts";

const Home = () => {
  return (
    <div className="px-3 lg:px-0">
      <div className="w-full">
        <BannerSlider />
      </div>

      <div>
        <BrandList/>
        <FlashSaleProduct />
        <CategoriesList />
        <RecentProducts/>
        <Newsletter/>
      </div>
    </div>
  );
};

export default Home;
