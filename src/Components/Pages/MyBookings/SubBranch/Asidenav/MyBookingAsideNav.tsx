import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useAppSelector } from "../../../../../Redux/feathcer/hoocks";
import { ImHome } from "react-icons/im";
import ToggleButton from "../../../../Ui/ToggleButton";
import { useState } from "react";
const MyBookingAsideNav = () => {
  const routes = (
    <>
      <NavLink className="text-lg pl-2 font-semibold mx-0" to={""} end>
        My Bookings
      </NavLink>
      <Link className="text-lg pl-2 lg:hidden font-semibold" to={"/"} >
        Home
      </Link>
    </>
  );

  const { loggedInUser } = useAppSelector((state) => state.authStore);

  // mobile view handle.

  // mobile view.
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-700 hidden lg:block lg:w-[300px] justify-between lg:h-[80vh]  text-white py-6 px-4 rounded-xl lg:pt-16 sticky top-[65px]">
        <div className="flex justify-center items-center flex-col gap-4">
          <img
            className="lg:w-[100px] lg:h-[100px] rounded-full object-cover"
            src={loggedInUser?.img}
            alt=""
          />
          <h1 className="text-xl">{loggedInUser?.name}</h1>
        </div>

        <ul className="flex flex-col gap-3 mt-10">{routes}</ul>

        <Link
          className="text-lg absolute left-3 bottom-5 flex items-center gap-2 pl-2 font-semibold"
          to={"/"}
        >
          <ImHome /> Home
        </Link>
      </div>

      <div className="relative z-10 w-full lg:hidden block">
        <div className="flex  items-center justify-between bg-black  px-3 py-2">
          <div className="flex  items-center">
            <ToggleButton onClick={toggleHandler} />
            
          </div>
        
        </div>

        {/* drop down. */}
        <ul
          className={`absolute flex-col flex text-white w-full mt-20  pt-4 pb-2 bg-black duration-300 pl-4 left-0 ${
            showDropDown ? "-bottom-[129%]" : "bottom-[185%]"
          } -z-10`}
        >
          {routes}
        </ul>
      </div>
    </>
  );
};

export default MyBookingAsideNav;
