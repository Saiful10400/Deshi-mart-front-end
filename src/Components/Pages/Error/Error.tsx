import { Link } from "react-router-dom";
import errorGif from "../../../assets/Error/error.gif";
const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col-reverse lg:flex-row min-h-screen min-w-full">
      <div className="text-center lg:text-start">
        <h1 className="text-5xl font-normal">Something's wrong here...</h1>
        <p className="text-xl font-normal mt-4 mb-14">
          We can't find the page you're looking for. <br />
          Contact with us or back to home.
        </p>
        <div className="flex gap-4 lg:justify-start justify-center">
            <Link className="bg-gray-400 p-2 px-4 to-center w-max text-lg font-medium text-white" to={"/"}>Home</Link>
            <Link className="border-2 border-gray-400 p-2 px-4 to-center w-max text-lg font-medium text-black" to={"/contact-us"}>Contact</Link>
        </div>
      </div>
      <img  src={errorGif} alt="" />
    </div>
  );
};

export default Error;
