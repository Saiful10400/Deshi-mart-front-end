import getNumberArrayFromNumber from "../../Utils/getNumberArrayFromNumber";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ img, ratings, testimonials, user }) => {
  return (
    <div className="bg-[#f9f9f9] shadow-lg rounded-lg p-5">
      <img
        className="w-[70px] h-[70px] review-card-user-profile rounded-full object-cover"
        src={img}
        alt=""
      />
      <div className="flex items-center my-3 ">
        {getNumberArrayFromNumber(ratings).map((item) => (
          <FaStar className="text-[#f0b407]" key={item} />
        ))}
      </div>

      <div className="h-[100px]">
        {testimonials.length <= 150
          ? testimonials
          : testimonials.slice(0, 150) + "  ..."}
      </div>
      <div className="lg:mt-5">
        <h1 className="lg:text-2xl">{user.name}</h1>
        <h1 className="text-sm">{user.designation}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
