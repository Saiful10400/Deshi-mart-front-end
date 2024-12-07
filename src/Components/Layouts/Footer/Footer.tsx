import React from "react";
import { Link } from "react-router-dom";

//  import images.
import masterCard from "../../../assets/footer/masterCard.png";
import americanExress from "../../../assets/footer/americanExpress.png";
import visaCard from "../../../assets/footer/visaCard.png";
import paypal from "../../../assets/footer/paypal.png";
import CenterAlign from "../../Helper/CenterAlign";

import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const MainManues = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/about-us"}>About Us</Link>
      <Link to={"/contact-us"}>Contact Us</Link>
    </>
  );

  return (
    <div className="bg-black text-gray-200  min-h-[200px] -mb-6 pt-10 lg:pb-14">
      <CenterAlign>
        <div className="flex flex-col  lg:flex-row justify-center items-center lg:items-start lg:justify-start lg:w-[80%] gap-10 ">
          <ul className="flex flex-col lg:items-start  items-center lg:w-[20%] font-semibold gap-2">
            <span className="font-bold text-lg mb-3">Main Menu</span>
            {MainManues}
          </ul>

          <div className="lg:w-[30%]  w-full lg:text-start text-center">
            <span className="font-bold text-lg text-center lg:text-start">
              Follow Us
            </span>
            <div className="flex lg:justify-start justify-center items-center gap-5 pt-5">
              <a
                target="_blank"
                href="https://www.linkedin.com"
                className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full"
              >
                <RiLinkedinFill />
              </a>
              <a
                target="_blank"
                href="https://x.com"
                className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full"
              >
                <RiTwitterXFill />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com"
                className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://gmail.com"
                className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full"
              >
                <TfiEmail />
              </a>
            </div>
          </div>

          <div className="lg:w-[30%] w-full lg:text-start text-center">
            <span className="font-bold text-lg mb-3">Contact Info.</span>
            <div className="mt-5 ">
              <h1 className="font-semibold">E-mail: <span className="font-normal">info@acowork.com</span></h1>
              <h1 className="font-semibold my-3">Phone: <span className="font-normal">(+44) 123 456 789</span></h1>
              <h1 className="font-semibold">Office Address: <span className="font-normal">100 Smith Street, Collingwood VIC 3066</span></h1>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse lg:flex-row justify-between items-start">
          <div className="w-full">
          <h1 className="lg:text-start text-center mb-3 w-full">
              Copyright © 2024 Acwork.
            </h1>
            <a className="text-xs hover:underline" href="/">
              Privacy Policy
            </a>
            <a className="text-xs ml-4 hover:underline" href="/">
              Terms of Service
            </a>

           
          </div>
          <div className="flex items-center justify-center lg:justify-end w-full gap-4">
            <img className="w-[50px]" src={masterCard} alt="" />
            <img className="w-[50px]" src={paypal} alt="" />
            <img className="w-[50px]" src={americanExress} alt="" />
            <img className="w-[50px]" src={visaCard} alt="" />
          </div>
        </div>
      </CenterAlign>
    </div>
  );
};

export default Footer;
