type tCategory = {
  _count: {
    productId: number;
  };
  categoryId: string;
  logo: string;
  name: string;
  slug: string;
  created: string;
  updated: string;
};
type tBrand = {
  brandId: string;
  logo: string;
  slug: string;
  created: string;
  updated: string;
  name: string;
  _count: {
    product: number;
  };
};

const BrandAndCategoryPageCard = ({
  item,
  context,
}: {
  item: tBrand | tCategory;
  context: "brand" | "category";
}) => {
  if (context === "brand") {
    const data = item as tBrand;
    return (
      <div key={data.brandId} className="border rounded-md px-3 py-2">
        <div className="h-[100px] flex justify-center items-center">
          <img
            className="w-[60px] h-[60px] object-contain"
            src={data.logo}
            alt=""
          />
        </div>
        <h1 className="font-semibold text-xl">{item.name}</h1>
        <div className="mt-2 flex justify-between items-center">
          <span>{data?._count?.product} Products</span>
          <button className="bg-[#f89305] text-white font-medium px-2 py-1 rounded-3xl">
            Explore
          </button>
        </div>
      </div>
    );
  }

  const data: tCategory = item as tCategory;
  return (
    <div key={data.categoryId} className="border rounded-md px-3 py-2">
      <div className="h-[100px] flex justify-center items-center">
        <img
          className="w-[60px] h-[60px] object-contain"
          src={data.logo}
          alt=""
        />
      </div>
      <h1 className="font-semibold text-xl">{item.name}</h1>
      <div className="mt-2 flex justify-between items-center">
        <span>{data?._count?.productId} Products</span>
        <button className="bg-[#f89305] text-white font-medium px-2 py-1 rounded-3xl">
          Explore
        </button>
      </div>
    </div>
  );
};

export default BrandAndCategoryPageCard;
