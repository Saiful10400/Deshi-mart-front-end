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
            <Navbar/>
            <Outlet/>
            <button onClick={scrollToTop} className="fixed bottom-6 right-5"><ArrowUpCircleIcon width={40} height={40}/></button>
        </div>
    );
};

export default Root;