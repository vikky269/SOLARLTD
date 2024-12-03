import React, { useState } from 'react';
import {Link }from "react-router-dom"

// Define the types for the form data
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

const SignupForm: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  // State to manage form submission error or success
  const [error, setError] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Basic validation check (you can enhance this as needed)
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }

    // Clear error if validation passes
    setError('');
    // Handle your signup logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-2xl flex flex-col p-4 w-96 md:w-1/3 mx-auto mt-10 rounded-md mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

          {/* Username input */}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter username"
            />
          </div>

          {/* Email input */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter email"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password input */}
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">I accept the terms and conditions</label>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded-md mb-6"
            >
              Sign Up
            </button>
          </div>

          <span>Already Registered 
             <Link to="/Login" className='cursor-pointer hover:text-black ml-6'>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
