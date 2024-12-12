import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Page/Home";
import Root from "../Components/Root";
import Login from "../Components/Page/Login";
import Signup from "../Components/Page/Signup";
import RecoverPassword from "../Components/Page/RecoverPassword";
import ResetRecoveryPassword from "../Components/Page/ResetRecoveryPassword";
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
]);

export default routes;
