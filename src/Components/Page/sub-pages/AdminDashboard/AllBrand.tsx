 
import { TtableData } from "../../../../Types";
import DashboardTable from "../../../Ui/DashboardTable";

 

const AllBrand = () => {

    
   


 const tableData:TtableData = {
    name: "Brand",
    tittle: "Manage Brands",
    createRoute: "/admin-dashboard/create-brand",
     keyValue:{Logo:"logo",Name:"name","Last Updated":"updated"}
     
  };



    return (
        <div>
            <DashboardTable data={tableData}/>
        </div>
    );
};

export default AllBrand;