import { useState } from "react";
import {
  useCreateStoreMutation,
  useUpdateOrDeleteShopMutation,
} from "../../../../Redux/api/api";
import { useAppSelector } from "../../../../Redux/feathcer/hoocks";
import createFormData from "../../../../Utils/createFormData";
import useSendPost from "../../../../Utils/useSendPost";
import useShowResponse from "../../../../Utils/useShowResponse";
import { Check, Edit, X } from "lucide-react";

interface Shop {
  name: string;
  logo: string;
  shopId: string;
  _count: {
    followersId: number;
    products: number;
  };
}

interface Vendor {
  email: string;
  isDeleted: boolean;
  name: string;
  photo: string;
  vendorId: string;
  shopId: Shop;
}

interface Tuser {
  admin: string | null;
  buyer: string | null;
  email: string;
  role: string;
  vendor: Vendor;
}

const DashboardMyStore = () => {
  const { loggedInUser }: { loggedInUser: Tuser | null } = useAppSelector(
    (s) => s.authStore
  );

  console.log(loggedInUser);

  const [send, startLoading] = useSendPost(useCreateStoreMutation); //initiate request

  const showResponse = useShowResponse(); //initiate for manage loading and show res

  const createHandle = async (e) => {
    e.preventDefault();
    if (!loggedInUser?.vendor?.vendorId) {
      return;
    }
    const form = e.target;

    const data = {
      name: form.name.value,
      logo: form.file.files[0],
      description: form.description.value,
      vendorId: loggedInUser?.vendor?.vendorId,
    };

    startLoading();
    const response = await send(createFormData(data));
    showResponse(response);
  };

  // update handle.
  const [updateAble, setUpdateAble] = useState(false);

  const [updateShop, startLoadingforShop] = useSendPost(
    useUpdateOrDeleteShopMutation
  );

  const updateHandle = async (e) => {
    e.preventDefault();
    if (!loggedInUser?.vendor) {
      return;
    }
    const form = e.target;

    const data = {
      name: form.name.value,
      logo: form.file.files[0],
      description: form.description.value,
      vendorId: loggedInUser?.vendor?.vendorId,
    };

    startLoadingforShop();
    const response = await updateShop({
      data: createFormData(data),
      id: loggedInUser?.vendor?.shopId?.shopId,
    });
    showResponse(response);
    setUpdateAble(false);
  };

  return (
    <div>
      {loggedInUser?.vendor?.shopId ? (
        <>
          {updateAble ? (
            <div className="lg:w-[40%] rounded-xl shadow-xl p-5">
              <form onSubmit={updateHandle} className="flex flex-col gap-3">
                <label className="w-full" htmlFor="name">
                  <h1 className="text-lg font-semibold">Shop name:</h1>
                  <input
                    name="name"
                    className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                    type="text"
                    id="name"
                  />
                </label>
                <label className="w-full" htmlFor="logo">
                  <h1 className="text-lg font-semibold">Shop logo:</h1>
                  <input
                    name="file"
                    className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                    type="file"
                    id="logo"
                  />
                </label>
                <label className="w-full" htmlFor="logo">
                  <h1 className="text-lg font-semibold">Shop description:</h1>
                  <textarea
                    name="description"
                    className="outline-none border text-lg pl-2 py-1 rounded-md w-full resize-none"
                    id=""
                  ></textarea>
                </label>
                <div className="flex items-center justify-center gap-5">
                  <button className="btn btn-success btn-sm text-white">
                    <Check />
                  </button>
                  <button
                    type="button"
                    onClick={() => setUpdateAble(false)}
                    className="btn btn-error btn-sm text-white"
                  >
                    <X />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="lg:w-[50%] rounded-lg shadow-xl p-4 ">
              <div className="  flex justify-start gap-10">
                <img
                  className="w-[100px] h-[100px] object-cover rounded-full"
                  src={loggedInUser?.vendor?.shopId?.logo}
                  alt=""
                />
                <div>
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Shop name:{" "}
                    <span className="text-lg font-normal">
                      {loggedInUser?.vendor?.shopId?.name}
                    </span>
                  </h1>
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Shop Status:{" "}
                    <span className="text-lg font-normal">
                      {loggedInUser?.vendor?.shopId?.status}
                    </span>
                  </h1>
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Total products:{" "}
                    <span className="text-lg font-normal">
                      {loggedInUser?.vendor?.shopId?._count?.products}
                    </span>
                  </h1>
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Total followers:{" "}
                    <span className="text-lg font-normal">
                      {loggedInUser?.vendor?.shopId?._count?.followersId}
                    </span>
                  </h1>
                  <h1 className="text-2xl font-semibold">
                    {" "}
                    Available coupne:{" "}
                    <span className="text-lg font-normal">
                      {loggedInUser?.vendor?.shopId?._count?.coupne}
                    </span>
                  </h1>
                </div>
              </div>
              <button
                onClick={() => setUpdateAble(true)}
                className="btn btn-sm text-white btn-success"
              >
                <Edit />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="lg:w-[40%] shadow-xl p-5">
          <h1 className="text-center text-2xl">Create shop</h1>

          <form onSubmit={createHandle} className="flex flex-col gap-3">
            <label className="w-full" htmlFor="name">
              <h1 className="text-lg font-semibold">Shop name:</h1>
              <input
                name="name"
                className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                type="text"
                id="name"
              />
            </label>
            <label className="w-full" htmlFor="logo">
              <h1 className="text-lg font-semibold">Shop logo:</h1>
              <input
                name="file"
                className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                type="file"
                id="logo"
              />
            </label>
            <label className="w-full" htmlFor="logo">
              <h1 className="text-lg font-semibold">Shop description:</h1>
              <textarea
                name="description"
                className="outline-none border text-lg pl-2 py-1 rounded-md w-full resize-none"
                id=""
              ></textarea>
            </label>
            <button className="btn btn-success btn-sm text-white">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardMyStore;
