import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const RecordedCourse = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-[#E7F5FA]  w-full  p-20">
      {/* Search Bar */}
      <h1 className="text-4xl font-semibold text-[#3393D0] text-left py-10">
        <span className="text-black">Search Result for </span> “salesforce”
      </h1>
      <div className="flex items-center mb-8 gap-5 bg-white border border-gray-300 rounded-lg py-2">
        <h1 className="flex justify-center items-center ml-4">Look For</h1>
        <input
          type="text"
          placeholder="Salesforce"
          className="w-[30%] p-4 text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <h1 className="flex justify-center items-center ml-4">in</h1>
        <select className="p-4 text-[#87909c] border border-l-0 border-gray-300 rounded-none focus:outline-none focus:border-blue-500 w-1/2 bg-[#f2f2f2]">
          <option>Select Course Category</option>
        </select>
        <button className="px-8 py-4 text-white bg-yellow-500 rounded-r-lg hover:bg-yellow-600 focus:outline-none">
          Search
        </button>
      </div>

      {/* No Results Message */}
      <p className="text-gray-700 text-lg">
        Sorry, but nothing matched your search terms. Please try again with some
        different keywords.
      </p>

      {/* Recorded Courses */}
      <h2 className="mt-8 mb-4 text-4xl font-bold text-gray-800 ">
        Recorded Courses
      </h2>
      <p className="text-gray-700 text-lg pb-5 pr-48">
      Credibly syndicate transparent interfaces and client-focused synergy. Objectively embrace revolutionary infomediaries virtual functionalities. Monotonectally myocardinate client-based processes before intermandated models prospective.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="overflow-hidden flex flex-col items-center justify-center bg-white rounded-lg shadow-lg"
          >
            <Image
            width={200}
            height={300}
              src="/Images/rs-1.png"
              alt="Course Thumbnail"
              className="w-11/12 h-full mt-3"
            />
            <div className="p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-800">
                Salesforce nCino Videos
              </h3>
              <p className="mb-4 text-gray-600">Lesson 0 • Student 5</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <div className="px-2 py-1 text-xs font-bold text-red-500 bg-red-100 rounded">
                  REC
                </div>
              </div>
            </div>
          </div>
        ))}
        <Link href = "#3" className="text-[#0A92CD] text-2xl font-semibold">Explore All Courses</Link>
      </div>
    </div>
  );
};

export default RecordedCourse;
