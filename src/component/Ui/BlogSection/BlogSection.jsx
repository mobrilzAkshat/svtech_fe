import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Salesforce Commerce Cloud (B2C) Interview Question & Answers',
      date: '09 Apr, 2023',
      imageUrl: '/Images/rs-2.png',
    },
    {
      title: 'Salesforce Commerce Cloud (B2C) Interview Question & Answers',
      date: '09 Apr, 2023',
      imageUrl: '/Images/rs-2.png',
    },
    {
      title: 'Salesforce Commerce Cloud (B2C) Interview Question & Answers',
      date: '09 Apr, 2023',
      imageUrl: '/Images/rs-2.png',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h3 className="text-lg font-semibold text-[#0A92CD] mb-4">Our News & Blogs</h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Latest News & Blogs
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-6xl">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-500 mb-6">
                  <i className="fas fa-calendar-alt text-blue-600"></i>{' '}
                  {blog.date}
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-10 px-6 py-3 bg-[#031437] text-white font-semibold rounded-lg shadow-lg hover:bg-[#051f53]">
          All Blog & News
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
