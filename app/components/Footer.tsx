import Image from "next/image";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { PiInstagramLogo } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const PicAdress = ["/unsplash1.png", "/unsplash2.png", "/unsplash3.png"];
  return (
    <footer className="bg-black text-white py-10 mt-auto">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between items-center border-b border-gray-700 pb-8">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            <span className="text-[#ff9f0d]">St</span>ill Need Our Support?
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Don't wait make a smart & logical quote here. It's pretty easy.
          </p>
        </div>
        <div className="flex mt-4 lg:mt-0">
          <input
            type="email"
            id="email_id"
            name="customer email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 p-3 bg-[#ff9f0d] rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none placeholder-white"
          />

          <button className="bg-white text-[#ff9f0d] px-1 lg:px-6 py-2 rounded-r-md hover:bg-[#ff9f0d]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-20 mt-8 flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="w-full lg:w-1/4 mb-6">
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-gray-300 text-sm mt-2">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex justify-start items-center">
            <div className="flex justify-center items-center bg-[#ff9f0d] rounded-md mr-1 h-20 w-20 mt-3">
              <Image src="/Clock.png" alt="Clock" width={38} height={38} />
            </div>
            <div className="mt-4 text-gray-300 gap-2">
              <p className="text-xl">Opening Hours</p>
              <p className="text-base">Mon - Sat(8:00 - 6:00)</p>
              <p className="text-base">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="w-full lg:w-1/5 mb-6">
          <h3 className="text-lg font-bold text-white">Useful Links</h3>
          <ul className="text-gray-300 mt-4 space-y-2">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full lg:w-1/5 mb-6">
          <h3 className="text-lg font-bold">Help?</h3>
          <ul className="text-gray-300 mt-4 space-y-2">
            <Link href="/faq">
              <li>FAQ</li>
            </Link>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-bold">Recent Post</h3>
          <ul className="mt-4 space-y-4">
            {PicAdress.map((src, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-300"
              >
                <Image
                  src={src}
                  alt="Recent Post"
                  width={48}
                  height={48}
                  className="object-cover"
                />
                <div className="ml-3">
                  <p>20 Feb 2022</p>
                  <p>Keep Your Business</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-[#4F4F4F] h-[99px] px-10 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between px-6">
          <span className="text-sm text-white">
            © 2023 Ayeman. All Rights Reserved.
          </span>
          <div className="flex justify-center mt-4 space-x-4 lg:mr-32 text-gray-700 text-xl">
            <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
              <FaFacebookF />
            </span>
            <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
              <IoLogoTwitter />
            </span>
            <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
              <PiInstagramLogo />
            </span>
            <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md text-[#ff9f0d]">
              <IoLogoYoutube />
            </span>
            <span className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
              <FaPinterest />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
