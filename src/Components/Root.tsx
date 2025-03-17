import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
import { ArrowUpCircleIcon } from "lucide-react";

import Footer from "./Component/Footer";
import SecondaryNav from "./Component/SecondaryNav";

const Root = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="bg-white sticky  top-0 z-50">
        <div className="lg:pb-3 lg:border-b">
          <div className=" z-10 lg:w-[1550px] mx-auto  lg:pt-2">
            <Navbar />
          </div>
        </div>
        <div className="lg:border-b">
          <div className="  lg:w-[1550px] mx-auto">
            <SecondaryNav />
          </div>
        </div>
      </div>
      {/* <NavMegaMenu /> */}
      <div className="relative px-3 mb-6 lg:px-0 lg:w-[1550px] min-h-[calc(100vh-164px)] mx-auto">
        <Outlet />
      </div>
      <Footer />
      <button onClick={scrollToTop} className="fixed  z-50 bottom-6 right-5">
        <ArrowUpCircleIcon className="text-gray-500" width={40} height={40} />
      </button>
    </div>
  );
};

export default Root;
