import { useEffect, useState } from "react";
import {
  useGetAllCategoryQuery,
  useGetSingleOrAllProductsQuery,
} from "../../Redux/api/api";
import { setCategory, SetPrice } from "../../Redux/feathcer/AllProductSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import HorizontalProductCard from "../Ui/HorizontalProductCard";
import numberToNumberArray from "../../Utils/numberToNumberArray";
import SectionTittle from "../Ui/SectionTittle";

const AllProducts = () => {
  const { data } = useGetAllCategoryQuery(null);

  const formhande = (e) => {
    e.preventDefault();
    const min = Number(e.target.min.value);
    const max = Number(e.target.max.value);
    dispatch(SetPrice({ min, max }));
  };

  const dispatch = useAppDispatch();

  //   functionality for all product section.

  const [crd, setCrd] = useState({ offset: 0, limit: 10 });

  const { data: products } = useGetSingleOrAllProductsQuery(crd);

  const { allProductFilterStore } = useAppSelector((s) => s);

  useEffect(() => {
    if (allProductFilterStore.price.max && allProductFilterStore.price.min) {
      setCrd((prev) => ({
        ...prev,
        max: allProductFilterStore.price.max,
        min: allProductFilterStore.price.min,

        exactTotal: true,
      }));
    }

    if (allProductFilterStore.searchTerm !== "") {
      setCrd((prev) => ({
        ...prev,

        exactTotal: true,
        search: allProductFilterStore.searchTerm,
      }));
    }

    if (allProductFilterStore.category !== "") {
      setCrd((prev) => ({
        ...prev,

        exactTotal: true,
        category: allProductFilterStore.category,
      }));
    }
  }, [allProductFilterStore]);

  // pagination logics.

  // const [page,setPage]=useState(1)

  // const { data } = useGetAllProductQuery({offset:(page-1)*10,limit:10,flashSale:true});

  const totalData = products?.data?.total;
  const steps = numberToNumberArray(Math.ceil(totalData / 10));

  return (
    <div className="flex flex-col lg:gap-7 gap-3 lg:flex-row">
      {/* aside nav. */}

      <div className="w-full bg-gray-100 lg:h-[calc(100vh-102px)] sticky top-0 lg:p-7 lg:pt-5 p-3 rounded-lg lg:w-[25%]">
        <h1 className="font-semibold text-xl">Sort by price:</h1>

        <form
          onSubmit={formhande}
          className="flex justify-center mt-5 flex-col items-center  gap-5"
        >
          <div className="flex items-center gap-5 ">
            <input
              required
              className="w-[100px] text-lg text-center rounded-sm"
              type="number"
              name="min"
              placeholder="Min"
            />
            <span className="text-xl font-semibold">To</span>
            <input
              required
              className="w-[100px] text-lg text-center rounded-sm"
              type="number"
              name="max"
              placeholder="Max"
            />
          </div>
          <button className="btn btn-success bg-[#f27f20] hover:bg-[#f27f20] hover:border-none border-none text-white w-[70%] btn-sm">
            Sort
          </button>
        </form>

        <h1 className="font-semibold mt-10 text-xl">Sort by Category:</h1>

        <ul className="flex items-center gap-3 mt-5 flex-wrap">
          {data?.data?.map((item) => (
            <button
              onClick={() => dispatch(setCategory(item.name))}
              className="font-normal text-lg bg-gray-100 shadow-lg px-3 rounded-md"
              key={item.categoryId}
            >
              {item.name}
            </button>
          ))}
        </ul>
      </div>

      {/* product cards. */}

      <div className="w-full lg:w-[75%]">
        <SectionTittle txt="All products"/>
        <div className="w-full  flex flex-col gap-5">
          {products?.data?.result?.map((item) => (
            <HorizontalProductCard key={item.productId} data={item} />
          ))}
        </div>

        <div className="flex mt-7 justify-center items-center gap-4">
          {steps?.map((item) => (
            <button
              onClick={() => {
                setCrd((prev) => ({
                  ...prev,
                  offset: (item - 1) * 10,
                  limit: 10,
                }));
              }}
              className="btn btn-primary"
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
