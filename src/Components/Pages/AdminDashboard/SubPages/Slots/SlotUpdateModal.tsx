import { useEffect, useState } from "react";

import { useHref } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../Redux/feathcer/hoocks";
import { useGetRoomsQuery, useUpdateSlotMutation } from "../../../../../Redux/api/api";
import DropDown from "../../../../Ui/DropDown";
import InputField from "../../../../Ui/Input";
import Button from "../../../../Ui/Button";

//.................//END//...................//

const SlotUpdateModal = () => {
  const [formData, setFormData] = useState({});

  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  const { assignedUpdateRoom } = useSelector((e) => e.DashbpardStore);

  useEffect(() => {
    if (Object.keys(assignedUpdateRoom).length !== 0) {
      const { room, ...rest } = assignedUpdateRoom;
      update({ ...rest, slotId: rest?._id, roomId: room?._id, ...room });
    }
  }, [assignedUpdateRoom]);

  const [errorMessage, setErrorMessage] = useState(null);

  // form submit handle.
  const route = useHref()?.split("/");
  const routeText = route[route.length - 1];

  const dispatch = useAppDispatch()

  const[slotUpdate,{error,data}]=useUpdateSlotMutation()
  const formUpdateHandle = (e) => {
    e.preventDefault();
slotUpdate({...formData})
console.log(formData)
  };

  useEffect(() => {
  
    if (data?.statusCode === 200) {

      document.getElementById("update_modal_slot")?.close();
      swal("Success", data.message, "success");
    } else if (error) {
      document.getElementById("update_modal_slot")?.close();
      swal("Failed", error?.data?.message, "error");
    }
  }, [data, error]);

  // all rooms data.
  const { data: allRooms } = useGetRoomsQuery(undefined);

  return (
    <dialog id="update_modal_slot" className="modal">
      <div className="modal-box relative z-10">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-center">Update a {routeText}</h3>

        <form onSubmit={formUpdateHandle} className="flex flex-col gap-4 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <DropDown
              className="h-[48px]"
              altimeValue={formData?.roomId}
              valueUpdate={(e) => {
                const roomNo = allRooms?.data.find(
                  (item) => item._id === e.target.value
                )?.roomNo;
                update({ roomId: e.target.value, roomNo });
              }}
              allData={allRooms?.data}
              placeholder="Room Name"
            />

            <InputField
              disabled={true}
              type={"number"}
              altimeValue={formData?.roomNo}
              placeholder="Room Number"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputField
              disabled={false}
              type={"time"}
              altimeValue={formData?.startTime}
              valueUpdate={(e) => update({ startTime: e.target.value })}
              placeholder="Start Time"
            />
            <InputField
              disabled={false}
              type={"time"}
              altimeValue={formData?.endTime}
              valueUpdate={(e) => update({ endTime: e.target.value })}
              placeholder="End Time"
            />
          </div>

          <InputField
            disabled={false}
            type={"date"}
            altimeValue={formData?.date}
            valueUpdate={(e) => update({ date: e.target.value })}
            placeholder="Date"
          />
          <Button text="Update" className="w-full" />
        </form>
      </div>
    </dialog>
  );
};

export default SlotUpdateModal;
