// app/page.jsx
'use client'; // Still needed if HomePage itself uses client-side hooks

// Remove these imports:
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import Home from "@/components/Home";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Riders from "@/components/Riders";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
// Remove this import as LoginPage is now on its own route
// import LoginPage from "@/components/LoginPage";


export default function HomePage() {
  // const {message} = useUser(); // Keep if useUser is used elsewhere in HomePage content

  return (
    <div className="flex flex-col w-screen">
      {/* Remove <Navbar/> here, as it's now in layout.js */}
      <div className="flex flex-col w-screen ">
        <Home/>
        <HowItWorks/>
        <WhyUs/>
        <Riders/>
        <Testimonials/>
        <About/>
        <ContactUs/>{/** it is combining with frequently asked question, it is misleading. */}
        {/* Remove <LoginPage id="login" /> if it was here, as it's now on its own route */}
        {/* Remove <Footer/> here, as it's now in layout.js */}
      </div>
    </div>
  );
}
