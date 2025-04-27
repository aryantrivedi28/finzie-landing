'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Make sure you have this line!

export default function AIFreelancerApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [serviceCategories, setServiceCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [aiToolsUsed, setAiToolsUsed] = useState<string[]>([]);
  const [aiProjectDescription, setAiProjectDescription] = useState('');
  const [pricing, setPricing] = useState('');
  const [industries, setIndustries] = useState<string[]>([]);
  const [experienceYears, setExperienceYears] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('ai_freelancers').insert([
      {
        name,
        whatsapp_number: whatsappNumber,
        service_categories: serviceCategories,
        skills,
        ai_tools_used: aiToolsUsed,
        ai_project_description: aiProjectDescription,
        pricing,
        industries,
        experience_years: experienceYears,
        portfolio_link: portfolioLink,
        location,
      }
    ]);

    if (error) {
      console.error('Error saving AI freelancer:', error.message);
      alert('Failed to submit. Please try again.');
    } else {
      console.log('AI Freelancer submitted:', data);
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5F5] py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Apply as an AI-Powered Freelancer 🤖</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow text-left space-y-6">
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Full Name</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded text-gray-900" />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">WhatsApp Number</label>
            <input type="tel" required pattern="[0-9]{10,12}" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} className="w-full p-3 border rounded text-gray-900" />
          </div>

          {/* Service Categories */}
          <div>
            <label className="block text-gray-900 mb-4 font-semibold">Service Categories (Select Multiple)</label>
            <div className="flex flex-wrap gap-3">
              {['Design', 'Development', 'Marketing', 'Content', 'Video Editing', 'Other'].map((service) => (
                <label key={service} className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    value={service}
                    checked={serviceCategories.includes(service)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        setServiceCategories((prev) => [...prev, value]);
                      } else {
                        setServiceCategories((prev) => prev.filter((item) => item !== value));
                      }
                    }}
                    className="h-5 w-5"
                  />
                  <span className="text-gray-900">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-gray-900 mb-4 font-semibold">Skills (Select Multiple)</label>
            <div className="flex flex-wrap gap-3">
              {['Logo Design', 'Website Development', 'Social Media Management', 'UI/UX Design', 'Motion Graphics', 'Copywriting', 'Landing Page Design', 'Branding', 'Other'].map((skill) => (
                <label key={skill} className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={skills.includes(skill)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        setSkills((prev) => [...prev, value]);
                      } else {
                        setSkills((prev) => prev.filter((item) => item !== value));
                      }
                    }}
                    className="h-5 w-5"
                  />
                  <span className="text-gray-900">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* AI Tools Used */}
          <div>
            <label className="block text-gray-900 mb-4 font-semibold">AI Tools You Use (Select Multiple)</label>
            <div className="flex flex-wrap gap-3">
              {['ChatGPT', 'Midjourney', 'RunwayML', 'Copy.ai', 'Figma AI', 'Jasper.ai', 'Other'].map((tool) => (
                <label key={tool} className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    value={tool}
                    checked={aiToolsUsed.includes(tool)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        setAiToolsUsed((prev) => [...prev, value]);
                      } else {
                        setAiToolsUsed((prev) => prev.filter((item) => item !== value));
                      }
                    }}
                    className="h-5 w-5"
                  />
                  <span className="text-gray-900">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* AI Project Description */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Tell us one project where you used AI (Max 300 characters)</label>
            <textarea maxLength={300} required value={aiProjectDescription} onChange={(e) => setAiProjectDescription(e.target.value)} className="w-full p-3 border rounded text-gray-900" rows={4}></textarea>
          </div>

          {/* Pricing */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Pricing Per Deliverable</label>
            <select required value={pricing} onChange={(e) => setPricing(e.target.value)} className="w-full p-3 border rounded text-gray-900">
              <option value="">Select Pricing</option>
              <option value="₹0 - ₹500">₹0 - ₹500</option>
              <option value="₹500 - ₹1000">₹500 - ₹1000</option>
              <option value="₹1000 - ₹3000">₹1000 - ₹3000</option>
              <option value="₹3000 - ₹5000">₹3000 - ₹5000</option>
              <option value="₹5000+">₹5000+</option>
            </select>
          </div>

          {/* Industries */}
          <div>
            <label className="block text-gray-900 mb-4 font-semibold">Industries Served (Select Multiple)</label>
            <div className="flex flex-wrap gap-3">
              {['SaaS', 'D2C/Ecommerce', 'Fintech', 'Edtech', 'Healthtech', 'Travel', 'Gaming', 'Services', 'Other'].map((industry) => (
                <label key={industry} className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    value={industry}
                    checked={industries.includes(industry)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (e.target.checked) {
                        setIndustries((prev) => [...prev, value]);
                      } else {
                        setIndustries((prev) => prev.filter((item) => item !== value));
                      }
                    }}
                    className="h-5 w-5"
                  />
                  <span className="text-gray-900">{industry}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Years of Experience */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Years of Experience</label>
            <select required value={experienceYears} onChange={(e) => setExperienceYears(e.target.value)} className="w-full p-3 border rounded text-gray-900">
              <option value="">Select Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-2">1-2 years</option>
              <option value="2-5">2-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Portfolio Link (optional)</label>
            <input type="url" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)} className="w-full p-3 border rounded text-gray-900" />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-900 mb-2 font-semibold">Location (optional)</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-3 border rounded text-gray-900" />
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-[#1A1A1A] hover:bg-black text-white font-bold py-3 rounded-xl">
            Submit Application
          </button>

        </form>
      ) : (
        <div className="text-2xl font-bold text-green-600 mt-20">
          🎉 Thank you for applying as an AI Freelancer! We'll reach out soon via WhatsApp.
        </div>
      )}
    </main>
  );
}
