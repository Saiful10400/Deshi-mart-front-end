import HomeAllProducts from "../Component/HomeAllProducts";
import HomeProductCategory from "../Component/HomeProductCategory";


const Home = () => {
    return (
        <div className="flex flex-col gap-16">
            <HomeProductCategory/>
            <HomeAllProducts/>
        </div>
    );
};

export default Home;