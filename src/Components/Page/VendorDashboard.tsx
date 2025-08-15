import { Outlet } from "react-router";
import { useState } from "react";
import VendorDashboardAside from "../Component/vendorDashboard/vendorDashboardAside";
import VendorDashboardHeader from "../Component/vendorDashboard/VendorDashboardHeader";
 

const VendorDashboard = () => {




    //aside bar handle.
    const[showAsideBar,setShowAsideBar]=useState(false)
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10 bg-[#f1f5f9]">
      <div className="lg:w-[15%] fixed z-30 lg:sticky top-0">
        <VendorDashboardAside setterFn={setShowAsideBar} setterState={showAsideBar}/>
      </div>
      <div className="lg:w-[80%]  px-3 w-full min-h-screen flex flex-col gap-7 lg:px-10">
        <VendorDashboardHeader setterFn={setShowAsideBar}  />
        <Outlet />
      </div>
    </div>
  );
};

export default VendorDashboard;
