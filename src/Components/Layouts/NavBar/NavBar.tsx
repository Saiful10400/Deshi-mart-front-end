import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/whiteLogo.png";
import CenterAlign from "../../Helper/CenterAlign";
import { useAppDispatch, useAppSelector } from "../../../Redux/feathcer/hoocks";
import { useEffect, useState } from "react";
import ToggleButton from "../../Ui/ToggleButton";
import "./style.css";
import { BiMenu } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { RiBookmark3Line } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { removeUser, setUser } from "../../../Redux/feathcer/AuthSlice";
import axios from "axios";
import { getToken } from "../../../Utils/getToken";
const NavBar = () => {
  // useEffect(() => {
  //   const handleClose = (event) => {
  //     if (count.length !== 0) {
  //       event.preventDefault();
  //       event.returnValue = "";
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleClose);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleClose);
  //   };
  // }, [count]);

  const { loggedInUser } = useAppSelector((state) => state.authStore);
  console.log(loggedInUser,"from nav bar.")







  const routes = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/meeting-rooms"}>Meeting Rooms</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/authentication/login"}> Login/Register</NavLink>
      </li>
    </>
  );

  // mobile view.
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  //show dropDown.
  const [showMenu, setshowMenu] = useState(false);

  useEffect(() => {
    const listner = () => {
      setshowMenu(false);
    };
    window.addEventListener("click", listner);
    return () => {
      window.removeEventListener("click", listner);
    };
  }, []);


  const dispatch=useAppDispatch()

  const move =useNavigate()
  // logout handle.
const logoutHandle=()=>{
    // clear the local storage token.
    localStorage.removeItem("token")
    // clear state.
    dispatch(setUser(null))
    // move to home.
move("/")
}

  return (
    <>
      {/* for desktop view */}
      <div className="bg-black lg:py-4 titillium-web-regular lg:block  hidden">
        <CenterAlign>
          <div className="flex items-center justify-between lg:pr-5 pt-3">
            <div className="flex items-center lg:gap-x-11">
              <Link to={"/"}>
                <img className="h-[50px]" src={logo} alt="logo" />
              </Link>

              <ul className="lg:flex hidden items-center lg:gap-10 text-white">
                {routes}
              </ul>
            </div>

            {loggedInUser && (
              <div className="">
                <button
                  onClick={(e) =>{
                    e.stopPropagation()
                    setshowMenu((prev) => !prev)
                  }}
                  className=" px-2 py-1 rounded-full gap-4 border border-white to-center"
                >
                  <BiMenu className="text-2xl text-white" />
                  <div className="w-[40px] overflow-hidden rounded-full h-[40px]">
                    <img
                      className="scale-110 object-cover w-full h-full"
                      src={loggedInUser.img}
                      alt=""
                    />
                  </div>
                </button>

                {/* drop down. */}
                <div
                  className={
                    showMenu
                      ? "w-[200px] p-4 bg-gray-700 absolute right-[14%] top-[75%] rounded-lg"
                      : "hidden"
                  }
                >
                  <ul className="flex flex-col gap-3 text-gray-100">
                    {loggedInUser.role === "user" ? (
                      <li className="flex items-center gap-3 text-lg">
                        <RiBookmark3Line className="text-2xl" />
                        <Link to={"/user/my-bookings"}>My Bookings</Link>
                      </li>
                    ) : (
                      <li className="flex items-center gap-3 text-lg">
                        <BiSolidDashboard className="text-2xl" />
                        <Link to={"admin/dashboard/room"}>Dashboard</Link>
                      </li>
                    )}
                    <button onClick={logoutHandle}>
                    <li className="flex items-center gap-3 text-lg">
                      <CiLogout className="text-2xl" />
                      Logout
                    </li>
                    </button>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </CenterAlign>
      </div>
      {/*  mobile view. */}

      <div className="relative z-10 lg:hidden block">
        <div className="flex  items-center justify-between bg-black  px-3 py-2">
          <div className="flex  items-center justify-between  w-full">
           <div className="flex items-center">
           <ToggleButton onClick={toggleHandler} />
            <img
              className="w-[100px] h-[30px] object-contain"
              src={logo}
              alt=""
            />
           </div>
          {loggedInUser && (
              <div className="">
                <button
                  onClick={(e) =>{
                    e.stopPropagation()
                    setshowMenu((prev) => !prev)
                  }}
                  className=" rounded-full "
                >
                  
                  <div className="w-[40px] overflow-hidden rounded-full h-[40px]">
                    <img
                      className="scale-110 object-cover w-full h-full"
                      src={loggedInUser.img}
                      alt=""
                    />
                  </div>
                </button>

                {/* drop down. */}
                <div
                  className={
                    showMenu
                      ? "w-[200px] p-4 bg-gray-700 absolute right-[2%] top-[85%] rounded-lg"
                      : "hidden"
                  }
                >
                  <ul className="flex flex-col gap-3 text-gray-100">
                    {loggedInUser.role === "user" ? (
                      <li className="flex items-center gap-3 text-lg">
                        <RiBookmark3Line className="text-2xl" />
                        <Link to={"/user/my-bookings"}>My Bookings</Link>
                      </li>
                    ) : (
                      <li className="flex items-center gap-3 text-lg">
                        <BiSolidDashboard className="text-2xl" />
                        <Link to={"admin/dashboard/room"}>Dashboard</Link>
                      </li>
                    )}
                    <button onClick={logoutHandle}>
                    <li className="flex items-center gap-3 text-lg">
                      <CiLogout className="text-2xl" />
                      Logout
                    </li>
                    </button>
                  </ul>
                </div>
              </div>
            )}
          </div>

          
        </div>

        {/* drop down. */}
        <ul
          className={`absolute text-white w-full mt-20  pt-4 pb-2 bg-black duration-300 pl-4 left-0 ${
            showDropDown ? "-bottom-[220%]" : "bottom-[185%]"
          } -z-10`}
        >
          {routes}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
