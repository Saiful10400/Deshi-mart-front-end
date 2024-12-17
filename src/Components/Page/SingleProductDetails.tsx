import { useParams } from "react-router";
import {
  useAddRecentProductMutation,
  useGetAllProductQuery,
  useGetSingleOrAllProductsQuery,
} from "../../Redux/api/api";
import { Link } from "react-router-dom";
import { FlipHorizontal, Star, StarHalfIcon } from "lucide-react";
import SectionTittle from "../Ui/SectionTittle";
import "./css/singlleProduct.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import useSendPost from "../../Utils/useSendPost";
import SingleproductDetailsReview from "../Component/SingleproductDetailsReview";
import Swal from "sweetalert2";
import { clearCart, setProduct } from "../../Redux/feathcer/CartSlice";
import notification from "../../Utils/showMessage";

type Tproduct = {
  image: string;
  name: string;
  productId: string;
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
  created: string; // ISO 8601 timestamp
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

const SingleProductDetails = () => {
  const { id } = useParams();

  const { data } = useGetSingleOrAllProductsQuery({ id });

  const product: Tproduct = data?.data;
  const { data: sameCAtgoryData } = useGetSingleOrAllProductsQuery({
    category: product?.categoryref?.name,
    not: product?.productId,
    limit: 4,
    offset: 0,
  });

  const thisCategoryDatas: Tproduct[] = sameCAtgoryData?.data?.result;

  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);

  const { loggedInUser } = useAppSelector((s) => s.authStore);
  const [send] = useSendPost(useAddRecentProductMutation); //initiate request

  // add recetnt product.
  useEffect(() => {
    if (loggedInUser && product) {
      send({ userId: loggedInUser?.userId, productId: product?.productId });
    }
  }, [loggedInUser, product]);

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
          dispatch(clearCart(product));
          Swal.fire("All cart product replaced", "", "success");
        }
      });
    } else {
      dispatch(setProduct(product));
    }
  };

  // all product for dropdown.

  const { data: rowAllProducts } = useGetAllProductQuery(null);

  const AllProducts = rowAllProducts?.data?.result;

  return (
    <div className="lg:mt-16 lg:px-0 px-3">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="lg:w-[80%]">
          {/* product description. */}
          <div className="flex  flex-col lg:flex-row items-start lg:gap-16">
            <img
              className="w-[500px] h-[300px] object-contain"
              src={product?.image}
              alt=""
            />

            <div>
              <h1 className="text-4xl font-bold">{product?.name}</h1>

              <div className="mt-5">
                <span className="bg-gray-200 p-1 rounded-md shadow-md font-semibold">
                  {product?.categoryref?.name}
                </span>
              </div>

              <Link
                to={`/shop/${product?.shop?.shopId}`}
                className="flex items-center gap-5 mt-8"
              >
                <img
                  className="w-[50px] rounded-full object-cover h-[50px]"
                  src={product?.shop?.logo}
                  alt=""
                />
                <span className="font-semibold">{product?.shop?.name}</span>
              </Link>

              <h1 className="text-4xl font-bold mt-3">
                Price: {product?.price} Tk{" "}
                <span className="text-xs font-mono">
                  (only {product?.inventoryCount} on stock.)
                </span>
              </h1>

              <div className="flex gap-1 mt-4">
                <Star fill="#faca51" color="#faca51" />
                <Star fill="#faca51" color="#faca51" />
                <Star fill="#faca51" color="#faca51" />
                <Star fill="#faca51" color="#faca51" />
                <StarHalfIcon fill="#faca51" color="#faca51" />
                <span>({product?._count.review})</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={productAddandle}
                  className="btn  text-lg lg:px-36 mt-5 hover:text-black btn-primary bg-[#f27f20] text-white hover:bg-transparent hover:border-[#f27f20] border-[#f27f20]"
                >
                  Add to cart
                </button>
                <a
                  href="#compare"
                  className="btn  text-lg  mt-5 hover:text-black btn-primary bg-[#f27f20] text-white hover:bg-transparent hover:border-[#f27f20] border-[#f27f20]"
                >
                  <FlipHorizontal />
                </a>
              </div>
            </div>
          </div>

          {/* description */}

          <div className="mt-4">
            <SectionTittle txt="Description" />
            <p className="mt-3">{product?.description}</p>
          </div>
        </div>
        <div className="lg:w-[20%] ">
          {/* same category product. */}
          <h1 className="font-semibold text-xl mb-4">Related Products</h1>
          {thisCategoryDatas?.length > 0 ? (
            <div className="pl-3 flex flex-col gap-2">
              {thisCategoryDatas?.map((item) => {
                return (
                  <Link
                    className="flex gap-3 p-2 shadow-lg rounded-lg"
                    to={`/product/${item?.productId}`}
                  >
                    <img
                      className="w-[80px] h-[80px]"
                      src={item.image}
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-semibold">{item?.name}</h1>
                      <h1 className="font-semibold text-sm">
                        {item?.price} tk
                      </h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <h1>No product found</h1>
          )}
        </div>
      </div>

      {/* comparison */}
      <div id="compare" className="mt-16">
        <SectionTittle txt="Compare" />
        <div className="">
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>{product?.name}</th>

                  <th>
                    <select
                      onChange={(e) => {
                        const parsedDAta = JSON.parse(e.target.value);

                        if (
                          parsedDAta?.categoryref?.name !==
                          product.categoryref.name
                        ) {
                          notification(
                            "You can't compare with diffrent category",
                            "error"
                          );
                          setProduct1(null);
                        } else {
                          setProduct1(parsedDAta);
                        }
                      }}
                      className="w-full"
                    >
                      <option value="">Select one</option>
                      {AllProducts?.map((item) => (
                        <option
                          key={item?.productId}
                          value={JSON.stringify(item)}
                        >
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </th>

                  <th>
                    <select
                      onChange={(e) => {
                        const parsedDAta = JSON.parse(e.target.value);

                        if (
                          parsedDAta?.categoryref?.name !==
                          product.categoryref.name
                        ) {
                          notification(
                            "You can't compare with diffrent category",
                            "error"
                          );
                          setProduct2(null);
                        } else {
                          setProduct2(parsedDAta);
                        }
                      }}
                      className="w-full"
                    >
                      <option value="">Select one</option>
                      {thisCategoryDatas?.map((item) => (
                        <option
                          key={item?.productId}
                          value={JSON.stringify(item)}
                        >
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    <img
                      className="lg:h-[200px] object-contain mx-auto"
                      src={product?.image}
                      alt=""
                    />
                  </td>
                  <td>
                    {" "}
                    <img
                      className="h-[200px] object-contain mx-auto"
                      src={product1?.image}
                      alt=""
                    />
                  </td>
                  <td>
                    {" "}
                    <img
                      className="h-[200px] object-contain mx-auto"
                      src={product2?.image}
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product?.categoryref?.name}</td>
                  <td>{product1?.categoryref?.name}</td>
                  <td>{product2?.categoryref?.name}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{product?.name}</td>
                  <td>{product1?.name}</td>
                  <td>{product2?.name}</td>
                </tr>
                <tr>
                  <td>Price (tk)</td>
                  <td>{product?.price} </td>
                  <td>{product1?.price} </td>
                  <td>{product2?.price} </td>
                </tr>
                <tr>
                  <td>Store</td>
                  <td>{product?.shop?.name}</td>
                  <td>{product1?.shop?.name} </td>
                  <td>{product2?.shop?.name}</td>
                </tr>
                <tr>
                  <td>Available stock (pc)</td>
                  <td>{product?.inventoryCount}</td>
                  <td>{product1?.inventoryCount} </td>
                  <td>{product2?.inventoryCount}</td>
                </tr>
                <tr>
                  <td>Flash seal</td>
                  <td>{product?.flashSale ? "Yes" : "No"}</td>
                  <td>
                    {product1 ? (product1?.flashSale ? "Yes" : "No") : ""}{" "}
                  </td>
                  <td>
                    {product2 ? (product2?.flashSale ? "Yes" : "No") : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SingleproductDetailsReview product={product} />
    </div>
  );
};

export default SingleProductDetails;
