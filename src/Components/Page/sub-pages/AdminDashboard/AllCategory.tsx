import { TtableData } from "../../../../Types";
import DashboardTable from "../../../Ui/DashboardTable";
 

 

const AllCategory = () => {
 
    
   


    const tableData:TtableData = {
        name: "Category",
        tittle: "Manage Category",
        createRoute: "/admin-dashboard/create-category",
         keyValue:{Image:"logo",Name:"name","Last Updated":"updated"}
         
      };
    
    
    
        return (
            <div>
                <DashboardTable data={tableData}/>
            </div>
        );
    };

export default AllCategory;