import { useState } from "react";
import {
  useCheckCouponMutation,
  useCreatePaymentLinkMutation,
} from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import CartPageSingleProduct from "../Ui/CartPageSingleProduct";
import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import { Link } from "react-router-dom";
 

const Cart = () => {
  const { products } = useAppSelector((s) => s.cartStore);
  const { loggedInUser } = useAppSelector((s) => s.authStore);
 
  const subTotal = () => {
    let total = 0;
    products?.forEach((item) => {
      total = item?.price + total;
    });

    return total;
  };

  const [send, startLoading] = useSendPost(useCheckCouponMutation); //initiate request
  const[address,setAddress]=useState<string>("")
  const showResponse = useShowResponse(); //initiate for manage loading and show res

  //  check coupon.
  const [coupneDis, setCoupneDis] = useState(0);

  const checkCoupon = async (e) => {
    e.preventDefault();

    const storeId = products[0]?.shop?.shopId;
    const code = e.target.code.value;

    startLoading();
    const response = await send({ code, storeId });
    showResponse(response);
 

    if (response?.data?.statusCode === 200) {
      setCoupneDis(response?.data?.data?.discount);
    }
    e.target.reset();
  };

  // make it.

  const [sendPaymentcrd, startLoader] = useSendPost(
    useCreatePaymentLinkMutation
  );

  const makePayment = async () => {
    const storeId = products[0]?.shop?.shopId;

    console.log(loggedInUser,storeId,address)
 
    if (!loggedInUser || !storeId || !address) return;
    const productsArr:string[] = [];
    products?.forEach((item) => productsArr.push(item.productId));

    const data = {
      amount: subTotal() - coupneDis,
      shopId: storeId,
      userId: loggedInUser?.userId,
      productsArr,
      address
    };

    startLoader();
    const response = await sendPaymentcrd(data);
    showResponse(response);
    if (response?.data?.statusCode === 200) {
      window.location.href = response.data?.data;
    }
  };

  return (
    <>
      <PageHeaderRouteing />
      {products?.length === 0 ? (
        <div className="min-h-[50vh] w-full flex justify-center items-center">
          <h1 className="font-semibold text-xl">No product on cart.</h1>
        </div>
      ) : (
        <div className="flex lg:flex-row flex-col mt-16 gap-10">
          <div className="flex flex-col gap-3 lg:w-[70%] rounded-xl p-6">
            {products?.map((item) => (
              <CartPageSingleProduct key={item.productId} data={item} />
            ))}
          </div>
          <div className="lg:w-[30%] bg-gray-100 p-5 min-h-12">
            <div className="text-xl flex gap-3 items-end">
              <h1 className="font-medium text-xl lg:text-2xl">
                Total product:
              </h1>{" "}
              <span className="text-lg lg:text-xl">{products.length}</span>
            </div>

            <div className="mt-16">
              <div className="text-xl flex gap-3 items-end">
                <h1 className="font-bold text-xl lg:text-lg">
                  Sub total:
                </h1>{" "}
                <span className="text-lg lg:text-lg">${subTotal()}</span>
              </div>

              <div className="text-xl flex gap-3 items-end border-b-2 border-[#ff8f00] pb-1">
                <h1 className="font-bold text-lg lg:text-lg">
                  CouponDiscount:
                </h1>{" "}
                <span className="text-lg lg:text-lg">${coupneDis}</span>
              </div>

              <div className="text-xl flex gap-3 items-end ">
                <h1 className="font-bold text-xl lg:text-lg">
                  Grand total:
                </h1>{" "}
                <span className="text-lg lg:text-lg">
                  ${subTotal() - coupneDis}
                </span>
              </div>
              <form
                onSubmit={checkCoupon}
                className="flex items-center gap-3 mt-6"
              >
                <input
                  name="code"
                  placeholder="Coupne code"
                  type="text"
                  className="border  outline-none border-[#ff8f07] rounded-md focus:border-[#ff8f00] text-lg p-1 py-0"
                />
                <button className="btn btn-sm bg-[#ff8f00] text-white">Apply</button>
              </form>

              <textarea value={address} onInput={(e)=>setAddress(e.target.value)} className="block w-full mt-4 rounded-md resize-none border border-[#ff8f07] pl-2 pt-2 min-h-[100px] focus:outline-[#ff8f00]" placeholder="Delivery Addres "></textarea>

              <button
                disabled={!address||!loggedInUser||loggedInUser?.status === "Block"}
                onClick={makePayment}
                className="btn bg-[#ff8f00] w-1/2 mt-5 text-lg text-white"
              >
                Pay
              </button>
              <h1 hidden={loggedInUser?true:false} className="text-red-500 mt-3">Please <Link className="font-bold underline text-red-600" to={"/login"}>Login</Link> to order !!</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
