import { useEffect, useState } from "react";
import { useGetRecentProductQuery } from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import SignleProductCard from "../Ui/SignleProductCard";

 

const NavHistoryProducts = () => {

    const{loggedInUser}=useAppSelector(s=>s.authStore)

    const[cred,setCred]=useState({skip:true,id:""})

    const{data,refetch}=useGetRecentProductQuery(cred,{skip:cred.skip})

    useEffect(()=>{

        if(loggedInUser){
            setCred({skip:false,id:loggedInUser?.userId})
        }

    },[loggedInUser])

   


    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ">
            {
                data?.data?.map(item=><SignleProductCard key={item.product.productId} data={item.product}/>)
            }
        </div>
    );
};

export default NavHistoryProducts;