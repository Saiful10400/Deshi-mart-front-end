import React, { useEffect, useState } from "react";
import InputField from "../../../../Ui/Input";
import DropDown from "../../../../Ui/DropDown";
import { useCreateAslotMutation, useGetRoomsQuery } from "../../../../../Redux/api/api";
import Button from "../../../../Ui/Button";

const CreateSlotModal = () => {
  const inetialValue = {
    room: "",
    date: "",
    startTime: "",
    endTime: "",
   
  };
  const [formData, setFormData] = useState(inetialValue);

  const update = (data) => {
    setFormData((e) => ({ ...e, ...data }));
  };

//   // form submint handle.
  const [createSlot, { data, error }] = useCreateAslotMutation();
  const formSubmitHandle = (e) => {
    e.preventDefault();

    createSlot(formData);
  };

  useEffect(() => {
    if (data?.statusCode === 200) {
      document.getElementById("create_slot_modal")?.close();
      swal("Success", data.message, "success");
      update(inetialValue);
    } else if (error?.data?.message) {
      document.getElementById("create_slot_modal")?.close();

      swal("Failed", error?.data?.message, "error");
    }
  }, [data, error]);




const { data: allRooms, isLoading } = useGetRoomsQuery(null);


  return (
    <dialog id="create_slot_modal" className="modal">
      <div className="modal-box relative z-10">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-center">Create A Slot </h3>

    

        <form onSubmit={formSubmitHandle} className="flex flex-col gap-4 mt-4">
         


          <DropDown
              className="h-[48px]"
              altimeValue={formData?.room}
              valueUpdate={(e)=>update({room:e.target.value})}
              allData={allRooms?.data}
              placeholder="Room Name"
            />




            <InputField
              disabled={false}
              type={"date"}
              altimeValue={formData?.date}
              valueUpdate={(e) => update({ date: e.target.value })}
              placeholder="Date"
            />
       
          <div className="grid grid-cols-2 gap-3">
            <InputField
              disabled={false}
              type={"time"}
              altimeValue={formData?.startTime}
              valueUpdate={(e) => update({ startTime: e.target.value})}
              placeholder="Start Time"
            />
            <InputField
              disabled={false}
              type={"time"}
              altimeValue={formData?.endTime}
              valueUpdate={(e) => update({ endTime: e.target.value})}
              placeholder="End Time"
            />
        
          </div>
          

          <Button
            text={"Create"}
            className="w-full"
          />
        </form>
      </div>

      <dialog id="amenties_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </dialog>
  );
};

export default CreateSlotModal;
