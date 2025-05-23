import { ChartColumnStacked, Factory, Package, StoreIcon, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileViewBottomNav = () => {
  const li = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/all-product"}
      >
        <div className="flex flex-col gap-1 justify-center items-center"> <Package height={15} width={15} />
          <span className="font-medium text-xs">Products</span></div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/brands"}
      >
        <div className="flex flex-col gap-1 justify-center items-center"> <Factory height={15} width={15} />
          <span className="font-medium text-xs">Brands</span></div>

      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/categories"}
      >
        <div className="flex flex-col gap-1 justify-center items-center"> <ChartColumnStacked height={15} width={15} />
          <span className="font-medium text-xs">Categories</span></div>

      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/flash-sale"}
      >
     
          <div className="flex flex-col gap-1 justify-center items-center"> <Zap height={15} width={15} />
          <span className="font-medium text-xs">Flash Sale</span></div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/shops"}
      >
         <div className="flex flex-col gap-1 justify-center items-center"> <StoreIcon height={15} width={15} />
          <span className="font-medium text-xs">Shop</span></div>
        
      </NavLink>
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/contact-us"}
      >
        Contact Us
      </NavLink> */}
    </>
  );

  return (
    <div className="fixed   z-50 bottom-0 right-0 w-full  bg-white border-t-2 border-l-2 border-r-2 border-[#fd9404] py-2 block lg:hidden rounded-t-xl">


      <ul className="flex overflow-scroll justify-evenly relative z-0 items-center gap-5">
        {li}
      </ul>
    </div>
  );
};

export default MobileViewBottomNav;
