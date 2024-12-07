import { Link } from "react-router-dom";
import { useGetRoomsQuery } from "../../../Redux/api/api";
import CenterAlign from "../../Helper/CenterAlign";
import Loading from "../../SharedComponent/Loading";
import RoomCart from "../../Ui/RoomCart";
import Tittle from "../../Ui/Tittle";
import Button from "../../Ui/Button";

const LatestItems = () => {
  const { data, isLoading } = useGetRoomsQuery(null);
  return (
    <>
      <CenterAlign>
        <div  className="px-4 lg:px-0">
          <Tittle text="Featured Rooms" />
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-3 mt-4">
              {data?.data?.slice(0, 8)?.map((item) => {
                return <RoomCart key={item._id} data={item} />;
              })}
            </div>
          )}
          <div className="to-center mt-4 mb-8">
            <Link className="mt-5" to={"/meeting-rooms"}>
              <Button
                className="text-xl font-medium  px-4 to-center rounded-[4px]"
                text="See More >"
              />
            </Link>
          </div>
        </div>
      </CenterAlign>
    </>
  );
};

export default LatestItems;
