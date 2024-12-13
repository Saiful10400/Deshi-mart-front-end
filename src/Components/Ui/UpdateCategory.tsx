import { Check, Edit, LucideTrash, XIcon } from "lucide-react";
import { useState } from "react";
import useSendPost from "../../Utils/useSendPost";
import { useManageCategoryMutation } from "../../Redux/api/api";
import useShowResponse from "../../Utils/useShowResponse";

interface Tcategory {
  categoryId: string;
  name: string;
  created: string; // ISO string format for the timestamp
  updated: string; // ISO string format for the timestamp
}

const UpdateCategory = ({ data }: { data: Tcategory }) => {
  const [edit, setEdit] = useState(false);
  
const[categoryName,setCategoryName]=useState("")


const [send, startLoading] = useSendPost(useManageCategoryMutation);
const showResponse = useShowResponse();

const updateCategory=async(id:string)=>{
    if(categoryName.length===0) return
    console.log(categoryName)

    startLoading()
    const response=await send({delete:false,name:categoryName,id})
    showResponse(response)
    setEdit(false)


}


const deleteCategory=async(id:string)=>{

    startLoading()
    const response=await send({id,delete:true})
    showResponse(response)
    setEdit(false)

}


  return (
    <div className="bg-gray-200  rounded-lg shadow-xl p-2">
      <div className="flex items-center justify-between mb-2">
        {edit ? (
          <button onClick={() => setEdit(false)}>
            <XIcon />
          </button>
        ) : (
          <button onClick={() => setEdit(true)}>
            <Edit />
          </button>
        )}

        {edit ? (
          <button onClick={()=>updateCategory(data.categoryId)}>
            <Check />
          </button>
        ) : (
          <button onClick={()=>deleteCategory(data.categoryId)}>
            <LucideTrash />
          </button>
        )}
      </div>

      <div className="">
        <input
        onChange={(e)=>setCategoryName(e.target.value)}
          type="text"
          className="text-xl w-full mb-1 rounded-sm pl-1"
          disabled={!edit}
          defaultValue={data.name}
        />
        <h1>Total product: {}</h1>
      </div>
    </div>
  );
};

export default UpdateCategory;
