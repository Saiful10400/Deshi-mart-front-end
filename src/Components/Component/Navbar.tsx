import logo from "../../../assets/logo.jpg";
import {
  Search,
  ShoppingCart,
  History,
  LogOut,
  LayoutDashboard,
  RectangleEllipsis,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import { addSearchTerm } from "../../Redux/feathcer/FilterSlice";
import { useEffect, useState } from "react";
import { removeUser } from "../../Redux/feathcer/AuthSlice";
import { setSearchTerm } from "../../Redux/feathcer/AllProductSlice";
import demoAvatar from "../../../assets/avatar.png";
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

  const url = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();

    const text = e.target.searchtext.value;

    if (url.pathname === "/all-product") {
      console.log("enteredddd.");
      dispatch(setSearchTerm(text));
    } else {
      dispatch(addSearchTerm(text));
      move("/");
    }
  };

  const [hideMenu, setHideMenu] = useState(true);

  const logoutHandle = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  // dashboard routeing handle.
  const manageDashboardRouting = () => {
    if (!loggedInUser?.role) return;

    if (loggedInUser?.role === "Vendor") {
      move("/vendor-dashboard");
    }
    if (loggedInUser?.role === "Admin") {
      move("/admin-dashboard");
    }
  };

  const { products } = useAppSelector((s) => s.cartStore);

  const [showAuthbtn, setShowAuthBtn] = useState(false);

  useEffect(() => {
    const event = () => setShowAuthBtn(false);
    window.addEventListener("click", event);
    return () => removeEventListener("click", event);
  }, []);

  return (
    <div className="mt-5 ">
      <div className="flex flex-col lg:flex-row  items-center justify-between  gap-8 pb-5 lg:pb-0 lg:gap-0 left-0">
        <Link to={"/"}>
          <img className="w-[150px]" src={logo} alt="" />
        </Link>

        <form onSubmit={handleSearch} className="relative flex opacity-0">
          <input
            required
            type="text"
            name="searchtext"
            placeholder="Search product"
            className="bg-gray-200 outline-none h-[40px] w-[350px] rounded-l-lg pl-12"
          />
          <button className="bg-[#f97316] px-2 rounded-r-lg">
            <Search className="text-gray-200" />
          </button>
          <Search className="text-[#f9741679] text-xs absolute block top-[20%] left-2" />
        </form>

        <div className="flex justify-between items-center gap-6">
          <Link to={"/cart"} className="border p-2 rounded-full relative">
            <ShoppingCart height={20} width={20} />
            {products.length ? (
              <span className="absolute bottom-[70%] text-sm left-[75%] p-1 bg-[#f97316] text-white font-semibold rounded-full flex justify-center items-center h-[25px] w-[25px]">
                {products?.length}
              </span>
            ) : (
              ""
            )}
          </Link>

          {/* <Link to={"/history"} className="flex flex-col items-center">
            <History className="" /> <span className="font-bold">History</span>
          </Link> */}

          {loggedInUser && !isLoading ? (
            <div className="relative">
              <button
                onClick={() => setHideMenu((prev) => !prev)}
                className="w-[40px] h-[40px]  rounded-full overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={userData()?.photo || demoAvatar}
                  alt=""
                />
              </button>

              <div
                className={`absolute  w-[250px] z-50 p-3 h-[280px] top-16 right-0 bg-gray-100 rounded-lg gap-3  flex-col ${
                  hideMenu ? "hidden" : "flex"
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={userData()?.photo || demoAvatar}
                    className="w-[40px] h-[40px] rounded-lg object-cover"
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

                {loggedInUser?.role === "User" ? (
                  ""
                ) : (
                  <button
                    onClick={manageDashboardRouting}
                    className="btn btn-ghost w-full  mt-5 flex items-center justify-start gap-2"
                  >
                    <LayoutDashboard /> Dashboard
                  </button>
                )}
                <Link
                  to={"/change-password"}
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
            <span className="flex relative items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAuthBtn((p) => !p);
                }}
                className="border p-2 rounded-full"
              >
                <User height={20} width={20} />
              </button>

              {showAuthbtn && (
                <div className="absolute  top-[150%] border pr-16 pl-2 rounded-lg  right-[0%] z-50 bg-white">
                  <Link className="text-base font-medium  " to={"/signup/user"}>
                    <button className="text-base flex gap-4 hover:text-[#e75d0b] items-center font-medium  py-2 rounded-3xl">
                      <UserPlus /> Signup
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="text-base flex gap-4 hover:text-[#e75d0b] items-center font-medium  py-2 rounded-3xl">
                      <LogIn /> Login
                    </button>
                  </Link>
                </div>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
