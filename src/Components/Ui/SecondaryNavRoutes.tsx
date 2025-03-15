import { Link, NavLink } from "react-router-dom";
import "./css/Navactive.css";
const SecondaryNavRoutes = () => {
  const li = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "NavActive font-bold"
            : "font-bold pb-1 text-base nav-list hover:text-[#f97316]"
        }
        to={"/"}
      >
        Home
      </NavLink>
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
    <ul className="flex relative z-0 items-center gap-5">
      {li}{" "}
      <Link
        to={"/signup/vendor"}
        className="font-bold bg-[#ff9208] p-2 rounded-md text-white"
      >
        Join As Vendor
      </Link>
    </ul>
  );
};

export default SecondaryNavRoutes;
