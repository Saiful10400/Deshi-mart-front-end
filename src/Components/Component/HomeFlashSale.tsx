import { Link } from "react-router-dom";
import { useGetSingleOrAllProductsQuery } from "../../Redux/api/api";
import SectionTittle from "../Ui/SectionTittle";
import SignleProductCard, { Tproduct } from "../Ui/SignleProductCard";

const HomeFlashSale = () => {
  const { data } = useGetSingleOrAllProductsQuery({
    offset: 0,
    limit: 6,
    flashSale: true,
  });
  return (
    <div className="w-full">
      <div className="flex justify-between items-start mb-5">
        {" "}
        <SectionTittle txt="Flash sale" />{" "}
        <Link to={"/flash-sale"} className="text-xl">See all</Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 pl-5 gap-5">
        {data?.data?.result?.map((item: Tproduct, idx: number) => (
          <SignleProductCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeFlashSale;
