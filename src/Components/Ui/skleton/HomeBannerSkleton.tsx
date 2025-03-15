import {Card, Skeleton} from "@heroui/react";

const HomeBannerSkleton = () => {
  return (
    <Card className="w-full   h-[200px] lg:h-[500px] mt-6 rounded-lg  space-y-5" radius="lg">
      <Skeleton className="rounded-lg h-full">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  );
};

export default HomeBannerSkleton;
