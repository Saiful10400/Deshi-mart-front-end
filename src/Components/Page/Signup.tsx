import { Link } from "react-router-dom";

import { useSignupMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import createFormData from "../../Utils/createFormData";
import useShowResponse from "../../Utils/useShowResponse";

// export interface Tuser {
//     email: string;
//     password: string;
//     photo: string;
//     name: string;
//     // role: roles;
//   }

const Signup = () => {
  const [send, startLoading] = useSendPost(useSignupMutation);

  const showResponse = useShowResponse();

  const formSubmitHandle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formateData = createFormData({
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      photo: form.file.files[0],
      role: form.role.value,
    });

    startLoading();
    const response = await send(formateData);
    showResponse(response);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center min-w-[600px] shadow-2xl rounded-2xl flex flex-col justify-center gap-2 py-11">
        <h1 className="text-3xl font-bold">Create your account</h1>
        <h1 className="text-sm font-medium">Pleace enter your details</h1>

        <form onSubmit={formSubmitHandle}>
          <div className="w-[60%] mx-auto flex-col gap-5 flex">
            <input
              placeholder="Name"
              name="name"
              type="text"
              className="w-full block outline-none border-b border-black"
            />
            <input
              placeholder="E-mail"
              name="email"
              type="text"
              className="w-full block outline-none border-b border-black"
            />
            <input
              placeholder="Password"
              name="password"
              type="text"
              className="w-full block outline-none border-b border-black"
            />

            <select
              name="role"
              className="w-full block outline-none border-black"
            >
              <option value="" hidden>
                Select role
              </option>

              <option value="Admin">Admin</option>
              <option value="Vendor">Vendor</option>
              <option value="User">User</option>
            </select>

            <input
              placeholder="Profile Photo"
              type="file"
              name="file"
              className="w-full block outline-none border-black"
            />

            <button className="bg-black text-white py-2 rounded-xl font-bold">
              Signup
            </button>
          </div>
        </form>

        <h1 className="text-sm mt-6">
          Already have an account?{" "}
          <Link className="underline font-bold" to={"/login"}>
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
