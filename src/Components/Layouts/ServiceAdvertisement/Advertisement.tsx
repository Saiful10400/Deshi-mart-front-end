import CenterAlign from "../../Helper/CenterAlign";
import { IoStar } from "react-icons/io5";
import user1 from "../../../assets/advertisement/user1.jpg";
import user2 from "../../../assets/advertisement/user2.jpg";
import user3 from "../../../assets/advertisement/user3.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
const Advertisement = () => {
  return (
    <div className="">
      <CenterAlign>
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:grid-rows-8 lg:h-[600px] ">
          <div
            data-aos="flip-left"
            className="row-span-4     col-span-4 bg-[#ff8651] p-5"
          >
            <div className="flex gap-5 items-center">
              <span className="to-center w-[60px] h-[30px] rounded-full bg-black  text-[#ff8651]">
                5.0 <IoStar />
              </span>
              <h1 className="font-normal text-lg">Rated on Google</h1>
            </div>
            <h1 className="text-[100px]">84%</h1>
            <h1 className="text-xl font-medium">
              Happy with Look Youth & Youthful & Refreshed Nature Facility.
            </h1>
          </div>
          <div
            data-aos="flip-right"
            className="row-span-3    p-5    col-span-2 bg-[#ffe44d]"
          >
            <h1 className="text-[100px]">14</h1>
            <h1 className="text-xl font-medium">Branch in USA</h1>
          </div>

          <div
            data-aos="flip-left"
            className="row-span-3    p-5    col-span-4 bg-[#53a5e1]"
          >
            <div className="flex items-center gap-6">
              <h1 className="text-[100px]">45%</h1>
              <h1 className="text-xl font-medium">Growth In Last Year.</h1>
            </div>
          </div>

          <div
            data-aos="flip-right"
            className="row-span-6    p-5    col-span-3 bg-[#d1b182]"
          >
            <h1 className="text-3xl font-medium">
              Total Numbers of <br /> Customer.
            </h1>
            <h1 className="text-[100px]">7.9 K</h1>
          </div>

          <div
            data-aos="flip-left"
            className="row-span-6    p-5    col-span-3 bg-[#f95d2d]"
          >
            <h1 className="text-3xl font-medium">
              Total Numbers of <br /> Review.
            </h1>
            <h1 className="text-[100px]">2.6 K</h1>
          </div>
          <div
            data-aos="flip-right"
            className="row-span-8    p-5    col-span-4 bg-[#fffbe2]"
          >
            <div className="flex justify-start mb-6 gap-5">
              <img
                src={user1}
                className="w-[50px] object-cover h-[50px] rounded-full"
                alt=""
              />
              <img
                src={user2}
                className="w-[50px] object-cover h-[50px] rounded-full"
                alt=""
              />
              <img
                src={user3}
                className="w-[50px] object-cover h-[50px] rounded-full"
                alt=""
              />
            </div>
            <h1 className="text-4xl font-medium">
              Inter National Best Seller Globally
            </h1>
            <div className=" border-b-2 border-black   mt-5"></div>
            <div className="flex justify-between mt-3">
              <span className="text-xl flex items-center gap-3">
                <CiGlobe className="text-3xl" /> Washington DC
              </span>
              <GoArrowUpRight className="text-4xl" />
            </div>
          </div>
        </div>
      </CenterAlign>
    </div>
  );
};

export default Advertisement;
