import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Page/Home";
import Root from "../Components/Root";
import Login from "../Components/Page/Login";
import Signup from "../Components/Page/Signup";
import RecoverPassword from "../Components/Page/RecoverPassword";
import ResetRecoveryPassword from "../Components/Page/ResetRecoveryPassword";
import AdminDashboard from "../Components/Page/AdminDashboard";
import VendorDashboard from "../Components/Page/VendorDashboard";
import DashboardUser from "../Components/Page/sub-pages/DashboardUser";
import DashboardShops from "../Components/Page/sub-pages/DashboardShops";
import DashboardCategory from "../Components/Page/sub-pages/DashboardCategory";
import DashboardTransections from "../Components/Page/sub-pages/DashboardTransections";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },

  {
    path: "/login",
    Component: Login,
  },

  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/recover-password",
    Component: RecoverPassword,
  },
  {
    path: "/reset-password",
    Component: ResetRecoveryPassword,
  },
  {
    path: "/admin-dashboard",
    Component: AdminDashboard,
    children:[
      {
        path:"users",
        Component:DashboardUser
      },
      {
        path:"shops",
        Component:DashboardShops
      },
      {
        path:"categorys",
        Component:DashboardCategory
      },
      {
        path:"transections",
        Component:DashboardTransections
      },
    ]
  },
  {
    path: "/vendor-dashboard",
    Component: VendorDashboard,
  },
]);

export default routes;
