import { useEffect, useState } from "react";
import CenterAlign from "../../Helper/CenterAlign";
import InputField from "../../Ui/Input";
import { useAppDispatch, useAppSelector } from "../../../Redux/feathcer/hoocks";
import cod from "../../../../src/assets/checkout/cod.png";
import Button from "../../Ui/Button";
import { useCreateABookingMutation } from "../../../Redux/api/api";
import { clearCart } from "../../../Redux/feathcer/CartSlice";
import { useNavigate } from "react-router";
const Checkout = () => {
  const inetialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [formData, setFormData] = useState(inetialValue);

  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  const Orders = useAppSelector((state) => state.cartStore);
  const getTotalAmout = () => {
    let totalamount: number = 0;
    Orders.forEach((item) => {
      const count = item.count;
      const price = item.data.price;
      totalamount = totalamount + count * price;
    });
    return totalamount;
  };

  const getTotalItem = () => {
    let totalItem = 0;
    Orders.forEach((item) => {
      const count = item.count;
      totalItem = totalItem + count;
    });
    return totalItem;
  };

  // booking create handle.
  const [createBooking, { data: bookingData, error: bookingError }] =
    useCreateABookingMutation();

  const dispatch = useAppDispatch();
  const bookingHandle = (e) => {
    e.preventDefault();

    const booking: Array<{ product: object; count: string }> = [];
    Orders.forEach((item) => {
      booking.push({ product: item.data._id, count: item.count });
    });
    createBooking({ ...formData, booking });
  };

  const move = useNavigate();

  useEffect(() => {
    if (bookingData?.statusCode === 200) {
      // setFormData(inetialValue);
      dispatch(clearCart());
      setFormData(inetialValue);
      move("/Success-order");
    } else if (bookingError) {
      swal("Failed", bookingError?.data?.message, "error");
    }
  }, [bookingData, bookingError, dispatch]);

  return (
    <CenterAlign>
      <div className="min-h-[70vh] lg:py-28 lg:pt-10 px-4">
        <h1 className="font-semibold text-5xl mb-9">Order Summary</h1>
        <form
          onSubmit={bookingHandle}
          className="flex lg:flex-row flex-col items-start gap-5 justify-center"
        >
          <div data-aos="fade-right" className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 ">
              <InputField
                type="text"
                altimeValue={formData.name}
                valueUpdate={(e) => update({ name: e.target.value })}
                placeholder="Your Name"
              />
              <InputField
                type="email"
                altimeValue={formData.email}
                valueUpdate={(e) => update({ email: e.target.value })}
                placeholder="Your E-mail"
              />
              <InputField
                type="number"
                altimeValue={formData.phone}
                valueUpdate={(e) => update({ phone: e.target.value })}
                placeholder="Your Phone Number"
              />
              <InputField
                type="text"
                altimeValue={formData.address}
                valueUpdate={(e) => update({ address: e.target.value })}
                placeholder="Delivery Address"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="lg:w-1/2 w-full lg:p-11 pt-0 text-center"
          >
            <h1 className="text-xl lg:text-2xl flex justify-between items-center mb-3">
              Total Item: <span>{getTotalItem()} In Cart</span>
            </h1>
            <h1 className="text-xl lg:text-2xl flex justify-between items-center mb-3">
              Payment Method: <span>Cod</span>
            </h1>
            <h1 className="border-b border-gray-400 text-xl lg:text-2xl flex justify-between items-center">
              Total: <span>$ {getTotalAmout()}</span>
            </h1>

            <div className="flex gap-3 mt-4">
              <input
                defaultChecked
                className="bg-black lg:scale-150"
                id="cod"
                type="radio"
              />
              <label htmlFor="cod">
                {" "}
                <img className="w-[35px] lg:w-[50px]" src={cod} alt="cashOnDeliver" />
              </label>
            </div>

            <Button
            disable={Orders.length===0}
              text="Place Order"
              className="lg:text-xl text-lg font-normal lg:px-24 mt-5 text-center "
            />
          </div>
        </form>
      </div>
    </CenterAlign>
  );
};

export default Checkout;
