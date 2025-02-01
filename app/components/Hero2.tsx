import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";
import { Great_Vibes } from "next/font/google";
import unsplash4 from "../../public/unsplash4.png"
import unsplash5 from "../../public/unsplash5.png"
import unsplash6 from "../../public/unsplash6.png"
const Vibes = Great_Vibes({
      subsets: ["latin"],
      weight: "400",
    });

const Hero2 = () => {
  return (
    <section className="bg-[#0d0d0d]  text-white px-6 py-8 lg:py-36 ">
      <div className="container w-10/12 mx-auto h-auto lg:h-[562px] flex flex-wrap lg:flex-nowrap items-center gap-6">
       
        <div className="lg:w-full">
        <div className={Vibes.className}><p className="text-orange-400 text-2xl">About us</p></div>
          
          <h2 className="text-4xl font-bold mt-4">
            <span className="text-orange-400">We</span> Create the best <br />
            foody product
          </h2>
          <p className="text-gray-400 text-sm mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Una, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-4"><IoMdCheckmark /></span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </li>
          </ul>

          <button className="bg-[#ff9f0d] text-black mt-8 px-6 py-3 rounded-2xl font-bold hover:bg-orange-500">
          <span className="text-white">Read More</span>
          </button>
        </div>

    

    <div className="flex flex-col gap-3 w-full h-auto bg-center rounded-lg bg-cover">
      {/* Main Image */}
      <div className="h-auto w-full">
        <Image
          src={unsplash6}
          alt="Main Image"
          width={800} // Original width of the image
          height={450} // Original height of the image
          className="object-cover rounded-lg" // Ensures the image covers the div and has rounded corners
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-col lg:flex-row justify-center gap-3 h-auto w-full">
        <div className="w-full lg:w-1/2">
          <Image
            src={unsplash5}
            alt="Thumbnail Image 1"
            width={400} // Original width of the image
            height={300} // Original height of the image
            className="object-cover rounded-lg" // Ensures the image covers the div and has rounded corners
          />
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={unsplash4}
            alt="Thumbnail Image 2"
            width={400} // Original width of the image
            height={300} // Original height of the image
            className="object-cover rounded-lg" // Ensures the image covers the div and has rounded corners
          />
        </div>
      </div>
    </div>
  
      </div>
    </section>
  );
};

export default Hero2;
