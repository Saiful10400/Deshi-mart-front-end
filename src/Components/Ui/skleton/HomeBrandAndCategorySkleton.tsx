import { Card, Skeleton } from "@heroui/react";
const HomeBrandAndCategorySkleton = () => {
  return (
    <Card
      className="!h-[116px] !w-[170px] !object-contain border-2 p-2 border-gray-200 rounded-md"
      radius="lg"
    >
      <Skeleton className=" h-full rounded-sm">
        <div className="   bg-default-300" />
      </Skeleton>
    </Card>
  );
};

export default HomeBrandAndCategorySkleton;
