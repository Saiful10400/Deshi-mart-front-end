import {
  Check,
  CopyPlusIcon,
  Edit,
  Target,
  Trash,
  Vault,
  X,
} from "lucide-react";
import {
  useGetAllCategoryQuery,
  useManageProductMutation,
} from "../../Redux/api/api";
import { useState } from "react";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import createFormData from "../../Utils/createFormData";

export interface Tproduct {
  productId: string;
  name: string;
  price: number;
  categoryId: string;
  image: string;
  description: string;
  shopId: string;
  inventoryCount: number;
  publishStatus: "Public" | "Private"; // Assuming "Publick" is a typo
  created: string; // ISO date string
  updated: string; // ISO date string
}

const VendorDashboardSingleProduct = ({ data, categorys }) => {
  const [send, startLoading] = useSendPost(useManageProductMutation); //initiate request

  const showResponse = useShowResponse();

  // edit handle.
  const [editAble, setEditAble] = useState(false);

  const duplicateHandle = async (id: string) => {
    startLoading();
    const response = await send({
      duplicate: true,
      delete: false,
      data: "",
      id,
    });
    showResponse(response);
  };

  const deleteHandle = async (id: string) => {
    startLoading();
    const response = await send({
      duplicate: false,
      delete: true,
      data: "",
      id,
    });
    showResponse(response);
  };

  const [product, setProduct] = useState({ shopId: data.shopId });
  console.log(product);

  const [updateAble, setUpdateAble] = useState(false);

  const updateHandle = async (id: string) => {
    startLoading();
    const response = await send({
      duplicate: false,
      delete: false,
      data: createFormData(product),
      id,
    });
    showResponse(response);
    setEditAble(false);
    setUpdateAble(false);
  };

  return (
    <div className="bg-white gap-1 flex flex-col items-center justify-center shadow-2xl p-2 rounded-xl">
      <img className="w-[200px] h-[250px] object-cover" src={data.image} alt="" />
      <input
        onInput={(e) =>
          setProduct((p) => ({ ...product, photo: e.target.files[0] }))
        }
        hidden={!editAble}
        type="file"
      />

      <table
        className="border w-full text-center"
        cellSpacing={0}
        cellPadding={10}
      >
        <thead className="border">
          <tr>
            <th className="border"></th>
            <th className="border">value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border">Name</td>
            <td className="border">
              <input
                onChange={(e) =>
                  setProduct((p) => ({ ...product, name: e.target.value }))
                }
                disabled={!editAble}
                className="text-center bg-transparent"
                type="text"
                defaultValue={data.name}
              />
            </td>
          </tr>
          <tr>
            <td className="border">Price (tk)</td>
            <td className="border">
              <input
                onChange={(e) =>
                  setProduct((p) => ({
                    ...product,
                    price: Number(e.target.value),
                  }))
                }
                disabled={!editAble}
                className="text-center w-max bg-transparent"
                type="number"
                defaultValue={data.price}
              />
            </td>
          </tr>
          <tr>
            <td className="border">Available</td>
            <td className="border">
              <input
                onChange={(e) =>
                  setProduct((p) => ({
                    ...product,
                    inventoryCount: Number(e.target.value),
                  }))
                }
                disabled={!editAble}
                className="text-center bg-transparent"
                type="number"
                defaultValue={data.inventoryCount}
              />
            </td>
          </tr>
          <tr>
            <td className="border">Status</td>
            <td className="border">
              <select
                onChange={(e) =>
                  setProduct((p) => ({
                    ...product,
                    publishStatus: e.target.value,
                  }))
                }
                disabled={!editAble}
                defaultValue={data.publishStatus}
                name="status"
                id=""
              >
                <option value="" hidden>
                  Select One
                </option>
                <option value="Publick">Publick</option>
                <option value="Private">Privete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="border">Category</td>
            <td className="border">
              <select
                onChange={(e) =>
                  setProduct((p) => ({
                    ...product,
                    categoryId: e.target.value,
                  }))
                }
                disabled={!editAble}
                defaultValue={data.categoryId}
                name="status"
                id=""
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
            </td>
          </tr>
          <tr>
            <td className="border">Description</td>
            <td className="border resize-none text-start">
              <textarea
                onChange={(e) =>
                  setProduct((p) => ({
                    ...product,
                    description: e.target.value,
                  }))
                }
                disabled={!editAble}
                className="w-full"
                name=""
                id=""
                defaultValue={data.description}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex w-full justify-evenly my-3">
        {updateAble ? (
          <>
            <button
              onClick={() => updateHandle(data.productId)}
              className="btn btn-sm btn-success text-white"
            >
              <Check />
            </button>
            <button
              onClick={() => {
                setUpdateAble(false);
                setEditAble(false);
              }}
              className="btn btn-sm btn-error text-white"
            >
              <X />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setEditAble(true);
                setUpdateAble(true);
              }}
              className="btn btn-sm btn-success text-white"
            >
              <Edit />
            </button>
            <button
              onClick={() => duplicateHandle(data.productId)}
              className="btn btn-sm btn-warning text-white"
            >
              <CopyPlusIcon />
            </button>
            <button
              onClick={() => deleteHandle(data.productId)}
              className="btn btn-sm btn-error text-white"
            >
              <Trash />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VendorDashboardSingleProduct;
