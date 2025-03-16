import { useGetAllProductQuery } from "../../Redux/api/api";

import SignleProductCard from "../Ui/SignleProductCard";

import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import CloneElement from "../../Utils/CloneElement";
import ProductCardSkeleton from "../Ui/skleton/ProductCardSkeleton";

const FlashSale = () => {
  const { data,isLoading } = useGetAllProductQuery({
    offset: 0,
    limit: 1000,
    flashSale: true,
  });

  return (
    <div>
      <PageHeaderRouteing />

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
        {data?.data?.result?data?.data?.result?.map((item) => (
          <SignleProductCard key={item.productId} data={item} />
        )):
        <CloneElement count={isLoading?10:0} element={<ProductCardSkeleton/>}/>}
      </div>
    </div>
  );
};

export default FlashSale;
