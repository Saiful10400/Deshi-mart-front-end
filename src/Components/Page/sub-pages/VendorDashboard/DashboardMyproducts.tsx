import DashboardTable from "../../../Ui/DashboardTable";
import { TtableData } from "../../../../Types";

const DashboardMyproducts = () => {
  const tableData: TtableData = {
    name: "Shop Product",
    tittle: "My Products",
    createRoute: "/vendor-dashboard/create-product",
    keyValue: {
      Image: "image",
      Name: "name",
      Price: "price",
      "Discount (%)": "discount",
      "Flash Sale": "flashSale",
      "Last Updated": "updated",
    },
  };

  return (
    <div>
      <DashboardTable data={tableData} />
    </div>
  );
};

export default DashboardMyproducts;
