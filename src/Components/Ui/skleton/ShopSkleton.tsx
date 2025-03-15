import { Skeleton } from "@nextui-org/skeleton";
const ShopSkleton = () => {
  return (
    <div className="border rounded-md p-5 ">
      <div className="flex items-center gap-4">
        <Skeleton className="w-[65px] h-[65px] rounded-full object-cover" />
        <div className=" w-2/5">
          <Skeleton className="py-3 rounded-sm" />
        </div>
      </div>

      <div className="flex justify-between gap-4 m-4 items-center">
        <Skeleton className="w-[142px] h-[90px] rounded-md " />
        <Skeleton className="w-[142px] h-[90px] rounded-md " />
      </div>

      <Skeleton className="font-semibold text-base bg-[#ff9208] py-4 rounded-md text-white w-full inline-block text-center" />
    </div>
  );
};

export default ShopSkleton;
