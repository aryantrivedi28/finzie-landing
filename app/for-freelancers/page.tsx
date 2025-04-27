'use client';

import Link from 'next/link';

export default function ForFreelancersPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Join Finzie's Freelancer Network 🚀
      </h1>
      <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-12">
        Work with India's fastest-growing startups. Deliver high-quality work. Earn, grow, and level up your career.
      </p>

      <section className="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto mb-12 text-left">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Guidelines to Join</h2>
        <ul className="text-gray-800 space-y-4 list-disc list-inside">
          <li>✅ Must have proven experience (minimum 2+ projects)</li>
          <li>✅ Must deliver projects on agreed timelines</li>
          <li>✅ Must follow communication guidelines (daily updates)</li>
          <li>✅ AI Freelancers must know at least one relevant AI tool</li>
          <li>✅ Manual vetting will be done before onboarding</li>
          <li>✅ Selected freelancers will work directly on real client projects</li>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Link href="/freelancer-apply">
          <button className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-bold py-3 px-6 rounded-xl">
            Apply as Freelancer
          </button>
        </Link>
        <Link href="/ai-freelancer-apply">
          <button className="bg-[#1A1A1A] hover:bg-black text-white font-bold py-3 px-6 rounded-xl">
            Apply as AI Freelancer
          </button>
        </Link>
      </section>
    </main>
  );
}
