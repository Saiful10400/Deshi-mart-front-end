import { Link } from "react-router-dom";

const Tittle = ({
  text,
  seeMoreRoute,
}: {
  text: string;
  seeMoreRoute: string;
}) => {
  return (
    <div className="flex items-center justify-between"> 
      <h1 className="text-2xl lg:mb-[42px] mb-6 lg:mt-[70px] mt-10 font-bold border-b-2 inline-block pr-8 pb-4 border-[#f97316]">
        {text}
      </h1>
      <Link to={seeMoreRoute} className="font-bold text-[#f97218]">See More</Link>
    </div>
  );
};

export default Tittle;
