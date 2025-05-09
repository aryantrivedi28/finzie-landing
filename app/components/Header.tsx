"use client";

import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-[#1A1A1A] text-white px-4 py-3 flex justify-between items-center relative z-50">
      {/* Logo */}
      <h1 className="text-lg font-bold font-heading">AI Wale</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-sm font-body">
        <a href="/" className="hover:underline">Home</a>
        <a href="/#tools">AI Tools</a>
        <a href="/#freelancers">AI Freelancers</a>
        <a href="/#general">General Freelancers</a>
        <a href="/#why">Why us?</a>
      </nav>

      {/* Hamburger Menu (mobile only) */}
      <button
        className="md:hidden text-xl"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] text-white flex flex-col p-4 space-y-3 md:hidden">
          <a href="/" onClick={() => setShowMobileMenu(false)}>Home</a>
          <a href="/#tools" onClick={() => setShowMobileMenu(false)}>AI Tools</a>
          <a href="/#freelancers" onClick={() => setShowMobileMenu(false)}>AI Freelancers</a>
          <a href="/#general" onClick={() => setShowMobileMenu(false)}>General Freelancers</a>
          <a href="/#why" onClick={() => setShowMobileMenu(false)}>Why us?</a>
        </div>
      )}
    </header>
  );
}
