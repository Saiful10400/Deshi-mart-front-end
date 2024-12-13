import { useGetSingleOrAllProductsQuery } from "../../Redux/api/api";
import SectionTittle from "../Ui/SectionTittle";

 

const HomeAllProducts = () => {

    const{data}=useGetSingleOrAllProductsQuery({id:"3049e7b6-3cec-4a00-8b37-562825e21bd6"})
    console.log(data,"allData")
    

    return (
        <div>
            <SectionTittle txt="All products"/>
        </div>
    );
};

export default HomeAllProducts;