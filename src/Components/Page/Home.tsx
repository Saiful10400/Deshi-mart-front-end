import HomeAllProducts from "../Component/HomeAllProducts";
import HomeAsideSorting from "../Component/HomeAsideSorting";
import HomeProductCategory from "../Component/HomeProductCategory";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <HomeProductCategory />
      <div>


        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-[20%] bg-gray-300 px-4 pt-10 rounded-xl min-h-[calc(100vh-232px)] sticky top-[232px]">
            <HomeAsideSorting />
          </div>
          <div className="w-[80%]">
            <HomeAllProducts />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Home;
