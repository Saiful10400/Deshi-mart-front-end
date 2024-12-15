import { CheckCircle2, Home, X, XCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

 

const PaymentStatus = () => {
    const[searchParams]=useSearchParams()
    const status=searchParams.get("success")
    console.log(status);
    return (
        <div className="flex justify-center items-center min-h-screen">

            {
            status==="true"?<div className="text-center gap-4 bg-gray-50 min-h-[400px] flex justify-center items-center flex-col min-w-[500px] rounded-lg shadow-xl">
            <CheckCircle2 height={50} color="green" width={50}/>
            <h1 className="text-2xl font-semibold text-green-400">Payment success</h1>
            <Link className="mt-5" to={"/"}><Home width={40} height={40}/></Link>
        </div>:<div className="text-center gap-4 bg-gray-50 min-h-[400px] flex justify-center items-center flex-col min-w-[500px] rounded-lg shadow-xl">
                <XCircle height={50} color="red" width={50}/>
                <h1 className="text-2xl font-semibold text-red-500">Payment failed</h1>
                <Link className="mt-5" to={"/"}><Home width={40} height={40}/></Link>
            </div>
            }
            
        </div>
    );
};

export default PaymentStatus;