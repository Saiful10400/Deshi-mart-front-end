import React, { useEffect, useRef, useState } from "react";
import CenterAlign from "../../Helper/CenterAlign";
import { useGetProductsQuery } from "../../../Redux/api/api";
import ProductCart from "../../Ui/ProductCart";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Product = () => {
  const { isLoading, data } = useGetProductsQuery(null);

  const initialValue = {
    maxPrice: 0,
    minPrice: 0,
    sortBy: "",
    serchText: "",
  };

  const [searchData, setSearchData] = useState(initialValue);
 
  const update = (data) => {

    setSearchData((prev)=>({...prev,...data }));
    
  };

  // const update = (data) => {
  //   setFormData({ ...formData, ...data });
  // };



  //filtered data- this is a the data which we get form main object query.

  const [queryData, setQueryData] = useState(null);
  // shalow copyes.
  const [rangeShalow,setRangeShalow]=useState()


  useEffect(() => {
    if (!data?.data) return;
    setQueryData(data.data);
    setRangeShalow(data.data)
  }, [data]);



  // search handle.
  const serArchHandle = (e) => {
    const input = e.target.value;

    const queryItems = data?.data?.filter((item) => {
      const name = item.name.toUpperCase();
      const brand = item.brand.toUpperCase();
      const searchText = input.toUpperCase();
      if (name.indexOf(searchText) !== -1 || brand.indexOf(searchText) !== -1) {
        return true;
      }
      return false;
    });
    setQueryData(queryItems);
    setRangeShalow(queryItems)
   
    update({ maxPrice: 0, minPrice: 0 ,sortBy: ""});
   
  };

  // debaunch.
  const inputtimerIdRef = useRef(null);
  const debaunch = (fn, delay) => {
 
    return (e) => {
      update({ serchText:e.target.value })
      if (inputtimerIdRef.current) clearTimeout(inputtimerIdRef.current);
      inputtimerIdRef.current = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };



  // range debaunce.
  const timerIdRef = useRef(null);
  const rangeDebaunch = (fn, delay) => {
   
    return (e) => {
    
      if (timerIdRef.current){
        clearTimeout(timerIdRef.current);
      } 
      update({ maxPrice: e[1], minPrice: e[0] });
      timerIdRef.current = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };


  // range handle.
  const rangeHadle = (e) => {
   
    const queryItem=rangeShalow?.filter(item=>{
      if(item.price>=e[0] && item.price<=e[1]) return true
      return false
    })

    setQueryData(queryItem)
    update({sortBy: ""});
  };


  // sort dropdown handle.
  const sortHandle=(e)=>{
    const input=e.target.value
   update({ sortBy: input })

   if(input==="l2h" && queryData?.length){
    const temparray=[...queryData]
    temparray?.sort((a,b)=>a?.price-b?.price)
    setQueryData(temparray)
   }
   else if(input==="h2l"){

    const temparray=[...queryData]
    temparray?.sort((a,b)=>b?.price-a?.price)
    setQueryData(temparray)

   }
   
  }

  /// clear button handle.
  const clearHandle=()=>{
    setSearchData(initialValue)
    setQueryData(data.data);
  }


  return (
    <CenterAlign>
      <div>
        <div data-aos="fade-down" className="mt-8 lg:p-0 px-4 flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-y-4">

          <div className=" flex  lg:w-[30%] w-full">
            <input
              onChange={debaunch(serArchHandle, 500)}
              placeholder="Search Keyboards By Name,Keyword or Brand....."
              type="text"
              value={searchData.serchText}
              className="w-full focus:outline-none border-2 border-black rounded-lg py-2 pl-2 font-normal text-lg"
            />
          </div>


          <div className="flex items-center lg:w-[40%] w-full gap-9">
            <h1 className="min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
             Min: ${searchData.minPrice}
            </h1>
            <RangeSlider
              onChange={rangeDebaunch(rangeHadle,500)}
              aria-label={["min", "max"]}
              max={1000}
              min={0}
              value={[searchData.minPrice,searchData.maxPrice]}
              colorScheme="blue"
              // value={[searchData.minPrice, searchData.maxPrice]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack bg="black" boxSize={20} />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={8} index={0}>
                <Box color="tomato" as={IoIosArrowBack} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={8} index={1}>
                <Box color="tomato" as={IoIosArrowForward} />
              </RangeSliderThumb>
            </RangeSlider>
            <h1 className="min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
              Max: ${searchData.maxPrice}
            </h1>
          </div>


          <div>
            <select
              onChange={sortHandle}
              value={searchData.sortBy}
              className="h-[40px] ml-3 px-3 border border-black rounded-md"
              name=""
              id=""
            >
              <option value="" disabled selected hidden>
                Default
              </option>
              <option value="l2h">{`Price (Low > High)`}</option>
              <option value="h2l">{`Price (High > Low)`}</option>
            </select>
            <button onClick={clearHandle} className="h-[40px] bg-black  text-white w-[100px] rounded-md ml-3 font-semibold">
            Clear
          </button>
          </div>
          
        </div>

        {queryData?.length === 0 ? (
          <div className="to-center w-full h-[70vh] text-lg mt-4">
            No Item Available!
          </div>
        ) : (
          <div className="grid grid-cols-1 mt-12 lg:px-2 px-4 lg:grid-cols-5 lg:gap-5 gap-4">
            {queryData?.map((item) => (
              <ProductCart key={item._id} data={item} />
            ))}
          </div>
        )}
      </div>
    </CenterAlign>
  );
};

export default Product;
