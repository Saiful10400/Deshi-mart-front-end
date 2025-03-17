import { Link, useNavigate } from "react-router-dom";
import useSendPost from "../../Utils/useSendPost";
import { useChangePasswordMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";
 
import useGetThenSetCurrentUser from "../../Utils/useGetThenSetCurrentUser";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import notification from "../../Utils/showMessage";


const ChangePassword = () => {

  const move=useNavigate()

  const setCurrentUser=useGetThenSetCurrentUser()
  const[send,startLoading]=useSendPost(useChangePasswordMutation)
  const showResponse=useShowResponse()

  const{loggedInUser}=useAppSelector(s=>s.authStore)

  const formSubmitHandle=async(e)=>{
    e.preventDefault()
    const form=e.target
    
    const password1=form.password1.value
    const password2=form.password2.value
    const oldPassword=form.oldPassword.value

    if(password1===password2){

        if(!loggedInUser?.email){
            return
        }

        startLoading()
        const response=await send({email:loggedInUser?.email,oldPassword,newPassword:password1})
        showResponse(response)
       if(response?.data?.statusCode===200){
        e.target.reset()
        move("/")
       }
    } else{
      notification("Password not matched","error")
    }

    


   
  }

  // newPassword: string;
  // oldPassword: string;
  // email: string;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center min-w-[600px] text-[#fc7112] shadow-2xl rounded-2xl flex flex-col justify-center gap-2 py-11">
        <h1 className="text-3xl font-bold ">Change Password</h1>
        <h1 className="text-sm font-medium text-black">Please enter your details</h1>

        <form onSubmit={formSubmitHandle}>
          <div className="w-[60%] text-black mx-auto flex-col gap-5 flex">
            <input
            required
              placeholder="Old password"
              type="text"
              name="oldPassword"
              className="w-full block outline-none border-b border-black"
            />
            <input
            required
              placeholder="New password"
              type="text"
              name="password1"
              className="w-full block outline-none border-b border-black"
            />
            <input
            required
              placeholder="Re-type new password"
              type="text"
              name="password2"
              className="w-full block outline-none border-b border-black"
            />
            

            <button className="bg-[#fc7112] text-white py-2 rounded-xl font-bold">
              Update
            </button>
          </div>
        </form>

        {/* <h1 className="text-sm mt-6">
          Dont have an account?{" "}
          <Link className="underline font-bold" to={"/signup"}>
            Sign Up
          </Link>
        </h1>
        <Link className="underline w-max mx-auto font-bold" to={"/"}>
            Home
          </Link> */}
      </div>
    </div>
  );
};

export default ChangePassword;
