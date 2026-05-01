import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  useGetAllBrandQuery,
  useGetAllCategoryQuery,
} from "../../Redux/api/api";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import {
  searchByBrand,
  searchByCategory,
} from "../../Redux/feathcer/ProductSearchingSlice";

export default function Footer() {
  const { data: Brands, isLoading: brandLoading } =
    useGetAllBrandQuery({ limit: 3, offset: 0 });

  const { data: Categories, isLoading: categoryLoading } =
    useGetAllCategoryQuery({
      limit: 3,
      offset: 0,
    });

  const dispatch = useAppDispatch();
  const move = useNavigate();

  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-md w-fit">
            <FaPhoneAlt /> +880 1741-690970
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-300 text-lg">
            <a
              href="https://www.facebook.com/saiful10400"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-orange-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/saiful10400"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-orange-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/saiful10400"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-orange-500 hover:text-black transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/saiful10400"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-orange-500 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <ul className="space-y-2 text-gray-100 flex flex-col">
            <Link to="/brands" className="hover:text-orange-500">
              Brands
            </Link>
            <Link to="/categories" className="hover:text-orange-500">
              Categories
            </Link>
            <Link to="/flash-sale" className="hover:text-orange-500">
              Flash Sales
            </Link>
            <Link to="/shops" className="hover:text-orange-500">
              Shops
            </Link>
          </ul>
        </div>

        {/* Recent Brands */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Recent Brands</h4>
          <ul className="space-y-2 text-gray-100">
            {brandLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <li key={i}>
                    <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>
                  </li>
                ))
              : Brands?.data?.result?.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        dispatch(searchByBrand(item?.name));
                        move("/all-product");
                      }}
                      className="hover:text-orange-500"
                    >
                      {item?.name}
                    </button>
                  </li>
                ))}
          </ul>
        </div>

        {/* Recent Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            Recent Categories
          </h4>
          <ul className="space-y-2 text-gray-100">
            {categoryLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <li key={i}>
                    <div className="h-4 w-28 bg-gray-700 rounded animate-pulse"></div>
                  </li>
                ))
              : Categories?.data?.result?.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        dispatch(searchByCategory(item?.name));
                        move("/all-product");
                      }}
                      className="hover:text-orange-500"
                    >
                      {item?.name}
                    </button>
                  </li>
                ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-5">
        Copyright © 2026 Deshi Mart. All rights reserved.
      </div>
    </footer>
  );
}