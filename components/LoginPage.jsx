import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, User } from 'lucide-react';

// Define the LoginPage component
const LoginPage = () => { // Removed 'id' from props
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData);
    alert('Login functionality is not implemented yet. Check console for form data.');
  };

  return (
    // Removed id={id} from here
    <section className="min-h-screen flex items-center justify-center py-12 px-4 bg-green-100">
      <motion.div
        className="max-w-md w-full p-8 rounded-2xl shadow-xl border-2 border-gray-300 bg-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <button className="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mb-6 hover:bg-blue-800 transition-colors duration-200 shadow-md">
          Login with Google
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="login-email" className="text-black font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="login-email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-md h-[40px] px-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
              placeholder=""
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="login-password" className="text-black font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-md h-[40px] px-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
              placeholder=""
            />
          </div>

          <div className="flex justify-around pt-2 space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => alert('Register functionality not implemented yet.')}
              className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-700">
          Forgot your password, click{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            here
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LoginPage;