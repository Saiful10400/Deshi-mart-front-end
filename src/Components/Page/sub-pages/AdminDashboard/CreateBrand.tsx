import { TinputDashboardForm } from "../../../../Types";
import DashboardForm from "../../../Ui/DashboardForm";

const CreateBrand = () => {
  const formData: TinputDashboardForm = {
    name: "Brand",
    tittle: "Create New Brand",
    manageRoute: "/admin-dashboard/all-brands",
    fields: [
      [
        { name: "Brand Name",key:"name", type: "text" },
        { name: "Slug",key:"slug", type: "text" },
      ],
      { name: "Logo",key:"logo", type: "file", multiple: false,image:true },
    ],
  };

  return (
    <div>
      <DashboardForm data={formData} />
    </div>
  );
};

export default CreateBrand;
