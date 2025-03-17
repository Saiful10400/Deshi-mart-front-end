import { useEffect } from "react";
import { useGetAllStoreQuery } from "../../Redux/api/api";
import CloneElement from "../../Utils/CloneElement";
import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import ShopCard from "../Ui/ShopCard";
import ShopSkleton from "../Ui/skleton/ShopSkleton";
import { Tstore } from "./SingleShopDetails";
import scrollTop from "../../Utils/scrollTop";

const Shops = () => {
  const { data, isLoading } = useGetAllStoreQuery({ offset: 0, limit: 2300 });

  const stores: Tstore[] = data?.data?.result;
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <PageHeaderRouteing />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <CloneElement count={isLoading ? 8 : 0} element={<ShopSkleton />} />
        {stores?.map((item) => (
          <ShopCard key={item.name} data={item} />
        ))}
      </div>
    </>
  );
};

export default Shops;
