"use client";

import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-[#1A1A1A] text-white px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <h1 className="text-lg font-bold font-heading">AI Wale</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-body items-center">
        <a href="/" className="hover:underline">Home</a>

        {/* AI Tools Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="hover:underline">AI Tools</button>

          {showDropdown && (
            <div
              className="absolute top-full left-0 bg-[#1A1A1A] mt-2 rounded shadow-lg p-2 space-y-1 text-sm z-50"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a href="/invoice" className="block px-4 py-1 hover:bg-gray-800 rounded">
                Invoice Generator
              </a>
              <a href="/poster" className="block px-4 py-1 hover:bg-gray-800 rounded">
                Poster Generator
              </a>
            </div>
          )}
        </div>

        <a href="/#freelancers" className="hover:underline">AI Freelancers</a>
        <a href="/#general" className="hover:underline">General Freelancers</a>
        <a href="/#why" className="hover:underline">Why us?</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl font-bold"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Mobile Nav Menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] flex flex-col px-6 py-4 space-y-3 text-sm md:hidden z-50">
          <a href="/" onClick={() => setShowMobileMenu(false)}>Home</a>

          <div className="flex flex-col space-y-1">
            <span className="font-semibold">AI Tools</span>
            <a href="/invoice" onClick={() => setShowMobileMenu(false)} className="ml-4">↳ Invoice Generator</a>
            <a href="/poster" onClick={() => setShowMobileMenu(false)} className="ml-4">↳ Poster Generator</a>
          </div>

          <a href="/#freelancers" onClick={() => setShowMobileMenu(false)}>AI Freelancers</a>
          <a href="/#general" onClick={() => setShowMobileMenu(false)}>General Freelancers</a>
          <a href="/#why" onClick={() => setShowMobileMenu(false)}>Why us?</a>
        </div>
      )}
    </header>
  );
}
