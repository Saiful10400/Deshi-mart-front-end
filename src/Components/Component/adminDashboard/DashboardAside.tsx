import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import {
  Building2,
  ChartBar,
  ChevronDown,
  Circle,
  ImageIcon,
  IndentIncrease,
  LayoutDashboardIcon,
  ShoppingBasket,
  StoreIcon,
  Users,
  X,
} from "lucide-react";
import "./dashboard.css";
import { useState } from "react";

const DashboardAside = ({ setterFn, setterState }) => {
  const [colaps, setColaps] = useState({ brand: false, category: false,banner:false });

  const manageMentRoutes = (
    <>
      <NavLink end
        to={""}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <LayoutDashboardIcon height={20} width={20} /> Dashboard
      </NavLink>

      <NavLink
        to={"users"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <Users height={20} width={20} /> Users
      </NavLink>

      <div className={"overflow-y-hidden relative"}>
        <button
          onClick={() => setColaps((p) => ({ ...p, brand: !p.brand }))}
          className={`text-[15px] relative z-10 w-full flex items-center justify-between pr-3 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700 ${colaps.brand&&"bg-gray-700"}`}
        >
          <span className="flex gap-2">
            <Building2 height={20} width={20} /> Brand
          </span>{" "}
          <ChevronDown
            className={
              colaps.brand ? "rotate-180 duration-200" : "rotate-0 duration-200"
            }
            height={20}
            width={20}
          />
        </button>
        <ul
          className={`pl-4 flex flex-col gap-1 mt-1 duration-300 z-0 ${
            colaps.brand
              ? "translate-y-0 "
              : "-translate-y-20 absolute opacity-0 "
          }`}
        >
          <NavLink
            to={"create-brand"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> Create Brand
          </NavLink>
          <NavLink
            to={"all-brands"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> All Brands
          </NavLink>
        </ul>
      </div>

      <div className={"overflow-y-hidden relative"}>
        <button
          onClick={() => setColaps((p) => ({ ...p, category: !p.category }))}
          className={`text-[15px] relative z-10 w-full flex items-center justify-between pr-3 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700 ${colaps.category&&"bg-gray-700"}`}
        >
          <span className="flex gap-2">
            <IndentIncrease height={20} width={20} /> Category
          </span>{" "}
          <ChevronDown
            className={
              colaps.category
                ? "rotate-180 duration-200"
                : "rotate-0 duration-200"
            }
            height={20}
            width={20}
          />
        </button>
        <ul
          className={`pl-4 flex flex-col gap-1 mt-1 duration-300 z-0 ${
            colaps.category
              ? "translate-y-0 "
              : "-translate-y-20 absolute opacity-0 "
          }`}
        >
          <NavLink
            to={"create-category"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> Create Category
          </NavLink>
          <NavLink
            to={"all-categorys"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> All Categorys
          </NavLink>
        </ul>
      </div>



      <div className={"overflow-y-hidden relative"}>
        <button
          onClick={() => setColaps((p) => ({ ...p, banner: !p.banner }))}
          className={`text-[15px] relative z-10 w-full flex items-center justify-between pr-3 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700 ${colaps.banner&&"bg-gray-700"}`}
        >
          <span className="flex gap-2">
            <ImageIcon height={20} width={20} /> Banner
          </span>{" "}
          <ChevronDown
            className={
              colaps.banner
                ? "rotate-180 duration-200"
                : "rotate-0 duration-200"
            }
            height={20}
            width={20}
          />
        </button>
        <ul
          className={`pl-4 flex flex-col gap-1 mt-1 duration-300 z-0 ${
            colaps.banner
              ? "translate-y-0 "
              : "-translate-y-20 absolute opacity-0 "
          }`}
        >
          <NavLink
            to={"create-banner"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> Create Banner
          </NavLink>
          <NavLink
            to={"all-banners"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> All Banners
          </NavLink>
        </ul>
      </div>




      <NavLink
        to={"products"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <ShoppingBasket height={20} width={20} /> Products
      </NavLink>

      <NavLink
        to={"shops"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <StoreIcon height={20} width={20} /> Shops
      </NavLink>

      {/* <NavLink
        to={"categorys"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <ChartBar height={20} width={20} /> Product categorys
      </NavLink> */}
    </>
  );

  // const monitorRoutes = (
  //   <>
  //     <NavLink
  //       to={"transections"}
  //       className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
  //     >
  //       <ArrowLeftRight /> Transections
  //     </NavLink>
  //   </>
  // );

 
  return (
    <div
      className={`bg-[#111827]  text-white min-h-screen lg:pt-6 pl-3    ${
        setterState ? "block" : window.innerWidth < 600 && "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          {" "}
          <img className="w-[70%]" src={logo} alt="" />
        </Link>
        <button onClick={() => setterFn(false)} className="lg:hidden">
          <X />
        </button>
      </div>

      {/* <div className="mt-20">
        <h1 className="font-semibold text-lg text-gray-700">Monitor</h1>

        <ul className="pt-5 lg:pl-2 lg:pr-6 flex flex-col gap-3">
          {monitorRoutes}
        </ul>
      </div> */}

      <div className="mt-10">
        <h1 className="font-semibold text-lg text-gray-700">Management</h1>

        <ul className="pt-5 lg:pl-2 lg:pr-6 flex flex-col gap-3">
          {manageMentRoutes}
        </ul>
      </div>
    </div>
  );
};

export default DashboardAside;
