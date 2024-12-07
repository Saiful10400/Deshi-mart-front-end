import { useGetRoomsQuery } from "../../../../../Redux/api/api";
import Table from "../../../../Layouts/Dashboard/Table";
import Button from "../../../../Ui/Button";
import CreateRoomModal from "./CreateRoomModal";

const RoomManage = () => {
  const createNewButtonHandle = () => {

    document.getElementById("create_room_modal")?.showModal();
  };

  // get all rooms.
  const { data: allRooms, isLoading } = useGetRoomsQuery(null);

  const dataFormate = [
    { tittle: "Room Name", formate: "text", key: "name" },
    { tittle: "Room No", formate: "number", key: "roomNo" },
    { tittle: "Floor No", formate: "number", key: "floorNo" },
    { tittle: "Capacity", formate: "number", key: "capacity" },
    { tittle: "Price Per Slot", formate: "number", key: "pricePerSlot" },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center mt-4 px-3 lg:px-0 lg:mt-0">
        <h1 className="  lg:text-4xl text-xl font-bold">Room Management</h1>

        <Button
          onClick={createNewButtonHandle}
          className="text-base font-normal"
          text="Create Room"
        />
        {/* <Modal /> */}
      </div>
      <Table dataFormate={dataFormate} isLoading={isLoading} data={allRooms} />
      <CreateRoomModal />
    </div>
  );
};

export default RoomManage;
