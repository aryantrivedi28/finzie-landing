'use client';

import { useState } from 'react';

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [serviceCategory, setServiceCategory] = useState('');
  const [specificService, setSpecificService] = useState('');
  const [details, setDetails] = useState('');
  const [industry, setIndustry] = useState('');

  const serviceOptions = {
    Design: ['Logo', 'Brand Identity', 'Website Design', 'Landing Page', 'Social Media Posts', 'Pitch Deck Design', 'Product UI/UX Design'],
    Development: ['Full MVP', 'Website Development', 'Landing Page', 'Webflow/Framer Development', 'Mobile App', 'Backend APIs'],
    Marketing: ['Social Media Growth', 'Paid Ads', 'Email Marketing', 'Influencer Marketing', 'SEO Setup'],
    Content: ['Blog Writing', 'Website Copy', 'Social Media Captions', 'Video Scriptwriting', 'Ad Copies'],
    Other: ['Custom Requirement']
  };

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setStep((prev) => prev - 1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep(5); // Show Instant Options
  }

  return (
    <main className="min-h-screen bg-[#F5F5F5] py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Start Your Project</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">What type of service do you need?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.keys(serviceOptions).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => { setServiceCategory(category); handleNext(); }}
                  className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-medium px-4 py-2 rounded"
                >
                  {category}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">What specifically do you want?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {serviceOptions[serviceCategory as keyof typeof serviceOptions].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => { setSpecificService(service); handleNext(); }}
                  className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-medium px-4 py-2 rounded"
                >
                  {service}
                </button>
              ))}
            </div>
            <button type="button" onClick={handleBack} className="text-blue-500 underline mt-6 block">← Back</button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Give a few details</h2>
            <textarea
              placeholder="Describe briefly what you need (eg: I need a modern logo for a SaaS startup)"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full border p-4 rounded mb-6 text-gray-800"
              rows={4}
              required
            />
            <button type="button" onClick={handleBack} className="text-blue-500 underline block mb-4">← Back</button>
            <button type="button" onClick={handleNext} className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-medium px-6 py-3 rounded">
              Next
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Select Your Industry</h2>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full border p-3 rounded mb-6 text-gray-800"
              required
            >
              <option value="">Select Industry</option>
              <option value="SaaS">SaaS</option>
              <option value="D2C/Ecommerce">D2C / Ecommerce</option>
              <option value="Fintech">Fintech</option>
              <option value="Edtech">Edtech</option>
              <option value="Healthtech">Healthtech</option>
              <option value="Travel">Travel & Hospitality</option>
              <option value="Gaming">Gaming</option>
              <option value="Services">Services</option>
              <option value="Other">Other</option>
            </select>
            <button type="button" onClick={handleBack} className="text-blue-500 underline block mb-4">← Back</button>
            <button type="submit" className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-medium px-6 py-3 rounded">
              See Options
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Here’s how we can execute your project 🚀</h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Option 1 */}
              <div className="bg-[#FFF8E1] p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Tool + Freelancer Combo</h3>
                <p className="text-gray-800 mb-4">Fastest delivery using AI tools + trained freelancers. Best for simple, urgent projects.</p>
                <p className="font-bold mb-2 text-gray-900">⚡ Delivery: Few hours</p>
                <p className="font-bold mb-2 text-gray-900">💰 Cost: Affordable</p>
                <button className="mt-4 bg-[#FFC107] hover:bg-[#ffb300] px-6 py-2 rounded font-semibold">
                  Choose This
                </button>
              </div>

              {/* Option 2 */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dedicated Vetted Freelancer</h3>
                <p className="text-gray-800 mb-4">Get a specialized expert to work closely on your project end-to-end.</p>
                <p className="font-bold mb-2 text-gray-900">⏳ Delivery: Few days</p>
                <p className="font-bold mb-2 text-gray-900">💰 Cost: Premium</p>
                <button className="mt-4 bg-[#1A1A1A] text-white hover:bg-black px-6 py-2 rounded font-semibold">
                  Choose This
                </button>
              </div>
            </div>
          </>
        )}

      </form>
    </main>
  );
}