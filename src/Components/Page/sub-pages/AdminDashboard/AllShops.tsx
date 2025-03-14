import DashboardTable from "../../../Ui/DashboardTable";
import { TtableData } from "../../../../Types";

const AllShops = () => {
  const tableData: TtableData = {
    mode: "admin",
    name: "Shop",
    tittle: "Manage Shops",
    createRoute: "/admin-dashboard/create-category",
    keyValue: { Logo: "logo",
         Name: "name",
         "Total Products": "Total Products",
         "Total Orders": "Total Orders",
         "Total Followers": "Total Followers",
         "Status": "status",
         "Join On": "created",
         },
  };

  return (
    <div>
      <DashboardTable data={tableData} />
    </div>
  );
};

export default AllShops;
