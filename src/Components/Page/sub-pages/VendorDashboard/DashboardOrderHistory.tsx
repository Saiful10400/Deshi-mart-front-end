
import DashboardTable from "../../../Ui/DashboardTable";
import { TtableData } from "../../../../Types";

 

const DashboardOrderHistory = () => {




  const tableData: TtableData = {
    name: "Orders",
    mode:"admin",
    tittle: "Orders History",
    createRoute: "/vendor-dashboard/create-product",
    keyValue: {
      "Transection Id": "transectionId",
      "Payment Status": "paymentStatus",
      "Amount (tk)": "amount",
      "Created": "created",
    },
  };


    return (
      <div>
      <DashboardTable data={tableData} />
    </div>

    );
};

export default DashboardOrderHistory;