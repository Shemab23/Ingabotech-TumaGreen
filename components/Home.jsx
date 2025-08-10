import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import {useUser } from '@/context/UserContext';
import Image from 'next/image';

const HeroSection = () => {
  const { riders, handleTrackOrder } = useUser();

  const scrollToRiders = () => {
    document.getElementById('become-rider')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16 md:pt-0">
      {/* map back ground */}
       <div className="absolute inset-0 opacity-30">
      <motion.div
        className="w-full h-full rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        <Image
          src="/map.png"
          alt="Map background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-3 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold leading-tight text-green-800">
              Real-Time Delivery, <span className="text-green-600">Powered by Clean Energy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Track and book the nearest electric rider in Rwanda — fast, smart, and 100% green.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="flex px-8 py-3 bg-green-600 rounded-md text-white font-semibold"
                onClick={scrollToRiders}
              >
                <Navigation className="w-5 h-5 mr-2.5" />
                Book a Green Ride
              </button>
              {/* <button
                className="flex px-8 py-3 border border-green-500 rounded-md bg-white text-green-600 font-semibold"
                onClick={handleTrackOrder}
              >
                <MapPin className="w-5 h-5 mr-2.5" />
                Track Live Map
              </button> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
