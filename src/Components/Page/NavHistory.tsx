import { Box, Eye } from "lucide-react";
import { Outlet } from "react-router";
import {  NavLink } from "react-router-dom";
import "./css/navHistory.css"
const NavHistory = () => {
  return (
    <div className="flex mt-7 flex-col lg:flex-row lg:gap-10">
      <ul className="lg:w-[15%] mb-4 flex  lg:flex-col gap-3 lg:min-h-[30vh]">


        <NavLink end to={"/history"} className="flex  w-full text-lg rounded-lg font-semibold gap-3 p-2 items-center">
           <Eye/> Last visit
        </NavLink>

        <NavLink to={"/history/last-orders"} className="flex w-full  text-lg rounded-lg font-semibold gap-3 p-2 items-center">
           <Box/> Last orders
        </NavLink>
     
      </ul>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default NavHistory;
