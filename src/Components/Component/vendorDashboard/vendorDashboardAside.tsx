import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { ArrowLeftRight, BoxesIcon, ChartBar, History, MessageCircleHeart, Store, StoreIcon, Users, X } from "lucide-react";

const VendorDashboardAside = ({ setterFn, setterState }) => {
  const manageMentRoutes = (
    <>
      <NavLink
        to={"my-shop"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <Store /> My shop
      </NavLink>
      <NavLink
        to={"my-products"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <BoxesIcon /> My products
      </NavLink>
      <NavLink
        to={"customers-review"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <MessageCircleHeart /> Customers review
      </NavLink>
    </>
  );

  const monitorRoutes = (
    <>
      <NavLink
        to={"order-history"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <History /> Order history
      </NavLink>
    </>
  );

  console.log(window.innerWidth);
  return (
    <div
      className={`bg-[#ececec] min-h-screen lg:pt-6 pl-3 fixed lg:relative  ${
        setterState ? "block" : window.innerWidth < 600 && "hidden"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"}><img className="w-[70%]" src={logo} alt="" /></Link>
        <button onClick={() => setterFn(false)} className="lg:hidden">
          <X />
        </button>
      </div>

      <div className="mt-20">
        <h1 className="font-semibold text-lg text-gray-700">Monitor</h1>

        <ul className="pt-5 lg:pl-2 lg:pr-6 flex flex-col gap-3">
          {monitorRoutes}
        </ul>
      </div>

      <div className="mt-10">
        <h1 className="font-semibold text-lg text-gray-700">Management</h1>

        <ul className="pt-5 lg:pl-2 lg:pr-6 flex flex-col gap-3">
          {manageMentRoutes}
        </ul>
      </div>
    </div>
  );
};

export default VendorDashboardAside;
