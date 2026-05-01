import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import { clearCart, setProduct } from "../../Redux/feathcer/CartSlice";
import Swal from "sweetalert2";
import { ShoppingBag } from "lucide-react";
import { Image } from "@nextui-org/react";

export type Tproduct = {
  image: string;
  name: string;
  slug: string;
  productId: string;
  discount: number;
  description: string;
  price: number;
  flashSale: boolean;
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

// ✅ remove HTML tags
const stripHtml = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const SignleProductCard = ({ data }: { data: Tproduct }) => {
  const dispatch = useAppDispatch();
  const move = useNavigate();
  const { products } = useAppSelector((s) => s.cartStore);

  const productAddandle = () => {
    const isexist = products?.find(
      (item) => item?.shop?.shopId === data?.shop?.shopId
    );

    if (!isexist && products.length > 0) {
      Swal.fire({
        title: "You can't add multiple shop products into the cart.",
        showDenyButton: true,
        confirmButtonText: "Replace all with new",
        denyButtonText: `Keep current`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart(data));
          Swal.fire("Cart replaced", "", "success");
        }
      });
    } else {
      dispatch(setProduct(data));
    }
  };

  const discountedPrice =
    data.price - data.price * (data.discount / 100);

  const plainDescription = stripHtml(data.description);

  return (
    <div className="w-full hover:-translate-y-3 duration-300 p-4 border rounded-lg shadow-md bg-white flex flex-col justify-between">
      
      {/* Image */}
      <Link to={`/product/${data.slug}`}>
        <div className="relative">
          {data.flashSale && (
            <div className="absolute top-2 left-[-20px] bg-[#ed2939] text-white text-xs px-2 py-1 font-bold -rotate-90 z-20">
              OFF {data.discount}%
            </div>
          )}

          <Image
            className="h-[150px] sm:h-[180px] rounded-lg w-full object-contain"
            isZoomed
            alt="Product image"
            src={data.image}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-2 mt-3">
        <h2 className="text-sm sm:text-base font-bold text-gray-700 line-clamp-2">
          {data.name}
        </h2>

        {/* ✅ Clean description */}
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
          {plainDescription}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-orange-500 font-bold text-sm sm:text-lg">
            ${discountedPrice.toFixed(2)}
          </span>

          {data.flashSale && (
            <span className="text-gray-400 line-through text-xs sm:text-sm">
              ${data.price}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 mt-4">
        <Link to={`/product/${data.slug}`}>
          <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 rounded transition">
            View Details
          </button>
        </Link>

        <button
          onClick={productAddandle}
          className="bg-[#ffceab] hover:bg-orange-500 text-[#f9771d] hover:text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition"
        >
          <ShoppingBag size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SignleProductCard;