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
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <button className="flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-md">
            <FaPhoneAlt />  +880 1741-690970
          </button>
        </div>

        {/* Company Section */}
        <div>
        
          <ul className="space-y-2 text-gray-100 flex flex-col">
            <Link to={"/brands"}><a href="">Brands</a></Link>
            <Link to={"/categories"}><a href="">Categories</a></Link>
            <Link to={"/flash-sale"}><a href="">Flash Sales</a></Link>
            <Link to={"/shops"}><a href="">Shops</a></Link>
              
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Recent Brands</h4>
          <ul className="space-y-2 text-gray-100">
             
             {
              Brands?.data?.result?.map(item=><li><button onClick={()=>{
                dispatch(searchByBrand(item?.name))
                move("/all-product")
              }}>{item?.name}</button></li>)
             }
            
            
          </ul>
        </div>

        {/* Policy Section */}
        <div>
        <h4 className="text-lg font-semibold mb-3">Recent Categories</h4>
          <ul className="space-y-2 text-gray-100">
          {
              Categories?.data?.result?.map(item=><li><button onClick={()=>{
                dispatch(searchByCategory(item?.name))
                move("/all-product")
              }}>{item?.name}</button></li>)
             }
          </ul>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-5">
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-normal mb-2">Sign up for latest news and updates</h4>
          <div className="flex items-center gap-2">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none text-white flex-1" />
            <button className="bg-orange-500 px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>

        {/* Contact and Social Links */}
        <div className="mt-5 md:mt-0 flex flex-col md:flex-row items-center gap-5">
          <div className="flex items-center gap-3 text-gray-100">
            <FaPhoneAlt /> +880 1741-690970
            <FaEnvelope /> support@deshimart.com
          </div>
          <div className="flex gap-4 text-gray-100 text-xl">
            <a href="https://www.instagram.com/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.youtube.com/"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/saiful10400/?_i=en_english"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-5">
        Copyright © 2025 Deshi Mart. All rights reserved.
      </div>
    </footer>
  );
}
