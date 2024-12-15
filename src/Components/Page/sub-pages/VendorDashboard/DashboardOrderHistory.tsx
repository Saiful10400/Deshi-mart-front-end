import { useEffect, useState } from "react";
import numberToNumberArray from "../../../../Utils/numberToNumberArray";
import { useGetAllorderbyIdQuery } from "../../../../Redux/api/api";
import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import SingleTransectionCard from "../../../Ui/SingleTransectionCard";

 

const DashboardOrderHistory = () => {




    const { loggedInUser } = useAppSelector((s) => s.authStore);

  








 


    const [cred, setCred] = useState({ skip: true, id: "", role: "user",page:1 });
   
    const { data,refetch } = useGetAllorderbyIdQuery(cred, { skip: cred.skip });
   
    const totalData = data?.data?.count;
    const steps = numberToNumberArray(Math.ceil(totalData / 10));
    
   
   
    useEffect(() => {
       if (loggedInUser?.vendor?.shopId?.shopId) {
         setCred({ skip: false, id: loggedInUser?.vendor?.shopId?.shopId, role: "vendor",page:1 });
       }
     }, [loggedInUser]);





    return (
            <>
    
    
    
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
      {data?.data?.result?.map((item, idx) => (
        <SingleTransectionCard key={idx} data={item} />
      ))}
    </div>




<div className="flex mt-7 justify-center items-center gap-4">
{steps?.map((item) => (
  <button
    onClick={() => {
      setCred((prev) => ({ ...prev, page: item }));
      refetch();
    }}
    className="btn btn-primary"
    key={item}
  >
    {item}
  </button>
))}
</div>
    
    
    
    </>

    );
};

export default DashboardOrderHistory;