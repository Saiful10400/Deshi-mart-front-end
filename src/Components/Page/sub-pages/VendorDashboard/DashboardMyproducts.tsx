import { useEffect, useState } from "react";
import {
  useGetAllCategoryQuery,
  useGetAStoreAllProductQuery,
} from "../../../../Redux/api/api";
import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import numberToNumberArray from "../../../../Utils/numberToNumberArray";
import VendorDashboardSingleProduct from "../../../Ui/VendorDashboardSingleProduct";
import VendorDashboardCreateProduct from "../../../Ui/VendorDashboardCreateProduct";

const DashboardMyproducts = () => {
  const { loggedInUser } = useAppSelector((s) => s.authStore);

  const [page, setPage] = useState({ page: 1 });
  const { data, refetch } = useGetAStoreAllProductQuery(page, {
    skip: page.id ? false : true,
  });

  const totalData = data?.data?.total;
  const steps = numberToNumberArray(Math.ceil(totalData / 3));

  useEffect(() => {
    if (page?.id) {
      refetch();
    }
  }, [page]);

  useEffect(() => {
    if (loggedInUser) {
      setPage((prev) => ({
        ...page,
        id: loggedInUser?.vendor?.shopId?.shopId,
      }));
    }
  }, [loggedInUser]);

  const { data: categorys } = useGetAllCategoryQuery(null);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <VendorDashboardCreateProduct />
        {data?.data?.result?.map((item) => (
          <VendorDashboardSingleProduct
            key={item.productId}
            categorys={categorys}
            data={item}
          />
        ))}
      </div>

      <div className="flex mt-7 justify-center items-center gap-4">
        {steps?.map((item) => (
          <button
            onClick={() => {
              setPage((prev) => ({ ...prev, page: item }));
              refetch();
            }}
            className="btn btn-primary"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardMyproducts;
