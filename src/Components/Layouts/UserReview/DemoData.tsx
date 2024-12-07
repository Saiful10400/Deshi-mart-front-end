import user1 from "../../../assets/advertisement/user1.jpg";
import user2 from "../../../assets/advertisement/user2.jpg";
import user3 from "../../../assets/advertisement/user3.jpg";
import user4 from "../../../assets/advertisement/user4.jpg";
import user5 from "../../../assets/advertisement/user5.jpg";
import user6 from "../../../assets/advertisement/user6.jpg";
import user7 from "../../../assets/advertisement/user7.jpg";

/* eslint-disable react-refresh/only-export-components */
type Tdata = {
  user: {
    name: string;
    designation: string;
  };
  photo: string;
  review: number;
  testimonial: string;
}[];

const ReviewData: Tdata = [
  {
    user: {
      name: "Ashis Rahman",
      designation: "Software Engineer",
    },
    photo: user1,
    review: 5,
    testimonial:
      "I’ve been working remotely for over three years, and this is hands down the best co-working space I’ve ever used. The real-time availability feature makes it so easy to book a room, and the instant confirmation means I never have to worry about double bookings. Highly recommended!",
  },
  {
    user: {
      name: "Rafiqa Ahmed",
      designation: "Project Manager",
    },
    photo: user2,
    review: 4,
    testimonial:
      "Our startup needed a flexible workspace that could accommodate our fluctuating team size. The scheduling flexibility and 24/7 support have been a game-changer for us. The environment is perfect for productivity, and the community vibe here is inspiring!",
  },
  {
    user: {
      name: "Sara Khan",
      designation: "UI/UX Designer",
    },
    photo: user3,
    review: 5,
    testimonial:
      "The booking process is incredibly straightforward and fast. I can check availability, book a room, and get instant confirmation in seconds. It’s made my workday so much more efficient!",
  },
  {
    user: {
      name: "Imran Hossain",
      designation: "Data Scientist",
    },
    photo: user4,
    review: 5,
    testimonial:
      "I had an issue with a booking late at night, and the 24/7 support team was quick to resolve it. Their customer service is unmatched, and it really makes you feel valued as a member.",
  },
  {
    user: {
      name: "Lanin Siddiqui",
      designation: "Marketing Executive",
    },
    photo: user5,
    review: 4,
    testimonial:
      "I often need to host client meetings and workshops, and this space has been perfect for that. The meeting rooms are well-equipped, and the instant booking feature ensures everything runs smoothly. My clients always leave impressed!",
  },
  {
    user: {
      name: "Tanvir Islam",
      designation: "DevOps Engineer",
    },
    photo: user6,
    review: 5,
    testimonial:
      "The flexible scheduling is exactly what I needed. My work schedule is unpredictable, and being able to easily change or cancel bookings without any hassle has been a lifesaver",
  },
  {
    user: {
      name: "Farah Alom",
      designation: "HR Specialist",
    },
    photo: user7,
    review: 4,
    testimonial:
      "I’ve been a member of several co-working spaces, but this one stands out. The professionalism, the modern amenities, and the ease of booking make it the best place to get work done. It’s truly a professional’s dream workspace.",
  },
];

const getReviewData = () => {
  return ReviewData;
};
export default getReviewData;
