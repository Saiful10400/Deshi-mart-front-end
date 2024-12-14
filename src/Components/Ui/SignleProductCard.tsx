import { Link } from "react-router-dom";

export type Tproduct = {
  image: string;
  name: string;
  productId: string;
  categoryref: {
    name: string;
  };
  description: string;
  flashSale: boolean;
  inventoryCount: number;
  price: number;
  _count: {
    review: number;
  };
  created: string; // ISO date string
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};

const SignleProductCard = ({ data }: { data: Tproduct }) => {
  const AddtoCartHandle = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="shadow-md rounded-lg py-3">
      <Link to={`/product/${data.productId}`}>
        <img
          className="h-[200px] rounded-lg w-full object-contain"
          src={data.image}
          alt=""
        />
        <section className="text-center">
          <h1 className="text-lg font-semibold">{data.name}</h1>
          <h1 className="text-md">{data.price} Tk</h1>
        </section>
      </Link>

      <div className="flex justify-evenly mt-3 items-center">
        <Link to={`/product/${data.productId}`} className="btn btn-sm btn-primary text-white bg-[#f27f20] border-[#f27f20] hover:bg-[#f27f20] hover:border-none border-none">
          Details
        </Link>
        <button
          onClick={AddtoCartHandle}
          className="btn btn-sm btn-primary bg-transparent text-black hover:bg-transparent hover:border-[#f27f20] border-[#f27f20]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SignleProductCard;
