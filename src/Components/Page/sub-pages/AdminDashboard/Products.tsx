import { TtableData } from "../../../../Types";
import DashboardTable from "../../../Ui/DashboardTable";

 

const Products = () => {
    

    const tableData:TtableData = {
        mode:"admin",
        name: "Product",
        tittle: "Manage Products",
        createRoute: "/admin-dashboard/create-brand",
         keyValue:{Image:"image",Name:"name","Price(tk)":"price",Shop:"shopName",Category:"category",Brand:"brand","Last Updated":"updated"}
         
      };
    
    
    
        return (
            <div>
                <DashboardTable data={tableData}/>
            </div>
        );
    };

export default Products;