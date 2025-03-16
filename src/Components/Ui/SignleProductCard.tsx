import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import { clearCart, setProduct } from "../../Redux/feathcer/CartSlice";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { ShoppingBag, Star } from "lucide-react";
import { Image } from "@nextui-org/react";
export type Tproduct = {
  image: string;
  name: string;
  slug: string;
  productId: string;
  discount: number;
  categoryref: {
    name: string;
  };
  description: string;
  flashSale: boolean;
  inventoryCount: number;
  price: number;
  _count: {
    review: number;
  };
  created: string; // ISO date string
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

const SignleProductCard = ({ data }: { data: Tproduct }) => {
  // add to cart handle.
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
    <div className="w-full hover:-translate-y-3 duration-300 p-4 pt-0 border rounded-lg shadow-md bg-white relative">
      <Link
        className="flex flex-col pt-2 justify-center items-center"
        to={`/product/${data.slug}`}
      >
        {data.flashSale && (
          <div className="absolute top-[50px] left-[-20px] bg-[#ed2939] text-white text-xs px-2 py-1 font-bold -rotate-90">
            OFF {data?.discount}%
          </div>
        )}

        <Image
          className="h-[200px] rounded-lg w-full object-contain"
          isZoomed
          alt="Product image"
          src={data.image}
          width={200}
        />
        <section className="text-center w-full">
          <h2 className="text-base h-[50px] flex justify-start items-end text-start font-bold text-gray-700 mb-2">
            {data.name?.length <= 70
              ? data?.name
              : data?.name?.slice(0, 70) + "..."}
          </h2>

          <div className="flex items-center mb-3 justify-between">
            <div className=" flex items-center">
              <span className="text-orange-500 text-lg font-bold mr-2">
                ${data.price - data.price * (data.discount / 100)}
              </span>
              {data?.flashSale && (
                <span className="text-gray-400 line-through text-sm">
                  ${data.price}
                </span>
              )}
            </div>
            <div>
              <Rating
                initialRating={2.5}
                readonly
                emptySymbol={
                  <Star
                    height={20}
                    width={20}
                    fill="#d1d5db"
                    className="text-transparent"
                  />
                }
                fullSymbol={
                  <Star
                    height={20}
                    width={20}
                    fill="#fbbf24"
                    className="text-transparent"
                  />
                }
              />
            </div>
          </div>
        </section>
      </Link>

      <div className="flex items-center justify-between">
        <button
          onClick={productAddandle}
          className="bg-[#ffceab] duration-150 w-full hover:bg-orange-500 text-[#f9771d] hover:text-white  font-bold py-2 px-4 rounded flex items-center justify-center gap-6"
        >
          <ShoppingBag height={20} width={20} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SignleProductCard;

// <div className="shadow-md rounded-lg relative py-3">
//    {data?.flashSale && <img className="absolute top-0 left-0 w-[50px] h-[60px] rounded-full object-cover" src={hotDeal} alt="" />}

//     <div className="flex justify-evenly mt-3 items-center">
//       <Link
//         to={`/product/${data.productId}`}
//         className="btn btn-sm btn-primary text-white bg-[#f27f20] border-[#f27f20] hover:bg-[#f27f20] hover:border-none border-none"
//       >
//         Details
//       </Link>
//       <button
//         onClick={productAddandle}
//         className="btn btn-sm btn-primary bg-transparent text-black hover:bg-transparent hover:border-[#f27f20] border-[#f27f20]"
//       >
//         Add to cart
//       </button>
//     </div>
//   </div>
