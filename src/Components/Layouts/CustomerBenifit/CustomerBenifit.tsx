import React from "react";
import CenterAlign from "../../Helper/CenterAlign";
import getCustomerBenifitDemoData from "./DemoData/CustomerBenifitDemo";
import CustomerBenifitCard from "../../Ui/CustomerBenifitCard";
import Tittle from "../../Ui/Tittle";

const CustomerBenifit = () => {
  return (
    <CenterAlign>
      <Tittle text="Our Uniqueness"/>
      <div data-aos="fade-up" className="flex flex-col lg:flex-row px-4 gap-4 mt-5">
        {getCustomerBenifitDemoData()?.map((item, idx) => (
          <CustomerBenifitCard key={idx} data={item} />
        ))}
      </div>
    </CenterAlign>
  );
};

export default CustomerBenifit;
