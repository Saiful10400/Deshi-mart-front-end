import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import { useGetAstoreAllreveiwQuery } from "../../../../Redux/api/api";
import ReviewReplyCart from "../../../Ui/ReviewReplyCart";


const DashboardCustomersReview = () => {

    const{loggedInUser}=useAppSelector(s=>s.authStore)

const [cred,setCrd]=useState({id:"",skip:true})

const{data}= useGetAstoreAllreveiwQuery(cred,{skip:cred.skip})


useEffect(()=>{
if(loggedInUser?.vendor?.shopId?.shopId){
setCrd({id:loggedInUser?.vendor?.shopId?.shopId,skip:false})
}
},[loggedInUser])


console.log(data)


    return (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {
                data?.data?.map((item,idx)=><ReviewReplyCart key={idx} data={item}/>)
            }
        </div>
    );
};

export default DashboardCustomersReview;