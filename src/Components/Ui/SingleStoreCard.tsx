import { useManageStoreAdminMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";

export interface Tstore {
  shopId: string;
  name: string;
  status: string;
  logo: string;
  vendorId: string;
  created: string; // ISO date string
  updated: string; // ISO date string
}

const SingleStoreCard = ({ data }: { data: Tstore }) => {
  const [send, startLoading] = useSendPost(useManageStoreAdminMutation); //initiate request

  const showResponse = useShowResponse();

  const statusHandle = async (id: string) => {
    startLoading();
    const response = await send({
      isDelete: false,
      status: data.status === "Active" ? "Block" : "Active",
      id,
    });
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
        src={data.logo}
        alt=""
      />
      <h1 className="mt-3 font-semibold text-xl">{data.name}</h1>
      <h1
        className={`text-sm font-semibold ${
          data.status === "Active" ? "text-green-500" : "text-red-500"
        }`}
      >
        {data.status}
      </h1>
      <hr />
      <div className="flex items-center justify-evenly w-full mt-5">
        <button
          onClick={() => statusHandle(data.shopId)}
          className={`btn ${
            data.status === "Active" ? "btn-error bg-[red]" : "btn-success "
          }  btn-sm text-white`}
        >
          {data.status === "Active" ? "Block" : "Active"}
        </button>
      </div>
    </div>
  );
};

export default SingleStoreCard;
