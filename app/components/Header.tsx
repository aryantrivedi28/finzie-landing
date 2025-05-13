"use client";

import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const scrollToTools = () => {
    const section = document.getElementById("tools-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  const scrollToWhyUs = () => {
    const section = document.getElementById("why-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  return (
    <header className="bg-[#1A1A1A] text-white px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <h1 className="text-lg font-bold font-heading">AI Wale</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-body items-center relative">
        <button
          onClick={scrollToTools}
          className="hover:underline cursor-pointer"
        >
          AI Tools
        </button>
        <button
          onClick={scrollToWhyUs}
          className="hover:underline cursor-pointer"
        >
          Why Us
        </button>
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
          <button onClick={scrollToTools} className="text-left">AI Tools</button>
          <button onClick={scrollToWhyUs} className="text-left">Why Us</button>
        </div>
      )}
    </header>
  );
}
