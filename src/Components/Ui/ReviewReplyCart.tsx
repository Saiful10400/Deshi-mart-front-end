import { useGiveReviewAnswerMutation } from "../../Redux/api/api";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";

 

const ReviewReplyCart = ({data}) => {
 

    const [send, startLoading] = useSendPost(useGiveReviewAnswerMutation); //initiate request
  
    const showResponse = useShowResponse(); //initiate for manage loading and show res

    const reviesubmitHandle=async(e)=>{
        e.preventDefault()

        const text=e.target.text.value

        startLoading()
        const reponse=await send({message:text,id:data?.reviewId})
        showResponse(reponse)
        e.target.reset()


    }



    return (
        <div className="bg-gray-100 min-h-[100px] p-2 shadow-lg rounded-lg">
            <h1 className="text-xl"><span className="font-semibold">User:</span> {data.userMessage}</h1>
            <h1 className="text-xl"><span className="font-semibold">Vendor:</span> {data.vendorMessage}</h1>
            <form onSubmit={reviesubmitHandle}>
                <input type="text" name="text" className="mt m-4" placeholder="Reply" />
                <button className="btn btn-sm btn-warning">Send</button>
            </form>
        </div>
    );
};

export default ReviewReplyCart;