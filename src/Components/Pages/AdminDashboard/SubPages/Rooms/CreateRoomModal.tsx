import React, { useEffect, useState } from "react";
import Button from "../../../../Ui/Button";
import InputField from "../../../../Ui/Input";
import DropDown from "../../../../Ui/DropDown";
import { RiImageAddFill } from "react-icons/ri";
import imageUpload from "../../../../../Utils/imageUpload";
import { toast } from "react-toastify";
import { FaCircleInfo } from "react-icons/fa6";
import { useCreateARoomMutation } from "../../../../../Redux/api/api";
import swal from "sweetalert";

const CreateRoomModal = () => {
  const inetialValue={
    name:"",
    roomNo:"",
    floorNo:"",
    capacity:"",
    pricePerSlot:"",
    amenities:"",
    roomImages:""
  }
  const [formData, setFormData] = useState(inetialValue);

  const update = (data) => {
   setFormData(e=>({...e,...data}))
  };

  // room image uploading handle.

  const [isProfileImageUploading, setIsProfileImageUploading] = useState(false);

  const roomImagesUploadHandle = (e) => {
    const files = e.target.files;
    setIsProfileImageUploading(true);
    imageUpload(files)
      .then((res) => {
        update({ roomImages: res });
        setIsProfileImageUploading(false);
      })
      .catch(() => {
        toast.error("Unsupported Profile image file formate!", {
          position: "top-center",
        });
        setIsProfileImageUploading(false);
      });
  };

  // form submint handle.
  const [createaRoom, { data, error }] = useCreateARoomMutation();
  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (!formData?.roomImages) return;
    createaRoom({ ...formData });
  };

  useEffect(() => {
    if (data?.statusCode === 200) {
      document.getElementById("create_room_modal")?.close();
      swal("Success", data.message, "success");
      update(inetialValue)
    } else if (error?.data?.message) {
      document.getElementById("create_room_modal")?.close();
  
      swal("Failed", error?.data?.message, "error");
    }
  }, [data, error]);

  return (
    <dialog id="create_room_modal" className="modal">
      <div className="modal-box relative z-10">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-center">Create A Room </h3>

        {/* upload necessay image for the room secion. */}

        <input
          onInput={roomImagesUploadHandle}
          accept="image/*"
          type="file"
          multiple
          hidden
          id="roomImages"
        />

        <label htmlFor="roomImages">
          <RiImageAddFill className="text-4xl" />
        </label>
        {formData?.roomImages && (
          <div className="flex w-full overflow-scroll gap-x-4">
            {formData?.roomImages?.map((item, idx) => (
              <img className="h-[100px]" key={idx} src={item} />
            ))}
          </div>
        )}

        <form onSubmit={formSubmitHandle} className="flex flex-col gap-4 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <InputField
              disabled={false}
              type={"text"}
              altimeValue={formData?.name}
              valueUpdate={(e) => update({ name: e.target.value })}
              placeholder="Room Name"
            />
            <InputField
              disabled={false}
              type={"number"}
              altimeValue={formData?.roomNo}
              valueUpdate={(e) => update({ roomNo: parseInt(e.target.value) })}
              placeholder="Room Number"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputField
              disabled={false}
              type={"number"}
              altimeValue={formData?.floorNo}
              valueUpdate={(e) => update({ floorNo: parseInt(e.target.value) })}
              placeholder="Floor Number"
            />
            <InputField
              disabled={false}
              type={"number"}
              altimeValue={formData?.capacity}
              valueUpdate={(e) => update({ capacity: parseInt(e.target.value) })}
              placeholder="Room Capacity"
            />
          </div>
          <InputField
            disabled={false}
            type={"number"}
            altimeValue={formData?.pricePerSlot}
            valueUpdate={(e) => update({ pricePerSlot: parseInt(e.target.value) })}
            placeholder="Price Per Slot"
          />
          <InputField
            disabled={false}
            type={"text"}
            altimeValue={formData?.amenities}
            valueUpdate={(e) => {
              const text = e.target.value;
              const textarray = text.split(",");
              update({ amenities: textarray });
            }}
            placeholder="Amenities"
          />

          <Button
            disable={isProfileImageUploading}
            loading={isProfileImageUploading}
            text={
              isProfileImageUploading ? "Room images is uploading" : "Create"
            }
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

export default CreateRoomModal;
