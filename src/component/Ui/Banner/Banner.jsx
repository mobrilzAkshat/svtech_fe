import React from "react";
// import banner_img from "@/../public/Images/banner.jpg"
import banner_img from "../../../../public/Images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="flex bg-blue-50 w-full h-80 justify-evenly py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl md:text-5xl font-bold ">
              <span className="text-blue-700">Salesforce</span> <br /> Online Training & <br /> Job Support Platform
            </h1>
            <p className="text-gray-600 mt-4">
              Go digital fast and empower your teams to work from anywhere
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-950 text-white text-lg">
              Register Now
            </button>
          </div>
        </div>
        <div className="">
          <img className="h-64" src={banner_img} alt="banner image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
