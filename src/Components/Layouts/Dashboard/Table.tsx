import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import UpdateModal from "../../Pages/AdminDashboard/SubPages/Rooms/UpdateRoomMOdal";
import { useAppDispatch } from "../../../Redux/feathcer/hoocks";
import Swal from "sweetalert2";
import Loading from "../../SharedComponent/Loading";
import { setUpdateItem } from "../../../Redux/feathcer/DashboardSlice";
import { useHref } from "react-router";
import {
  useDeleteRoomMutation,
  useDeleteSlotMutation,
} from "../../../Redux/api/api";
import SlotUpdateModal from "../../Pages/AdminDashboard/SubPages/Slots/SlotUpdateModal";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const Table = ({
  isLoading,
  data,
  dataFormate,
  nestedProperty,
  notnestedProperty,
}) => {
  // const { isLoading, data } = useGetProductsQuery(null);

  const dispatch = useAppDispatch();
  // update handle.
  const route = useHref()?.split("/");
  const routeText = route[route.length - 1];
  const updateHandle = (data) => {
    dispatch(setUpdateItem(data));
    if (routeText === "room")
      document.getElementById("update_modal")?.showModal();
    if (routeText === "slot")
      document.getElementById("update_modal_slot")?.showModal();
  };

  // deleteing hoocks.

  const [deleteRoom, { isLoading: roomloading, isError: roomError }] =
    useDeleteRoomMutation();

  const [deleteSlot, { isLoading: slotloading }] = useDeleteSlotMutation();

  // deleting handle.
  const deleteHandle = (id) => {
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "No",
      denyButtonText: `Yes`,
    }).then((result) => {
      if (result.isDenied) {
        if (routeText === "room") deleteRoom({ id });
        if (routeText === "slot") deleteSlot({ id });
      }
    });
  };

  // useEffect(() => {
  //   if (productData) {
  //     if (productData.statusCode === 200) {
  //       Swal.fire("Product delete successfully!", "", "success");
  //     }
  //   }
  // }, [productData]);

  // power house of data store.

  const [tableData, setTableData] = useState([]);

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=" text-base font-normal">
            <th>S/N</th>
            {dataFormate?.map((item, idx) => (
              <th className="text-center" key={idx}>
                {item.tittle}
              </th>
            ))}
            <th></th>
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
                  <td className="font-semibold text-center">
                    {idx + 1 + 10 * (tableData.index - 1)}
                  </td>

                  {nestedProperty?.map((nestedProp, idx) => (
                    <td key={idx} className="font-semibold text-center">
                      {item?.room[nestedProp]}
                    </td>
                  ))}

                  {notnestedProperty
                    ? notnestedProperty?.map((nestedProp, idx) => (
                        <td key={idx} className="font-semibold text-center">
                          {item[nestedProp]}
                        </td>
                      ))
                    : dataFormate?.map((element, idx: number) => (
                        <td key={idx} className="font-semibold text-center">
                          {item[element.key]}
                        </td>
                      ))}

                  <td className="w-max flex mt-3 ">
                    <button
                      onClick={() => updateHandle(item)}
                      className="btn btn-success text-white btn-sm text-lg"
                    >
                      <LiaEditSolid />
                    </button>
                    <button
                      onClick={() => deleteHandle(item._id)}
                      className="btn btn-error text-white btn-sm text-lg ml-4"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {data?.data && <Pagination setterFung={setTableData} data={data?.data} />}
      {isLoading && <Loading />}
      {data?.data?.length === 0 && (
        <div className="to-center w-full text-lg mt-4">No Item Available!</div>
      )}
      <UpdateModal dataFormate={dataFormate} />
      <SlotUpdateModal />
    </div>
  );
};

export default Table;
