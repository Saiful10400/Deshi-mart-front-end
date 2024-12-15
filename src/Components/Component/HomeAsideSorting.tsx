import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../Redux/api/api";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { addPrice } from "../../Redux/feathcer/FilterSlice";

const HomeAsideSorting = () => {
  const { data } = useGetAllCategoryQuery(null);

  const dispatch=useAppDispatch()

  const formhande=(e)=>{
    e.preventDefault()
    const min=Number(e.target.min.value)
    const max=Number(e.target.max.value)
    dispatch(addPrice({min,max}))
  }

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Sort by price:</h1>

      <form onSubmit={formhande} className="flex justify-center mt-5 flex-col items-center  gap-5">
        <div className="flex items-center gap-5 ">
          <input
            className="w-[100px] text-lg text-center rounded-sm"
            type="number"
            name="min"
            placeholder="Min"
          />
          <span className="text-xl font-semibold">To</span>
          <input
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
          <Link
            className="font-normal text-lg bg-gray-100 shadow-lg px-3 rounded-md"
            key={item.categoryId}
            to={`/all-product?category=${item.name}`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomeAsideSorting;
