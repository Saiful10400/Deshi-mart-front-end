
import { useEffect } from "react";
import loading from "../../../assets/loading.gif";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import useGetThenSetCurrentUser from "../../Utils/useGetThenSetCurrentUser";


const Loading = () => {
  const { loadingStatus } = useAppSelector((s) => s.loadingStore);


// set current loggedin user.
const setCurrentUser=useGetThenSetCurrentUser()
useEffect(()=>{
setCurrentUser()
},[])




  if (loadingStatus) {
    return (
      <div className="w-full h-screen fixed  top-0 left-0 z-50 bg-[#f0efef75] flex justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-3xl bg-white flex justify-center items-center">
          <img className="w-[100px]" src={loading} alt="" />
        </div>
      </div>
    );
  }
};

export default Loading;
