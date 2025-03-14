import { useGetAllProductQuery } from "../../Redux/api/api";
import SignleProductCard, { Tproduct } from "../Ui/SignleProductCard";
import Tittle from "../Ui/Tittle";

const FlashSaleProduct = () => {
  const { data } = useGetAllProductQuery({
    offset: 0,
    limit: 4,
    flashSale: true,
  });
  const product = data?.data?.result;
  console.log(product);
  return (
    <div>
      <Tittle text="Flash Sale" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {product?.map((item:Tproduct) => (
          <SignleProductCard data={item} key={item.productId} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleProduct;
