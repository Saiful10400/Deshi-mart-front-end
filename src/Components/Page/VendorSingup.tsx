import { Link, useNavigate } from "react-router-dom";

import { useSignupMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import createFormData from "../../Utils/createFormData";
import useShowResponse from "../../Utils/useShowResponse";
import Input from "../Ui/Input";
import loginModel from "../../../assets/loginmodel.png";

// export interface Tuser {
//     email: string;
//     password: string;
//     photo: string;
//     name: string;
//     // role: roles;
//   }

const VendorSignup = () => {
  const [send, startLoading] = useSendPost(useSignupMutation);

  const showResponse = useShowResponse();
  const move = useNavigate();
  const formSubmitHandle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formateData = createFormData({
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      role: "Vendor",
    });

    startLoading();
    const response = await send(formateData);
    showResponse(response);

    move("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center p-10 w-[60%] px-12 shadow-2xl rounded-2xl gap-12 flex items-center justify-between">
        <img
          src={loginModel}
          className="h-[500px] w-1/2 object-cover rounded-2xl"
          alt=""
        />
        <div className="flex  w-[50%] justify-center items-center">
          <div className="bg-white  rounded-lg w-full max-w-[500px]">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Vendor Account
            </h1>
            <form
              onSubmit={formSubmitHandle}
              className="space-y-4 flex flex-col "
            >
              <Input
                tittle="Your name"
                name="name"
                type="text"
                defaultValue=""
              />

              <Input tittle="Email" name="email" type="email" defaultValue="" />
              <Input
                tittle="Password"
                name="password"
                type="password"
                defaultValue=""
              />
              <Input
                tittle="Confirm Password"
                name="confirmPassword"
                type="password"
                defaultValue=""
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600"
              >
                Submit & Register
              </button>
            </form>

            <div className=" mt-4 text-start">
              <p>
                Need a user account?{" "}
                <Link to={"/signup/user"} className="text-[#f3c614] font-semibold">
                  Create Now
                </Link>
              </p>
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#f3c614] font-semibold">
                  Login
                </Link>
              </p>
            </div>

            <p className="text-gray-500  text-sm mt-4 text-start">
              Note: Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
