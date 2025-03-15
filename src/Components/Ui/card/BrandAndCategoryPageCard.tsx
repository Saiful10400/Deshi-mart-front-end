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

const BrandAndCategoryPageCard = ({ item }: { item: tCategory }) => {
  return (
    <div key={item.categoryId} className="border rounded-md px-3 py-2">
      <div className="h-[100px] flex justify-center items-center">
        <img
          className="w-[60px] h-[60px] object-cover"
          src={item.logo}
          alt=""
        />
      </div>
      <h1 className="font-semibold text-xl">{item.name}</h1>
      <div className="mt-2 flex justify-between items-center">
        <span>{item?._count?.productId} Products</span>
        <button className="bg-[#f89305] text-white font-medium px-2 py-1 rounded-3xl">
          Explore
        </button>
      </div>
    </div>
  );
};

export default BrandAndCategoryPageCard;
