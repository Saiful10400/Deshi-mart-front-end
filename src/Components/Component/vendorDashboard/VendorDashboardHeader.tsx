import { Menu } from "lucide-react";
import { useAppSelector } from "../../../Redux/feathcer/hoocks";
import { TuserData } from "../Navbar";

const VendorDashboardHeader = ({ setterFn }) => {
  const {
    loggedInUser,
    isLoading,
  }: { loggedInUser: TuserData | null; isLoading: boolean } = useAppSelector(
    (s) => s.authStore
  );

  const userData = () => {
    if (!loggedInUser) return null;

    if (loggedInUser.role === "Admin") return loggedInUser.admin;
    if (loggedInUser.role === "User") return loggedInUser.buyer;
    if (loggedInUser.role === "Vendor") return loggedInUser.vendor;
  };
  return (
    <div className="p-3 rounded-xl lg:mt-4  flex justify-between items-center bg-[#ececec]">
      <h1 className="text-4xl hidden lg:block font-semibold">
        Welcome Back {userData()?.name}
      </h1>

      <div className="flex gap-2">
        <img
          className="w-[50px] rounded-full h-[50px] object-cover"
          src={userData()?.photo}
          alt=""
        />
        <div className="font-semibold text-lg">
          <h1>{userData()?.name}</h1>
          <h1 className="text-sm font-normal">{loggedInUser?.role}</h1>
        </div>
      </div>

      <button onClick={() => setterFn(true)} className="lg:hidden">
        <Menu />
      </button>
    </div>
  );
};

export default VendorDashboardHeader;
