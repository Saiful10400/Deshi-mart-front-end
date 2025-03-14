import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import { TinputDashboardForm, Tuser } from "../../../../Types";
import DashboardForm from "../../../Ui/DashboardForm";

 
const CreateShop = () => {

        const { loggedInUser }: { loggedInUser: Tuser | null } = useAppSelector(
            (s) => s.authStore
          );
    if(loggedInUser===null) return
        const formData: TinputDashboardForm = {
            name: "Create Shop",
            operation:"create",
            tittle: "Create Shop",
            manageRoute: "/vendor-dashboard/my-shop",
            fields: [
              [
                { name: "Shop Name",key:"name", type: "text", defaultValue:"name",required:false },
                { name: "Logo",key:"logo", type: "file", multiple: false,image:true,required:false }
              ],
              { name: "Description",key:"description", type: "textArea", multiple: false,defaultValue:"description",required:false },
            ],
          };



    return (
        <div>
        <DashboardForm  data={formData} />  
 </div>
    );
};

export default CreateShop;