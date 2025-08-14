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
    // LoginPage import is fine here if you intend to use it conditionally,
    // but typically it's only imported on its dedicated page.
    // For now, let's assume it's imported correctly.
    import LoginPage from "@/components/LoginPage";


    export default function HomePage() {
      // const {message} = useUser();

      return (
        <div className="flex flex-col w-screen">
          <Navbar/>
          <div className="flex flex-col w-screen ">
            <Home/>
            <HowItWorks/>
            <WhyUs/>
            <Riders/>
            <Testimonials/>
            <About/>
            <ContactUs/>{/** it is combining with frequently asked question, it is misleading. */}
            <Footer/>
          </div>
        </div>
      );
    }