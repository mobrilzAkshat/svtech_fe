import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-10 ">
      <div className="container mx-auto flex flex-wrap justify-between text-gray-800">
        {/* Company Info Section */}
        <div className="w-full md:w-1/4 mb-8">
          <img src="/logo.png" alt="SV Tech Soft Logo" className="w-40 mb-4" />
          <p>
            Founded in 2010 and based in India, SV Tech Soft provides training, consulting, IT remote support, and IT resourcing.
          </p>
          <p>
            In training, our sole motto is <span className="font-bold text-blue-600">“Customer Satisfaction”</span> through quality support, which shows in our client's testimonial about our support.
          </p>
        </div>
        
        {/* Policies Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Payment & Refund Policy</a></li>
          </ul>
        </div>
        
        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Job Support</a></li>
            <li><a href="#" className="hover:underline">Work with Us</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p><a href="mailto:svtechsoft@gmail.com" className="hover:underline">svtechsoft@gmail.com</a></p>
          <p><a href="tel:+919394117119" className="hover:underline">(+91) 9394117119</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-800 hover:text-blue-600"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        <p>Copyright © 2023 <a href="#" className="text-blue-600 hover:underline">SV Tech Soft</a> | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
