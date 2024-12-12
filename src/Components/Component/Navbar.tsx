import logo from "../../../assets/logo.jpg"
import { Search, ShoppingCart,History } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <div className="mt-5">
         <div className="flex items-center justify-between">
            <img className="w-[150px]" src={logo} alt="" />
            <form className="relative flex">
                <input type="text" placeholder="Search product" className="bg-gray-200 outline-none h-[40px] w-[350px] rounded-l-lg pl-12" />
                <button className="bg-gray-700 px-2 rounded-r-lg"><Search className="text-gray-200"/></button>
                <Search className="text-gray-400 text-xs absolute block top-[20%] left-2"/>
            </form>
            <div className="flex justify-between items-center gap-12">
                <span className="flex flex-col items-center"><ShoppingCart className=""/> <span className="font-bold">Cart</span></span>
                <span className="flex flex-col items-center"><History className=""/> <span className="font-bold">History</span></span>
                <span className="flex items-center gap-4">
                    <Link className="text-lg font-semibold text-black" to={"/signup"}>Signup</Link>
                    <Link to={"/login"}><button className="text-lg font-semibold text-white  bg-black px-3 py-2 rounded-3xl">Login</button></Link>
                </span>
            </div>

        </div>


       </div>
    );
};

export default Navbar;