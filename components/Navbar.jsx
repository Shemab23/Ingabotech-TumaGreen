"use client"
import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import Logo from './ui/Logo'
import { motion } from 'framer-motion'
import { useUser } from "@/context/UserContext"; // Keeping this if your Navbar actually uses it

const Navbar = () => {
    const {activeSection} = useUser(); // Keeping this as per your original code

    // Note: For actual page navigation (e.g., to /login), you use Link.
    // For scrolling to sections on the same page, your scrollToSection function is correct.
    // This Navbar will now combine both.

    const navItems = [
    { label: 'Home', href: '/', type: 'route' }, // Changed to type 'route'
    { label: 'How It Works', id: 'how-it-works', type: 'scroll' },
    { label: 'Why Us', id: 'why-tumagreen', type: 'scroll' },
    { label: 'Riders', id: 'become-rider', type: 'scroll' },
    { label: 'Testimonials', id: 'testimonials', type: 'scroll' },
    { label: 'About', id: 'about', type: 'scroll' },
    { label: 'Contact Us', id: 'contact', type: 'scroll' },
    { label: 'Login', href: '/login', type: 'route' } // Added Login as a route
  ];

  const scrollToSection = (id)=>{
    // Ensure this function is only called for scroll-to-section links
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
            {navItems.map((item, index) => {
                if (item.type === 'route') {
                    return (
                        <motion.li
                            key={item.label} // Use label as key for route items
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="list-none" // Remove default list-item styling
                        >
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                                  // activeSection logic might need adjustment for routes, or remove if not used for routes
                                  // This simple activeSection check only works for scrollable IDs.
                                  // For routes, you'd typically use `usePathname` from `next/navigation`
                                  // to check if the current path matches item.href.
                                  activeSection === item.id // This condition only applies if 'id' exists and is somehow tied to routes
                                    ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                                    : 'text-green-700 font-semibold text-md'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </motion.li>
                    );
                } else {
                    return (
                        <motion.button
                            key={item.id} // Use id as key for scroll items
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
                    );
                }
            })}
            </div>
        </div>
    </nav>
  )
}

export default Navbar