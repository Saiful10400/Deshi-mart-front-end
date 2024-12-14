import { Outlet } from "react-router";
import { useState } from "react";
import VendorDashboardAside from "../Component/vendorDashboard/vendorDashboardAside";
import VendorDashboardHeader from "../Component/vendorDashboard/VendorDashboardHeader";

const VendorDashboard = () => {
    //aside bar handle.
    const[showAsideBar,setShowAsideBar]=useState(false)
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10">
      <div className="lg:w-[15%]">
        <VendorDashboardAside setterFn={setShowAsideBar} setterState={showAsideBar}/>
      </div>
      <div className="lg:w-[85%] px-3 w-full flex flex-col gap-7 lg:px-10">
        <VendorDashboardHeader setterFn={setShowAsideBar}  />
        <Outlet />
      </div>
    </div>
  );
};

export default VendorDashboard;
