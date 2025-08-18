"use client"
import React from 'react'
import Link from 'next/link'; // Import Link for routing
import Logo from './ui/Logo'
import { motion } from 'framer-motion'
import { useUser } from "@/context/UserContext"; // Keep if used for activeSection logic
import { usePathname } from 'next/navigation'; // To detect current route for active links

const Navbar = () => {
    const {activeSection} = useUser(); // For highlighting scroll-based sections on the homepage
    const pathname = usePathname(); // To check the current route (e.g., /login vs /)

    const navItems = [
        { label: 'Home', id: 'home', type: 'scroll' }, // Scrolls to section on homepage
        { label: 'How It Works', id: 'how-it-works', type: 'scroll' },
        { label: 'Why Us', id: 'why-tumagreen', type: 'scroll' },
        { label: 'Riders', id: 'riders', type: 'scroll' },
        { label: 'Testimonials', id: 'testimonials', type: 'scroll' },
        { label: 'About', id: 'about', type: 'scroll' },
        { label: 'Contact Us', id: 'contact', type: 'scroll' },
        { label: 'Login', href: '/login', type: 'route' } // Navigates to a separate page
    ];

    // Function to scroll to an element with a given ID
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
                    {/* Logo acts as a link to home, handled by next/link */}
                    <Link href="/" className="text-white text-2xl font-bold">
                        <Logo/>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => {
                    // Determine if the current link is active for styling
                    // For scroll items, use activeSection from context
                    // For route items, use pathname
                    const isActive = item.type === 'scroll'
                        ? activeSection === item.id && pathname === '/' // Only active if on homepage AND section matches
                        : pathname === item.href; // Active if on the specific route

                    return (
                        <motion.li
                            key={item.label} // Using label as key for consistency
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="list-none" // Remove default list-item styling
                        >
                            {item.type === 'route' ? (
                                <Link
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors hover:text-green-600 ${
                                      isActive
                                        ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                                        : 'text-green-700 font-semibold text-md'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    onClick={() => {
                                      // If not on the homepage, navigate to homepage first, then scroll
                                      if (pathname !== '/') {
                                        window.location.href = `/#${item.id}`; // Force full reload and scroll
                                      } else {
                                        scrollToSection(item.id);
                                      }
                                    }}
                                    className={`text-sm font-medium transition-colors hover:text-green-600 ${
                                      isActive
                                        ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                                        : 'text-green-700 font-semibold text-md'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            )}
                        </motion.li>
                    );
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar