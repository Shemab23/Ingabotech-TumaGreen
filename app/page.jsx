'use client'; // This directive is crucial for using useState and other client-side React features

import React, { useState } from 'react'; // Import useState
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Riders from "@/components/Riders";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LoginPage from "@/components/LoginPage"; // Ensure this import path is correct

export default function HomePage() {
  // State to keep track of the currently active "page" or "section"
  // Default to 'home' to show your initial content
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the content based on currentPage state
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Home/>
            <HowItWorks/>
            <WhyUs/>
            <Riders/>
            <Testimonials/>
            <About/>
            <ContactUs/> {/* This is your current ContactUs component */}
          </>
        );
      case 'contact':
        return <ContactUs />; // Render only ContactUs when selected
      case 'login':
        return <LoginPage />; // Render LoginPage when selected
      default:
        return <Home />; // Fallback to Home
    }
  };

  return (
    <div className="flex flex-col w-screen">
      {/* Pass setCurrentPage down to Navbar so it can change the active page */}
      <Navbar onNavigate={setCurrentPage} />
      <div className="flex flex-col w-screen">
        {renderContent()} {/* Call the function to display the correct content */}
        <Footer/>
      </div>
    </div>
  );
}