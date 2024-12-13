import { useManageUserMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import { TuserData } from "../Component/Navbar";

const SingleUserCard = ({ data }: { data: TuserData }) => {
  const userData = () => {
    if (!data) return null;

    if (data.role === "User") return data.buyer;
    if (data.role === "Vendor") return data.vendor;
  };

  const [send, startLoading] = useSendPost(useManageUserMutation); //initiate request

  const showResponse = useShowResponse();

  const suspendHandle = async (id: string) => {
    startLoading();
    const response = await send({ delete: false, id });
    showResponse(response);
  };

  const deleteHandle = async (id: string) => {
    startLoading();
    const response = await send({ delete: true, id });
    showResponse(response);
  };

  return (
    <div
      className={`${
        data.status === "Block" ? "bg-[#f03e3e]" : "bg-[#ececec]"
      } flex flex-col justify-center items-center p-4 rounded-xl shadow-xl`}
    >
      <img
        className="w-[100px] h-[100px] object-cover rounded-full"
        src={userData()?.photo}
        alt=""
      />
      <h1 className="mt-3 font-semibold text-xl">{userData()?.name}</h1>
      <h1 className="text-sm">{data?.role}</h1>
      <hr />
      <div className="flex items-center justify-evenly w-full mt-5">
        <button
          onClick={() => suspendHandle(data.userId)}
          className="btn btn-warning btn-sm text-black"
        >
          Suspend
        </button>
        <button
          onClick={() => deleteHandle(data.userId)}
          className="btn btn-error bg-[red]  btn-sm text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleUserCard;
