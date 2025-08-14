'use client';
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
  // Assuming useUser provides activeSection as per your Navbar code
  // const {message} = useUser();

  return (
    <div className="flex flex-col w-screen">
      {/* Navbar will handle scrolling to sections */}
      <Navbar/>
      <div className="flex flex-col w-screen ">
        {/*
          IMPORTANT: For scrollToSection to work, each of these components (Home, HowItWorks, etc.)
          MUST have an id prop that matches the 'id' in your Navbar's navItems.
          For example: <Home id="home" /> or ensure the top-level div inside Home.jsx has id="home".
          If they don't have IDs, scrollToSection won't be able to find them.
          I'm assuming they already have these internal IDs or will be updated.
        */}
        <Home/> {/* Assuming this component's root element has id="home" */}
        <HowItWorks/> {/* Assuming this component's root element has id="how-it-works" */}
        <WhyUs/> {/* Assuming this component's root element has id="why-tumagreen" */}
        <Riders/> {/* Assuming this component's root element has id="become-rider" */}
        <Testimonials/> {/* Assuming this component's root element has id="testimonials" */}
        <About/> {/* Assuming this component's root element has id="about" */}
        <ContactUs/>{/* Assuming this component's root element has id="contact" */}
        {/* Your Login Page component, now included as a scrollable section */}
        <LoginPage id="login" /> {/* Assuming LoginPage's root element will use this id */}
        <Footer/>
      </div>
    </div>
  );
}
