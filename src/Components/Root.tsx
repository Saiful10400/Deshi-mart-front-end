import { Outlet } from "react-router";
import Navbar from "./Component/Navbar";
 
 

const Root = () => {
    return (
        <div className="lg:w-[1700px] mx-auto">
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Root;