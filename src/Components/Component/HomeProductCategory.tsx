import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../Redux/api/api";
import SectionTittle from "../Ui/SectionTittle";

const HomeProductCategory = () => {
  const { data } = useGetAllCategoryQuery(null);

  return (
    <div>
      <SectionTittle txt="All category" />
      <ul className="flex flex-wrap items-center gap-3 mt-5">
        {data?.data?.map((item) => (
          <Link
            className="font-normal text-lg bg-gray-300 px-3 rounded-md"
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

export default HomeProductCategory;
