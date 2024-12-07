
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setLoading, setUser } from "../../../Redux/feathcer/AuthSlice";
import { getToken } from "../../../Utils/getToken";
import MyBookingAsideNav from "./SubBranch/Asidenav/MyBookingAsideNav";
import axios from "axios";


const MybookingRoot = () => {


  const dispatch = useAppDispatch();



  useEffect(() => {
    axios.get("https://apollow-assignment-5-back-end.vercel.app/api/auth/getCurrentUser", {
      headers: {
        authorization: getToken() ,
      }
    }).then(res=>{
      console.log(res.data,"my booking")
      dispatch(setUser(res.data.data))
 
    })
  }, []);




  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-9 items-start w-full box-border lg:pl-14 lg:pt-16 justify-start">
      <MyBookingAsideNav />
      <div className="w-full lg:w-[1300px] px-4 lg:px-0">
      <Outlet />
      </div>
    </div>
  );
};

export default MybookingRoot;
