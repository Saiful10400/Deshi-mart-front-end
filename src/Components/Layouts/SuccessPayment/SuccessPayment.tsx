import { FaCheck } from "react-icons/fa";
import CenterAlign from "../../Helper/CenterAlign";
import voucherCode from "voucher-code-generator";
import { NavLink } from "react-router-dom";
const SuccessPayment = () => {
  const getVoucherCode = () => {
    const result = voucherCode.generate({
      length: 4,
      count: 5,
    });
    return result.join("-");
  };
  return (
    <CenterAlign>
      <div className="min-h-[80vh] to-center">
        <div className="to-center flex-col">
          {/* rounded circle checkmark. */}

          <div data-aos="flip-left" className="to-center bg-black w-[70px] h-[70px] rounded-full">
            <div className="bg-black w-[40px] h-[40px] to-center rounded-full border-2 border-white">
              <FaCheck className="text-white text-2xl" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold mt-5">
            Order Placed Successfully
          </h1>

          <p className="mt-4 w-[70%] text-center font-normal">
            Thank you for your payment. Your order is being processed and you
            will receive a confirmation email shortly.
          </p>

          <div className="border border-gray-400 w-[70%] rounded-lg mt-4 p-3">
            <h1 className="flex justify-between text-gray-600 font-normal">
              Order ID: <span className="font-normal">{getVoucherCode()}</span>
            </h1>
          </div>
          <div className="w-[70%] to-center mt-5 gap-5">
            <NavLink
              to={"/"}
              className="rounded-[5px]  font-medium p-2 bg-black  text-white border border-gray-600 hover:bg-black text-base "
            >
              Return Homepage
            </NavLink>
            <NavLink
              to={"/products"}
              className="rounded-[5px] font-medium text-gray-950 p-2 bg-white border border-gray-600 hover:bg-white text-base"
            >
              Order More
            </NavLink>
          </div>
        </div>
      </div>
    </CenterAlign>
  );
};

export default SuccessPayment;
