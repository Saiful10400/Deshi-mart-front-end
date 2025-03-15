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
import VendorSingup from "../Components/Page/VendorSingup";
import CreateBrand from "../Components/Page/sub-pages/AdminDashboard/CreateBrand";
import AllBrand from "../Components/Page/sub-pages/AdminDashboard/AllBrand";
import CreateCategory from "../Components/Page/sub-pages/AdminDashboard/CreateCategory";
import AllCategory from "../Components/Page/sub-pages/AdminDashboard/AllCategory";
import Products from "../Components/Page/sub-pages/AdminDashboard/Products";
import AllShops from "../Components/Page/sub-pages/AdminDashboard/AllShops";
import AllUser from "../Components/Page/sub-pages/AdminDashboard/AllUser";
import UpdateShop from "../Components/Page/sub-pages/VendorDashboard/UpdateShop";
import MyShop from "../Components/Page/sub-pages/VendorDashboard/MyShop";
import CreateProduct from "../Components/Page/sub-pages/VendorDashboard/CreateProduct";
import CreateBanner from "../Components/Page/sub-pages/AdminDashboard/CreateBanner";
import AllBanner from "../Components/Page/sub-pages/AdminDashboard/AllBanner";
import Shops from "../Components/Page/Shops";
import CreateShop from "../Components/Page/sub-pages/VendorDashboard/CreateShop";
import VendorDashboardOverView from "../Components/Page/sub-pages/VendorDashboard/VendorDashboardOverView";
import AdminDashboardOverView from "../Components/Page/sub-pages/AdminDashboard/AdminDashboardOverView";
import Categories from "../Components/Page/Categories";
import BrandsPage from "../Components/Page/BrandsPage";

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
        path: "/shops",
        Component: Shops,
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
        path: "/categories",
        Component: Categories,
      },
      {
        path: "/brands",
        Component: BrandsPage,
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
        path: "/shops/:id",
        Component: SingleShopDetails,
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
        path: "/signup/user",
        Component: Signup,
      },
      {
        path: "/signup/vendor",
        Component: VendorSingup,
      },
      {
        path: "/reset-password",
        Component: ResetRecoveryPassword,
      },

      {
        path: "/recover-password",
        Component: RecoverPassword,
      },
    ],
  },

  {
    path: "/payment-status/:id",
    Component: PaymentStatus,
  },

  {
    path: "/vendor-dashboard",
    Component: VendorDashboard,
    children: [
      {
        index: true,
        Component: VendorDashboardOverView,
      },
      {
        path: "create-shop",
        Component: CreateShop,
      },
      {
        path: "my-shop",
        Component: MyShop,
      },
      {
        path: "update-my-shop",
        Component: UpdateShop,
      },
      {
        path: "all-products",
        Component: DashboardMyproducts,
      },
      {
        path: "create-product",
        Component: CreateProduct,
      },
      {
        path: "review",
        Component: DashboardCustomersReview,
      },
      {
        path: "orders",
        Component: DashboardOrderHistory,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    Component: AdminDashboard,
    children: [
      {
        index: true,
        Component: AdminDashboardOverView,
      },
      {
        path: "users",
        Component: AllUser,
      },
      {
        path: "create-brand",
        Component: CreateBrand,
      },
      {
        path: "all-brands",
        Component: AllBrand,
      },
      {
        path: "shops",
        Component: AllShops,
      },
      {
        path: "create-category",
        Component: CreateCategory,
      },
      {
        path: "all-categorys",
        Component: AllCategory,
      },
      {
        path: "create-banner",
        Component: CreateBanner,
      },
      {
        path: "all-banners",
        Component: AllBanner,
      },
      {
        path: "transections",
        Component: DashboardTransections,
      },
      {
        path: "products",
        Component: Products,
      },
    ],
  },
  {
    path: "/vendor-dashboard",
    Component: VendorDashboard,
  },
]);

export default routes;
