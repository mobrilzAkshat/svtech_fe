import React from "react";
import { PiCircleFill } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { FiUsers } from "react-icons/fi";


const CourseCard = ({ title, lessons, students, imageUrl }) => {
  return (
    <div className="max-w-sm w-72 rounded overflow-hidden shadow-lg m-4 relative p-2">
      {/* Background Image with Opacity Overlay and REC Button */}
      <div className="w- h-48 relative">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Overlay with Opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex">
            <img src="/logo.png" alt="logo of the company" />
        </div>

        {/* REC Button */}
        <button className="flex items-center absolute left-20 top-20 border-2 border-white text-white px-5 py-1 rounded-md z-10 bg-black hover:bg-gray-800">
          <span className="text-red-500 mr-2">
            <PiCircleFill />
          </span>
          REC
        </button>
      </div>

      {/* Course Information */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-around items-center">
          <p className="flex items-center text-gray-700 text-base">
            <span className="mr-2 text-green-400">
              <GoBook />
            </span>
            Lessons: {lessons}
          </p>
          <p className="flex items-center text-gray-700 text-base">
            <span className="mr-2 text-green-400">
              <FiUsers />
            </span>
            Students: {students}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
