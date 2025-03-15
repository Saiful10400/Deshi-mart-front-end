import { useGetAllCategoryQuery } from "../../Redux/api/api";
import CloneElement from "../../Utils/CloneElement";
import BrandAndCategoryPageCard from "../Ui/card/BrandAndCategoryPageCard";
import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import BrandAndCategoryPageSkeleton from "../Ui/skleton/BrandAndCategoryPageSkeleton";

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

const Categories = () => {
  const { data, isLoading } = useGetAllCategoryQuery({ offset: 0, limit: 200 });

  const allCategoryes: undefined | tCategory[] = data?.data?.result;

  return (
    <div>
      <PageHeaderRouteing />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {allCategoryes ? (
          allCategoryes?.map((item: tCategory) => (
            <BrandAndCategoryPageCard key={item.categoryId} item={item} />
          ))
        ) : (
          <CloneElement
            count={isLoading ? 10 : 0}
            element={<BrandAndCategoryPageSkeleton />}
          />
        )}
      </div>
    </div>
  );
};

export default Categories;
