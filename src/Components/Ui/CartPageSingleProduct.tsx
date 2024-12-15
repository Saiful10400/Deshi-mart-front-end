import { Tproduct } from "./SignleProductCard";

 

const CartPageSingleProduct = ({data}:{data:Tproduct}) => {
    return (
        <div className="border py-2 pr-4 flex items-center justify-between">
             
            <img className="w-[200px] h-[100px] object-contain" src={data.image} alt="" />
            <div>
                <h1 className="lg:text-2xl font-semibold text-[#fd8134]">{data?.name}</h1>
                <h1 className="lg:text-lg font-medium p-1 shadow-lg mt-5  rounded-lg">{data?.categoryref?.name}</h1>

            </div>
            <h1 className="lg:text-xl font-semibold">{data?.price} tk</h1>
        </div>
    );
};

export default CartPageSingleProduct;