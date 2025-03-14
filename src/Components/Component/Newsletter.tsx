import { toast } from "react-toastify";

 

const Newsletter = () => {

    const formHandle=(e)=>{
        e.preventDefault()
        e.target.reset()
        toast.success("News letter subscibed.")
    }


    return (
        <div className="bg-[#f97316] text-white flex-col gap-1 lg:gap-3 h-[250px] rounded-md flex justify-center items-center mt-[40px] lg:mt-[78px]">
            <h1 className="lg:text-4xl text-xl  font-bold">Sign Up For Latest News</h1>
            <p className="font-semibold text-sm lg:text-base text-center">Join our newsletter and stay updated with the latest trends and insights.</p>
            <form onSubmit={formHandle} className="flex items-center gap-1 lg:gap-2">
                <input type="email" placeholder="Your e-mail address" className="bg-white lg:w-[300px] focus:outline-none text-black text-base pl-2 rounded-md py-1 lg:py-2" />
                <button className="bg-white rounded-md text-black font-semibold p-1 lg:p-2">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;