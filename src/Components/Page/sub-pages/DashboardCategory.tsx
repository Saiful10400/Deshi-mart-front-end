import { useGetAllCategoryQuery } from "../../../Redux/api/api";
import CreateCategory from "../../Ui/CreateCategory";
import UpdateCategory from "../../Ui/UpdateCategory";

 

const DashboardCategory = () => {

    const{data}=useGetAllCategoryQuery(null)
    

    return (
        <div className="grid grid-cols-6 gap-6">
            <CreateCategory/>
            {
                data?.data?.map(item=><UpdateCategory key={item.categoryId} data={item}/>)
            }
        </div>
    );
};

export default DashboardCategory;