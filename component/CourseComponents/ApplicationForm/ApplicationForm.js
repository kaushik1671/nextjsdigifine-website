'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Upload, Briefcase, User, Mail, Phone, Sparkles } from 'lucide-react';

export default function CareerApplySection({
  title = "Ready to Make an Impact?",
  subtitle = "Join our dynamic team at Digifine and build the future of tech with us. Fast-track your career today."
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Frontend Developer',
    portfolio: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden font-sans">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#046AED]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#046AED] text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>We Are Hiring</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Professional Image / Visual Graphic Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group h-[520px]">
              {/* Image Banner Background (Aap yahan apni image ka tag ya background image use kar sakte hain) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#046AED] via-blue-700 to-slate-950 flex flex-col justify-end p-8 sm:p-10 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                
                {/* Decorative floating badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">
                  Digifine Careers
                </div>

                <div className="relative z-10 space-y-3">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Shape The Future
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    Innovate, Build, and Grow With Us.
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Take the next big step in your professional journey. Work alongside passionate developers and industry leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-10 relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 text-[#046AED] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Thank you for applying. We have received your details and will get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#046AED] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-[#046AED]/25"
                  >
                    Send Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 pb-2 border-b border-slate-100">
                    Application Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Kaushik Mirajkar"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Target Role */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Applying For <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Frontend Developer">Frontend Developer</option>
                          <option value="Full Stack Developer">Full Stack Developer</option>
                          <option value="Web Developer Intern">Web Developer Intern</option>
                          <option value="SAP ABAP Trainee">SAP ABAP Trainee</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio / LinkedIn Link */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Portfolio / LinkedIn / GitHub URL <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="url"
                        name="portfolio"
                        required
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com or LinkedIn link"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Cover Note / Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Short Cover Note / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your experience and why you'd be a great fit..."
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-[#046AED]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-[#046AED] hover:bg-blue-700 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-[#046AED]/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}