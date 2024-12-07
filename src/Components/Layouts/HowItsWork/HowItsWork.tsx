import CenterAlign from "../../Helper/CenterAlign";
import Tittle from "../../Ui/Tittle";

// import images.
import room from "../../../assets/HowItWork/office.png";
import calender from "../../../assets/HowItWork/date.png";
import confirm from "../../../assets/HowItWork/confirm.png";
import arrow from "../../../assets/HowItWork/arrow.png";

const HowItsWork = () => {
  return (
    <>
      <CenterAlign>
        <div className="">
          <Tittle text="How It Works" />

          <div data-aos="fade-up" className="to-center flex-col lg:flex-row text-center gap-10">
            <div  className="to-center bg-gray-100 w-[150px] h-[150px] rounded-full flex-col gap-3">
              <img
                className="w-[50px] h-[50px] object-cover"
                src={room}
                alt=""
              />
              <h1 className="font-semibold">Select a Room</h1>
            </div>

            <img  className="w-[80px] rotate-90 lg:rotate-0" src={arrow} alt="" />

            <div  className="to-center bg-gray-100 w-[150px] h-[150px] rounded-full flex-col gap-3">
              <img
                className="w-[50px] h-[50px] object-cover"
                src={calender}
                alt=""
              />
              <h1 className="font-semibold">Choose Date & Time</h1>
            </div>

            <img  className="w-[80px] rotate-90 lg:rotate-0" src={arrow} alt="" />

            <div  className="to-center bg-gray-100 w-[150px] h-[150px] rounded-full flex-col gap-3">
              <img
                className="w-[50px] h-[50px] object-cover"
                src={confirm}
                alt=""
              />
              <h1 className="font-semibold">Confirm Booking</h1>
            </div>
          </div>
        </div>
      </CenterAlign>
    </>
  );
};

export default HowItsWork;
