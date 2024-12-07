import { useEffect, useState } from "react";
import Loading from "../Components/SharedComponent/Loading";
import { useAppDispatch, useAppSelector } from "../Redux/feathcer/hoocks";
import { getToken } from "./getToken";
import { setLoading, setUser } from "../Redux/feathcer/AuthSlice";
import { useGetLoggedInUserQuery } from "../Redux/api/api";
import Unauthorized from "../Components/Layouts/Unauthorized/Unauthorized";
import axios from "axios";

const PrivateRoute = ({ children,role }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!getToken())return
    axios
      .get("https://apollow-assignment-5-back-end.vercel.app/api/auth/getCurrentUser", {
        headers: {
          authorization: getToken(),
        },
      })
      .then((res) => {
        console.log("from root.");
        dispatch(setUser(res.data.data));
      });
  }, []);

  const { loggedInUser, isLoading } = useAppSelector(
    (state) => state.authStore
  );

  if (!getToken()) return <Unauthorized />;
  if (isLoading) return <Loading />;
  if (!role?.includes(loggedInUser.role)) return <Unauthorized />;
  return children;
};

export default PrivateRoute;
