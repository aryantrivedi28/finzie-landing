export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#F5F5F5] text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Your Startup’s Plug-and-Play <br className="hidden md:block" /> Execution Partner
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Hire pre-vetted talent in design, development, content & video — powered by AI matching,
          delivery tools, and white-label support.
        </p>
        <a href="#" className="inline-block bg-[#FFC107] hover:bg-[#ffb300] text-black font-semibold px-8 py-3 rounded-xl">
          Get Early Access
        </a>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Startups waste time juggling freelancers, tools, and timelines. Delivery is messy. Ownership? Non-existent.
        </p>
        <ul className="max-w-xl mx-auto text-left text-gray-700 space-y-4">
          <li>❌ Talent scattered across 5+ platforms</li>
          <li>❌ No progress tracking or coordination</li>
          <li>❌ Low-quality output and missed deadlines</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FFF8E1] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Post a Requirement</h3>
            <p className="text-gray-600">Tell us what you need — or choose a startup playbook.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Get Matched</h3>
            <p className="text-gray-600">Our AI matches you with pre-vetted talent instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Track Delivery</h3>
            <p className="text-gray-600">Project progress, chats, and revisions — all in one place.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Plug-and-Play for Every Startup Need</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-[#F1F1F1] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Startup Launch Kit</h3>
            <p className="text-gray-600">Logo, website, pitch deck, launch video — all delivered fast.</p>
          </div>
          <div className="bg-[#F1F1F1] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Growth Campaigns</h3>
            <p className="text-gray-600">Ad creatives, landing pages, emails & social videos.</p>
          </div>
          <div className="bg-[#F1F1F1] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Fundraising Collateral</h3>
            <p className="text-gray-600">Investor decks, product demos, product UI walkthroughs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FFF3E0] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Founders Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">"Got a designer, dev & video editor in 48 hours. Delivery was flawless."</p>
            <p className="mt-4 font-bold text-gray-900">— SaaS Startup Founder</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">"Finzie is like having an in-house team without the hiring headache."</p>
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
