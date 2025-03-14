import { useState } from "react";
import { useCheckCouponMutation, useCreatePaymentLinkMutation } from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import CartPageSingleProduct from "../Ui/CartPageSingleProduct";

const Cart = () => {
  const { products } = useAppSelector((s) => s.cartStore);
  const{loggedInUser}=useAppSelector(s=>s.authStore)

 const subTotal=()=>{
    let total=0
    products?.forEach(item=>{
        total=item?.price+total
    })

    return total
 }


 const [send, startLoading] = useSendPost(useCheckCouponMutation); //initiate request
  
 const showResponse = useShowResponse(); //initiate for manage loading and show res


//  check coupon.
const[coupneDis,setCoupneDis]=useState(0)

const checkCoupon=async(e)=>{
    e.preventDefault()

    const storeId=products[0]?.shop?.shopId
    const code=e.target.code.value

    startLoading()
    const response=await send({code,storeId})
    showResponse(response)
    console.log(response)

    if(response?.data?.statusCode===200){
      
        setCoupneDis(response?.data?.data?.discount)
    }
    e.target.reset()
    
}

console.log(products)


// make it.

const [sendPaymentcrd, startLoader] = useSendPost(useCreatePaymentLinkMutation); 

const makePayment=async()=>{
    const storeId=products[0]?.shop?.shopId

    if(!loggedInUser ||!storeId) return

    const productsArr=[]
    products?.forEach(item=>productsArr.push(item.productId))


    const data={amount:subTotal()-coupneDis,shopId:storeId,userId:loggedInUser?.userId,productsArr}
    
    startLoader()
    const response=await sendPaymentcrd(data)
    showResponse(response)
    if(response?.data?.statusCode===200){
        window.location.href=response.data?.data
    }

}



console.log(loggedInUser)



  return (
    products?.length===0?<div className="min-h-[50vh] w-full flex justify-center items-center">
<h1 className="font-semibold text-xl">No product on cart.</h1>
    </div> :
    <div className="flex lg:flex-row flex-col mt-16 gap-10">
    <div className="flex flex-col gap-3 lg:w-[70%] rounded-xl p-6">
      {products?.map((item) => (
        <CartPageSingleProduct key={item.productId} data={item} />
      ))}
    </div>
    <div className="lg:w-[30%] p-5 min-h-12 rounded-xl">

      <form onSubmit={checkCoupon} className="flex items-center gap-3 mb-6">
          <input name="code" placeholder="Coupne code" type="text" className="border outline-none border-black rounded-sm text-lg p-1 py-0" />
          <button className="btn btn-sm btn-success">Apply</button>
      </form>


      <div className="text-xl flex gap-3 items-end">
        <h1 className="font-semibold text-xl lg:text-2xl">Total product:</h1>{" "}
        <span className="text-lg lg:text-xl">{products.length}</span>
      </div>


      <div className="mt-16">
      <div className="text-xl flex gap-3 items-end">
        <h1 className="font-semibold text-xl lg:text-2xl">Sub total:</h1>{" "}
        <span className="text-lg lg:text-xl">{subTotal()} tk</span>
      </div>


      <div className="text-xl flex gap-3 items-end border-b-2 border-black pb-3">
        <h1 className="font-semibold text-xl lg:text-2xl">CouponDiscount:</h1>{" "}
        <span className="text-lg lg:text-xl">{coupneDis}</span>
      </div>

      <div className="text-xl flex gap-3 items-end ">
        <h1 className="font-semibold text-xl lg:text-2xl">Grand total:</h1>{" "}
        <span className="text-lg lg:text-xl">{subTotal()-coupneDis}</span>
      </div>

      <button disabled={loggedInUser?.status==="Block"} onClick={makePayment} className="btn btn-warning w-1/2 mt-5 text-lg">Pay</button>
      
      </div>

     







    </div>
  </div>
  );
};

export default Cart;
