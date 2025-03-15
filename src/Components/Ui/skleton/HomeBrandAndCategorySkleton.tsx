import { Card, Skeleton } from "@heroui/react";
const HomeBrandAndCategorySkleton = () => {
  return (
    <Card
      className="!h-[100px] !w-[150px] !object-contain border-2 p-2 border-gray-200 rounded-md"
      radius="lg"
    >
      <Skeleton className="rounded-lg h-full">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  );
};

export default HomeBrandAndCategorySkleton;
