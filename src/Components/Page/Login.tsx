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

  const formSubmitHandle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // sending request.
    startLoading();
    const response = await send({ email, password });
    ManupulateLocalStorageToken(response.data?.token, "setItem");
    showResponse(response);
    setCurrentUser();

    console.log(response.data?.data,"user response data.");

    if (response.data?.data?.role === "Admin") {
      move("/admin-dashboard/users");
    } else if (response.data?.data?.role === "Vendor") {
       if (response.data?.data?.vendor?.shopId) {
        move("/vendor-dashboard/my-shop");
      }
      else{
        move("/vendor-dashboard/create-shop");
      }
    }
    
  };

  const [demoCredentials, setDemoCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="text-center lg:w-[60%] shadow-2xl rounded-2xl gap-12 flex flex-col lg:flex-row items-center justify-between p-10">
        <img
          src={loginModel}
          className="lg:h-[500px] h-[300px] w-full lg:w-1/2 object-cover rounded-2xl"
          alt=""
        />

        <div className="lg:w-[50%] ">
          <form className="w-full " onSubmit={formSubmitHandle}>
            <h1 className="text-start font-bold text-5xl mb-10">Login</h1>
            <div className="  mx-auto flex-col gap-5 flex">
              <Input
                defaultValue={demoCredentials.email}
                tittle="E-mail"
                name="email"
                type="email"
              />
              <Input
                defaultValue={demoCredentials.password}
                tittle="Password"
                name="password"
                type="password"
              />
              <PrimaryButton text="Login" />
            </div>
          </form>
          <div className="mt-3 text-start">
            <h1>Demo credentials</h1>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() =>
                  setDemoCredentials({
                    email: "admin@gmail.com",
                    password: "adminadmin",
                  })
                }
                className="bg-[#f3c82d] font-semibold text-sm px-2 py-1 rounded-xl text-[#ffffff]"
              >
                Admin
              </button>
              <button
                onClick={() =>
                  setDemoCredentials({
                    email: "vendor@gmail.com",
                    password: "vendorvendor",
                  })
                }
                className="bg-[#f3c82d] font-semibold text-sm px-2 py-1 rounded-xl text-[#ffffff]"
              >
                Vendor
              </button>
              <button
                onClick={() =>
                  setDemoCredentials({
                    email: "user@gmail.com",
                    password: "useruser",
                  })
                }
                className="bg-[#f3c82d] font-semibold text-sm px-2 py-1 rounded-xl text-[#ffffff]"
              >
                User
              </button>
            </div>
          </div>

          <div className="my-5">
            <h1 className="text-start">
              Don't have an account?{" "}
              <Link className="text-[#f3c614] font-semibold" to={"/signup/user"}>
                Create Account
              </Link>
            </h1>
            <h1 className="text-start">
              Can't remeber your password?{" "}
              <Link
                className="text-[#f3c614] font-semibold"
                to={"/recover-password"}
              >
                Forget Password
              </Link>
            </h1>
          </div>
          <p className="text-start text-sm">
            Note: Your personal data will be used to support your experience
            throughout this website, to manage access to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
