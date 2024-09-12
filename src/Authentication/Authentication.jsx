import React, { useState } from 'react';
import SignInForm from './Login';
import SignupForm from './Signup';

function Authentication() {
  const [loginForm, setLoginForm] = useState(true);
  const handleNewUser = () => {
    setLoginForm(!loginForm);
  };

  return (
    <div className='flex flex-col lg:flex-row lg:justify-evenly lg:items-center w-full min-h-screen p-4'>
      <div className='flex flex-col w-full lg:w-6/12 p-4'>
        <div className='flex flex-col items-center w-full lg:items-start'>
          <div className='border-2 p-8 shadow-xl rounded-lg w-full lg:w-10/12 lg:mt-8'>
            {loginForm ? <SignInForm handleNewUser={handleNewUser} /> : <SignupForm handleNewUser={handleNewUser} />}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-6/12 flex justify-center lg:justify-end p-4'>
        <img 
          src="https://imgs.search.brave.com/gHNZn1bknZE8uTZpfjIpVi7ooeZ8GkxP0n-CyxpwXsA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dHVkZW50LWNsYXNz/LWxvb2tpbmctY291/cnNlXzIzLTIxNDg4/ODg4MTAuanBnP3Np/emU9NjI2JmV4dD1q/cGc" 
          alt='Authentication Illustration' 
          className='w-full h-auto max-w-md lg:max-w-lg object-cover' 
        />
      </div>
    </div>
  );
}

export default Authentication;
