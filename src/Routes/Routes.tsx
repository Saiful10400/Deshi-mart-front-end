import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home/Home";

import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import Rooms from "../Components/Pages/Rooms/Rooms";
import Authentication from "../Components/Pages/Authentication/Authentication";
import AdminDashboard from "../Components/Pages/AdminDashboard/AdminDashboard";
import RoomManage from "../Components/Pages/AdminDashboard/SubPages/Rooms/RoomManage";
import BookingManage from "../Components/Pages/AdminDashboard/SubPages/Bookings/BookingManage";
import SlotManage from "../Components/Pages/AdminDashboard/SubPages/Slots/SlotManage";
import SingleRoom from "../Components/Pages/SingleRoom/SingleRoom";
import BookingProcess from "../Components/Pages/BookingProcess/BookingProcess";
import Payment from "../Components/Pages/Payment/Payment";
import MybookingRoot from "../Components/Pages/MyBookings/MybookingRoot";
import MyBooking from "../Components/Pages/MyBookings/SubBranch/MyBooking";
import Error from "../Components/Pages/Error/Error";
import { ChakraProvider } from "@chakra-ui/react";
import PrivateRoute from "../Utils/PrivateRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement:<h1>Murubbi murubbi. uhhhhhh.</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <ChakraProvider><Rooms /></ChakraProvider>,
      },
      {
        path: "/meeting-rooms/:id",
        element:<PrivateRoute role={["admin","user"]}><SingleRoom /></PrivateRoute>,
      },
      {
        path: "/meeting-rooms/booking/:id",
        element: <BookingProcess />,
      },
      {
        path: "/authentication/:id",
        element: <Authentication />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/confirm-booking/:id",
        element: <Payment/>,
      },
    ],
    errorElement:<Error/>
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute role={["admin"]}><AdminDashboard /></PrivateRoute>,
    children: [
      {
        path: "room",
        element: <RoomManage />,
      },
      {
        path: "booking",
        element: <BookingManage />,
      },
      {
        path: "slot",
        element: <SlotManage />,
      },
    ],
    errorElement:<Error/>
  },
  {
    path:"/user/my-bookings",
    element:<PrivateRoute role={["user","admin"]}><MybookingRoot/></PrivateRoute>,
    children:[
      {
        path:"",
        element:<MyBooking/>
      }
    ],
    errorElement:<Error/>
  }
]);

export default routes;
