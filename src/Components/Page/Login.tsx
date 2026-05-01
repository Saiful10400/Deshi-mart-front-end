import { Link, useNavigate } from "react-router-dom";
import useSendPost from "../../Utils/useSendPost";
import { useLoginMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";
import ManupulateLocalStorageToken from "../../Utils/ManupulateLocalStorage";
import useGetThenSetCurrentUser from "../../Utils/useGetThenSetCurrentUser";

import loginModel from "../../../assets/loginmodel.png";
import Input from "../Ui/Input";
import PrimaryButton from "../Ui/PrimaryButton";
import { useState } from "react";

const Login = () => {
  const move = useNavigate();

  const setCurrentUser = useGetThenSetCurrentUser();
  const [send, startLoading] = useSendPost(useLoginMutation);
  const showResponse = useShowResponse();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formSubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    startLoading();
    const response = await send(formData);

    ManupulateLocalStorageToken(response.data?.token, "setItem");
    showResponse(response);
    setCurrentUser();

    if (response?.data?.token) {
      move("/");
    }
  };

  const handleDemoFill = (email: string, password: string) => {
    setFormData({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden">

        {/* LEFT SIDE IMAGE */}
        <div className="hidden lg:flex items-center justify-center bg-white p-10">
          <img
            src={loginModel}
            className="w-[80%] object-contain"
            alt="login"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-black mb-6">
            Login
          </h1>

          <form onSubmit={formSubmitHandle} className="space-y-5">

            <Input
              tittle="E-mail"
              name="email"
              type="email"
              defaultValue={formData.email}
              onChange={(e: any) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Input
              tittle="Password"
              name="password"
              type="password"
              defaultValue={formData.password}
              onChange={(e: any) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {/* ✅ FULL WIDTH BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#f27f20] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* DEMO ACCOUNTS */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Demo Accounts
            </h2>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  handleDemoFill("Admin@g.com", "admin admin")
                }
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs"
              >
                Admin
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDemoFill("vendor@gmail.com", "vendorvendor")
                }
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs"
              >
                Vendor
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDemoFill("user@gmail.com", "useruser")
                }
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs"
              >
                User
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div className="mt-6 text-sm space-y-2 text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link className="text-orange-500 font-semibold" to="/signup/user">
                Create Account
              </Link>
            </p>

            <p>
              Forgot password?{" "}
              <Link className="text-orange-500 font-semibold" to="/recover-password">
                Recover Password
              </Link>
            </p>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Your data is securely stored and used only to improve your experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;