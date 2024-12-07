
import CustomerBenifit from "../../Layouts/CustomerBenifit/CustomerBenifit";
import Hero from "../../Layouts/Hero/Hero";
import HowItsWork from "../../Layouts/HowItsWork/HowItsWork";
import LatestItems from "../../Layouts/LatestItems/LatestItems";
import UserReview from "../../Layouts/UserReview/UserReview";
import WhychoseUs from "../../Layouts/WhyChoseUs/WhychoseUs";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Advertisement/> */}
      <CustomerBenifit/>
      <LatestItems/>
      <WhychoseUs/>
      <HowItsWork/>
      <UserReview/>
    </>
  );
};

export default Home;
