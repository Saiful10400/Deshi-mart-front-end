import { TtableData } from "../../../../Types";
import DashboardTable from "../../../Ui/DashboardTable";

 

const AllBanner = () => {
 const tableData:TtableData = {
    name: "Banner",
    tittle: "Manage Banners",
    createRoute: "/admin-dashboard/create-banner",
     keyValue:{Banner:"bannerUrl","Redirect To":"route","Last Updated":"updated"}
     
  };


    return (
        <div>
             <DashboardTable data={tableData}/>
        </div>
    );
};

export default AllBanner;