import { ShoppingBag, Users } from "lucide-react";
import { Tstore } from "../Page/SingleShopDetails";
import { Link } from "react-router-dom";

const ShopCard = ({ data }: { data: Tstore }) => {
  return (
    <div className="border rounded-md p-5 ">
      <div className="flex items-center gap-4">
        <img
          src={data.logo}
          alt="shopLogo"
          className="w-[65px] h-[65px] rounded-full object-cover"
        />
        <div>
          <h1 className="text-lg font-semibold">{data.name}</h1>
        </div>
      </div>

      <div className="flex justify-between gap-4 m-4 items-center">
        <div className="w-full bg-gray-100 rounded-md flex flex-col justify-center items-center gap-1 py-3">
          <ShoppingBag height={22} width={22} />
          {data._count.products}
          <span className="text-xs font-thin ">Products</span>
        </div>

        <div className="w-full bg-gray-100 rounded-md flex flex-col justify-center items-center gap-1 py-4">
          <Users height={22} width={22} />
          {data._count.followersId}
          <span className="text-xs font-thin ">Followers</span>
        </div>
      </div>

      <Link
        to={`/shops/${data.shopId}`}
        className="font-semibold text-base bg-[#ff9208] p-1 rounded-md text-white w-full inline-block text-center"
      >
        Visit Shop
      </Link>
    </div>
  );
};

export default ShopCard;
