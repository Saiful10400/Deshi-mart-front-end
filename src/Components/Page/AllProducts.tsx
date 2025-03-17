import {
  useGetAllBrandQuery,
  useGetAllCategoryQuery,
  useGetAllProductWithSearchFtcQuery,
  useGetAllStoreQuery,
} from "../../Redux/api/api";
import PageHeaderRouteing from "../Ui/PageHeaderRouteing";
import { useAppDispatch, useAppSelector } from "../../Redux/feathcer/hoocks";
import {
  searchByBrand,
  searchByCategory,
  searchByStore,
} from "../../Redux/feathcer/ProductSearchingSlice";
import SignleProductCard from "../Ui/SignleProductCard";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type tCategory = {
  _count: {
    productId: number;
  };
  categoryId: string;
  logo: string;
  name: string;
  slug: string;
  created: string; // ISO date string
  updated: string; // ISO date string
};

type tBrand = {
  brandId: string;
  logo: string;
  slug: string;
  created: string; // ISO date string
  updated: string; // ISO date string
  name: string;
  _count: {
    product: number;
  };
};

type tStore = {
  created: string; // ISO date string
  logo: string;
  name: string;
  status: "Active" | "Inactive"; // Assuming status can have specific values
  shopId: string;
  _count: {
    order: number;
    products: number;
    followersId: number;
  };
};

type tProduct = {
  image: string;
  name: string;
  slug: string;
  productId: string;
  discount: number;
  categoryref: {
    name: string;
  };
  description: string;
  flashSale: boolean;
  inventoryCount: number;
  price: number;
  _count: {
    review: number;
  };
  created: string;
  shop: {
    name: string;
    logo: string;
    shopId: string;
  };
};
interface tProductSearchPayload {
  searchText: string | undefined;
  brand: string | undefined;
  category: string | undefined;
  priceRange: string | undefined;
  shop: string | undefined;
  flashSale: string | undefined;
}

const AllProducts = () => {
  const { data: allCategorys } = useGetAllCategoryQuery({
    limit: 200,
    offset: 0,
  });

  const { data: allBrands } = useGetAllBrandQuery({
    limit: 200,
    offset: 0,
  });

  const { data: allStore } = useGetAllStoreQuery({
    limit: 200,
    offset: 0,
  });

  const categorys: tCategory[] = allCategorys?.data?.result;
  const brands: tBrand[] = allBrands?.data?.result;
  const stores: tStore[] = allStore?.data?.result;

  // redux.
  const dispatch = useAppDispatch();

  // all product fetching api. ******

  const searchTerms = useAppSelector((s) => s.allProductSearch);
  const { data: allProduct } = useGetAllProductWithSearchFtcQuery(searchTerms);

  const products: tProduct[] = allProduct?.data?.result;

  return (
    <>
      <PageHeaderRouteing />

      <div className="flex items-start  lg:gap-7 gap-3 flex-col lg:flex-row">
        {/* aside nav. */}

        <div className="w-full  flex flex-col gap-4 lg:h-[calc(100vh-102px)] lg:sticky top-[180px]    rounded-lg lg:w-[20%]">
          {/* All categorys. */}

          <div className="bg-gray-100 shadow-sm py-1 rounded-md">
            <h1 className="font-medium border-b-3 border-[#ff8b0b] text-xl py-2 px-4 flex items-center justify-between">
              <span>Categorys</span>
              <button
                hidden={searchTerms.category ? false : true}
                onClick={() => dispatch(searchByCategory(""))}
              >
                <X className="text-[#ff8b0b]" />
              </button>
            </h1>

            <div className="flex flex-wrap gap-1 p-2 mt-2">
              {categorys?.map((item: tCategory) => {
                return (
                  <button
                    onClick={() => dispatch(searchByCategory(item.name))}
                    className={`border ${
                      item.name === searchTerms.category
                        ? "bg-[#ff8b0b] text-white"
                        : "border-[#ff8b0b]"
                    } font-medium text-gray-600 rounded-2xl px-2`}
                    key={item.categoryId}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* All brands. */}

          <div className="bg-gray-100 lg:block hidden shadow-sm py-1 rounded-md">
            <h1 className="font-medium border-b-3 border-[#ff8b0b] text-xl py-2 px-4 flex items-center justify-between">
              <span>Brands</span>
              <button
                hidden={searchTerms.brand ? false : true}
                onClick={() => dispatch(searchByBrand(""))}
              >
                <X className="text-[#ff8b0b]" />
              </button>
            </h1>

            <div className="flex flex-wrap gap-1 p-2 mt-2">
              {brands?.map((item: tBrand) => {
                return (
                  <button
                    onClick={() => dispatch(searchByBrand(item.name))}
                    className={`border ${
                      item.name === searchTerms.brand
                        ? "bg-[#ff8b0b] text-white"
                        : "border-[#ff8b0b]"
                    } font-medium text-gray-600 rounded-2xl px-2`}
                    key={item.brandId}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* All stores. */}

          <div className="bg-gray-100 lg:block hidden shadow-sm py-1 rounded-md">
            <h1 className="font-medium border-b-3 border-[#ff8b0b] text-xl py-2 px-4 flex items-center justify-between">
              <span>Stores</span>
              <button
                hidden={searchTerms.shop ? false : true}
                onClick={() => dispatch(searchByStore(""))}
              >
                <X className="text-[#ff8b0b]" />
              </button>
            </h1>

            <div className="flex flex-wrap gap-1 p-2 mt-2">
              {stores?.map((item: tStore) => {
                return (
                  <button
                    onClick={() => dispatch(searchByStore(item.name))}
                    className={`border ${
                      item.name === searchTerms.shop
                        ? "bg-[#ff8b0b] text-white"
                        : "border-[#ff8b0b]"
                    } font-medium text-gray-600 rounded-2xl px-2`}
                    key={item.shopId}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* product cards. */}

        <div className="w-full lg:w-[80%]">
          <div className="bg-gray-100 min-h-14 rounded-md"></div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
            {products?.map((item) => (
              <SignleProductCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
