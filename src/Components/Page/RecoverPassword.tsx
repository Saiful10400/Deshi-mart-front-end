import { Link } from "react-router-dom";
import useSendPost from "../../Utils/useSendPost";
import { useResetPasswordGetTokenMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";
import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";

const RecoverPassword = () => {
  const [send, startLoading] = useSendPost(useResetPasswordGetTokenMutation);
  const showResponse = useShowResponse();

  const [sended, setSended] = useState(false);

  const formSubmitHandle = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // sending request.
    startLoading();
    const response = await send({ email });
    showResponse(response);

    if(response?.data.success===true){
        setSended(true)
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center min-w-[600px] shadow-2xl rounded-2xl flex flex-col justify-center gap-2 py-11">
        {sended ? (
          <>
          <div className="text-center"><CheckCircle2Icon height={50} width={50} className="inline-block"/></div>
            <h1 className="text-3xl font-bold">A verification e-mail has sended</h1>
            <h1 className="text-sm font-medium">Check your e-mail and follow the step.</h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Recover your password</h1>
            <h1 className="text-sm font-medium">Pleace enter your e-mail</h1>
          </>
        )}

        {!sended && (
          <>
            <form className="mt-8" onSubmit={formSubmitHandle}>
              <div className="w-[60%] mx-auto flex-col gap-5 flex">
                <input
                  placeholder="E-mail"
                  type="text"
                  name="email"
                  className="w-full block outline-none border-b border-black"
                />

                <button className="bg-black text-white py-2 rounded-xl font-bold">
                  Send
                </button>
              </div>
            </form>

            <h1 className="text-sm mt-6">
              Dont have an account?{" "}
              <Link className="underline font-bold" to={"/signup"}>
                Sign Up
              </Link>
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default RecoverPassword;
