import { TinputDashboardForm } from "../../../../Types";
import DashboardForm from "../../../Ui/DashboardForm";

 

const CreateCategory = () => {
    const formData: TinputDashboardForm = {
        name: "Category",
        tittle: "Create New Category",
        manageRoute: "/admin-dashboard/all-categorys",
        fields: [
          [
            { name: "Category Name",key:"name", type: "text" },
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

export default CreateCategory;