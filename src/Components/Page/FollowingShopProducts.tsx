 
import { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/feathcer/hoocks";


import axios from "axios";
import SignleProductCard from "../Ui/SignleProductCard";
 


const FollowingShopProducts = () => {




    const { loggedInUser } = useAppSelector((s) => s.authStore);

  
 
   

console.log(loggedInUser)


const [data,setData]=useState([])



useEffect(()=>{
    if(loggedInUser){
        axios.post(`https://e-commerce9.vercel.app/api/common/product-following`,{followingStore:loggedInUser?.followingStore})
        .then(res=>setData(res?.data?.data))
    }

},[loggedInUser])


    return (
        <div>
            <h1 className="text-center lg:text-3xl mt-6 font-semibold">Following Shop Product</h1>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-5">
                {data?.map((item,idx)=>{
                    return(<SignleProductCard key={idx} data={item}/>)

                })}
            </div>


        






            
        </div>
    );
};

export default FollowingShopProducts;