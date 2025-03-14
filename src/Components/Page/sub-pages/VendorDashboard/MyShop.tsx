import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import { Tuser } from "../../../../Types";

const MyShop = () => {
  const { loggedInUser }: { loggedInUser: Tuser | null } = useAppSelector(
    (s) => s.authStore
  );
  
  return (
    <div className="bg-white min-h-[350px] rounded-lg pb-5">
      <div className="bg-gradient-to-tr rounded-md from-[#f97316] to-[#e85b0b] min-h-[200px] "></div>

      <div className="flex items-center gap-5 relative -top-24 left-5">
        <img
          className="w-[150px] h-[150px] rounded-full object-cover"
          src={loggedInUser?.vendor?.shopId?.logo}
          alt=""
        />
        <h1 className="font-bold text-2xl">{loggedInUser?.vendor?.shopId?.name}</h1>
      </div>


<div className="flex px-5  justify-end">
  <span className="border rounded-3xl p-2"> {loggedInUser?.vendor?.shopId?._count?.followersId} Followers</span>
</div>



    </div>
  );
};

export default MyShop;
