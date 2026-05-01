import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import createFormData from "../../Utils/createFormData";
import useShowResponse from "../../Utils/useShowResponse";
import Input from "../Ui/Input";
import loginModel from "../../../assets/loginmodel.png";

const VendorSignup = () => {
  const [send, startLoading] = useSendPost(useSignupMutation);
  const showResponse = useShowResponse();
  const move = useNavigate();

  const formSubmitHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formateData = createFormData({
      name: form.name.value,
      email: form.email.value,
      password,
      role: "Vendor",
    });

    startLoading();
    const response = await send(formateData);

    showResponse(response);

    if (response?.data?.success) {
      move("/login");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4 py-10">

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="hidden lg:flex items-center justify-center p-10 bg-white">
          <img
            src={loginModel}
            alt="Vendor Signup"
            className="w-[85%] object-contain"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-black mb-6">
            Vendor Account
          </h1>

          <form onSubmit={formSubmitHandle} className="space-y-4">

            <Input tittle="Your Name" name="name" type="text" />
            <Input tittle="Email" name="email" type="email" />
            <Input tittle="Password" name="password" type="password" />
            <Input
              tittle="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            {/* FULL WIDTH BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#f27f20] hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit & Register
            </button>
          </form>

          {/* LINKS */}
          <div className="mt-6 text-sm space-y-2 text-gray-600">

            <p>
              Need a user account?{" "}
              <Link to="/signup/user" className="text-orange-500 font-semibold">
                Create Now
              </Link>
            </p>

            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 font-semibold">
                Login
              </Link>
            </p>
          </div>

          {/* NOTE */}
          <p className="text-gray-400 text-xs mt-6">
            Vendor accounts can create shops, manage products, and track orders
            through the dashboard system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;