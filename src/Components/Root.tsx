import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
import { ArrowUpCircleIcon } from "lucide-react";
import NavMegaMenu from "./Component/NavMegaMenu";
import Footer from "./Component/Footer";

const Root = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="bg-white sticky lg:relative top-0 z-10">
        {" "}
        <div className=" z-10 lg:w-[1700px] mx-auto  lg:pt-2">
          <Navbar />
        </div>
      </div>
      {/* <NavMegaMenu /> */}
      <div className="relative px-3 mb-6 lg:px-0 lg:w-[1700px]  mx-auto">
        <Outlet />
      </div>
      <Footer/>
      <button onClick={scrollToTop} className="fixed bottom-6 right-5">
        <ArrowUpCircleIcon width={40} height={40} />
      </button>
    </div>
  );
};

export default Root;
