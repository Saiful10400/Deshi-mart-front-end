import { toast } from "react-toastify";

const Newsletter = () => {
  const formHandle = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("News letter subscibed.");
  };

  return (
    <div className="bg-[#f97316] text-white flex flex-col gap-2 lg:gap-3 h-auto p-6 rounded-md justify-center items-center mt-[40px] lg:mt-[78px] w-full   mx-auto">
      <h1 className="text-xl lg:text-4xl font-bold text-center">
        Sign Up For Latest News
      </h1>
      <p className="font-semibold text-sm lg:text-base text-center">
        Join our newsletter and stay updated with the latest trends and
        insights.
      </p>
      <form
        onSubmit={formHandle}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full"
      >
        <input
          type="email"
          placeholder="Your e-mail address"
          className="bg-white w-full sm:w-[300px] focus:outline-none text-black text-base pl-3 rounded-md py-2"
        />
        <button className="bg-white rounded-md text-black font-semibold px-4 py-2 w-full sm:w-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
