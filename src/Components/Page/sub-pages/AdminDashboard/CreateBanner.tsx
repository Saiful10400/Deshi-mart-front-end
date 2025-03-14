import { TinputDashboardForm } from "../../../../Types";
import DashboardForm from "../../../Ui/DashboardForm";

 

const CreateBanner = () => {

      const formData: TinputDashboardForm = {
        name: "Banner",
        tittle: "Create New Banner",
        manageRoute: "/admin-dashboard/all-banners",
        fields: [
          [
              { name: "Banner (1550*500)px",key:"bannerUrl", type: "file", multiple: false,image:true },
              { name: "Redirect Route (optional)",key:"route", type: "text" },
          ],
        ],
      };


    return (
        <div>
            <DashboardForm data={formData} />
        </div>
    );
};

export default CreateBanner;