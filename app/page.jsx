// app/page.jsx
'use client'; // Still needed if HomePage itself uses client-side hooks

// Remove these imports, as Navbar and Footer are now in app/layout.js:
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// Remove this import as LoginPage is now on its own route:
// import LoginPage from "@/components/LoginPage";

import Home from "@/components/Home";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Riders from "@/components/Riders";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";


export default function HomePage() {
  // const {message} = useUser(); // Keep if useUser is used elsewhere in HomePage content

  return (
    <div className="flex flex-col w-screen">
      {/* Navbar is now rendered globally in app/layout.js */}
      {/* <Navbar/> was here, but is now in layout.js */}
      <div className="flex flex-col w-screen ">
        <Home/>
        <HowItWorks/>
        <WhyUs/>
        <Riders/>
        <Testimonials/>
        <About/>
        <ContactUs/>
        {/* LoginPage is now on its own route (/login) and not rendered here. */}
        {/* <LoginPage id="login" /> was here, but is now on its own route */}
      </div>
      {/* Footer is now rendered globally in app/layout.js */}
      {/* <Footer/> was here, but is now in layout.js */}
    </div>
  );
}