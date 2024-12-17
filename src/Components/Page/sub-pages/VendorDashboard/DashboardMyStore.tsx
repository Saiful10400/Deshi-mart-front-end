import { useState } from "react";
import {
  useAShopAllCoupneQuery,
  useCreateCoupneMutation,
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

  // coupne create hadnle.

  const [sendcoupne, startLoadicopon] = useSendPost(useCreateCoupneMutation);

  //initiate for manage loading and show res

  const createCoupne = async (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount = Number(form.discount.value);
    const minimumExpence = 200;
    const shopId = loggedInUser?.vendor?.shopId?.shopId;

    startLoadicopon();
    const response = await sendcoupne({
      code,
      discount,
      minimumExpence,
      shopId,
    });
    showResponse(response);
  };

  const { data: Coupnes } = useAShopAllCoupneQuery({
    id: loggedInUser?.vendor?.shopId?.shopId,
  });

  console.log(Coupnes);

  return (
   <>
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-5">
      <div className="lg:w-1/2 shadow-xl rounded-lg">
        <h1 className="text-xl font-semibold p-2">Create a coupne.</h1>

        <form onSubmit={createCoupne} className="p-5">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="code"
              placeholder="Coupne code"
              className="border outline-none px-2 py-1 w-full rounded-lg border-black text-lg"
            />
            <input
              type="number"
              name="discount"
              placeholder="Discount amount"
              className="border outline-none px-2 py-1 w-full rounded-lg border-black text-lg"
            />
          </div>
          <button
            disabled={loggedInUser?.vendor?.shopId?.shopId ? false : true}
            className="btn btn-success btn-md mt-7 text-white"
          >
            Create
          </button>
        </form>
      </div>

      {loggedInUser?.vendor?.shopId ? (
        <>
          {updateAble ? (
            <div className=" w-full  rounded-xl shadow-xl p-5">
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
        <div className=" w-full shadow-xl p-5">
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

    <div className="flex flex-wrap gap-6">
      {
        Coupnes?.data?.map(item=>{
          return(<div className=" p-4 bg-gray-100 rounded-lg">
            <h1 className="font-semibold">Code:{item.code}</h1>
            <h1 className="font-semibold">Discount:{item.discount}</h1>
          </div>)
        })
      }
    </div>
   
   </>
  );
};

export default DashboardMyStore;
