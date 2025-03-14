import { TtableData } from "../../../../Types";
import DashboardTable from "../../../Ui/DashboardTable";

 

const AllUser = () => {
    const tableData: TtableData = {
        mode: "admin",
        name: "User",
        tittle: "Manage Users",
        createRoute: "/admin-dashboard/create-category",
        keyValue: { Avatar: "userPhoto",
            Name: "userName",
            Email: "email",
            Role: "role",
            Status: "status",
            "Join On": "created",
             },
      };
    
      return (
        <div>
          <DashboardTable data={tableData} />
        </div>
      );
    };

export default AllUser;