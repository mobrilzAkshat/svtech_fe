import React from 'react';

export default function SearchPage() {
  return (
    <div className="bg-[#E9F7FC] min-h-screen w-full  p-20" id='searchPage'>
      {/* Search Section */}
      <div className="text-center mb-10 w-full ">
        <h1 className="text-4xl font-semibold text-[#3393D0] text-left pb-10"><span className='text-black'>Search Result for </span> “salesforce”</h1>
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
        <p className="text-gray-500 mt-4 text-left text-xl">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
      </div>

      {/* Live Courses Section */}
      <div className="text-center mb-8">
        <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold text-[#3393D0] text-left"> Salesforce <span className='text-black'>  Live Courses</span> </h2>
        <a href="#" className="text-[#1D6FAD] font-semibold mt-2 inline-block">View All ➜</a></div>
        <p className="mt-4 text-gray-600 text-left pr-48 text-xl">
        SV Tech Soft is famous Online training institute with student community from all over the world. We offer online training on various tools and technologies we have excellent trainers with real time IT experience and having in-depth knowledge on the subject, so that you can clarify your doubts in our training. We provide job oriented online classes that helps to you to get new jobs and to excel in new trending fields.
        </p>
        
      </div>

      {/* Course Cards Section */}
      <div className="flex justify-center space-x-4">
        {/* Card 1 */}
        <div className="bg-[#0092CD] text-white rounded-tl-[0px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[0px] shadow-lg p-6 w-1/5 relative">
          <span className="absolute left-[-2%] bg-[#1D1D1D] text-white rounded-full px-4 py-1">
            ₹ 15,000.00
          </span>
          <h3 className="mt-10 font-bold">Salesforce Revenue Cloud (CPQ+Billing) Live Training</h3>
          <button className="bg-white text-black mt-6 p-2 rounded-md w-1/2">
            Add to Cart
          </button>
        </div>
        {/* Repeat for other cards */}
        {/* Card 2 */}
        <div className="bg-[#0092CD] text-white rounded-tl-[0px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[0px] shadow-lg p-6 w-1/5 relative">
          <span className="absolute left-[-2%]  bg-[#1D1D1D] text-white rounded-full px-4 py-1">
            ₹ 30,800.00
          </span>
          <h3 className="mt-10 font-bold">Salesforce Revenue Cloud (CPQ+Billing) Live Training</h3>
          <button className="bg-white text-black mt-6 p-2 rounded-md w-1/2">
            Add to Cart
          </button>
        </div>
        {/* Card 3 */}
        <div className="bg-[#0092CD] text-white rounded-tl-[0px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[0px] shadow-lg p-6 w-1/5 relative">
          <span className="absolute left-[-2%]  bg-[#1D1D1D] text-white rounded-full px-4 py-1">
            ₹ 25,000.00
          </span>
          <h3 className="mt-10 font-bold">Salesforce Revenue Cloud (CPQ+Billing) Live Training</h3>
          <button className="bg-white text-black mt-6 p-2 rounded-md w-1/2">
            Add to Cart
          </button>
        </div>
        {/* Card 4 */}
        <div className="bg-[#0092CD] text-white rounded-tl-[0px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[0px] shadow-lg p-6 w-1/5 relative">
          <span className="absolute left-[-2%]  bg-[#1D1D1D] text-white rounded-full px-4 py-1">
            ₹ 15,000.00
          </span>
          <h3 className="mt-10 font-bold">Salesforce Revenue Cloud (CPQ+Billing) Live Training</h3>
          <button className="bg-white text-black mt-6 p-2 rounded-md w-1/2">
            Add to Cart
          </button>
        </div>
        {/* Card 5 */}
        <div className="bg-[#0092CD] text-white rounded-tl-[0px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[0px] shadow-lg p-6 w-1/5 relative">
          <span className="absolute left-[-2%]  bg-[#1D1D1D] text-white rounded-full px-4 py-1">
            ₹ 15,000.00
          </span>
          <h3 className="mt-10 font-bold">Salesforce Revenue Cloud (CPQ+Billing) Live Training</h3>
          <button className="bg-white text-black mt-6 p-2 rounded-md w-1/2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
