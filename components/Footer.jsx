'use client'; // Essential for client-side functionality like onClick

import React from 'react';
import Link from 'next/link'; // Import Link for routing
import { Leaf, Phone, Mail, MapPin as MapPinIcon, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "How It Works", id: "how-it-works", type: 'scroll' }, // Scrolls to section
        { label: "Why TumaGreen", id: "why-tumagreen", type: 'scroll' }, // Scrolls to section
        { label: "For Businesses", href: "#", type: 'external' }, // Placeholder/external
      ],
    },
    {
      title: "Riders",
      links: [
        { label: "Become a Rider", id: "riders", type: 'scroll' }, // Scrolls to section
        { label: "Rider Benefits", href: "#", type: 'external' }, // Placeholder/external
        { label: "Safety", href: "#", type: 'external' }, // Placeholder/external
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", id: "about", type: 'scroll' }, // Scrolls to section
        { label: "Careers", href: "#", type: 'external' }, // Placeholder/external
        { label: "Press", href: "#", type: 'external' }, // Placeholder/external
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Youtube", href: "#", icon: Youtube, type: 'external' },
        { label: "Instagram", href: "#", icon: Instagram, type: 'external' },
      ],
    },
  ];

  // Function to scroll to an element with a given ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id); // Removed substring(1) as id from navItems is now clean
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-50 border-t border-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and description section (first column) */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="font-orbitron text-2xl font-bold text-green-700">TumaGreen</span>
            </div>
            <p className="text-sm text-green-700">
              Pioneering clean energy delivery in Rwanda. Fast, smart, and 100% green.
            </p>
            <p className="text-sm text-green-600 font-medium">Live Green. Deliver Smart.</p>
          </div>

          {/* Mapped footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-green-800 mb-3">{section.title}</p>
              <ul className="space-y-1.5">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  // Conditionally render Link or regular <a> based on type
                  if (link.type === 'route') {
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-green-700 hover:text-green-500 hover:underline transition-colors flex items-center"
                        >
                          {Icon && <Icon className="w-4 h-4 mr-2 text-green-500" />}
                          {link.label}
                        </Link>
                      </li>
                    );
                  } else if (link.type === 'scroll') {
                    return (
                      <li key={link.label}>
                        <button
                          onClick={(e) => {
                            // If not on the homepage, navigate to homepage first, then scroll
                            if (window.location.pathname !== '/') {
                              window.location.href = `/#${link.id}`; // Force full reload and scroll
                            } else {
                              scrollToSection(link.id);
                            }
                          }}
                          className="text-sm text-green-700 hover:text-green-500 hover:underline transition-colors flex items-center bg-transparent border-none p-0 text-left cursor-pointer"
                        >
                          {Icon && <Icon className="w-4 h-4 mr-2 text-green-500" />}
                          {link.label}
                        </button>
                      </li>
                    );
                  } else { // External or placeholder links
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-green-700 hover:text-green-500 hover:underline transition-colors flex items-center"
                        >
                          {Icon && <Icon className="w-4 h-4 mr-2 text-green-500" />}
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}

          {/* Contact Us section (now integrated into the grid) */}
          <div>
            <p className="font-semibold text-green-800 mb-3">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-green-700">
                <Phone className="w-4 h-4 mr-2 text-green-500" />
                <span>+250 7XX XXX XXX</span>
              </li>
              <li className="flex items-center text-green-700">
                <Mail className="w-4 h-4 mr-2 text-green-500" />
                <span>info@tumagreen.rw</span>
              </li>
              <li className="flex items-start text-green-700">
                <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-200 pt-8 text-center">
          <p className="text-sm text-green-600">
            &copy; {currentYear} TumaGreen. All rights reserved. Innovating for a sustainable Rwanda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;