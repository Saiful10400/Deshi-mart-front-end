import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import createFormData from "../../Utils/createFormData";
import useShowResponse from "../../Utils/useShowResponse";
import Input from "../Ui/Input";
import loginModel from "../../../assets/loginmodel.png";

const Signup = () => {
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
      role: "User",
    });

    startLoading();
    const response = await send(formateData);
    showResponse(response);
    move("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-6xl shadow-2xl rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col lg:flex-row gap-6 bg-white">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={loginModel}
            alt="Login visual"
            className="w-full h-auto max-h-[400px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              User Account
            </h1>
            <form onSubmit={formSubmitHandle} className="space-y-4">
              <Input tittle="Your name" name="name" type="text" defaultValue="" />
              <Input tittle="Email" name="email" type="email" defaultValue="" />
              <Input tittle="Password" name="password" type="password" defaultValue="" />
              <Input
                tittle="Confirm Password"
                name="confirmPassword"
                type="password"
                defaultValue=""
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
              >
                Submit & Register
              </button>
            </form>

            <div className="mt-4 text-start space-y-1">
              <p>
                Need a Vendor account?{" "}
                <Link to={"/signup/vendor"} className="text-[#f3c614] font-semibold">
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

            <p className="text-gray-500 text-sm mt-4 text-start">
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

export default Signup;
