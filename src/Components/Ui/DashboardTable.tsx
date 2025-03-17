import { useEffect, useState } from "react";
import {
  useGetAllBannerQuery,
  useGetAllBrandQuery,
  useGetAllCategoryQuery,
  useGetAllorderbyIdQuery,
  useGetAllProductQuery,
  useGetAllStoreQuery,
  useGetAllUserAndVendorsQuery,
  useGetAStoreAllProductQuery,
} from "../../Redux/api/api";
import { TtableData } from "../../Types";
import PrimaryButton from "./PrimaryButton";
import formateDate from "../../Utils/formateDate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import demoAvatar from "../../../assets/avatar.png"
import { useAppSelector } from "../../Redux/feathcer/hoocks";
const DashboardTable = ({ data }: { data: TtableData }) => {
   const { loggedInUser } = useAppSelector((s) => s.authStore);
  const headers = Object.keys(data.keyValue);
  const keys = Object.values(data.keyValue);

  const defaultPagination = { offset: 0, limit: 10 };

  const [pagination, setPagination] = useState(defaultPagination);

  let fetchedData;

  if (data.name === "Orders") {
    fetchedData = useGetAllorderbyIdQuery({...pagination,id:loggedInUser?.vendor?.shopId?.shopId,role:"vendor"});
  }
  if (data.name === "Shop Product") {
    fetchedData = useGetAStoreAllProductQuery({...pagination,id:loggedInUser?.vendor?.shopId?.shopId});
  }
  if (data.name === "Banner") {
    fetchedData = useGetAllBannerQuery(pagination);
  }
  if (data.name === "Shop") {
    fetchedData = useGetAllStoreQuery(pagination);
  }
  if (data.name === "Brand") {
    fetchedData = useGetAllBrandQuery(pagination);
  }
  if (data.name === "Category") {
    fetchedData = useGetAllCategoryQuery(pagination);
  }
  if (data.name === "Product") {
    fetchedData = useGetAllProductQuery(pagination);
  }
  if (data.name === "User") {
    fetchedData = useGetAllUserAndVendorsQuery(pagination);
  }
 
  const typeFormate = (key: string, item) => {
    if (key === "logo" || key === "image"|| key === "bannerUrl"|| key === "userPhoto") {
      return (
        <td className="border-none lg:py-5 pl-4 " key={key}>
          <img
            className="w-[60px] h-[40px] rounded-md object-contain"
            src={item[key]||demoAvatar}
            alt="photo"
          />
        </td>
      );
    } 
    else if (key === "flashSale") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item[key]?"Yes":"No"}
        </td>
      );
    } 
    else if (key === "updated"||key === "created") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {formateDate(item[key])}
        </td>
      );
    } 
    else if (key === "category") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item.categoryref.name}
        </td>
      );
    } 
    else if (key === "Total Followers") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item._count.followersId}
        </td>
      );
    } 
    else if (key === "Total Products") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item._count.products}
        </td>
      );
    } 
    else if (key === "Total Orders") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item._count.order}
        </td>
      );
    } 
    else if (key === "brand") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
          {item.brand.name}
        </td>
      );
    } 
    else if (key === "userPhoto") {
      return (
        <td className="border-none lg:py-5 pl-4 " key={key}>
          <img
            className="w-[60px] h-[40px] object-cover rounded-md"
            src={item.buyer?.photo ||item.vendor?.photo} 
            alt="photo"
          />
        </td>
      );
    } 
    else if (key === "userName") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
           {item.buyer?.name ||item.vendor?.name} 
        </td>
      );
    } 
    else if (key === "shopName") {
      return (
        <td className="border-none lg:py-5  pl-4 " key={key}>
           {item.shop.name} 
        </td>
      );
    } 
    else {
      return (
        <td className="border-none lg:py-5 pl-4 " key={key}>
          {item[key]}
        </td>
      );
    }
  };

  // console.log(fetchedData?.data?.data?.result[0]);




  // pagination logics.
  const totalPage = Math.ceil(fetchedData?.data?.data?.total / 10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPagination({ offset: (currentPage - 1) * 10, limit: 10 });
  }, [currentPage]);

  return (
    <div className="border bg-white rounded-lg pb-6">
      <div className="flex justify-between border-b py-4 lg:px-5">
        <h1 className="text-base font-bold">{data.tittle}</h1>
        {data.mode === "admin" ? (
          ""
        ) : (
          <PrimaryButton
            className="text-[14px] font-semibold rounded-md px-4 py-2"
            route={true}
            path={data.createRoute}
            text={`Create ${data.name}`}
          />
        )}
      </div>

      {/* <div className="py-4 lg:px-5 flex justify-start gap-2 items-center">
        <input
          type="text"
          placeholder="search here..."
          className="focus:outline-[#f97316] border py-1 rounded-md pl-2 w-[250px]"
        /> <button className="bg-[#f97316] text-white font-medium rounded-md py-1 px-2">Search</button>
      </div> */}

      <div className="lg:px-5 overflow-auto">
        <table className="w-full text-base ">
          <thead className="">
            <tr className="border  bg-[#f1f5f9] font-semibold">
              {headers?.map((item) => (
                <th
                  className="h-12 px-4 border-none text-left font-semibold text-gray-600    "
                  key={item}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {fetchedData?.data?.data?.result?.map((item) => (
              <tr key={item.brandId} className="border">
                {keys.map((key) => typeFormate(key, item))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:px-5 text-sm flex justify-between items-center">
        <h1 className="font-semibold text-gray-400">
          {(currentPage - 1) * 10 + fetchedData?.data?.data?.result?.length} of{" "}
          {fetchedData?.data?.data?.total} row(s)
        </h1>

        <div className="flex items-center gap-10">
          <h1 className="font-bold">
            Page {currentPage} of {totalPage}
          </h1>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`border p-1 rounded-md hover:bg-gray-200 ${
                currentPage === 1 && "opacity-40"
              }`}
            >
              <ChevronLeft height={20} width={20} />
            </button>
            <button
              disabled={currentPage === totalPage}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`border p-1 rounded-md hover:bg-gray-200 ${
                currentPage === totalPage && "opacity-40"
              }`}
            >
              <ChevronRight height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
