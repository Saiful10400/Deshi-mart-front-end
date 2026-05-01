import SectionTittle from "../Ui/SectionTittle";

const About = () => {
  return (
    <div className="lg:mt-16 lg:px-0 px-4">

      {/* Title */}
      <SectionTittle txt="About Deshi Mart" />

      <div className="mt-6 flex flex-col lg:flex-row gap-10 items-start">

        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-5 text-gray-700">

          <p className="text-sm leading-6">
            <span className="font-bold text-black">Deshi Mart</span> is a modern
            and dynamic e-commerce platform designed to deliver a seamless and
            enjoyable online shopping experience. Our platform brings together
            a wide range of products with a clean, fast, and user-friendly
            interface powered by cutting-edge web technologies.
          </p>

          <p className="text-sm leading-6">
            We focus on providing <b>real-time product availability</b>,
            <b> secure payment systems</b>, and
            <b> instant order confirmation</b> to ensure a smooth shopping
            journey. Customers can easily explore products using advanced
            filtering, personalized recommendations, and wishlist features.
          </p>

          <p className="text-sm leading-6">
            Built with modern technologies like <b>React, TypeScript, Vite</b>,
            and <b>Redux Toolkit (RTK Query)</b>, Deshi Mart ensures high
            performance, scalability, and responsiveness across all devices.
            Whether you are using mobile, tablet, or desktop — the experience
            remains smooth and consistent.
          </p>

          {/* Key Features Section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-black mb-3">
              Why Choose Deshi Mart?
            </h2>

            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Real-time product availability & updates</li>
              <li>Secure and fast payment system</li>
              <li>Advanced search and filtering system</li>
              <li>Wishlist & personalized recommendations</li>
              <li>User-friendly dashboard for order tracking</li>
              <li>24/7 customer support system</li>
            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            className="rounded-lg shadow-lg w-full object-cover"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="About Deshi Mart"
          />

          <div className="mt-4 bg-black text-white p-4 rounded-lg">
            <h3 className="text-orange-400 font-bold text-lg">
              Built With Modern Tech
            </h3>

            <p className="text-sm mt-2 text-gray-300">
              React • TypeScript • Redux Toolkit • RTK Query • Node.js •
              Express • PostgreSQL
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;