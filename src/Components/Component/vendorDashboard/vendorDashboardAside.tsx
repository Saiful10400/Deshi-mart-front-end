import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/dashboardLogo.png";
import {
  Bike,
  ChevronDown,
  Circle,
  LayoutDashboardIcon,
  ShoppingBasket,
  Store,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/feathcer/hoocks";
import { Tuser } from "../../../Types";

const VendorDashboardAside = ({ setterFn, setterState }) => {
  // const manageMentRoutes = (
  //   <>
  //     <NavLink
  //       to={"my-shop"}
  //       className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
  //     >
  //       <Store /> My shop
  //     </NavLink>
  //     <NavLink
  //       to={"my-products"}
  //       className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
  //     >
  //       <BoxesIcon /> My products
  //     </NavLink>
  //     <NavLink
  //       to={"customers-review"}
  //       className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
  //     >
  //       <MessageCircleHeart /> Customers review
  //     </NavLink>
  //   </>
  // );

  // const monitorRoutes = (
  //   <>
  //     <NavLink
  //       to={"order-history"}
  //       className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
  //     >
  //       <History /> Order history
  //     </NavLink>
  //   </>
  // );

  const { loggedInUser }: { loggedInUser: Tuser | null } = useAppSelector(
    (s) => s.authStore
  );

  const [colaps, setColaps] = useState({ product: false, shop: false });
  const manageMentRoutes = (
    <>
      <NavLink onClick={()=>setterFn(false)}
        end
        to={""}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <LayoutDashboardIcon height={20} width={20} /> Dashboard
      </NavLink>

      <div className={"overflow-y-hidden relative"}>
        <button
          onClick={() => setColaps((p) => ({ ...p, shop: !p.shop }))}
          className={`text-[15px] relative z-10 w-full flex items-center justify-between pr-3 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700 ${
            colaps.shop && "bg-gray-700"
          }`}
        >
          <span className="flex gap-2">
            <Store height={20} width={20} /> My Shop
          </span>{" "}
          <ChevronDown
            className={
              colaps.shop ? "rotate-180 duration-200" : "rotate-0 duration-200"
            }
            height={20}
            width={20}
          />
        </button>
        <ul
          className={`pl-4 flex flex-col gap-1 mt-1 duration-300 z-0 ${
            colaps.shop
              ? "translate-y-0 "
              : "-translate-y-20 absolute opacity-0 "
          }`}
        >
          {loggedInUser?.vendor?.shopId ? (
            <>
              <NavLink onClick={()=>setterFn(false)}
                to={"my-shop"}
                className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
              >
                <Circle height={6} width={6} /> Shop Info
              </NavLink>
              <NavLink onClick={()=>setterFn(false)}
                to={"update-my-shop"}
                className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
              >
                <Circle height={6} width={6} /> Update Shop
              </NavLink>
            </>
          ) : (
            <NavLink onClick={()=>setterFn(false)}
              to={"create-shop"}
              className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
            >
              <Circle height={6} width={6} /> Create Shop
            </NavLink>
          )}
        </ul>
      </div>
      <div className={"overflow-y-hidden relative"}>
        <button
          onClick={() => setColaps((p) => ({ ...p, product: !p.product }))}
          className={`text-[15px] relative z-10 w-full flex items-center justify-between pr-3 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700 ${
            colaps.product && "bg-gray-700"
          }`}
        >
          <span className="flex gap-2">
            <ShoppingBasket height={20} width={20} /> My product
          </span>{" "}
          <ChevronDown
            className={
              colaps.product
                ? "rotate-180 duration-200"
                : "rotate-0 duration-200"
            }
            height={20}
            width={20}
          />
        </button>
        <ul
          className={`pl-4 flex flex-col gap-1 mt-1 duration-300 z-0 ${
            colaps.product
              ? "translate-y-0 "
              : "-translate-y-20 absolute opacity-0 "
          }`}
        >
          <NavLink onClick={()=>setterFn(false)}
            to={"create-product"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> Create Product
          </NavLink>
          <NavLink onClick={()=>setterFn(false)}
            to={"all-products"}
            className="text-[14px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
          >
            <Circle height={6} width={6} /> All products
          </NavLink>
        </ul>
      </div>

      {/* <NavLink
        to={"review"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <List height={20} width={20} /> Reviews
      </NavLink> */}

      <NavLink onClick={()=>setterFn(false)}
        to={"orders"}
        className="text-[15px] flex items-center gap-2 font-medium pl-2 py-2 rounded-lg hover:bg-gray-700"
      >
        <Bike height={20} width={20} /> Orders
      </NavLink>
    </>
  );

  return (
    <div
      className={`bg-[#111827]  text-white min-h-screen lg:pt-6 pl-3    ${
        window.innerWidth > 1023 || setterState ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"}>
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
        <h1 className="font-semibold text-lg text-gray-400">Management</h1>

        <ul className="pt-5 lg:pl-2 lg:pr-6 flex flex-col gap-3">
          {manageMentRoutes}
        </ul>
      </div>
    </div>
  );
};

export default VendorDashboardAside;
