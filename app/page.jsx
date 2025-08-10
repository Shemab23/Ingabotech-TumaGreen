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

{/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
