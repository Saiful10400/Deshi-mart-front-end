import { useSearchParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";

const ResetRecoveryPassword = () => {
    const [send, startLoading] = useSendPost(useResetPasswordMutation);
    const showResponse = useShowResponse();

    const [token]=useSearchParams()
    


    const formSubmitHandle=async(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const newPassword=form.password.value

        startLoading()
        const response=await send({data:{email,newPassword},token:token.get("token")})
        showResponse(response)

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
      <div className="text-center min-w-[600px] shadow-2xl rounded-2xl flex flex-col justify-center gap-2 py-11">
        <h1 className="text-3xl font-bold">Reset Password</h1>
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
              placeholder="New password"
              type="text"
              name="password"
              className="w-full block outline-none border-b border-black"
            />
            

            <button className="bg-black text-white py-2 rounded-xl font-bold">
              Update
            </button>
          </div>
        </form>

      </div>
    </div>
    );
};

export default ResetRecoveryPassword;