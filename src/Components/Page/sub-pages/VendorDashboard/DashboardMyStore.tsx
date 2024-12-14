import { useAppSelector } from "../../../../Redux/feathcer/hoocks";

interface Shop {
  name: string;
  logo: string;
  shopId: string;
  _count: {
    followersId: number;
    products: number;
  };
}

interface Vendor {
  email: string;
  isDeleted: boolean;
  name: string;
  photo: string;
  vendorId: string;
  shopId: Shop;
}

interface Tuser {
  admin: string | null;
  buyer: string | null;
  email: string;
  role: string;
  vendor: Vendor;
}

const DashboardMyStore = () => {
  const { loggedInUser }: { loggedInUser: Tuser } = useAppSelector(
    (s) => s.authStore
  );
 
  return (
    <div>
      <div className="lg:w-[50%] bg-gray-100 p-4 rounded-lg flex justify-start gap-10">
        <img
          className="w-[100px] h-[100px] object-cover rounded-full"
          src={loggedInUser?.vendor?.shopId?.logo}
          alt=""
        />
        <div>
          <h1 className="text-2xl font-semibold">
            {" "}
            Shop name:{" "}
            <span className="text-lg font-normal">
              {loggedInUser?.vendor?.shopId?.name}
            </span>
          </h1>
          <h1 className="text-2xl font-semibold">
            {" "}
            Shop Status:{" "}
            <span className="text-lg font-normal">
              {loggedInUser?.vendor?.shopId?.status}
            </span>
          </h1>
          <h1 className="text-2xl font-semibold">
            {" "}
            Total products:{" "}
            <span className="text-lg font-normal">
              {loggedInUser?.vendor?.shopId?._count?.products}
            </span>
          </h1>
          <h1 className="text-2xl font-semibold">
            {" "}
            Total followers:{" "}
            <span className="text-lg font-normal">
              {loggedInUser?.vendor?.shopId?._count?.followersId}
            </span>
          </h1>
          <h1 className="text-2xl font-semibold">
            {" "}
            Available coupne:{" "}
            <span className="text-lg font-normal">
              {loggedInUser?.vendor?.shopId?._count?.coupne}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyStore;
