export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#F5F5F5] text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Shortcut to Fast, Affordable Startup Execution
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
          Instantly match with AI tools + vetted freelancers for design, development, and growth. Get results in hours, not weeks.
        </p>
        <a href="/form" className="inline-block bg-[#FFC107] hover:bg-[#ffb300] text-black font-semibold px-8 py-3 rounded-xl">
          Start Your Project
        </a>
      </section>

      {/* Explore Services / Tools / Packages */}
      <section className="bg-white py-20 px-6 text-center" id="start">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Explore What You Need</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-[#F1F1F1] p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="text-gray-800 mb-4">Design, Develop, Create — with AI-powered efficiency.</p>
            <a href="/form" className="text-[#FFC107] font-bold">Explore Services →</a>
          </div>
          <div className="bg-[#F1F1F1] p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Tools</h3>
            <p className="text-gray-800 mb-4">Leverage the best AI tools for logos, websites, marketing & more.</p>
            <a href="/form" className="text-[#FFC107] font-bold">Explore Tools →</a>
          </div>
          <div className="bg-[#F1F1F1] p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Startup Packages</h3>
            <p className="text-gray-800 mb-4">Pre-made launch kits for fast go-to-market success.</p>
            <a href="/form" className="text-[#FFC107] font-bold">Explore Packages →</a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FFF8E1] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Start a Project</h3>
            <p className="text-gray-800">Tell us what you need via quick guided questions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Get Instant Options</h3>
            <p className="text-gray-800">AI package vs Vetted freelancer — pick your execution plan.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Track and Get Delivered</h3>
            <p className="text-gray-800">Track progress and get results — fast, simple, efficient.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FFF3E0] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Founders Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic">"Got a designer, dev & video editor in 48 hours. Delivery was flawless."</p>
            <p className="mt-4 font-bold text-gray-900">— SaaS Startup Founder</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic">"Finzie is like having an in-house team without the hiring headache."</p>
            <p className="mt-4 font-bold text-gray-900">— D2C Brand Owner</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-10 text-center">
        <p className="text-sm">&copy; 2025 Finzie. Built with chai and late nights 🚀</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="underline text-sm">Privacy</a>
          <a href="#" className="underline text-sm">Terms</a>
          <a href="#" className="underline text-sm">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
