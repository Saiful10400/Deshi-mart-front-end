import { useEffect, useState } from "react";
import AsideNav from "../../Layouts/AdminDashboard/AsideNav/AsideNav";
import { Outlet } from "react-router";
import { useGetLoggedInUserQuery } from "../../../Redux/api/api";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setLoading, setUser } from "../../../Redux/feathcer/AuthSlice";
import { getToken } from "../../../Utils/getToken";
import axios from "axios";

const AdminDashboard = () => {



  return (
    <div className="flex flex-col lg:flex-row gap-x-9 items-start w-full box-border lg:pl-14 lg:pt-16 justify-start">
      <AsideNav />
      <div className="w-full lg:w-[1300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
