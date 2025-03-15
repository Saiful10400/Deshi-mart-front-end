import { Card, Skeleton } from "@heroui/react";

const BrandAndCategoryPageSkeleton = () => {
  return (
    <Card className="border w-full  rounded-md px-3 py-2">
      <div className="h-[100px] flex justify-center items-center">
        <Skeleton className="w-[60px] h-[60px] rounded-full"></Skeleton>
      </div>

      <Skeleton className="rounded-sm h-[25px] w-[50%]"></Skeleton>

      <div className="mt-2 flex justify-between items-center">
        <Skeleton className="rounded-sm h-[20px] w-[50%]"></Skeleton>
        <Skeleton className="rounded-3xl h-[30px] w-[30%]"></Skeleton>
      </div>
    </Card>
  );
};

export default BrandAndCategoryPageSkeleton;

{
  /* <div key={item.categoryId} className="border rounded-md p-2">
      <div className="h-[100px] flex justify-center items-center">
        <img
          className="w-[60px] h-[60px] object-cover"
          src={item.logo}
          alt=""
        />
      </div>
      <h1 className="font-semibold text-xl">{item.name}</h1>
      <div className="mt-2 flex justify-between">
        <span>{item?._count?.productId} products</span>
        <button className="bg-[#f89305] text-white font-medium px-2 py-1 rounded-3xl">
          Explore
        </button>
      </div>
    </div> */
}
