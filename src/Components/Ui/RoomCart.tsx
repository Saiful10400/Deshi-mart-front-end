import { Link } from "react-router-dom";
import Button from "./Button";
import RoomCartCarosel from "./RoomCartCarosel/RoomCartCarosel";


const RoomCart = ({data}) => {

    return (
        <div data-aos="fade-up" className=' w-full min-h-11 shadow-xl rounded-lg px-2 py-3'>
            <div className="h-[300px] rounded-xl overflow-hidden"><RoomCartCarosel images={data.roomImages}/></div>
            <div className="text-start mt-4">
            <h1 className="font-semibold text-lg">{data.name}</h1>
            <h1 className="font-medium text-base my-3">Total Capacity: {data.capacity}</h1>
            <h1 className="font-medium text-base">Price Per Slot: {data.pricePerSlot}$</h1>
            </div>
          <Link to={`/meeting-rooms/${data._id}`} className="inline-block mt-4 w-full"><Button className="w-full font-semibold block " text="See Details"/></Link>
        </div>
    );
};

export default RoomCart;