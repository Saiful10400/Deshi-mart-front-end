import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllBrandQuery, useGetAllCategoryQuery } from "../../Redux/api/api";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { searchByBrand, searchByCategory } from "../../Redux/feathcer/ProductSearchingSlice";

export default function Footer() {

  const{data:Brands}=useGetAllBrandQuery({limit:3,offset:0})
  const{data:Categories}=useGetAllCategoryQuery({limit:3,offset:0})

const dispatch=useAppDispatch()
const move=useNavigate()


  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20 w-full">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Contact Section */}
      <div>
        <button className="flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-md">
          <FaPhoneAlt /> +880 1741-690970
        </button>
      </div>

      {/* Company Section */}
      <div>
        <ul className="space-y-2 text-gray-100 flex flex-col">
          <Link to="/brands" className="hover:text-orange-500">Brands</Link>
          <Link to="/categories" className="hover:text-orange-500">Categories</Link>
          <Link to="/flash-sale" className="hover:text-orange-500">Flash Sales</Link>
          <Link to="/shops" className="hover:text-orange-500">Shops</Link>
        </ul>
      </div>

      {/* Recent Brands */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Recent Brands</h4>
        <ul className="space-y-2 text-gray-100">
          {Brands?.data?.result?.map((item, index) => (
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
        <h4 className="text-lg font-semibold mb-3">Recent Categories</h4>
        <ul className="space-y-2 text-gray-100">
          {Categories?.data?.result?.map((item, index) => (
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

    {/* Newsletter Section */}
    

    {/* Copyright */}
    <div className="text-center text-gray-500 text-sm mt-5">
      Copyright © 2025 Deshi Mart. All rights reserved.
    </div>
  </footer>
  );
}
