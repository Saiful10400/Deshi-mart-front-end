import { useGetSingleOrAllStoreQuery } from "../../../Redux/api/api";
import SingleStoreCard from "../../Ui/SingleStoreCard";

 
const DashboardShops = () => {
    const{data}=useGetSingleOrAllStoreQuery(null)
    console.log(data)
    return (
        <div className="grid grid-cols-5 gap-5">
            {
                data?.data?.result?.map((item,idx)=><SingleStoreCard key={idx} data={item}/>)
            }
        </div>
    );
};

export default DashboardShops;