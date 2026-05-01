import { useNavigate, useParams } from "react-router";
import {
  useAddRecentProductMutation,
  useGetAllProductQuery,
  useGetSingleOrAllProductsQuery,
} from "../../Redux/api/api";
import { Link } from "react-router-dom";
import { Star, StarHalfIcon, ArrowLeft } from "lucide-react";
import SectionTittle from "../Ui/SectionTittle";
import "./css/singlleProduct.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import useSendPost from "../../Utils/useSendPost";
import SingleproductDetailsReview from "../Component/SingleproductDetailsReview";
import Swal from "sweetalert2";
import { clearCart, setProduct } from "../../Redux/feathcer/CartSlice";
import notification from "../../Utils/showMessage";
import "./css/ProductDetails.css";
import parse from "html-react-parser";
import ProductImageCarosel from "../Ui/ProductImageCarosel";
import SignleProductCard from "../Ui/SignleProductCard";
import { searchByCategory } from "../../Redux/feathcer/ProductSearchingSlice";
import dayjs from "dayjs";

type Tproduct = {
  image: string;
  carouselImages: string[];
  name: string;
  productId: string;
  categoryref: { name: string };
  description: string;
  flashSale: boolean;
  inventoryCount: number;
  price: number;
  _count: { review: number };
  created: string;
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

const SingleProductDetails = () => {
  const { id } = useParams();
  const move = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetSingleOrAllProductsQuery({ id });
  const product: Tproduct = data?.data;

  const { data: sameCAtgoryData } = useGetSingleOrAllProductsQuery({
    category: product?.categoryref?.name,
    not: product?.productId,
    limit: 4,
    offset: 0,
  });

  const thisCategoryDatas: Tproduct[] = sameCAtgoryData?.data?.result;

  const [product1, setProduct1] = useState<any>(null);
  const [product2, setProduct2] = useState<any>(null);
  const [productCount, setProductCount] = useState(1);

  const { loggedInUser } = useAppSelector((s) => s.authStore);
  const { products } = useAppSelector((s) => s.cartStore);

  const [send] = useSendPost(useAddRecentProductMutation);

  useEffect(() => {
    if (loggedInUser && product) {
      send({ userId: loggedInUser?.userId, productId: product?.productId });
    }
  }, [loggedInUser, product]);

  const productAddandle = () => {
    const isexist = products?.find(
      (item) => item?.shop?.shopId === product?.shop?.shopId
    );

    if (!isexist && products.length > 0) {
      Swal.fire({
        title: "You can't add multiple shop product into the cart.",
        showDenyButton: true,
        confirmButtonText: "Replace all",
        denyButtonText: "Keep current",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart(product));
          Swal.fire("Cart replaced", "", "success");
        }
      });
    } else {
      dispatch(setProduct(product));
    }
  };

  const { data: rowAllProducts } = useGetAllProductQuery(null);
  const AllProducts = rowAllProducts?.data?.result;

  // ✅ Skeleton UI
  if (isLoading) {
    return (
      <div className="lg:mt-16 px-3 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 h-[300px] bg-gray-200 rounded-lg"></div>

          <div className="w-full lg:w-1/2 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-12 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>

        <div className="mt-10 space-y-3">
          <div className="h-6 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[200px] bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lg:mt-16 lg:px-0 px-3">

      {/* Back Button */}
      <button
        onClick={() => move("/all-product")}
        className="flex items-center gap-2 text-orange-500 mb-4 hover:underline"
      >
        <ArrowLeft size={18} /> Back to Products
      </button>

      <div className="flex flex-col lg:flex-row gap-6">

        <ProductImageCarosel
          data={{
            image: product?.image,
            carouselImages: product?.carouselImages,
          }}
        />

        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">{product?.name}</h1>

          <button
            onClick={() => {
              dispatch(searchByCategory(product?.categoryref?.name));
              move("/all-product");
            }}
            className="mt-3 border border-[#f28020] px-3 py-1 rounded-full text-sm"
          >
            {product?.categoryref?.name}
          </button>

          <Link
            to={`/shops/${product?.shop?.shopId}`}
            className="flex items-center gap-4 mt-6"
          >
            <img className="w-[45px] h-[45px] rounded-full" src={product?.shop?.logo} />
            <span className="font-semibold">{product?.shop?.name}</span>
          </Link>

          <div className="mt-5 text-sm text-gray-600 space-y-1">
            <p><b>Price:</b> {product?.price} Tk</p>
            <p><b>Stock:</b> {product?.inventoryCount}</p>
            <p><b>Added:</b> {dayjs(product?.created).format("MMM D, YYYY")}</p>
          </div>

          <div className="flex gap-1 mt-3">
            <Star fill="#faca51" color="#faca51" />
            <Star fill="#faca51" color="#faca51" />
            <Star fill="#faca51" color="#faca51" />
            <Star fill="#faca51" color="#faca51" />
            <StarHalfIcon fill="#faca51" color="#faca51" />
            <span>({product?._count.review})</span>
          </div>

          <div className="flex items-end gap-5 mt-5">
            <button
              onClick={productAddandle}
              className="btn text-lg lg:px-36 bg-[#f27f20] text-white hover:bg-transparent hover:text-black border-[#f27f20]"
            >
              Add to cart
            </button>

            <div className="grid grid-cols-3 h-[50px]">
              <button onClick={() => setProductCount((p) => p + 1)} className="border text-2xl">+</button>
              <span className="border flex items-center justify-center px-4">{productCount}</span>
              <button onClick={() => setProductCount((p) => (p > 1 ? p - 1 : 1))} className="border text-2xl">-</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionTittle txt="Full Description" />
        <div className="mt-3 PostContainer">
          {parse(product?.description || "")}
        </div>
      </div>

      <div className="mt-12">
        <SectionTittle txt="Key Specifications" />
        <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div className="border p-3 rounded">Category: {product?.categoryref?.name}</div>
          <div className="border p-3 rounded">Stock: {product?.inventoryCount}</div>
          <div className="border p-3 rounded">Flash Sale: {product?.flashSale ? "Yes" : "No"}</div>
          <div className="border p-3 rounded">Shop: {product?.shop?.name}</div>
        </div>
      </div>

      <div className="mt-12">
        <SectionTittle txt="Related Products" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {thisCategoryDatas?.map((item: Tproduct) => (
            <SignleProductCard key={item.productId} data={item} />
          ))}
        </div>
      </div>

      {/* <SingleproductDetailsReview product={product} /> */}

      {/* keep your compare section here unchanged */}
    </div>
  );
};

export default SingleProductDetails;