import { Outlet } from "react-router";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../../Redux/api/api";
import { getToken } from "../../Utils/getToken";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { setLoading, setUser } from "../../Redux/feathcer/AuthSlice";
import axios from "axios";
import { IoIosArrowUp } from "react-icons/io";
const Root = () => {
  AOS.init();


  // getting login user details, if the user is logged in.
 

  const dispatch = useAppDispatch();



  useEffect(() => {
    axios.get("https://apollow-assignment-5-back-end.vercel.app/api/auth/getCurrentUser", {
      headers: {
        authorization: getToken() ,
      }
    }).then(res=>{
      console.log("from root.")
      dispatch(setUser(res.data.data))
 
    })
  }, []);

  const scrollTopHandle=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }



  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


console.log(window.scrollY)
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <NavBar />
        <ToastContainer />
      </div>
      <div className="relative z-10">
        <Outlet />
        <Footer />
        {
          !isAtTop&&<button onClick={scrollTopHandle} className="fixed text-4xl text-white bg-gray-600 bottom-3 right-4 rounded-full p-2">
          <IoIosArrowUp />
          </button>
        }
      </div>
    </div>
  );
};

export default Root;
