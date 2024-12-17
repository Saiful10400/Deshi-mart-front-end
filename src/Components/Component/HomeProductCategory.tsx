import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../Redux/api/api";
import SectionTittle from "../Ui/SectionTittle";

const HomeProductCategory = () => {
  const { data } = useGetAllCategoryQuery(null);
  console.log(data);
  return (
    <div>
      <SectionTittle txt="All category" />
      <ul className="flex flex-wrap items-center gap-3 mt-5">
        {data?.data?.map((item) => (
          <Link
            className="font-normal text-lg px-3 rounded-md shadow-lg w-max p-1 h-[100px] flex flex-col items-center justify-center"
            key={item.categoryId}
            to={`/all-product?category=${item.name}`}
          >
            <img
              className="w-[50px] h-[50] object-cover"
              src={item?.logo}
              alt=""
            />
            <h1 className="font-semibold">{item.name}</h1>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomeProductCategory;
