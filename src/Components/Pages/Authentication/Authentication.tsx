import { useNavigate, useParams } from "react-router";
import "./style.css";
import logo from "../../../assets/blackLogo.png";
import AuthenticationInput from "../../Ui/AuthenticationInput";
import Button from "../../Ui/Button";
import { NavLink } from "react-router-dom";
import { IoCameraSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import imageUpload from "../../../Utils/imageUpload";
import { toast } from "react-toastify";
import {
  useGetLoggedInUserQuery,
  useLoginMutation,
  useSignupMutation,
} from "../../../Redux/api/api";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import { setUser } from "../../../Redux/feathcer/AuthSlice";
import axios from "axios";
import { getToken } from "../../../Utils/getToken";
const Authentication = () => {
  const params = useParams().id;
  const move = useNavigate();

  // profile image upload handle.
  const [profileImage, setProfileImage] = useState(null);
  const [isProfileImageUploading, setIsProfileImageUploading] = useState(false);

  useEffect(() => {
    if (params !== "login") {
      if (params !== "register") {
        move("/");
      }
    }
  }, [params]);

  const profileImageUploadHandle = (e) => {
    const files = e.target.files;
    setIsProfileImageUploading(true);
    imageUpload(files)
      .then((res) => {
        setProfileImage(res[0]);
        setIsProfileImageUploading(false);
      })
      .catch(() => {
        toast.error("Unsupported Profile image file formate!", {
          position: "top-center",
        });
        setIsProfileImageUploading(false);
      });
  };

  // redux hoocks for signup and login.
  const [
    signup,
    { error: signupError, isLoading: signupLoading, data: signupData },
  ] = useSignupMutation();
  const [
    login,
    { error: loginError, isLoading: loginLoading, data: loginData },
  ] = useLoginMutation();

  const dispatch = useAppDispatch();

  //form submit handle.
  const formSubmitHandle = (e) => {
    e.preventDefault();
    const form = e.target;

    if (params === "login") {
      const email = form.email.value;
      const password = form.password.value;
      login({ email, password })
        .then((res) => {
          if (res?.error?.status) return;
          dispatch(setUser(null));
          localStorage.setItem("token", res.data.token);

          axios
            .get(
              "https://apollow-assignment-5-back-end.vercel.app/api/auth/getCurrentUser",
              {
                headers: {
                  authorization: getToken(),
                },
              }
            )
            .then((res) => {
              dispatch(setUser(res.data.data));
              move("/");
            });

          form.reset();
        })
        .catch((err) => console.log(err, "error."));
    } else if (params === "register") {
      if (!profileImage)
        return toast.error("You have to upload a profile image.", {
          position: "top-center",
        });

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const phone = form.phone.value;
      const address = form.address.value;
      const img = profileImage;
      const role = "user";
      signup({ name, email, password, phone, address, img, role }).then(() =>
        form.reset()
      );
    }
  };

  // show necessary message.
  useEffect(() => {
    if (signupData) {
      toast.success(signupData?.message, {
        position: "top-center",
      });
      move("/authentication/login");
    }
  }, [signupData]);

  useEffect(() => {
    if (loginData) {
      toast.success(loginData.message, {
        position: "top-center",
      });
    }
  }, [loginData]);

  // error message handle.

  useEffect(() => {
    // error messages
    if (signupError)
      toast.error(signupError?.data?.message, {
        position: "top-center",
      });
  }, [signupError]);

  useEffect(() => {
    // error messages
    if (loginError)
      toast.error(loginError?.data?.message, {
        position: "top-center",
      });
  }, [loginError]);

  return (
    <div className="authContainer lg:min-h-[80vh] to-center">
      <div className="bg-white rounded-lg py-5 w-full lg:w-auto lg:min-w-[500px] lg:min-h-[500px]">
        <div className="to-center">
          {" "}
          <img className="h-[30px]" src={logo} alt="" />
        </div>
        <h1 className="text-center text-3xl mt-3 font-semibold">
          {params === "login" ? "Login into account" : "Create an account"}
        </h1>
        <h1 className="font-normal text-lg text-center mt-2 text-gray-400 ">
          {params === "login"
            ? "Use your credentials to access your account."
            : "Setup a new account in a minute."}
        </h1>

        {params === "register" && (
          <div className="to-center mt-5">
            <label
              htmlFor="profileImg"
              className="to-center overflow-hidden flex-col cursor-pointer  bg-gray-500 text-white  h-[100px] rounded-full w-[100px]"
            >
              {profileImage && !isProfileImageUploading ? (
                <img
                  className="w-full h-full object-cover"
                  src={profileImage}
                  alt="profileiamge"
                />
              ) : isProfileImageUploading ? (
                <span className="loading loading-spinner text-white loading-md"></span>
              ) : (
                <>
                  <IoCameraSharp className="text-3xl" />
                  <span className="w-max text-xs font-semibold">
                    Upload Profile
                  </span>
                </>
              )}
            </label>

            <input
              onInput={profileImageUploadHandle}
              accept="image/*"
              type="file"
              id="profileImg"
              className="hidden"
            />
          </div>
        )}

        <form
          onSubmit={formSubmitHandle}
          className="px-5 flex flex-col mt-4 gap-4"
        >
          {params === "login" ? (
            <>
              <AuthenticationInput
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <AuthenticationInput
                name="password"
                placeholder="Password"
                type="password"
              />
            </>
          ) : (
            <>
              <AuthenticationInput name="name" placeholder="Name" type="text" />
              <AuthenticationInput
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <AuthenticationInput
                name="password"
                placeholder="Password"
                type="password"
              />
              <AuthenticationInput
                name="phone"
                placeholder="Phone number"
                type="number"
              />
              <AuthenticationInput
                name="address"
                placeholder="Address"
                type="text"
              />
            </>
          )}
          <Button
            loading={signupLoading || loginLoading}
            disable={signupLoading || loginLoading || isProfileImageUploading}
            text={params === "login" ? "Login" : "Register"}
          />
        </form>

        <h1 className="font-medium text-center mt-4">
          <span className="font-normal">
            {params === "login"
              ? "Didn't have an account?"
              : "Already have an account?"}
          </span>{" "}
          <NavLink
            to={`/authentication/${params === "login" ? "register" : "login"}`}
          >
            {params === "login" ? "register" : "login"}
          </NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Authentication;
