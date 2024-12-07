import { useParams } from "react-router";
import CenterAlign from "../../Helper/CenterAlign";
import { useGetAroomQuery } from "../../../Redux/api/api";
import Loading from "../../SharedComponent/Loading";
import SingleRoomCarosel from "../../Ui/SingleRoomCarosel/SingleRoomCarosel";
import { Link } from "react-router-dom";
import Button from "../../Ui/Button";

const SingleRoom = () => {
  // const pageUrl=useSearchParams()
  // console.log(pageUrl[0].get("go"),pageUrl[0].get("payed"))

  const { id } = useParams();

  const { data, isLoading } = useGetAroomQuery({ id });
  const roomData = data?.data;
  console.log(roomData, isLoading);
  return isLoading ? (
    <Loading />
  ) : (
    <CenterAlign>
      <div className="px-4 lg:px-0">
        <div className="">
          <SingleRoomCarosel data-aos="fade-down" images={roomData.roomImages} />
        </div>


        <div className="flex flex-col lg:flex-row gap-5 mt-5">


          <div data-aos="fade-right" className="lg:w-[70%] ">
            <h1 className="flex flex-col lg:flex-row justify-between  lg:items-center items-start">
              <span className="text-3xl font-semibold">{roomData.name}</span>{" "}
              <span className="text-lg font-normal">
                <span className="text-3xl font-bold">
                  $ {roomData.pricePerSlot}
                </span>{" "}
                / per slot
              </span>
            </h1>
            <div>
              <h1 className="text-lg font-normal mt-3">
                Room Number:{" "}
                <span className="font-bold">{roomData.roomNo}</span>
              </h1>
              <h1 className="text-lg font-normal mt-3">
                Floor Number:{" "}
                <span className="font-bold">{roomData.floorNo}</span>
              </h1>
              <h1 className="text-lg font-normal mt-3">
                Capacity: <span className="font-bold">{roomData.capacity}</span>
              </h1>
              <h1 className="text-lg font-normal mt-3">
                Amenities:{" "}
                <div className="inline-flex flex-wrap items-center gap-2 lg:gap-4">
                  {roomData?.amenities?.map((item, idx) => (
                    <span key={idx} className="font-bold">
                      {idx + 1}.{item}
                    </span>
                  ))}
                </div>
              </h1>
            </div>
          </div>

          
          <div data-aos="fade-left" className="lg:w-[30%]">
            <Link to={`/meeting-rooms/booking/${id}`}>
              <Button
                className="text-xl font-normal block w-[70%] mx-auto"
                text="Book Now"
              />
            </Link>
          </div>


        </div>
      </div>
    </CenterAlign>
  );
};

export default SingleRoom;
