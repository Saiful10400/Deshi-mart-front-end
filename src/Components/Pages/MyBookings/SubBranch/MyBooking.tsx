import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import { useGetAuserAllBookingsQuery } from "../../../../Redux/api/api";
import Pagination from "../../../Layouts/Pagination/Pagination";

const MyBooking = () => {
  // get user all booking
  const { loggedInUser } = useAppSelector((state) => state.authStore);
  console.log(loggedInUser);

  const [skip, setSkip] = useState(true);
  // fetch a suer all booking.
  const { data, isLoading } = useGetAuserAllBookingsQuery(loggedInUser?._id, {
    skip: skip,
  });

  console.log(data);

  useEffect(() => {
    if (loggedInUser) {
      setSkip(false);
    }
  }, [loggedInUser]);

    // table management.
    const [tableData, setTableData] = useState([]);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h1 className="lg:text-4x text-xl font-bold">My Bookings</h1>
      </div>

      <div className="overflow-x-scroll mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-base font-normal">
              <th>S/N</th>
              <th className="text-center">Room Name</th>
              <th className="text-center">Room Number</th>
              <th className="text-center">Booking Date</th>
              <th className="text-center">Start Time</th>
              <th className="text-center">End Time</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody className="lg:text-base">
            {!isLoading &&
              tableData?.data?.map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    className={` ${
                      idx % 2 !== 0 ? "bg-[#ffffff]" : "bg-[#f5f0f09c]"
                    }`}
                  >
                    <td className="font-semibold text-center">{idx + 1 + 10 * (tableData.index - 1)}</td>

                    <td className="font-semibold text-center">
                      {item.slot.room.name}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.room.roomNo}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.date}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.startTime}
                    </td>
                    <td className="font-semibold text-center">
                      {item.slot.endTime}
                    </td>
                    <td
                      className={`font-bold text-center ${
                        item.status === "Pending"
                          ? "text-[#FFC107]"
                          : item.status === "Confirmed"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {data?.data && <Pagination setterFung={setTableData} data={data?.data} />}
        {/* {isLoading && <Loading />}
        {data?.data?.length === 0 && (
          <div className="to-center w-full text-lg mt-4">
            No Item Available!
          </div>
        )} */}
      </div>
    </>
  );
};

export default MyBooking;
