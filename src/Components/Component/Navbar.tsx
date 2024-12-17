import logo from "../../../assets/logo.jpg";
import {
  Search,
  ShoppingCart,
  History,
  LogOut,
  LayoutDashboard,
  RectangleEllipsis,
} from "lucide-react";
import { Link, useHref, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import { addSearchTerm } from "../../Redux/feathcer/FilterSlice";
import { useState } from "react";
import { removeUser } from "../../Redux/feathcer/AuthSlice";

interface TroleData {
  buyerId: string;
  userId: string;
  status: string;
  email: string;
  name: string;
  photo: string;
  shopId: string;
  isDeleted: boolean;
  created: string; // ISO date string
  updated: string; // ISO date string
}

export interface TuserData {
  admin: TroleData | null; // or you can use `admin?: null` if this field is optional
  buyer: TroleData | null; // The `buyer` can also be null if it's optional
  vendor: TroleData | null; // The `vendro` can also be null if it's optional
  email: string;
  role: string;
  userId: string;
  status: string;
}

const Navbar = () => {
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

  // search handel.
  const move = useNavigate();
  const dispatch = useAppDispatch();
  const handleSearch = (e) => {
    e.preventDefault();

    const text = e.target.searchtext.value;

    dispatch(addSearchTerm(text));
    move("/");
  };

  const [hideMenu, setHideMenu] = useState(true);

  const dispathc = useAppDispatch();

  const logoutHandle = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  // dashboard routeing handle.
  const manageDashboardRouting = () => {
    if (!loggedInUser?.role) return;

    if (loggedInUser?.role === "Vendor") {
      move("/vendor-dashboard/my-shop");
    }
    if (loggedInUser?.role === "Admin") {
      move("/admin-dashboard/users");
    }
  };


const{products}=useAppSelector(s=>s.cartStore)



  return (
    <div className="mt-5">
      <div className="flex flex-col lg:flex-row  items-center justify-between   left-0">
        <Link to={"/"}>
          <img className="w-[150px]" src={logo} alt="" />
        </Link>

        <form onSubmit={handleSearch} className="relative flex">
          <input
            type="text"
            name="searchtext"
            placeholder="Search product"
            className="bg-gray-200 outline-none h-[40px] w-[350px] rounded-l-lg pl-12"
          />
          <button className="bg-gray-700 px-2 rounded-r-lg">
            <Search className="text-gray-200" />
          </button>
          <Search className="text-gray-400 text-xs absolute block top-[20%] left-2" />
        </form>

        <div className="flex justify-between items-center gap-12">


          <div className="relative">
          <Link to={"/cart"} className="flex flex-col items-center">
            <ShoppingCart className="" /> 
            <span className="font-bold">Cart</span>
          </Link>
          <span className="absolute bottom-8 px-1 rounded-full left-8 bg-[#f27f20] text-white">{products?.length}</span>
          </div>


          <Link to={"/history"} className="flex flex-col items-center">
            <History className="" /> <span className="font-bold">History</span>
          </Link>

          {/* profile photo manage. */}

          {loggedInUser && !isLoading ? (
            <div className="relative">
              <button
                onClick={() => setHideMenu((prev) => !prev)}
                className="w-[50px] h-[50px]  rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={userData()?.photo}
                  alt=""
                />
              </button>

              <div
                className={`absolute  w-[250px] p-3 h-[280px] top-16 right-0 bg-gray-100 rounded-lg gap-3  flex-col ${
                  hideMenu ? "hidden" : "flex"
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={userData()?.photo}
                    className="w-[40px] h-[40px] rounded-lg"
                    alt=""
                  />
                  <div>
                    <h1 className="font-bold text-base">
                      {userData()?.name.toUpperCase()}
                    </h1>
                    <h1 className="text-xs font-semibold">
                      {loggedInUser?.role}
                    </h1>
                  </div>
                </div>

                <button
                  onClick={manageDashboardRouting}
                  className="btn btn-ghost w-full  mt-5 flex items-center justify-start gap-2"
                >
                  <LayoutDashboard /> Dashboard
                </button>
                <Link to={"/change-password"}
                  
                  className="btn btn-ghost w-full flex items-center justify-start gap-2"
                >
                  <RectangleEllipsis /> Change password
                </Link>
                <button
                  onClick={logoutHandle}
                  className="btn btn-ghost w-full flex items-center justify-start gap-2"
                >
                  <LogOut /> Logout
                </button>
              </div>
            </div>
          ) : (
            <span className="flex items-center gap-4">
              <Link className="text-lg font-semibold text-black" to={"/signup"}>
                Signup
              </Link>
              <Link to={"/login"}>
                <button className="text-lg font-semibold text-white  bg-black px-3 py-2 rounded-3xl">
                  Login
                </button>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
