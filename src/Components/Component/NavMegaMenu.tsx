import { Link } from "react-router-dom";
import {
  useGetAllCategoryQuery,
  useGetAllStoreQuery,
} from "../../Redux/api/api";

type Tstore = {
  shopId: string;
  name: string;
  status: "Active" | "Inactive"; // Enum for status
  description: string;
  logo: string; // URL string for the logo
  vendorId: string; // Vendor identifier
  created: string; // ISO date string
  updated: string; // ISO date string
};

type Tcategory = {
  categoryId: string;
  name: string;
  logo: string; // URL string for the logo
  created: string; // ISO date string
  updated: string;
};

const NavMegaMenu = () => {
  const { data: categorys } = useGetAllCategoryQuery(null);
  const { data: vendors } = useGetAllStoreQuery(null);

  return (
    <div className="bg-black text-white hidden lg:block sticky top-0 z-10">
      <div className="lg:w-[1700px]  mx-auto flex items-center gap-4">


        <div className="group inline-block">
          <button className="text-lg group-hover:text-[#f27f20] hover:text-[#f27f20] font-semibold p-1">
            Stores
          </button>
          <div className="group-hover:min-h-[max-content] p-5 pt-1 group-hover:grid grid-cols-6 gap-4 hidden duration-500 transition-all bg-gray-100 absolute left-0 top-full w-full">
            {vendors?.data?.map((item: Tstore) => (
              <div key={item.shopId}>
                <Link
                  to={"/shop/" + item.shopId}
                  className="text-black font-semibold"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="group inline-block">
          <button className="text-lg group-hover:text-[#f27f20] hover:text-[#f27f20] font-semibold p-1">
          Category
          </button>
          <div className="group-hover:min-h-[max-content] p-5 pt-1 group-hover:grid grid-cols-6 gap-4 hidden duration-500 transition-all bg-gray-100 absolute left-0 top-full w-full">
            {categorys?.data?.map((item: Tcategory) => (
              <div key={item.categoryId}>
                <Link
                  to={"/all-product?categoryId=" + item.categoryId}
                  className="text-black font-semibold"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default NavMegaMenu;
