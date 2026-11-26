'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PartnerInquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isOtherRole, setIsOtherRole] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    roleNeeded: 'backend',
    customRole: '',
    hiringType: 'fulltime',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'roleNeeded') {
      setIsOtherRole(value === 'other');
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalData = {
      ...formData,
      roleNeeded: isOtherRole ? formData.customRole : formData.roleNeeded,
    };

    try {
      const response = await fetch('http://localhost:5000/api/partners/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          roleNeeded: 'backend',
          customRole: '',
          hiringType: 'fulltime',
          message: '',
        });
        setIsOtherRole(false);
      } else {
        alert(result.message || 'Failed to submit inquiry.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Server connection failed. Make sure backend is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#046AED] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-slate-200 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(4,106,237,0.1),rgba(255,255,255,0))] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                Multi-Disciplinary Talent Hub
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Hire Job-Ready Talent,{' '}
                <span className="bg-gradient-to-r from-[#046AED] via-blue-600 to-[#F59E0B] bg-clip-text text-transparent">
                  Faster.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Connect with trained developers, graphic designers and digital marketers from Digifine Academy. Every candidate is skill-tested and project-trained, so you spend less time screening and more time building your team.
              </p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#046AED]">100%</div>
                  <div className="text-xs sm:text-sm text-slate-500">Skill-Tested</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#046AED]">Zero</div>
                  <div className="text-xs sm:text-sm text-slate-500">Hiring Fee</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#F59E0B]">24h</div>
                  <div className="text-xs sm:text-sm text-slate-500">Profile Sharing</div>
                </div>
              </div>

              {/* Perks List */}
              <div className="space-y-3 pt-2">
                {[
                  'Skill-tested candidates across Tech, Design and Marketing',
                  'Trained on real tools, workflows and live campaigns',
                  'Hire as intern, contract or full-time, whatever suits you',
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#046AED] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Company Contact / Lead Form */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(4,106,237,0.1)] relative">
                <div className="absolute -top-3 right-6 bg-[#F59E0B] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
                  Partner With Us
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Looking to Hire?</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Tell us who you need. We’ll share matched profiles within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Thank You!</h4>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                      We have received your hiring request. Our placement coordinator will contact you within 24 hours with suitable candidate profiles.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. TechCorp Solutions"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 pl-10 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
      Contact Person *
    </label>
    <input
      type="text"
      name="contactName"
      required
      value={formData.contactName}
      onChange={handleChange}
      placeholder="e.g. Rahul Sharma"
      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
      Contact Number *
    </label>
    <input
      type="tel"
      name="phone"
      required
      value={formData.phone}
      onChange={handleChange}
      placeholder="e.g. +91 98765 43210"
      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors"
    />
  </div>
</div>

{/* Work Email */}
<div>
  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
    Work Email *
  </label>
  <input
    type="email"
    name="email"
    required
    value={formData.email}
    onChange={handleChange}
    placeholder="rahul@company.com"
    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors"
  />
</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Role Required
                        </label>
                        <select
                          name="roleNeeded"
                          value={formData.roleNeeded}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#046AED] transition-colors"
                        >
                          <option value="backend">Backend Developer</option>
                          <option value="fullstack">Full Stack Developer</option>
                          <option value="react">React / Next.js Specialist</option>
                          <option value="graphicdesign">Graphic Designer</option>
                          <option value="digitalmarketing">Digital Marketer</option>
                          <option value="seo">SEO Specialist</option>
                          <option value="other">Other (Type manually)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Hiring Type
                        </label>
                        <select
                          name="hiringType"
                          value={formData.hiringType}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#046AED] transition-colors"
                        >
                          <option value="fulltime">Full-Time Hire</option>
                          <option value="internship">Internship (to Hire)</option>
                          <option value="contract">Contract Project</option>
                        </select>
                      </div>
                    </div>

                    {isOtherRole && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Specify Role
                        </label>
                        <input
                          type="text"
                          name="customRole"
                          required={isOtherRole}
                          value={formData.customRole}
                          onChange={handleChange}
                          placeholder="Type your required role here..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors"
                        />
                      </motion.div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tools, software specifics (e.g. Figma, SEO), budget range..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#046AED] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-2 py-3 px-4 bg-[#046AED] hover:bg-[#0358c4] disabled:opacity-60 text-white font-semibold rounded-lg shadow-lg shadow-[#046AED]/25 flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
                    >
                      <span>{submitting ? 'Sending Request...' : 'Request Candidate Profiles'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}