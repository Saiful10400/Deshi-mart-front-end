import {  useState } from "react";
import banner from "../../../assets/flahSale/flshSale.svg" 
import { useGetAllProductQuery } from "../../Redux/api/api";
 
import numberToNumberArray from "../../Utils/numberToNumberArray";
import SignleProductCard from "../Ui/SignleProductCard";
import SectionTittle from "../Ui/SectionTittle";

const FlashSale = () => {


 




const [page,setPage]=useState(1)
   
const { data } = useGetAllProductQuery({offset:(page-1)*10,limit:10,flashSale:true});


const totalData = data?.data?.total;
const steps = numberToNumberArray(Math.ceil(totalData / 10));

 

console.log(data)




    return (
        <div>


   <img className="lg:w-[70%] h-[150px] mx-auto mb-12" src={banner} alt="" />
           <SectionTittle txt="Flash sale products" />  


            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                {data?.data?.result?.map(item=><SignleProductCard key={item.productId} data={item}/>)}
            </div>







<div className="flex mt-7 justify-center items-center gap-4">
{steps?.map((item) => (
  <button
    onClick={() => {
      setPage(item);
     
    }}
    className="btn btn-primary"
    key={item}
  >
    {item}
  </button>
))}
</div>



         
        </div>
    );
};

export default FlashSale;





