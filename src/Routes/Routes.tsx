import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Page/Home";
import Root from "../Components/Root";
import Login from "../Components/Page/Login";
import Signup from "../Components/Page/Signup";
import RecoverPassword from "../Components/Page/RecoverPassword";
import ResetRecoveryPassword from "../Components/Page/ResetRecoveryPassword";
import AdminDashboard from "../Components/Page/AdminDashboard";
import VendorDashboard from "../Components/Page/VendorDashboard";

import DashboardTransections from "../Components/Page/sub-pages/AdminDashboard/DashboardTransections";
import DashboardShops from "../Components/Page/sub-pages/AdminDashboard/DashboardShops";
import DashboardUser from "../Components/Page/sub-pages/AdminDashboard/DashboardUser";
import DashboardCategory from "../Components/Page/sub-pages/AdminDashboard/DashboardCategory";
import DashboardMyStore from "../Components/Page/sub-pages/VendorDashboard/DashboardMyStore";
import DashboardMyproducts from "../Components/Page/sub-pages/VendorDashboard/DashboardMyproducts";
import DashboardCustomersReview from "../Components/Page/sub-pages/VendorDashboard/DashboardCustomersReview";
import DashboardOrderHistory from "../Components/Page/sub-pages/VendorDashboard/DashboardOrderHistory";
import SingleProductDetails from "../Components/Page/SingleProductDetails";
import SingleShopDetails from "../Components/Page/SingleShopDetails";
import Cart from "../Components/Page/Cart";
import PaymentStatus from "../Components/Ui/PaymentStatus";
import NavHistory from "../Components/Page/NavHistory";
import NavHistoryProducts from "../Components/Page/NavHistoryProducts";
import NavHIstoryOrders from "../Components/Page/NavHIstoryOrders";
import AllProducts from "../Components/Page/AllProducts";
import FollowingShopProducts from "../Components/Page/FollowingShopProducts";
import ChangePassword from "../Components/Page/ChangePassword";
import FlashSale from "../Components/Page/FlashSale";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/history",
        Component: NavHistory,
        children: [
          {
            index: true,
            Component: NavHistoryProducts,
          },
          {
            path: "last-orders",
            Component: NavHIstoryOrders,
          },
        ],
      },
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/following-shop",
        Component: FollowingShopProducts,
      },
      {
        path: "/all-product",
        Component: AllProducts,
      },
      {
        path: "/flash-sale",
        Component: FlashSale,
      },
      {
        path: "/product/:id",
        Component: SingleProductDetails,
      },
      {
        path: "/shop/:id",
        Component: SingleShopDetails,
      },
    ],
  },

  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/change-password",
    Component: ChangePassword,
  },
  {
    path: "/payment-status/:id",
    Component: PaymentStatus,
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
    path: "/vendor-dashboard",
    Component: VendorDashboard,
    children: [
      {
        path: "my-shop",
        Component: DashboardMyStore,
      },
      {
        path: "my-products",
        Component: DashboardMyproducts,
      },
      {
        path: "customers-review",
        Component: DashboardCustomersReview,
      },
      {
        path: "order-history",
        Component: DashboardOrderHistory,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    Component: AdminDashboard,
    children: [
      {
        path: "users",
        Component: DashboardUser,
      },
      {
        path: "shops",
        Component: DashboardShops,
      },
      {
        path: "categorys",
        Component: DashboardCategory,
      },
      {
        path: "transections",
        Component: DashboardTransections,
      },
    ],
  },
  {
    path: "/vendor-dashboard",
    Component: VendorDashboard,
  },
]);

export default routes;
