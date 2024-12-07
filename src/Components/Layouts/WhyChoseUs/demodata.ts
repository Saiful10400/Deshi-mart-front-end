import seamless from "../../../assets/whyChoseUs/seamless.png"
import flexible from "../../../assets/whyChoseUs/flexible.png"
import professional from "../../../assets/whyChoseUs/professional.png"
import community from "../../../assets/whyChoseUs/community.png"
import support from "../../../assets/whyChoseUs/support.png"
import location from "../../../assets/whyChoseUs/location.png"
import costEffective from "../../../assets/whyChoseUs/cost.png"
import speed from "../../../assets/whyChoseUs/speed.png"






const data=[
    {
        tittle:"Seamless Booking Experience",
        details:"Our platform offers real-time availability and instant booking confirmation, ensuring that you can reserve your workspace or meeting room within seconds. No more waiting, no more uncertainty—just fast and easy access to the perfect space.",
        icon:seamless
    }
    ,
    {
        tittle:"Flexible Scheduling",
        details:"We understand that your plans can change. That’s why we provide flexible scheduling options, allowing you to modify your bookings without any hassle. Whether you need to extend your time or reschedule, we’ve got you covered.",
        icon:flexible
    }
    ,
    {
        tittle:"Professional and Productive Environment",
        details:"Our spaces are designed with productivity in mind, offering quiet, well-equipped rooms that foster creativity and focus. Whether you're a freelancer, a startup, or an established business, our environment supports your success.",
        icon:professional
    }
    ,
    {
        tittle:"Community-Driven",
        details:"Join a thriving community of like-minded professionals, from freelancers to entrepreneurs. Our co-working space encourages networking and collaboration, giving you opportunities to connect, share ideas, and grow your business.",
        icon:community
    }
    ,
    {
        tittle:"24/7 Support",
        details:"We're here whenever you need us. Our dedicated support team is available 24/7 to assist you with any questions or issues, ensuring your experience is always smooth and stress-free.",
        icon:support
    }
    ,
    {
        tittle:"Prime Location",
        details:"Located in the heart of the city, our co-working space offers easy access to transport, dining, and other amenities, making it the perfect spot for your business activities.",
        icon:location
    }
    ,
    {
        tittle:"Cost-Effective Solutions",
        details:"Enjoy premium office amenities without the high cost of traditional office rentals. With flexible membership plans, we offer cost-effective solutions that scale with your business needs.",
        icon:costEffective
    }
    ,
    {
        tittle:"High-Speed Internet and Tech Support",
        details:"Stay connected with our reliable, high-speed internet and technical support services. Whether you're hosting a video conference or working on a deadline, we ensure your tech runs smoothly so you can focus on your work.",
        icon:speed
    }
    

]

const getWhyChoseUs=()=>{
    return data
}

export default getWhyChoseUs