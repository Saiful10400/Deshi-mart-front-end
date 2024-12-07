import { useNavigate, useParams } from "react-router";
import CenterAlign from "../../Helper/CenterAlign";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Autocomplete, TextField } from "@mui/material";
import {
  useCreateAbookingMutation,
  useGetSpecificSlotQuery,
} from "../../../Redux/api/api";
import { useEffect, useState } from "react";
import InputField from "../../Ui/Input";
import { useAppSelector } from "../../../Redux/feathcer/hoocks";
import Button from "../../Ui/Button";

const BookingProcess = () => {
  const { id } = useParams();

  const [slot, setSlot] = useState([]);

  const [slotData, setSlotData] = useState({ skip: true, url: "" });
  const { data, isLoading } = useGetSpecificSlotQuery(slotData.url, {
    skip: slotData.skip,
  });

  //   auto complete handle.
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (data) setSlot(data.data);
  }, [data]);

  // calender handle.
  const calenderInputHandle = (e) => {
    const dateInst = new AdapterDayjs();
    const date = `${dateInst.getYear(e)}-${(dateInst.getMonth(e) + 1)
      .toString()
      .padStart(2, "0")}-${dateInst.getDate(e).toString().padStart(2, "0")}`;
    setValue(null);
    setSlotData({
      skip: false,
      url: `/slots/availability?date=${date}&roomId=${id}`,
    });
  };

  // user data handle.
  const initialState = {
    email: "",
    phone: "",
    address: "",
    name: "",
  };
  const [formData, setFormData] = useState(initialState);
  const update = (data) => {
    setFormData({ ...formData, ...data });
  };

  const { loggedInUser } = useAppSelector((state) => state.authStore);

  useEffect(() => {
    if (loggedInUser) {
      setFormData({
        name: loggedInUser.name,
        email: loggedInUser.email,
        phone: loggedInUser.phone,
        address: loggedInUser.address,
      });
    }
  }, [loggedInUser]);

  // form submint hancle.

  const [createBooking, { error, data: bookingData }] =
    useCreateAbookingMutation();

  const formSubmitHandle = (e) => {
    e.preventDefault();
    if (!value && !loggedInUser) return;
    createBooking({ user: loggedInUser._id, slot: value?._id });
  };

  const move = useNavigate();
  useEffect(() => {
    if (bookingData?.statusCode === 200) {
      move(`/confirm-booking/${bookingData?.data?._id}`);
    }
  }, [bookingData, move]);

  return (
    <CenterAlign>
      <div className="px-4 lg:px-0">
        {
          <div className="min-h-[70vh]">
            <div>
              <form
                onSubmit={formSubmitHandle}
                className="grid grid-cols-1 mt-3 lg:grid-cols-2 gap-7 lg:gap-0"
              >
                <div data-aos="fade-right">
                  <h1 className="text-2xl font-semibold">Booking Schedule:</h1>
                  <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 mt-4">
                    <div>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar onChange={calenderInputHandle} />
                      </LocalizationProvider>
                    </div>
                    <div>
                      <Autocomplete
                      
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        value={value}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        className="mt-5 hover:border-none"
                        fullWidth={true}
                        disablePortal
                        getOptionLabel={(e) => `${e.startTime} - ${e.endTime}`}
                        options={slot}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField
                            className=""
                            required
                            {...params}
                            label="Available time slots"
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div data-aos="fade-left">
                  <h1 className="text-2xl font-semibold">User Information:</h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    <InputField
                      disabled={true}
                      type={"text"}
                      altimeValue={formData?.name}
                      valueUpdate={(e) => update({ name: e.target.value })}
                      placeholder="Name"
                    />
                    <InputField
                      disabled={true}
                      type={"email"}
                      altimeValue={formData?.email}
                      valueUpdate={(e) => update({ email: e.target.value })}
                      placeholder="E-mail"
                    />
                    <InputField
                      disabled={true}
                      type={"number"}
                      altimeValue={formData?.phone}
                      valueUpdate={(e) => update({ phone: e.target.value })}
                      placeholder="Phone"
                    />
                    <InputField
                      disabled={true}
                      type={"text"}
                      altimeValue={formData?.address}
                      valueUpdate={(e) => update({ address: e.target.value })}
                      placeholder="Address"
                    />
                    <div></div>
                    <Button
                      text="Review and Confirm"
                      className="text-lg font-medium"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        }
      </div>
    </CenterAlign>
  );
};

export default BookingProcess;
