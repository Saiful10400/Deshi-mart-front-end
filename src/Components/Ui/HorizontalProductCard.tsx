import { Star, StarHalf } from "lucide-react";
import { Tproduct } from "./SignleProductCard";
import { Link } from "react-router-dom";
import { clearCart, setProduct } from "../../Redux/feathcer/CartSlice";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";

const HorizontalProductCard = ({ data }: { data: Tproduct }) => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((s) => s.cartStore);

  const productAddandle = () => {
    const isexist = products?.find(
      (item) => item?.shop?.shopId === data?.shop?.shopId
    );

    if (!isexist && products.length > 0) {
      Swal.fire({
        title: "You cant't add multiple shop product into the cart.",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Replace all with new",
        denyButtonText: `Retain the current`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart(data));
          Swal.fire("All cart product replaced", "", "success");
        }
      });
    } else {
      dispatch(setProduct(data));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between shadow-lg rounded-lg p-2 lg:px-5">
      <Link
        to={`/product/${data.productId}`}
        className="flex items-center flex-col lg:flex-row gap-9"
      >
        <img className="w-[150px] h-[150px]" src={data.image} alt="" />
        <div>
          <h1 className="text-xl mt-5 font-semibold mb-4">{data.name}</h1>
          <span className="p-1 bg-gray-100 shadow-sm  rounded-sm">
            {data.categoryref.name}
          </span>
          <div className="text-yellow-400 flex items-center gap-1 mt-4">
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <Star width={20} height={20} />
            <StarHalf width={20} height={20} />
            <span className="text-black">{data._count.review}</span>
          </div>
        </div>

        <p className="lg:w-[50%]">{data.description.slice(0, 200) + "..."}</p>
      </Link>

      <div className="h-full mt-4 lg:mt-0 lg:w-[20%] flex justify-center items-center flex-col gap-3">
        <h1 className="font-semibold text-xl">{data?.price} Tk</h1>
        <button
          onClick={productAddandle}
          className="btn btn-md btn-primary bg-transparent text-black hover:bg-transparent hover:border-[#f27f20] border-[#f27f20]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
