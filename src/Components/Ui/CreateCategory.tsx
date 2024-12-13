import { Check, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import useSendPost from "../../Utils/useSendPost";
import { useCreateCategoryMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";

const CreateCategory = () => {
  const [clicked, setClicked] = useState(false);

  const [categoryName, setCategoryName] = useState("");

  const [send, startLoading] = useSendPost(useCreateCategoryMutation);
  const showResponse = useShowResponse();

  const createCategory = async () => {
    console.log(categoryName.length);
    if (categoryName.length === 0) return;
    startLoading();
    const response = await send({ name: categoryName });
    showResponse(response);
    setClicked(false);
  };

  return (
    <>
      {clicked ? (
        <div className="flex flex-col justify-start gap-4 items-center bg-gray-200  rounded-lg shadow-xl p-2">
          <div className="flex w-full items-center justify-between">
            <button onClick={createCategory}>
              <Check />
            </button>
            <button onClick={() => setClicked(false)}>
              <X />
            </button>
          </div>
          <input
            onChange={(e) => setCategoryName(e.target.value)}
            type="text"
            className="w-full rounded-sm pl-1"
            placeholder="Category name"
          />
        </div>
      ) : (
        <button
          onClick={() => setClicked(true)}
          className="flex flex-col justify-center items-center bg-gray-200  rounded-lg shadow-xl p-2"
        >
          <PlusCircle width={40} height={40} />
          <h1 className="text-xl font-semibold">Create a category</h1>
        </button>
      )}
    </>
  );
};

export default CreateCategory;
