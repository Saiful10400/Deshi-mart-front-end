import { useGetAllProductQuery } from "../../Redux/api/api";
import SignleProductCard, { Tproduct } from "../Ui/SignleProductCard";
import Tittle from "../Ui/Tittle";

const RecentProducts = () => {
  const { data } = useGetAllProductQuery({
    offset: 0,
    limit: 8,
    
  });
  const product = data?.data?.result;
 
  return (
    <div>
      <Tittle text="Recent Products" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {product?.map((item:Tproduct) => (
          <SignleProductCard data={item} key={item.productId} />
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
