import React from 'react';

const FeatureSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h3 className="text-lg font-semibold text-[#0A92CD] mb-4">Why Choose Us</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Transform Your Life Through <span className="text-[#0A92CD]">Salesforce Training</span>
        </h2>
        <p className="text-gray-600 mb-12 px-60 text-xl">
        Credibly syndicate transparent interfaces and client-focused synergy. Objectively embrace revolutionary infomediaries virtual functionalities. Monotonectally myocardinate client-based processes before intermandated models prospective.
        </p>

        {/* Features Section */}
        <div className="bg-white shadow-lg rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full max-w-4xl relative">
          <div className="flex items-start space-x-4">
            <div className="text-[#0A92CD]">
              <i className="fas fa-chalkboard-teacher text-4xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 text-left">Expert Instruction</h4>
              <p className="text-gray-600 text-left">
                Innovative markets without extensive coordinate stand alone catalysts for change before bricks.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#0A92CD]">
              <i className="fas fa-video text-4xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 text-left">Find Video Courses</h4>
              <p className="text-gray-600 text-left">
                Innovative markets without extensive coordinate stand alone catalysts for change before bricks.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#0A92CD]">
              <i className="fas fa-laptop-code text-4xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 text-left">Online Courses</h4>
              <p className="text-gray-600 text-left">
                Innovative markets without extensive coordinate stand alone catalysts for change before bricks.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-[#0A92CD]">
              <i className="fas fa-globe text-4xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 text-left">Learn From Anywhere</h4>
              <p className="text-gray-600 text-left">
                Innovative markets without extensive coordinate stand alone catalysts for change before bricks.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 left-8 bg-orange-200 rounded-full w-20 h-20 opacity-50 transform -rotate-12"></div>
          <div className="absolute top-12 right-12 bg-gray-300 rounded-full w-10 h-10 opacity-50"></div>
        </div>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 bg-[#031437] text-white font-semibold rounded-lg shadow-lg hover:bg-[#052055]">
          About Us
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
