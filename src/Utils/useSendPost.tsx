import { useAppDispatch } from "../Redux/feathcer/hoocks"
import { switchLoading } from "../Redux/feathcer/loadingSlice"

const useSendPost=(fn)=>{
const dispatch=useAppDispatch()
    const[send]=fn()

    const startLoading=()=>{
        dispatch(switchLoading())
    }

    return[send,startLoading]

}


export default useSendPost