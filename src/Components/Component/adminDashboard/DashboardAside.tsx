import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { ArrowLeftRight, ChartBar, StoreIcon, Users, X } from "lucide-react";
import "./dashboard.css";
 
const DashboardAside = ({setterFn,setterState}) => {
  const manageMentRoutes = (
    <>
      <NavLink
        to={"users"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <Users /> Users
      </NavLink>
      <NavLink
        to={"shops"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <StoreIcon /> Shops
      </NavLink>
      <NavLink
        to={"categorys"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <ChartBar /> Product categorys
      </NavLink>
    </>
  );

  const monitorRoutes = (
    <>
      <NavLink
        to={"transections"}
        className="text-lg flex items-center gap-2 font-medium pl-2 py-2 rounded-lg"
      >
        <ArrowLeftRight /> Transections
      </NavLink>
    </>
  );


console.log(window.innerWidth)
  return (
    <div className={`bg-[#ececec] min-h-screen lg:pt-6 pl-3 fixed lg:relative  ${setterState?"block":window.innerWidth<600&&"hidden"}`}>
      <div className="flex items-center justify-between">
      <img className="w-[70%]" src={logo} alt="" />
      <button onClick={()=>setterFn(false)} className="lg:hidden"><X/></button>
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

export default DashboardAside;
