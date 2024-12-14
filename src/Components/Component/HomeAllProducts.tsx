import { useGetSingleOrAllProductsQuery } from "../../Redux/api/api";
import SectionTittle from "../Ui/SectionTittle";
import SignleProductCard, { Tproduct } from "../Ui/SignleProductCard";

 

const HomeAllProducts = () => {

    // const{data}=useGetSingleOrAllProductsQuery({id:"3049e7b6-3cec-4a00-8b37-562825e21bd6"})
    const{data}=useGetSingleOrAllProductsQuery(null)

    

    return (
        <div>
            <SectionTittle txt="All products"/>


<div className="grid grid-cols-1 lg:grid-cols-5 pl-5 gap-5">
    {
        data?.data?.result?.map((item:Tproduct,idx:number)=><SignleProductCard key={idx} data={item}/>)
    }
</div>



        </div>
    );
};

export default HomeAllProducts;