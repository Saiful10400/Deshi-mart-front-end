import { usePostAReviewMutation } from "../../Redux/api/api";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import formateOrderArray from "../../Utils/formateOrderArray";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import SectionTittle from "../Ui/SectionTittle";
import { useState } from "react";

type TReview = {
  reviewId: string;
  userMessage: string;
  vendorMessage?: string;
};

type TProduct = {
  productId: string;
  review?: TReview[];
  order?: any;
};

const SingleproductDetailsReview = ({ product }: { product: TProduct }) => {
  const [send, startLoading] = useSendPost(usePostAReviewMutation);
  const showResponse = useShowResponse();

  const { loggedInUser } = useAppSelector((s) => s.authStore);

  const [comment, setComment] = useState("");

  const reviewPostHandle = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loggedInUser?.userId || !product?.productId) return;

    startLoading();

    const response = await send({
      userMessage: comment,
      productId: product?.productId,
      userId: loggedInUser?.userId,
    });

    showResponse(response);

    setComment(""); // reset input
  };

  const reviews = product?.review || [];

  const isOrdered = formateOrderArray(
    loggedInUser?.order,
    product?.productId
  );

  return (
    <div className="mt-6">

      <SectionTittle txt="Reviews" />

      {/* Reviews List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        {reviews.length > 0 ? (
          reviews.map((item) => (
            <div
              key={item.reviewId}
              className="bg-gray-100 shadow-lg p-3 rounded-lg"
            >
              <h1 className="text-sm mb-2">
                <span className="font-semibold">User says:</span>{" "}
                {item.userMessage}
              </h1>

              <h1 className="text-sm">
                <span className="font-semibold">Vendor reply:</span>{" "}
                {item.vendorMessage || "No reply yet"}
              </h1>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet</p>
        )}
      </div>

      {/* Review Form (only if ordered) */}
      {isOrdered && (
        <form
          onSubmit={reviewPostHandle}
          className="flex flex-col w-full max-w-[500px] mt-6 gap-3"
        >
          <textarea
            className="border border-black resize-none rounded-lg h-[160px] w-full outline-none pt-3 pl-2"
            placeholder="Type your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-warning btn-sm"
            disabled={!comment.trim()}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default SingleproductDetailsReview;