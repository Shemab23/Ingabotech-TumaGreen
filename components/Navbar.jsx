"use client"
import React from 'react'
import Logo from './ui/Logo'
import { motion } from 'framer-motion'
import { useUser } from "@/context/UserContext";

const Navbar = () => {
    const {activeSection} = useUser();

    const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Why Us', id: 'why-tumagreen' },
    { label: 'Riders', id: 'become-rider' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'About', id: 'about' },
    { label: 'Contact Us', id: 'contact' }
  ];
  const scrollToSection = (id)=>{
    const el = document.getElementById(id);
    if(el){
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-200/90 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
            <div className="flex justify-between items-center h-16">
                <Logo/>
            </div>
            <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === item.id
                    ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                    : 'text-green-700 font-semibold text-md'
                }`}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {item.label}
              </motion.button>
            ))}
            {/* <button
              className="green-button text-sm font-medium px-4 py-2"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button> */}
          </div>
        </div>
    </nav>
  )
}

export default Navbar
