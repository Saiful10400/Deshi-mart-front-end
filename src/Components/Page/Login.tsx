import { Link } from "react-router-dom";
import useSendPost from "../../Utils/useSendPost";
import { useLoginMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";
import ManupulateLocalStorageToken from "../../Utils/ManupulateLocalStorage";

const Login = () => {

  const[send,startLoading]=useSendPost(useLoginMutation)
  const showResponse=useShowResponse()

  const formSubmitHandle=async(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value
    const password=form.password.value

    // sending request.
    startLoading()
    const response=await send({email,password})
    ManupulateLocalStorageToken(response.data?.token,"setItem")
    showResponse(response)
   
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center min-w-[600px] shadow-2xl rounded-2xl flex flex-col justify-center gap-2 py-11">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <h1 className="text-sm font-medium">Pleace enter your details</h1>

        <form onSubmit={formSubmitHandle}>
          <div className="w-[60%] mx-auto flex-col gap-5 flex">
            <input
              placeholder="E-mail"
              type="text"
              name="email"
              className="w-full block outline-none border-b border-black"
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              className="w-full block outline-none border-b border-black"
            />
            <Link
              className=" font-medium hover:underline inline-block text-start"
              to={"/recover-password"}
            >
              Forgot password?
            </Link>

            <button className="bg-black text-white py-2 rounded-xl font-bold">
              Login
            </button>
          </div>
        </form>

        <h1 className="text-sm mt-6">
          Dont have an account?{" "}
          <Link className="underline font-bold" to={"/signup"}>
            Sign Up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
