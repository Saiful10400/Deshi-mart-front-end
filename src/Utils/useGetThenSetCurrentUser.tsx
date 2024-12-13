import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../Redux/api/api";
import { useAppDispatch } from "../Redux/feathcer/hoocks";
import { setUser } from "../Redux/feathcer/AuthSlice";

const useGetThenSetCurrentUser = () => {

    const[runTheWholeFn,setRunTheWholeFn]=useState(false)
  // setting up current loggedin user.
  const token = localStorage.getItem("token");

  const [crd, setCrd] = useState({ token: "", skip: true });

  const { data } = useGetLoggedInUserQuery(crd.token, { skip: crd.skip });

  useEffect(() => {
    if (token) {
      setCrd({ token: token, skip: false });
    }
  }, [token,runTheWholeFn]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.data));
    }
  }, [data, dispatch]);


  const runFN=()=>{
    setRunTheWholeFn(true)
  }

  return runFN



};

export default useGetThenSetCurrentUser;
