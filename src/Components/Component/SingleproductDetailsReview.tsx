import { usePostAReviewMutation } from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import formateOrderArray from "../../Utils/formateOrderArray";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import SectionTittle from "../Ui/SectionTittle";

const SingleproductDetailsReview = ({ product }) => {
  const [send, startLoading] = useSendPost(usePostAReviewMutation); //initiate request

  const showResponse = useShowResponse(); //initiate for manage loading and show res

  const { loggedInUser } = useAppSelector((s) => s.authStore);

  const reviewPostHandle = async (e) => {
    e.preventDefault();

    if (loggedInUser?.userId && !product?.productId) return;

    const userMessage = e.target.comment.value;

    startLoading();
    const response = await send({
      userMessage,
      productId: product?.productId,
      userId: loggedInUser?.userId,
    });
    showResponse(response);
  };

  const reveiws = product?.review;

  const isOrdered = formateOrderArray(loggedInUser?.order, product?.productId);
  console.log(isOrdered);

  return (
    <div className="mb-6">
      <SectionTittle txt="Reviews" />

      {/* reviews. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-col gap-5 mt-4">
        {reveiws?.map((item) => {
          return (
            <div
              key={item.reviewId}
              className="bg-gray-100   shadow-lg p-2 rounded-lg"
            >
              <h1 className="text-lg mb-3">
                <span className="font-semibold">User says</span>:{" "}
                {item.userMessage}
              </h1>
              <h1 className="text-lg">
                <span className="font-semibold">Vendor reply</span>:{" "}
                {item.vendorMessage || "empty"}
              </h1>
            </div>
          );
        })}
      </div>

     {isOrdered? <form
        onSubmit={reviewPostHandle}
        className="flex flex-col w-[500px] mt-5 gap-3"
      >
        <textarea
          className="border border-black resize-none rounded-lg h-[200px] w-full outline-none pt-3 pl-2"
          placeholder="Type your review here."
          name="comment"
        ></textarea>
        <button className="btn btn-warning btn-sm">Post</button>
      </form>:""}
    </div>
  );
};

export default SingleproductDetailsReview;
