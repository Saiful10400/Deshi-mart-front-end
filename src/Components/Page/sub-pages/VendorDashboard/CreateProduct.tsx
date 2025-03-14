import { TinputDashboardForm } from "../../../../Types";
import DashboardForm from "../../../Ui/DashboardForm";
import DropDown from "../../../Ui/DropDown";
import RichTextEditor from "../../../Ui/RichTextEditor";


interface TproductCreate{
    description: string;
    image: string;
    name: string;
    price: number; // assuming price is passed as a string, convert to number
    shopId: string; // assuming shopId is a string (UUID or similar)
    inventoryCount: number; // assuming inventoryCount is passed as a string, convert to number
    categoryId: string; // assuming categoryId is a string (UUID or similar)
    flashSale: boolean; // "yes" or any other value
    brandId: string;
    slug: string;
    discount: number;
}
 

const CreateProduct = () => {

  const formData: TinputDashboardForm = {
    name: "Product",
    tittle: "Add New Product",
    manageRoute: "/vendor-dashboard/all-products",
    fields: [
        { name: "Product Name",key:"name", type: "text",},
        { name: "Product Slug",key:"slug", type: "text",},
        [{ name: "Product Price",key:"price", type: "number"},{ name: "Stock Available",key:"inventoryCount", type: "number"}],
        [{ name: "Brand",key:"brandId", type: "dropDown",dropDownListConfig:{key:"brandId",listOf:"brand",tittle:"name",avatar:"logo"}},
        { name: "Category",key:"categoryId", type: "dropDown",dropDownListConfig:{key:"categoryId",listOf:"category",tittle:"name",avatar:"logo"}}],
      { name: "Thumbnail Image",key:"image", type: "file", multiple: false,image:true },
      { name: "Product Images",key:"carouselImages", type: "file", multiple: true,image:true },
      { name: "Product Description",key:"description", type: "RichTextEditor"},
    ],
  };



    return (
        <div>
             <DashboardForm data={formData} />

        </div>
    );
};

export default CreateProduct;