"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Automatically close mobile menu if screen is resized beyond mobile threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[1000] flex justify-between items-center text-white py-4 px-8 md:py-[1.2rem] md:px-16 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 bg-[#0b111e] font-sans">
      {/* Logo */}
      <div className="flex items-center">
        <Link 
          href="/" 
          onClick={closeMobileMenu}
          className="text-white no-underline text-[1.8rem] font-bold tracking-[-0.5px] bg-gradient-to-r from-white to-[#00d2ff] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Abdullah Butt
        </Link>
      </div>

      {/* Nav Links */}
      <ul
        className={`list-none flex m-0 p-0 transition-[right] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-[999]
          fixed top-0 w-full h-screen h-[100dvh] bg-[#0b111e] flex-col justify-center items-center gap-8
          md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:gap-10 md:p-0 md:m-0
          ${isMobileMenuOpen ? "right-0" : "-right-full md:right-auto"}`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="m-0">
              <Link
                href={link.href}
                onClick={closeMobileMenu}
                className={`no-underline transition-colors duration-300 hover:text-white relative
                  after:content-[''] after:absolute after:left-0 after:bg-gradient-to-r after:from-[#00d2ff] after:to-[#3a7bd5] after:transition-all after:duration-300 after:rounded-[2px]
                  
                  /* Mobile Styles */
                  text-[1.5rem] font-semibold py-2 px-4 after:-bottom-[5px] after:h-[3px]
                  
                  /* Desktop Styles */
                  md:text-base md:font-medium md:py-2 md:px-0 md:after:bottom-0 md:after:h-[2px]
                  ${isActive ? "text-white after:w-full" : "text-[#cbd5e1] after:w-0 hover:after:w-full"}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-between w-7 h-5 cursor-pointer z-[1001] bg-transparent border-none outline-none md:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <div
          className={`w-full h-[2px] bg-white rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-white rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMobileMenuOpen ? "opacity-0 -translate-x-[10px]" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-white rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
          }`}
        ></div>
      </button>
    </nav>
  );
}
