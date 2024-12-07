import { useEffect, useState } from "react";
import InputField from "../../../../Ui/Input";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
  useUpdateRoomMutation,
} from "../../../../../Redux/api/api";
import Button from "../../../../Ui/Button";
import { useSelector } from "react-redux";
import imageUpload from "../../../../../Utils/imageUpload";
import swal from "sweetalert";
import { useAppDispatch } from "../../../../../Redux/feathcer/hoocks";
import { UpdateFired } from "../../../../../Redux/feathcer/DashboardSlice";
import { useHref } from "react-router";

const UpdateModal = ({ dataFormate }) => {


  const [formData, setFormData] = useState({});

  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  const { assignedUpdateRoom } = useSelector((e) => e.DashbpardStore);

  useEffect(() => {
    update(assignedUpdateRoom);
  }, [assignedUpdateRoom]);

  const [errorMessage, setErrorMessage] = useState(null);


  const [
    updateRoom,
    { isLoading: roomLoading, data: roomData, error: roomError },
  ] = useUpdateRoomMutation();

  // form submit handle.
  const route = useHref()?.split("/");
  const routeText = route[route.length - 1];

  const dispatch = useAppDispatch();
  const formUpdateHandle = (e) => {
    e.preventDefault();

    if(routeText==="room") updateRoom(formData)

    // updateRoom({ ...formData });
  };

  useEffect(() => {
    dispatch(UpdateFired());
    if (roomData?.statusCode === 200) {
      
      document.getElementById("update_modal")?.close();
      swal("Success", roomData.message, "success");
    } else if (roomError) {
      document.getElementById("update_modal")?.close();
      swal("Failed", roomError?.data?.message, "error");
    }
  }, [roomData, roomError]);


  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box  ">
        <form className="mb-4" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}
        <h1 className="font-semibold text-2xl mb-4 text-center">
          Update a {routeText}
        </h1>

        <form onSubmit={formUpdateHandle} className="flex flex-col gap-4" action="">
          {dataFormate?.map((item, idx) => (
            <InputField key={idx}
              type={item.formate}
              altimeValue={formData[item.key]}
              valueUpdate={(e) => update({ [item.key]: item.formate==="number"?parseInt(e.target.value):e.target.value })}
              placeholder={item.tittle}
            />
          ))}
         <Button
            
            className="w-full mt-4 font-medium"
            text={"Update"}
          /> 
        </form>
      </div>
    </dialog>
  );
};

export default UpdateModal;
