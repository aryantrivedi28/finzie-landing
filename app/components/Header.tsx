"use client";

import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-[#1A1A1A] text-white px-4 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <h1 className="text-lg font-bold font-heading">AI Wale</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-body">
        <a href="/" className="hover:underline">Home</a>
        <a href="/#tools">AI Tools</a>
        <a href="/#freelancers">AI Freelancers</a>
        <a href="/#general">General Freelancers</a>
        <a href="/#why">Why us?</a>
        <a href="/poster" className="hover:underline">Poster Generator</a> {/* ✅ new link */}
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
        <div className="absolute top-full left-0 w-full bg-[#1A1A1A] flex flex-col px-6 py-4 space-y-3 text-sm md:hidden">
          <a href="/" onClick={() => setShowMobileMenu(false)}>Home</a>
          <a href="/#tools" onClick={() => setShowMobileMenu(false)}>AI Tools</a>
          <a href="/#freelancers" onClick={() => setShowMobileMenu(false)}>AI Freelancers</a>
          <a href="/#general" onClick={() => setShowMobileMenu(false)}>General Freelancers</a>
          <a href="/#why" onClick={() => setShowMobileMenu(false)}>Why us?</a>
          <a href="/poster" onClick={() => setShowMobileMenu(false)}>Poster Generator</a> {/* ✅ new link */}
        </div>
      )}
    </header>
  );
}
