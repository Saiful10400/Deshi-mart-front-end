import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
import { ArrowUpCircleIcon } from "lucide-react";
 
 

const Root = () => {




    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div className="lg:w-[1700px] mx-auto">
            <div className="sticky z-10 bg-white lg:py-2 top-0"><Navbar/></div>
            <div className="relative px-3 lg:px-0"><Outlet/></div>
            <button onClick={scrollToTop} className="fixed bottom-6 right-5"><ArrowUpCircleIcon width={40} height={40}/></button>
        </div>
    );
};

export default Root;