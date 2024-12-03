import React, { useState } from 'react';

// Define the types for the form data
interface FormData {
  username: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  // State to manage form submission error or success
  const [error, setError] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check (you can enhance this as needed)
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    // Clear error if validation passes
    setError('');
    // Handle your login logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="shadow-2xl flex flex-col p-4 w-96 md:w-1/3 mx-auto mt-10 rounded-md mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>

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

        {/* Error message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
