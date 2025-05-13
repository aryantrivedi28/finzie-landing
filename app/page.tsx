'use client';
import React, { useRef } from 'react';

export default function Home() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  let hoverTimeout: any;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => setShowDropdown(false), 200);
  };

  const scrollToTools = () => {
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white text-gray-900 font-body">
      {/* Hero Section */}
      <section className="bg-white text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-normal font-heading text-black leading-snug mb-6">
          Helping SMEs Go Digital — <br className="hidden md:block" />
          Faster. Smarter. Cheaper.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 font-body">
          Suite of AI tools built by Finzie team — <br className="hidden sm:block" />
          choose what fits your budget and speed.
        </p>
        <button
          onClick={scrollToTools}
          className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium font-body text-base px-6 py-3 rounded-full shadow-md transition-colors"
        >
          Get Started
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-[#1A1A1A] text-white text-center py-16 px-6">
        <h2 className="text-3xl font-heading font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <img src="/how1.png" alt="Submit task" className="rounded mb-4 mx-auto" />
            <p className="font-semibold">Become a beta tester</p>
          </div>
          <div>
            <img src="/how2.png" alt="Execution options" className="rounded mb-4 mx-auto" />
            <p className="font-semibold">Give feedbacks</p>
          </div>
          <div>
            <img src="/how3.png" alt="Choose and start" className="rounded mb-4 mx-auto" />
            <p className="font-semibold">Request new tools</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section ref={toolsRef} id="tools-section" className="bg-white py-20 px-6 text-center">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="text-xl font-heading font-semibold mb-1">Invoice Generator</h3>
            <p className="text-sm text-gray-700 mb-4">Generate clean, downloadable invoices instantly by just typing your work summary.</p>
            <img src="/tool.png" alt="AI Tool" className="rounded mb-4 mx-auto" />
            <a href="/invoice" className="inline-block bg-[#FFE01B] hover:bg-[#FFC107] text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
              Try Now
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="text-xl font-heading font-semibold mb-1">Quotation Generator</h3>
            <p className="text-sm text-gray-700 mb-4">Quickly generate shareable quotations in professional formats.</p>
            <img src="/freelancer.png" alt="Quotation" className="rounded mb-4 mx-auto" />
            <a className="inline-block bg-[#FFE01B] cursor-not-allowed text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
              Coming Soon
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F5E7CB] p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-2xl mb-2">🏢</div>
            <h3 className="text-xl font-heading font-semibold mb-1">Company Incorporation Agent</h3>
            <p className="text-sm text-gray-700 mb-4">Automated flow for helping businesses register themselves quickly.</p>
            <img src="/team.png" alt="Incorporation Agent" className="rounded mb-4 mx-auto" />
            <a className="inline-block bg-[#FFE01B] cursor-not-allowed text-black font-medium text-sm px-5 py-2 rounded-full transition-colors">
              Coming Soon
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-section" className="bg-[#1A1A1A] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold text-white mb-12">Why Us?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left text-sm font-body">
            <div>
              <h4 className="font-bold mb-1">AI-First from Start to Finish</h4>
              <p className="text-gray-300">No freelancers, no agencies. Just fast, reliable execution through fully automated workflows.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">10x Faster, 3x Cheaper</h4>
              <p className="text-gray-300">What used to take days and cost thousands now takes minutes — with zero back-and-forth.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">One Line, One Result</h4>
              <p className="text-gray-300">Type what you need. Get the output. No forms, no calls, no chasing follow-ups.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Built for Busy SME Owners</h4>
              <p className="text-gray-300">You don’t need to learn software. You don’t need a team. You just need things done — that’s what we do.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Manual to Machine</h4>
              <p className="text-gray-300">We’ve delivered services to 50+ SMEs. Now, every repeat task is becoming a self-serve AI tool.</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Execution, Not Tools</h4>
              <p className="text-gray-300">This isn’t another dashboard. It’s an outcome engine. You say it, we do it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commented out sections */}
      {/*
        <section className="bg-white py-20 px-6">
          ...
        </section>

        <section className="bg-white py-20 px-6">
          ...
        </section>
      */}
    </main>
  );
}

{/*
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-heading font-semibold mb-10">Featured Projects</h2>

    <div className="flex flex-wrap gap-3 mb-10">
      {['All', 'Websites', 'Decks', 'Videos', 'Illustrations'].map((cat, i) => (
        <button
          key={i}
          className="bg-[#FFE01B] text-[#1A1A1A] border border-black font-medium text-sm px-4 py-1.5 rounded-full transition-colors"
        >
          {cat}
        </button>
      ))}
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-[#1A1A1A] text-white">
        <img src="/project1.png" alt="Modern Portfolio" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Modern Portfolio Website Design</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-white">
        <img src="/project2.png" alt="Creative Deck" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Creative Deck Design</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] text-white">
        <img src="/project3.png" alt="Video Editing" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold mb-3">Engaging Video Editing</h3>
          <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black text-sm font-medium px-4 py-1.5 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <div className="mt-10">
      <button className="bg-[#FFE01B] text-[#1A1A1A] border border-black font-medium text-sm px-5 py-2 rounded transition hover:opacity-90">
        View All Projects
      </button>
    </div>
  </div>
</section>

<section className="bg-white py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-heading font-semibold mb-12">Client Recommendations</h2>
    <div className="grid md:grid-cols-3 gap-10 mb-10 text-left">
      <div>
        <img src="/client1.jpg" alt="Emily Stone" className="w-12 h-12 rounded-full mb-2" />
        <p className="font-bold text-sm">Emily Stone</p>
        <p className="text-sm text-gray-600 mb-2">Business Owner</p>
        <p className="text-sm text-[#1A1A1A]">Great platform for finding top talent!</p>
      </div>
      <div>
        <img src="/client2.jpg" alt="David Lee" className="w-12 h-12 rounded-full mb-2" />
        <p className="font-bold text-sm">David Lee</p>
        <p className="text-sm text-gray-600 mb-2">Marketing Manager</p>
        <p className="text-sm text-[#1A1A1A]">FreelanceHub boosted our project success!</p>
      </div>
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
*/}
