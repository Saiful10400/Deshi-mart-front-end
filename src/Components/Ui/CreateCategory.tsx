import { Check, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import useSendPost from "../../Utils/useSendPost";
import { useCreateCategoryMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";

const CreateCategory = () => {
  const [clicked, setClicked] = useState(false);

  
  const [send, startLoading] = useSendPost(useCreateCategoryMutation);
  const showResponse = useShowResponse();

  const createCategory = async (e) => {
  e.preventDefault()
  
    startLoading();
    const response = await send({ name: e.target.name.value,logo:e.target.file.value });
    showResponse(response);
    setClicked(false);
  };

  return (
    <>
      {clicked ? (
        <form onSubmit={createCategory} className="flex flex-col justify-start gap-4 items-center bg-gray-200  rounded-lg shadow-xl p-2">
          <div className="flex w-full items-center justify-between">
            <button  >
              <Check />
            </button>
            <button type="button" onClick={() => setClicked(false)}>
              <X />
            </button>
          </div>
          <input
             
            type="text"
            name="name"
            className="w-full rounded-sm pl-1"
            placeholder="Category name"
          />
          <input
          name="file"
            
            type="file"
            className="w-full rounded-sm pl-1"
            placeholder="Category name"
          />
        </form>
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
