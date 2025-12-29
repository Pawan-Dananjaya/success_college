"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  
  // State for specific dropdowns
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* LOGO AREA */}
          <div className="flex items-center">
            {/* You can replace this text with an <Image /> logo later */}
            <Link href="/" className="flex flex-col">
               <span className="text-2xl font-extrabold text-blue-900 tracking-wide">SUCCESS</span>
               <span className="text-xs text-red-600 font-semibold tracking-widest uppercase">International College</span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            
            <Link href="/" className="text-gray-800 hover:text-red-600 font-semibold transition">
              Home
            </Link>

            <Link href="/about" className="text-gray-800 hover:text-red-600 font-semibold transition">
              About Us
            </Link>

            {/* BRANCHES DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setBranchesOpen(true)}
              onMouseLeave={() => setBranchesOpen(false)}
            >
              <button className="flex items-center text-gray-800 hover:text-red-600 font-semibold transition focus:outline-none">
                Branches
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {/* Dropdown Content */}
              {branchesOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-white border-t-4 border-red-600 shadow-xl rounded-b-md py-2 animate-fade-in-down">
                  <Link href="/branches/godakawela" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Godakawela</Link>
                  <Link href="/branches/ratnapura" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Ratnapura</Link>
                  <Link href="/branches/colombo" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Colombo</Link>
                </div>
              )}
            </div>

            {/* ACADEMICS DROPDOWN */}
            <div 
              className="relative group"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <button className="flex items-center text-gray-800 hover:text-red-600 font-semibold transition focus:outline-none">
                Academics
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {branchesOpen && (
                 /* Same logic as branches for dropdown */
                 <div className="absolute left-0 mt-0 w-56 bg-white border-t-4 border-red-600 shadow-xl rounded-b-md py-2">
                    <Link href="/academics/primary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Primary Section</Link>
                    <Link href="/academics/olevel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">O/L Section</Link>
                    <Link href="/academics/alevel" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">A/L Section</Link>
                 </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-800 hover:text-red-600 font-semibold transition">
              Contact
            </Link>

            {/* SPECIAL "INQUIRE" BUTTON */}
            <Link href="/inquire">
               <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-md">
                 Inquire Now
               </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Simplified for now) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 font-semibold">Home</Link>
            <Link href="/branches" className="block py-2 text-gray-700 font-semibold">Branches</Link>
            <Link href="/contact" className="block py-2 text-gray-700 font-semibold">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}