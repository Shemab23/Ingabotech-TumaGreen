"use client"
import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import Logo from './ui/Logo'
import { motion } from 'framer-motion'
// If useUser is only for activeSection in Navbar, and activeSection is based on scroll position,
// you might reconsider if Navbar needs useUser once it's purely for routing.
// For now, let's keep it if your actual UserContext provides other relevant data.
import { useUser } from "@/context/UserContext";
import { usePathname } from 'next/navigation'; // Import usePathname to highlight active link

const Navbar = () => {
    const {activeSection} = useUser(); // This might become redundant for route-based active state
    const pathname = usePathname(); // Get current path for active link styling

    // All nav items will now be 'route' types
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'How It Works', href: '/how-it-works' }, // Assuming you'll create these pages
        { label: 'Why Us', href: '/why-us' },
        { label: 'Riders', href: '/riders' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'About', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Login', href: '/login' } // Your dedicated Login route
    ];

    // scrollToSection is no longer needed in Navbar for page navigation
    // It would only be relevant if Home or other pages still had internal scroll sections.
    // If you still have internal scroll sections on a given page, the page component itself
    // would handle that logic.

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-200/90 border-b border-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
                <div className="flex justify-between items-center h-16">
                    <Logo/>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item, index) => {
                    // Determine if the current link is active
                    const isActive = (item.href === '/' && pathname === '/') ||
                                     (item.href !== '/' && pathname.startsWith(item.href));

                    return (
                        <motion.li
                            key={item.label}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="list-none" // Remove default list-item styling
                        >
                            <Link
                                href={item.href}
                                // Use isActive for styling
                                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                                  isActive
                                    ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                                    : 'text-green-700 font-semibold text-md'
                                }`}
                            >
                                {item.label}
                            </Link>
                        </motion.li>
                    );
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar