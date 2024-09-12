import React, { useState } from 'react';

const ForgotPassword = () => {
  // State for email or username input
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleResetPassword = (event) => {
    event.preventDefault();
    // Here you'd send the emailOrUsername to your backend for password reset
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Text at the top explaining the process */}
        <h2 className="text-xl font-semibold mb-4">Lost your password?</h2>
        <p className="text-gray-600 mb-6">
          Please enter your username or email address. You will receive a link to create a new password via email.
        </p>

        {/* Forgot Password Form */}
        <form onSubmit={handleResetPassword}>
          {/* Input for username or email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="emailOrUsername">Username or Email</label>
            <input 
              type="text" 
              id="emailOrUsername" 
              className="w-full p-3 border border-gray-300 rounded" 
              placeholder="Enter your username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Reset Password Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
