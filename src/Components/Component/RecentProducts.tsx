import { useGetAllProductQuery } from "../../Redux/api/api";
import CloneElement from "../../Utils/CloneElement";
import SignleProductCard, { Tproduct } from "../Ui/SignleProductCard";
import ProductCardSkeleton from "../Ui/skleton/ProductCardSkeleton";
import Tittle from "../Ui/Tittle";

const RecentProducts = () => {
  const { data,isLoading } = useGetAllProductQuery({
    offset: 0,
    limit: 8,
    
  });
  const product = data?.data?.result;
 
  return (
    <div>
      <Tittle seeMoreRoute="/all-product" text="Recent Products" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {product?product?.map((item:Tproduct) => (
          <SignleProductCard data={item} key={item.productId} />
        )):<CloneElement count={isLoading?8:0} element={<ProductCardSkeleton/>}/>}
      </div>
    </div>
  );
};

export default RecentProducts;
