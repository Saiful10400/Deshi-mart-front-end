import { useAppDispatch } from "../Redux/feathcer/hoocks";
import { switchLoading } from "../Redux/feathcer/loadingSlice";
import notification from "./showMessage";




const useShowResponse = () => {
    const dispatch=useAppDispatch()
    const responseShow=({data})=>{
       
        dispatch(switchLoading())
        if(data?.statusCode===200||data?.success===true){
            notification(data?.message,"success")
        } else{
            notification(data?.message || "something is wrong!","error")
        }
         

    }

    return responseShow
  
};

export default useShowResponse;




    
