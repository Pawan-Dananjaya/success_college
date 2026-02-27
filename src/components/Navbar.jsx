"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// --- ICONS (Standard SVGs to avoid install errors) ---
const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);
const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
// ----------------------------------------------------

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    submenu: [
      { name: 'Our Profile', href: '/about/profile' },
      { name: 'Our History', href: '/about/history' },
      // { name: 'Flag & Songs', href: '/about/flag' },
    ],
  },
  {
    name: 'Branches',
    submenu: [
      { name: 'Godakawela', href: '/branches/godakawela' },
      // { name: 'Kahawaththa', href: '/branches/ratnapura' },
      // { name: 'Kosnathota', href: '/branches/colombo' },
    ],
  },
  {
    name: 'Classes',
    submenu: [
      { name: 'Primary Section', href: '/classes/primary' },
      { name: 'O/L Section', href: '/classes/olevel' },
      { name: 'A/L Section', href: '/classes/alevel' },
      { name: 'Time Table', href: '/classes/timetable' },
    ],
  },
  {
    name: 'Diplomas',
    submenu: [
      { name: 'English', href: '/diplomas/english' },
      { name: 'Time Table', href: '/diplomas/timetable' },
      
    ],
  },
  { name: 'Results', href: '/results' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // DETECT SCROLL EVENT
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      
      {/* 1. TOP BAR (BLUE) - Hides when scrolled */}
      <div 
        className={`bg-blue-900 text-white transition-all duration-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone /> <span>+94 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <Mail /> <span>info@successcollege.lk</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             {/* Social Placeholder Icons */}
             <div className="flex gap-3 text-white/80">
                <span className="cursor-pointer hover:text-white">FB</span>
                <span className="cursor-pointer hover:text-white">YT</span>
                <span className="cursor-pointer hover:text-white">IG</span>
             </div>
             <div className="h-4 w-px bg-white/30 mx-2"></div>
             <Link href="/login" className="hover:text-red-300">Login</Link>
             <Link href="/apply" className="bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 transition">See Clases</Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR (WHITE) */}
      <nav className={`bg-white shadow-lg w-full transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* FLEX CONTAINER: Changes direction based on scroll */}
          <div className={`flex items-center transition-all duration-300 ${
            isScrolled ? 'justify-between flex-row' : 'flex-col justify-center'
          }`}>

            {/* LOGO SECTION */}
            <Link href="/" className={`flex items-center gap-2 group transition-all duration-300 ${
                isScrolled ? 'mb-0' : 'mb-4 flex-col'
            }`}>
              {/* Logo Image */}
              <div className={`relative transition-all duration-300 ${
                  isScrolled ? 'w-12 h-12' : 'w-20 h-20'
              }`}>
                <Image 
                  src="/Image/logo.png" 
                  alt="Success College Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>

              {/* Text - Changes size based on scroll */}
              <div className={`flex flex-col ${isScrolled ? 'items-start' : 'items-center'}`}>
                <span className={`font-extrabold text-blue-900 leading-none transition-all ${
                    isScrolled ? 'text-xl' : 'text-3xl tracking-wide'
                }`}>
                  SUCCESS
                </span>
                <span className={`text-red-600 font-bold uppercase leading-none mt-1 transition-all ${
                    isScrolled ? 'text-[9px] tracking-wider' : 'text-sm tracking-[0.3em]'
                }`}>
                  English Academy & Institute
                </span>
              </div>
            </Link>

            {/* SEPARATOR LINE (Only visible when NOT scrolled) */}
            <div className={`w-full border-t border-gray-200 my-2 ${isScrolled ? 'hidden' : 'block'}`}></div>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className={`hidden lg:flex items-center ${isScrolled ? 'gap-6' : 'gap-10 pt-2'}`}>
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <button className="flex items-center text-gray-800 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors py-2">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link href={item.href} className="text-gray-800 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors py-2">
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === idx && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-56 bg-white border-t-4 border-red-600 shadow-xl rounded-b-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
                        isScrolled ? 'top-full mt-4' : 'top-full mt-2'
                    }`}>
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-600 border-b border-gray-50 last:border-none"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Inquire Button */}
              <Link href="/inquire">
                <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-red-700 shadow-md transition-transform hover:scale-105 ml-4">
                  Inquire Now
                </button>
              </Link>
            </div>

            {/* MOBILE HAMBURGER (Right side) */}
            <div className="lg:hidden absolute right-4 top-4 sm:top-6">
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-gray-800 p-2">
                   {isMobileOpen ? <XIcon /> : <MenuIcon />}
                </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU LIST */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t h-screen overflow-y-auto pb-20">
             <div className="flex flex-col p-4 space-y-4">
                {navItems.map((item, i) => (
                    <div key={i} className="border-b pb-2">
                        <Link href={item.href} className="text-gray-800 font-bold uppercase">{item.name}</Link>
                        {item.submenu && (
                            <div className="pl-4 mt-2 space-y-2 border-l-2 border-red-100">
                                {item.submenu.map((sub, j) => (
                                    <Link key={j} href={sub.href} className="block text-sm text-gray-600">{sub.name}</Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
             </div>
          </div>
        )}
      </nav>
    </header>
  );
}