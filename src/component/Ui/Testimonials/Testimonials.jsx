"use client";

import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const testimonialsData = [
  { name: "Marine Lotter", title: "Web Developer", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { name: "John Doe", title: "UI/UX Designer", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
  { name: "Jane Smith", title: "Software Engineer", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto">
        {/* Header Section */}
        <h3 className="text-lg font-semibold text-[#0A92CD] mb-4 text-center">Testimonial</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">From our students</h2>
        <div className="flex justify-center py-2 mb-5"><img src="/Icon/vector.png" width="100" height="10" alt="vector"/></div>
        {/* Testimonials Cards */}
        <div className="max-w-[1260px] flex justify-center items-center">
          {testimonialsData.map((testimonial, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index === (currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
            const isRight = index === (currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
            
            let scaleClass = "scale-100";
            if (isCenter) scaleClass = "scale-125";
            if (isLeft || isRight) scaleClass = "scale-100 opacity-80";

            return (
              <div
                key={index}
                className={`transition-transform duration-300 transform ${scaleClass} mx-4 p-10 cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="flex items-center">
                  <img src="/Images/Ellipse 4.png" alt="" className="h-[70px] w-[70px]"  />
                  <div className="ml-[20px]">
                    <h4 className="text-[18px] leading-[27px] font-bold">{testimonial.name}</h4>
                    <p className="text-[16px] leading-[24px] font-normal">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-[12px] leading-[18px] font-medium mt-4">{testimonial.text}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8">
          <button className="cursor-pointer" onClick={handlePrev}>
            <CiCircleChevLeft className="text-blue-500 text-[40px] hover:bg-blue-500 hover:text-white rounded-full" />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <CiCircleChevRight className="text-blue-500 text-[40px] hover:bg-blue-500 hover:text-white rounded-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
