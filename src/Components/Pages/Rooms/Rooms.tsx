import { useGetRoomsQuery } from "../../../Redux/api/api";
import Loading from "../../SharedComponent/Loading";
import RoomCart from "../../Ui/RoomCart";
import CenterAlign from "../../Helper/CenterAlign";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import Pagination from "../../Layouts/Pagination/Pagination";

const Rooms = () => {
  const { data, isLoading } = useGetRoomsQuery(null);
  const initialValue = {
    maxPrice: 0,
    minPrice: 0,
    maxCapacity: 0,
    minCapacity: 0,
    sortBy: "",
    serchText: "",
  };

  const [searchData, setSearchData] = useState(initialValue);

  const update = (data) => {
    setSearchData((prev) => ({ ...prev, ...data }));
  };

  // const update = (data) => {
  //   setFormData({ ...formData, ...data });
  // };

  //filtered data- this is a the data which we get form main object query.

  const [queryData, setQueryData] = useState(null);
  // shalow copyes.
  const [rangeShalow, setRangeShalow] = useState();

  useEffect(() => {
    if (!data?.data) return;
    setQueryData(data.data);
    setRangeShalow(data.data);
  }, [data]);

  // search handle.
  const serArchHandle = (e) => {
    const input = e.target.value;
    console.log(input);
    const queryItems = data?.data?.filter((item) => {
      const name = item.name.toUpperCase();
      // const brand = item.brand.toUpperCase();
      const searchText = input.toUpperCase();
      if (name.indexOf(searchText) !== -1) {
        return true;
      }
      return false;
    });
    setQueryData(queryItems);
    setRangeShalow(queryItems);

    update({ minCapacity: 0, maxCapacity: 0,maxPrice: 0, minPrice: 0, sortBy: "" });
  };

  // debaunch.
  const inputtimerIdRef = useRef(null);
  const debaunch = (fn, delay) => {
    return (e) => {
      update({ serchText: e.target.value });
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
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      update({ maxPrice: e[1], minPrice: e[0] });
      timerIdRef.current = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };

  // range debaunce.
  const timerIdRefCapacity = useRef(null);
  const rangeDebaunchCapacity = (fn, delay) => {
    return (e) => {
      if (timerIdRefCapacity.current) {
        clearTimeout(timerIdRefCapacity.current);
      }
      update({ maxCapacity: e[1], minCapacity: e[0] });
      timerIdRefCapacity.current = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };

  // range handle.(price)
  const rangeHadle = (e) => {
    console.log(rangeShalow);
    const queryItem = rangeShalow?.filter((item) => {
      if (item.pricePerSlot >= e[0] && item.pricePerSlot <= e[1]) return true;
      return false;
    });

    setQueryData(queryItem);
    update({ minCapacity: 0, maxCapacity: 0, sortBy: "" });
  };

  // range handle.(capacity)
  const rangeHadleCapacity = (e) => {
    const queryItem = rangeShalow?.filter((item) => {
      if (item.capacity >= e[0] && item.capacity <= e[1]) return true;
      return false;
    });

    setQueryData(queryItem);
    update({ maxPrice: 0, minPrice: 0, sortBy: "" });
  };

  // sort dropdown handle.
  const sortHandle = (e) => {
    const input = e.target.value;
    update({ sortBy: input });

    if (input === "l2h" && queryData?.length) {
      const temparray = [...queryData];
      temparray?.sort((a, b) => a?.pricePerSlot - b?.pricePerSlot);
      setQueryData(temparray);
    } else if (input === "h2l") {
      const temparray = [...queryData];
      temparray?.sort((a, b) => b?.pricePerSlot - a?.pricePerSlot);
      setQueryData(temparray);
    }
  };

  /// clear button handle.
  const clearHandle = () => {
    setSearchData(initialValue);
    setQueryData(data.data);
  };



  const [tableData, setTableData] = useState([]);

  return (
    <CenterAlign>
      <div className="">
        {/* searching uis. */}

        <div
          data-aos="fade-down"
          className="mt-8  flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-y-4"
        >
          <div className=" flex px-3 lg:px-0 lg:w-[30%] w-full">
            <input
              onChange={debaunch(serArchHandle, 500)}
              placeholder="Search Keyboards By Name,Keyword or Brand....."
              type="text"
              value={searchData.serchText}
              className="w-full focus:outline-none border-2 border-black rounded-lg py-2 pl-2 font-normal text-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-[40%] lg:gap-3">
            <div className="flex items-center justify-center w-full gap-5 lg:gap-9   ">
              <span className="lg:w-[204px] w-[65px]">Price: </span>
              <h1 className="lg:min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
                Min: ${searchData.minPrice}
              </h1>

              <div className="w-[30%] lg:w-full">
                <RangeSlider
                  onChange={rangeDebaunch(rangeHadle, 500)}
                  aria-label={["min", "max"]}
                  max={9999}
                  min={0}
                  value={[searchData.minPrice, searchData.maxPrice]}
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
              </div>

              <h1 className="lg:min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
                Max: ${searchData.maxPrice}
              </h1>
            </div>

            <div className="flex items-center justify-center w-full gap-5 lg:gap-9 ">
              <span className="lg:w-[204px]">Capacity: </span>
              <h1 className="lg:min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
                Min: {searchData.minCapacity}
              </h1>

              <div className="w-[30%] lg:w-full">
                <RangeSlider
                  onChange={rangeDebaunchCapacity(rangeHadleCapacity, 500)}
                  aria-label={["minCapacity", "maxCapacity"]}
                  max={9999}
                  min={0}
                  value={[searchData.minCapacity, searchData.maxCapacity]}
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
              </div>

              <h1 className="lg:min-w-[100px] to-center rounded-md text-lg  min-h-[40px] border border-black font-normal">
                Max: {searchData.maxCapacity}
              </h1>
            </div>
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
            <button
              onClick={clearHandle}
              className="h-[40px] bg-black  text-white w-[100px] rounded-md ml-3 font-semibold"
            >
              Clear
            </button>
          </div>
        </div>

        {queryData?.length === 0 && (
          <div className="min-h-[70vh] to-center">
            <h1>No Data Found</h1>
          </div>
        )}
       
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-3 mt-4">
            {tableData?.data?.map((item) => {
              return <RoomCart key={item._id} data={item} />;
            })}
          </div>

          {data?.data && <Pagination setterFung={setTableData} perPage={12} data={queryData||[]} />}


        
      </div>
    </CenterAlign>
  );
};

export default Rooms;
