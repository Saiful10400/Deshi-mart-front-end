import available from "../../../../../src/assets/userBenifit/available.png";
import support from "../../../../../src/assets/userBenifit/support.png";
import instant from "../../../../../src/assets/userBenifit/confirm.png";
import schedule from "../../../../../src/assets/userBenifit/sheduleing.png";

const data = [
  {
    icon: available,
    tittle: "Real-Time Availability",
    details:
      "Stay updated with the latest availability of meeting rooms and workspaces. Our system shows live room statuses, so you can instantly find and book the perfect spot whenever you need it.",
    color: "#ebd3c5",
  },
  {
    icon: support,
    tittle: "24/7 Support",
    details:
      "Our dedicated support team is available around the clock to assist with any inquiries or issues. Whether it's booking help or facility support, we're here to ensure your experience is smooth and worry-free.",
    color: "#eaeed6",
  },
  {
    icon: instant,
    tittle: "Instant Booking Confirmation",
    details:
      "Get immediate confirmation upon booking. No waiting, no hassles—just quick and seamless booking with all the details sent to your inbox instantly.",
    color: "#ffe47f",
  },
  {
    icon: schedule,
    tittle: "Flexible Scheduling",
    details:
      "We understand that plans can change. That's why our platform offers flexible scheduling options, allowing you to adjust or reschedule bookings with ease, ensuring your workspace always fits your schedule.",
    color: "#e9effc",
  },
];

const getCustomerBenifitDemoData=()=>{
    return data
}

export default getCustomerBenifitDemoData
