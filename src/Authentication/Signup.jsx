import React, { useState } from 'react';

const Signup = () => {
  // Single useState to handle all form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  // Handle form changes dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,  // Dynamically update form fields
    });
  };

  // Handle form submission
  const handleSignup = (event) => {
    event.preventDefault();
    // Logic to send formData to backend or validation logic
    console.log(formData);  // For now, just logging the data
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        
        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          {/* Input for Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full p-3 border border-gray-300 rounded" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Input for Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="w-full p-3 border border-gray-300 rounded" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Input for Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className="w-full p-3 border border-gray-300 rounded" 
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Input for Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              className="w-full p-3 border border-gray-300 rounded" 
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Register Now Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
