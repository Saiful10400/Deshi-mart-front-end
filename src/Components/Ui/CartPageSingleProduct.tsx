import { useNavigate } from "react-router";
import { Tproduct } from "./SignleProductCard";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { searchByBrand, searchByCategory } from "../../Redux/feathcer/ProductSearchingSlice";

 

const CartPageSingleProduct = ({data}:{data:Tproduct}) => {
 const move=useNavigate()
 const dispatch=useAppDispatch()
    return (
        <div className="border-t py-2 pr-4 flex gap-2 items-center justify-between">
             
            <img className="w-[200px] h-[100px] object-contain" src={data.image} alt="" />
            <div className=" w-full flex flex-col pl-2 gap-2">
                <h1 className="lg:text-xl font-medium  ">{data?.name}</h1>
                <button onClick={()=>{
                    dispatch(searchByCategory(data?.categoryref?.name))
                    move("/all-product")
                }} className="lg:text-sm font-medium text-gray-500 px-2 border border-[#fd930b] rounded-3xl inline-block w-max">{data?.categoryref?.name}</button>
                <button  onClick={()=>{
                    dispatch(searchByBrand(data?.brand?.name))
                    move("/all-product")
                }} className="lg:text-sm font-medium inline-block w-max pl-2 text-[#fd930b] ">{data?.brand?.name}</button>

            </div>
            <h1 className="lg:text-xl w-max font-semibold">${data?.price}</h1>
        </div>
    );
};

export default CartPageSingleProduct;