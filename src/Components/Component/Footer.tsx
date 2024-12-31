import { FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connect With Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Trending Now Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trending Now</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  What is IPSY? How Does it Work? FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IPSY Glam Bag Spoilers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IPSY Glam Bag Plus Spoilers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meet Glam Bag X
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Read IPSY Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Makeup Looks for Beginners
                </a>
              </li>
            </ul>
          </div>

          {/* IPSY Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IPSY</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Glam Bag
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Glam Bag Plus
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Glam Bag X
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IPSY Shopper
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IPSY Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IPSY Events
                </a>
              </li>
            </ul>
          </div>

          {/* About and Help Section */}
          <div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
