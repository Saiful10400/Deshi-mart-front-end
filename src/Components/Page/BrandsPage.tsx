 
import { useGetAllBrandQuery } from "../../Redux/api/api";
import CloneElement from "../../Utils/CloneElement";
import BrandAndCategoryPageCard from "../Ui/card/BrandAndCategoryPageCard";
import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import BrandAndCategoryPageSkeleton from "../Ui/skleton/BrandAndCategoryPageSkeleton";
 

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
  

const BrandsPage = () => {
    const { data, isLoading } = useGetAllBrandQuery({ offset: 0, limit: 200 });

    const allBrands :undefined | tBrand[] = data?.data?.result;

  
  
    return (
      <div>
        <PageHeaderRouteing />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {allBrands ? (
            allBrands?.map((item:tBrand) => (
              <BrandAndCategoryPageCard context="brand" key={item.brandId} item={item} />
            ))
          ) : (
            <CloneElement
              count={isLoading ? 15 : 0}
              element={<BrandAndCategoryPageSkeleton />}
            />
          )}
        </div>
      </div>
    );
};

export default BrandsPage;