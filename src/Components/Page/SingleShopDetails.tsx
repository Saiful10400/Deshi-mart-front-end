import { useParams } from "react-router";
import { useGetAStoreAllProductNotDashboardQuery, useGetSingleOrAllStoreQuery, useManageStoreFollowMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import { TuserData } from "../Component/Navbar";
import SectionTittle from "../Ui/SectionTittle";
import SignleProductCard from "../Ui/SignleProductCard";

export type Tstore = {
    shopId: string;           // Unique identifier for the shop
    description: string;           // Unique identifier for the shop
    name: string;             // Name of the shop
    status: string;           // Current status of the shop (e.g., Active, Inactive)
    logo: string;             // URL to the shop's logo
    coupon: {
        couponId: string;       // Unique identifier for the coupon
        shopId: string;         // Unique identifier of the shop associated with the coupon
        code: string;           // Coupon code (e.g., "Bijoy 71")
        discount: number;       // Discount percentage
        minimumExpence: number; // Minimum expenditure required to use the coupon
        untill: string;         // Expiration date in ISO string format
    }[];                      // Array of coupons associated with the shop
    _count: {
        followersId: number;    // Number of followers of the shop
    };
    vendor: {
        name: string;           // Vendor's name
        email: string;          // Vendor's email address
        photo: string;          // URL to the vendor's photo
    };
};




const SingleShopDetails = () => {

    const { id } = useParams();

    const{data:storeDetails}=useGetSingleOrAllStoreQuery({id})

    const store:Tstore=storeDetails?.data
    

    const { data:storeAllProducts } = useGetAStoreAllProductNotDashboardQuery({ id,page:1,limit:20000 });



    const [send, startLoading] = useSendPost(useManageStoreFollowMutation); //initiate request
  
    const showResponse = useShowResponse(); //initiate for manage loading and show res

    const{loggedInUser,isLoading}:{loggedInUser:TuserData|null,isLoading:boolean }=useAppSelector(s=>s.authStore)

    // handle follow.
    const handleFollow=async()=>{
        if(!loggedInUser?.userId || !store?.shopId) return
        
        startLoading()
        const response=await send({userId:loggedInUser?.userId,shopId:store?.shopId})
        showResponse(response)

    }

    const isfollowIng=store?.followersId.find(item=>item?.userId===loggedInUser?.userId)
  

    return (
       <div>
         <div className="mt-16 flex  items-start gap-7 mb-10">
            <img className="w-[100px] h-[100px] rounded-full object-cover" src={store?.logo} alt="" />
            <div className="w-[50%]">
                <div>
                <h1 className="text-3xl font-semibold">{store?.name}</h1>
                {(loggedInUser?.userId || store?.shopId) && <button onClick={handleFollow} className="btn btn-sm text-white bg-[#05adf4]">{isfollowIng?"Unfollow":"Follow"}</button>}
                </div>
                <h1 className="text-xl mt-3 ">{store?._count?.followersId} Follower</h1>

                <p className="mt-5">{store?.description}</p>
            </div>

            
        </div>
            <SectionTittle txt="All products"/>



<div className="mt-5 grid grid-cols-1 lg:grid-cols-6 gap-4">


    {
        storeAllProducts?.data?.result?.map(item=><SignleProductCard key={item.productId} data={item}/>)
    }

</div>




       </div>
    );
};

export default SingleShopDetails;