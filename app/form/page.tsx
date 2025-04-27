'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function FormPage() {
  const [step, setStep] = useState(1);

  const [serviceCategory, setServiceCategory] = useState('');
  const [specificService, setSpecificService] = useState('');
  const [details, setDetails] = useState('');
  const [industry, setIndustry] = useState('');
  const [budget, setBudget] = useState('');

  function handleNext() {
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setStep((prev) => prev - 1);
  }

  function extractNumberFromPrice(price: string) {
    const match = price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Save client project
    const { error: insertError } = await supabase.from('projects').insert([
      {
        service_category: serviceCategory,
        specific_service: specificService,
        project_details: details,
        industry: industry,
        budget: budget,
      },
    ]);

    if (insertError) {
      console.error('Error saving client project:', insertError.message);
    }

    // Match freelancers
    try {
      const { data: freelancers, error } = await supabase.from('freelancers').select('*');

    console.log('👀 Freelancers fetched from Supabase:', freelancers);
    console.log('🎯 Client Request:', { serviceCategory, industry, budget });

      if (error) {
        console.error('Error fetching freelancers:', error.message);
        setStep(5);
        return;
      }

      const industryMatches = freelancers.filter((freelancer) =>
        freelancer.industries && freelancer.industries.includes(industry)
      );

      const serviceMatches = industryMatches.filter((freelancer) =>
        freelancer.service_categories && freelancer.service_categories.includes(serviceCategory)
      );

      const budgetMatches = serviceMatches.filter((freelancer) => {
        const price = extractNumberFromPrice(freelancer.pricing);
        const clientBudgetValue = extractNumberFromPrice(budget);
        return price <= (clientBudgetValue + 500);
      });

      const sortedMatches = budgetMatches.sort((a, b) => {
        if (b.experience_years !== a.experience_years) {
          return b.experience_years - a.experience_years;
        }
        return extractNumberFromPrice(a.pricing) - extractNumberFromPrice(b.pricing);
      });

      const bestMatch = sortedMatches[0];

      if (bestMatch) {
        console.log('🎯 Matched Freelancer:', bestMatch);
        setStep(6);
      } else {
        console.log('❌ No match found.');
        setStep(5);
      }
    } catch (err) {
      console.error('Matching error:', err);
      setStep(5);
    }
  }

  const serviceOptions = {
    Design: ['Logo', 'Brand Identity', 'Website Design', 'Landing Page', 'Social Media Posts', 'Pitch Deck Design', 'Product UI/UX Design'],
    Development: ['Full MVP', 'Website Development', 'Landing Page', 'Webflow/Framer Development', 'Mobile App', 'Backend APIs'],
    Marketing: ['Social Media Growth', 'Paid Ads', 'Email Marketing', 'Influencer Marketing', 'SEO Setup'],
    Content: ['Blog Writing', 'Website Copy', 'Social Media Captions', 'Video Scriptwriting', 'Ad Copies'],
    Other: ['Custom Requirement'],
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5] py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Start Your Project 🚀</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow space-y-6 text-left">

        {/* Step 1 */}
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

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">What specifically do you want?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {serviceOptions[serviceCategory as keyof typeof serviceOptions]?.map((service) => (
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

        {/* Step 3 */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Give a few details about the project</h2>
            <textarea
              placeholder="Describe briefly what you need (e.g. I need a minimal logo for my SaaS startup)"
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

        {/* Step 4 */}
        {step === 4 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Final Details</h2>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900">Select Your Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border p-3 rounded text-gray-800"
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
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold text-gray-900">Select Your Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border p-3 rounded text-gray-800"
                required
              >
                <option value="">Select Budget</option>
                <option value="₹0 - ₹500">₹0 - ₹500</option>
                <option value="₹500 - ₹1000">₹500 - ₹1000</option>
                <option value="₹1000 - ₹3000">₹1000 - ₹3000</option>
                <option value="₹3000 - ₹5000">₹3000 - ₹5000</option>
                <option value="₹5000+">₹5000+</option>
              </select>
            </div>

            <button type="button" onClick={handleBack} className="text-blue-500 underline block mb-4">← Back</button>
            <button type="submit" className="bg-[#FFC107] hover:bg-[#ffb300] text-black font-medium px-6 py-3 rounded">
              See Options
            </button>
          </>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">🎉 Thank you! We're finding the best matches 🚀</h2>
            <p className="text-gray-700 mb-4 text-center">Sit tight — we’ll WhatsApp you soon with handpicked options!</p>
          </>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-green-600">🎯 We found a great freelancer for you!</h2>
            <p className="text-gray-800 mb-4 text-center">We’ll WhatsApp you the details very soon 🚀</p>
            <p className="text-gray-600 text-center">Meanwhile, you can relax or continue exploring AI freelancers and tools!</p>
          </>
        )}

      </form>
    </main>
  );
}
