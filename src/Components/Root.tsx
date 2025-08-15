import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
import { ArrowUpCircleIcon } from "lucide-react";

import Footer from "./Component/Footer";
import SecondaryNav from "./Component/SecondaryNav";
import MobileViewBottomNav from "./Ui/MobileViewBottomNav";
 

const Root = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="bg-white sticky top-0 z-40">
        <div className=" bg-white w-full   lg:border-b">
          <div className=" z-10 lg:max-w-[1550px] lg:px-4 bg-white mx-auto  lg:pt-2">
            <Navbar />
          </div>
        </div>
        <div className="lg:border-b">
          <div className=" lg:max-w-[1550px] lg:px-4 bg-white mx-auto">
            <SecondaryNav />
          </div>
        </div>
      </div>
      
      <div className="relative px-3 mb-6 lg:px-4 lg:max-w-[1550px] min-h-[calc(100vh-164px)] mx-auto">
        <Outlet />
      </div>
     <Footer/>
      <button onClick={scrollToTop} className="fixed  z-50 bottom-6 right-5">
        <ArrowUpCircleIcon className="text-gray-500" width={40} height={40} />
      </button>
      <MobileViewBottomNav />
    </div>
  );
};

export default Root;
