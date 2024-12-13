import { Outlet } from "react-router";
import DashboardAside from "../Component/Dashboard/DashboardAside";
import DashboardHeader from "../Component/Dashboard/DashboardHeader";
import { useState } from "react";

const AdminDashboard = () => {
    //aside bar handle.
    const[showAsideBar,setShowAsideBar]=useState(false)
  return (
    <div className="flex flex-col lg:flex-row items-start gap-10">
      <div className="lg:w-[15%]">
        <DashboardAside setterFn={setShowAsideBar} setterState={showAsideBar}/>
      </div>
      <div className="lg:w-[85%] px-3 w-full flex flex-col gap-7 lg:px-10">
        <DashboardHeader setterFn={setShowAsideBar}  />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
