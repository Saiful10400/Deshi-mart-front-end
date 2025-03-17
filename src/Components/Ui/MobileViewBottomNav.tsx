import { Home } from "lucide-react";
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
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/brands"}
      >
        Brands
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/categories"}
      >
        Categories
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/flash-sale"}
      >
        Flash Sale
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/shops"}
      >
        Shop
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
    <div className="fixed   z-50 bottom-0 right-0 w-full bg-gray-50 py-2 block lg:hidden">
      <div className="absolute  -top-[32px] right-[43%] bg-gray-50 px-2 py-1 rounded-t-full">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "NavActive font-bold"
              : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
          }
          to={"/"}
        >
          <span className="flex flex-col px-2 items-center font-semibold text-sm">
            {" "}
            <Home className="pb-1" />
          </span>
        </NavLink>
      </div>

      <ul className="flex overflow-scroll justify-center relative z-0 items-center gap-5">
        {li}
      </ul>
    </div>
  );
};

export default MobileViewBottomNav;
