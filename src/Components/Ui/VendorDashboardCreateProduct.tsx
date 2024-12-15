import { Check, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import {

    useCreateProductMutation,
  useGetAllCategoryQuery,
} from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import createFormData from "../../Utils/createFormData";

const VendorDashboardCreateProduct = () => {
  const [createAble, setCreateAble] = useState(false);
  const { data: categorys } = useGetAllCategoryQuery(null);
  const { loggedInUser } = useAppSelector((s) => s.authStore);

  const [send, startLoading] = useSendPost(useCreateProductMutation); //initiate request

  const showResponse = useShowResponse(); //initiate for manage loading and show res

  const formSubmitHandle = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      description: form.description.value,
      image: form.photo.files[0],
      name: form.name.value,
      price: form.price.value,
      shopId: loggedInUser?.vendor?.shopId?.shopId,
      inventoryCount: form.available.value,
      categoryId: form.category.value,
      publishStatus: form.status.value,
      flashSale:form.fs.value
    };
  

    startLoading();
    const response = await send(createFormData(data));
    showResponse(response);
    form.reset()
    setCreateAble(false)
  };

  return (
    <div className="bg-white gap-1 flex flex-col items-center justify-center shadow-2xl p-2 rounded-xl">
      {createAble ? (
        <div className="w-full">
          <form onSubmit={formSubmitHandle}>
            <div className="w-[80%] flex gap-3 mb-4 flex-col items-center justify-center mx-auto">
              <label className="w-full" htmlFor="name">
                <h1 className="text-xl font-semibold">Product name:</h1>
                <input
                  name="name"
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  type="text"
                  id="name"
                />
              </label>
              <label className="w-full" htmlFor="price">
                <h1 className="text-xl font-semibold">Price:</h1>
                <input
                  name="price"
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  type="number"
                  id="price"
                />
              </label>
              <label className="w-full" htmlFor="available">
                <h1 className="text-xl font-semibold">Stock Availabel:</h1>
                <input
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  type="number"
                  id="available"
                />
              </label>

              <label className="w-full" htmlFor="category">
                <h1 className="text-xl font-semibold">Category:</h1>
                <select
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  name="category"
                  id="category"
                >
                  <option value="" hidden>
                    Select One
                  </option>

                  {categorys?.data?.map((item) => (
                    <option key={item.categoryId} value={item.categoryId}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="w-full" htmlFor="status">
                <h1 className="text-xl font-semibold">Status:</h1>
                <select
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  name="status"
                  id="status"
                >
                  <option value="" hidden>
                    Select One
                  </option>

                  <option value="Publick">Publick</option>
                  <option value="Private">Private</option>
                </select>
              </label>

              <label className="w-full" htmlFor="status">
                <h1 className="text-xl font-semibold"> Flash sale:</h1>
                <select
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  name="fs"
                  id="fs"
                >
                  <option value="" hidden>
                   Select one
                  </option>

                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label className="w-full" htmlFor="pimg">
                <h1 className="text-xl font-semibold">Product image:</h1>
                <input
                  name="photo"
                  className="outline-none border text-lg pl-2 py-1 rounded-md w-full"
                  type="file"
                  id="pimg"
                />
              </label>

              <label className="w-full" htmlFor="description">
                <h1 className="text-xl font-semibold">Stock Description:</h1>
                <textarea
                  name="stock"
                  className="outline-none resize-none border text-lg pl-2 py-1 rounded-md w-full"
                  id="description"
                ></textarea>
              </label>
            </div>

            <div className="flex w-full justify-evenly">
              <button
                type="submit"
                className="btn btn-sm btn-success text-white"
              >
                <Check />
              </button>
              <button
                type="button"
                onClick={() => setCreateAble(false)}
                className="btn btn-sm btn-error text-white"
              >
                <X />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setCreateAble(true)}
          className="flex justify-center items-center h-full flex-col"
        >
          <PlusCircle width={50} height={50} />{" "}
          <span className="text-2xl">Create one</span>
        </button>
      )}
    </div>
  );
};

export default VendorDashboardCreateProduct;
