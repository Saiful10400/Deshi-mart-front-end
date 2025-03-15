import { Card, Skeleton } from "@heroui/react";

const ProductCardSkeleton = () => {
  return (
    <Card className="w-full h-[362px]   p-4 border rounded-lg shadow-md flex flex-col justify-between    ">
      <Skeleton className="h-[80%] rounded-lg w-full object-contain">
        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
      </Skeleton>

      <Skeleton className="h-[15%] rounded-lg w-full object-contain">
        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  );
};

export default ProductCardSkeleton;
