import { Link } from "react-router-dom";
import bgVideo from "../../../../src/assets/Home/Hero/background.mp4";
import Button from "../../Ui/Button";

const Hero = () => {
  return (
    <div data-aos="fade-down" className="relative">
      <video
        className="w-full h-[600px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="to-center text-center flex-col absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000086] to-[#00000042]">
        <h1 className="text-7xl text-white font-bold">
          Book Your Ideal Meeting Room <br /> with Ease.
        </h1>
        <h1 className=" text-[#ffffff] mt-5 font-normal text-2xl">
          Efficient, hassle-free room booking for all your meeting needs.
        </h1>
        <Link className="mt-5" to={"/meeting-rooms"}>
          <Button
            className="text-3xl font-normal pb-12 px-4 to-center rounded-[4px]"
            text="Book Now"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
