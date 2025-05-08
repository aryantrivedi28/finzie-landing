'use client';
import React from 'react';

export default function Home() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  let hoverTimeout: any;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <main className="bg-white text-gray-900 font-body">
      {/* Navbar */}
      <header className="bg-[#1A1A1A] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold font-heading">AI Wale</h1>
        <nav className="space-x-6 text-sm font-body">
          <a href="#" className="hover:underline">Home</a>

          {/* AI Tools Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="hover:text-[#FFE01B] focus:outline-none text-sm font-body"
            >
              AI Tools
            </button>

            {showDropdown && (
              <div className="absolute right-0 md:left-auto md:right-0 z-50 grid grid-cols-3 gap-6 text-black bg-white w-[1000px] p-6 mt-2 rounded-xl shadow-xl">
                <div>
                  <p className="font-semibold mb-2 text-[#1A1A1A]">📂 Business Setup</p>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">Company Registration</a>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">GST & PAN Application</a>
                  <a href="/invoice" className="block hover:text-[#FFE01B] text-sm mb-1">Invoice Generation</a>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-[#1A1A1A]">🖥️ Website & Tech</p>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">Landing Page Generator</a>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">Website Copywriting</a>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-[#1A1A1A]">📢 Marketing</p>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">Ad Copy Generator</a>
                  <a href="#" className="block hover:text-[#FFE01B] text-sm mb-1">Social Media Calendar</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:underline">AI Freelancers</a>
          <a href="#" className="hover:underline">General Freelancers</a>
          <a href="#" className="hover:underline">Why us?</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-normal font-heading text-black leading-snug mb-6">
          Helping SMEs Go Digital — <br className="hidden md:block" />
          Faster. Smarter. Cheaper.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 font-body">
          Use AI tools, hire AI-trained freelancers, or get a full team — <br className="hidden sm:block" />
          choose what fits your budget and speed.
        </p>
        <a
          href="/form"
          className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium font-body text-base px-6 py-3 rounded-full shadow-md transition-colors"
        >
          Get Started
        </a>
      </section>

{/* How It Works Section */}
<section className="bg-[#1A1A1A] text-white text-center py-16 px-6">
  <h2 className="text-3xl font-heading font-semibold mb-10">How It Works</h2>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div>
      <img src="/how1.png" alt="Submit task" className="rounded mb-4 mx-auto" />
      <p className="font-semibold">Submit your task request</p>
    </div>
    <div>
      <img src="/how2.png" alt="Execution options" className="rounded mb-4 mx-auto" />
      <p className="font-semibold">Get 3 execution options</p>
    </div>
    <div>
      <img src="/how3.png" alt="Choose and start" className="rounded mb-4 mx-auto" />
      <p className="font-semibold">Choose and get started</p>
    </div>
  </div>
</section>

{/* Explore Options Section */}
<section className="bg-white py-20 px-6 text-center">
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
      <div className="text-2xl mb-2">🤖</div>
      <h3 className="text-xl font-heading font-semibold mb-1">Use AI Tool</h3>
      <p className="text-sm text-gray-700 mb-4">Leverage cutting-edge AI tools to automate your tasks efficiently.</p>
      <img src="/tool.png" alt="AI Tool" className="rounded mb-4 mx-auto" />
      <a href="/form" className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
        Get Started
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
      <div className="text-2xl mb-2">👤</div>
      <h3 className="text-xl font-heading font-semibold mb-1">Hire AI Freelancer</h3>
      <p className="text-sm text-gray-700 mb-4">Get expert help from AI freelancers for your specific needs.</p>
      <img src="/freelancer.png" alt="AI Freelancer" className="rounded mb-4 mx-auto" />
      <a href="/form" className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
        Get Started
      </a>
    </div>

    {/* Card 3 */}
    <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
      <div className="text-2xl mb-2">👥</div>
      <h3 className="text-xl font-heading font-semibold mb-1">Done-for-You Team</h3>
      <p className="text-sm text-gray-700 mb-4">Our team takes care of everything from start to finish.</p>
      <img src="/team.png" alt="Done-for-You Team" className="rounded mb-4 mx-auto" />
      <a href="/form" className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
        Get Started
      </a>
    </div>
  </div>
</section>

{/* Why Us Section */}
<section className="bg-[#1A1A1A] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-heading font-semibold text-white mb-12">Why Us?</h2>
    <div className="grid md:grid-cols-3 gap-10 text-left text-sm font-body">
      
      <div>
        <h4 className="font-bold mb-1">Innovative Solutions</h4>
        <p className="text-gray-300">Cutting-edge AI tools tailored for your business.</p>
      </div>

      <div>
        <h4 className="font-bold mb-1">Made for SME Budgets</h4>
        <p className="text-gray-300">Affordable automation & freelancers — no bloated cost.</p>
      </div>

      <div>
        <h4 className="font-bold mb-1">One Platform, All Options</h4>
        <p className="text-gray-300">Do it yourself, delegate, or outsource — all from a single request.</p>
      </div>

      <div>
        <h4 className="font-bold mb-1">Instant Execution Paths</h4>
        <p className="text-gray-300">No more scouting endlessly — get AI, freelancers, or teams instantly.</p>
      </div>

      <div>
        <h4 className="font-bold mb-1">Human + Tech Support</h4>
        <p className="text-gray-300">Smart automation + people who understand your needs.</p>
      </div>

      <div>
        <h4 className="font-bold mb-1">Pre-Packaged Deliverables</h4>
        <p className="text-gray-300">Landing pages, decks, videos — pre-built & ready to go.</p>
      </div>
      
    </div>
  </div>
</section>

{/* Featured Projects */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-heading font-semibold mb-10">Featured Projects</h2>

    {/* Category Buttons */}
    <div className="flex flex-wrap gap-3 mb-10">
      {['All', 'Websites', 'Decks', 'Videos', 'Illustrations'].map((cat, i) => (
        <button
          key={i}
          className={`bg-[#FFE01B] text-[#1A1A1A] border border-black font-medium text-sm px-4 py-1.5 rounded-full transition-colors`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Project Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project1.png" alt="Modern Portfolio" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Modern Portfolio Website Design</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project2.png" alt="Creative Deck" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Creative Deck Design</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project3.png" alt="Video Editing" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Engaging Video Editing</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project4.png" alt="Innovative AI" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Innovative AI</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project5.png" alt="Freelancer Network" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Efficient General Freelancers Network</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* View All Projects Button */}
    <div className="mt-10">
      <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black font-medium text-sm px-5 py-2 rounded transition hover:opacity-90">
        View All Projects
      </button>
    </div>
  </div>
</section>

{/* Client Recommendations */}
<section className="bg-white py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-heading font-semibold mb-12">Client Recommendations</h2>

    <div className="grid md:grid-cols-3 gap-10 mb-10 text-left">
      {/* Testimonial 1 */}
      <div>
        <img src="/client1.jpg" alt="Emily Stone" className="w-12 h-12 rounded-full mb-2" />
        <p className="font-bold text-sm">Emily Stone</p>
        <p className="text-sm text-gray-600 mb-2">Business Owner</p>
        <p className="text-sm text-[#1A1A1A]">Great platform for finding top talent!</p>
      </div>

      {/* Testimonial 2 */}
      <div>
        <img src="/client2.jpg" alt="David Lee" className="w-12 h-12 rounded-full mb-2" />
        <p className="font-bold text-sm">David Lee</p>
        <p className="text-sm text-gray-600 mb-2">Marketing Manager</p>
        <p className="text-sm text-[#1A1A1A]">FreelanceHub boosted our project success!</p>
      </div>

      {/* Testimonial 3 */}
      <div>
        <img src="/client3.jpg" alt="Rachel Green" className="w-12 h-12 rounded-full mb-2" />
        <p className="font-bold text-sm">Rachel Green</p>
        <p className="text-sm text-gray-600 mb-2">Startup Founder</p>
        <p className="text-sm text-[#1A1A1A]">FreelanceHub made our dream project a reality!</p>
      </div>
    </div>

    <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black font-medium text-sm px-5 py-2 rounded-full transition hover:opacity-90">
      View All
    </button>
  </div>
</section>

    </main>
  );
}
