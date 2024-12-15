import logo from "../../../assets/logo.jpg"
import { Search, ShoppingCart,History } from 'lucide-react';
import { Link, useHref, useLocation } from "react-router-dom";
import { useAppSelector } from "../../Redux/feathcer/hoocks";


interface TroleData {
    buyerId: string;
    userId: string;
    status: string;
    email: string;
    name: string;
    photo: string;
    shopId:string
    isDeleted: boolean;
    created: string; // ISO date string
    updated: string; // ISO date string
}


export interface TuserData {
    admin: TroleData| null; // or you can use `admin?: null` if this field is optional
    buyer:TroleData| null; // The `buyer` can also be null if it's optional
    vendor:TroleData| null; // The `vendro` can also be null if it's optional
    email: string;
    role: string;
    userId:string,
    status:string
}




const Navbar = () => {

   
 


   
const{loggedInUser,isLoading}:{loggedInUser:TuserData|null,isLoading:boolean }=useAppSelector(s=>s.authStore)

const userData=()=>{
    if(!loggedInUser) return null
    
    if(loggedInUser.role==="Admin")return loggedInUser.admin
    if(loggedInUser.role==="User")return loggedInUser.buyer
    if(loggedInUser.role==="Vendor")return loggedInUser.vendor
}

 
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
                <Link to={"/cart"} className="flex flex-col items-center"><ShoppingCart className=""/> <span className="font-bold">Cart</span></Link>
                <Link to={"/history"} className="flex flex-col items-center"><History className=""/> <span className="font-bold">History</span></Link>
                

                
                {/* profile photo manage. */}

                {
                    loggedInUser && !isLoading?
                    <button className="w-[50px] h-[50px]  rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={userData()?.photo} alt="" />
                    </button>:
                    <span className="flex items-center gap-4">
                    <Link className="text-lg font-semibold text-black" to={"/signup"}>Signup</Link>
                    <Link to={"/login"}><button className="text-lg font-semibold text-white  bg-black px-3 py-2 rounded-3xl">Login</button></Link>
                </span>
                }



            </div>

        </div>


       </div>
    );
};

export default Navbar;