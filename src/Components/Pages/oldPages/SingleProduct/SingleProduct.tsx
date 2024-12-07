import { useParams } from "react-router";
import { useGetAProductQuery } from "../../../Redux/api/api";
import CenterAlign from "../../Helper/CenterAlign";
import Loading from "../../SharedComponent/Loading";
import getNumberArrayFromNumber from "../../../Utils/getNumberArrayFromNumber";
import { FaStar } from "react-icons/fa6";
import { useStatStyles } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Button from "../../Ui/Button";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { cartIncrement } from "../../../Redux/feathcer/CartSlice";
import { toast } from "react-toastify";
const SingleProduct = () => {
 
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const param = useParams();
  const { isLoading, data } = useGetAProductQuery(param.id);
const dispatch=useAppDispatch()
  const [count, setCount] = useState(1);

  if (isLoading) return <Loading />;
  const { data: Product } = data;

  const countHndle = (e: string) => {
    if (count === 0 && e === "d") return;

    if (e === "i") return setCount((prev) => prev + 1);
    if (e === "d") return setCount((prev) => prev - 1);
  };

  const cartAddHandle = () => {
  
    dispatch(cartIncrement({count,data:Product}))
  };

  return (
    <div className="min-h-[60vh] bg-white lg:py-28 lg:pt-10 px-4 lg:px-0">
      <CenterAlign>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-7">
          <div data-aos="fade-right">
            <img className="rounded-lg" src={Product.img} alt="" />
          </div>

          <div data-aos="fade-left" className="lg:w-1/2">
            <h1 className="lg:text-3xl font-semibold">{Product.name}</h1>
            <h1 className="lg:text-base bg-gray-300 w-max p-1 px-2 rounded-md text-black font-normal mt-5">{Product.brand}</h1>
            <div className="flex items-center mt-4 ">
              {getNumberArrayFromNumber(Product.rating).map((item) => (
                <FaStar className="text-[#f0b407] text-2xl" key={item} />
              ))}
              {/* <span className="ml-4">({Product.rating})</span> */}
            </div>
            <h1 className="font-normal text-5xl mt-4">${Product.price}</h1>

            <h1 className={`text-xl mt-7 ${Product.quantity<count?"text-red-500":"text-black"}`}>
              Availabe Stock:{" "}
              <span
                className={`font-semibold text-2xl ${
                  Product.quantity < 5 ||Product.quantity<count ? "text-red-500" : "text-black"
                }`}
              >
                {Product.quantity}
              </span>
            </h1>
            <div className="flex gap-5 mt-4">
              <div className="flex items-center gap-5 border border-black w-max py-1 rounded-lg  px-3">
                <button onClick={() => countHndle("d")} className="text-4xl">
                  -
                </button>
                <h1 className="text-2xl font-semibold w-[50px] text-center">
                  {count}
                </h1>
                <button onClick={() => countHndle("i")} className="text-4xl">
                  +
                </button>
              </div>
              <Button
              disable={count===0||Product.quantity<count}
                onClick={cartAddHandle}
                className="px-4 text-xl font-normal"
                text={"Add to Cart"}
              />
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h1 className="text-3xl text-center lg:text-left mt-5 font-semibold mb-6 lg:mt-10">Description</h1>
          <p className="text-lg text-center lg:text-left">{Product.description}</p>
        </div>
      </CenterAlign>
    </div>
  );
};

export default SingleProduct;
