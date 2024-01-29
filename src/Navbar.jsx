import React from "react";
import logo from "./assets/logo.png"
import { useState } from "react";

export default function Navbar(){

    const scroll=(sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const start = window.scrollY;
            const end = section.offsetTop;
            const duration = 1000; // adjust the duration as needed (in milliseconds)
      
            const startTime = performance.now();
      
            const scrollStep = (timestamp) => {
              const progress = Math.min(1, (timestamp - startTime) / duration);
              window.scrollTo(0, start + progress * (end - start));
      
              if (progress < 1) {
                requestAnimationFrame(scrollStep);
              }
            };
      
            requestAnimationFrame(scrollStep);
          }
    }

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:justify-between ">
            <div className="flex flex-row justify-between items-center">
                <img src={logo} className="size-[9rem] md:m-8" alt="Logo" />
                <div className="md:flex flex-col md:flex-row justify-center items-center flex-wrap hidden">
                    <p className="text-white font-bold md:mr-12" onClick={() => scroll("aboutUS")}>About Us</p>
                    <p className="text-white font-bold md:mr-12" onClick={() => scroll("comittee")}>Core Committee</p>
                    <p className="text-white font-bold md:mr-12" onClick={() => scroll("events")}>Events</p>
                    <p className="text-white font-bold md:mr-20" onClick={() => scroll("contact")}>Contact Us</p>
                    <p className="text-white font-bold md:mr-20" onClick={() => scroll("Gallery")}>Gallery</p>
                    <a href="https://www.instagram.com/gmun_hyd?igsh=MWNhYWtkZHI4M3Fubg==" className="mr-5 md:ml-[30rem]" target="blank"><svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                    <a href="https://www.linkedin.com/company/gitam-model-united-nations-hyderabad123/people/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
                </div>
                <button className="md:hidden px-2 py-1 text-white ml-40" id="mobile-menu-button" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>   
            </div>
            <div className={`-mt-5 h-[120px] transition-opacity transition-height duration-5000 delay-100 ease-in-out ${isMobileMenuOpen ? ' opacity-100 mb-8' : ' hidden'} md:absolute md:top-[80px] right-0 md:right-[34rem]`}>
                <div className="flex flex-col items-center">
                    <p className="text-white font-bold my-1" onClick={() => scroll("aboutUS")}>About Us</p>
                    <p className="text-white font-bold my-1" onClick={() => scroll("comittee")}>Core Committee</p>
                    <p className="text-white font-bold my-1" onClick={() => scroll("events")}>Events</p>
                    <p className="text-white font-bold my-1" onClick={() => scroll("contact")}>Contact Us</p>
                    <p className="text-white font-bold md:mr-20 mb-2" onClick={() => scroll("Gallery")}>Gallery</p>
                    <div className="flex flex-row items-center mb-2">
                        <a href="https://www.instagram.com/gmun_hyd?igsh=MWNhYWtkZHI4M3Fubg==" className="mr-3"><svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                        <a href="https://www.linkedin.com/company/gitam-model-united-nations-hyderabad123/people/"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
}