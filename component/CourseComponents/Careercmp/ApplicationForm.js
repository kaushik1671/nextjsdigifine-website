"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2, FileText, Sparkles, ShieldCheck, Building2 } from "lucide-react";

export default function CareerPageWithImage({
  title = "Join Our Team",
  subtitle = "Fill out the form below to apply for your desired role.",
  badgeText = "We're Hiring",
  onSubmitSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    jobTitle: "",
    expYears: "0",
    expMonths: "0",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSubmitSuccess) onSubmitSuccess(formData);
    }, 1500);
  };

  return (
    <section id="talent-form" className="min-h-screen bg-slate-50 text-slate-950 pt-31 pb-18 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch max-h-[92vh]">
          
          {/* LEFT PART: Application Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[92vh]">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-4 my-auto"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                  Thank you for applying. Our talent acquisition team will review your details and reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-md cursor-pointer"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#046AED] uppercase bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {badgeText}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{title}</h2>
                  <p className="text-slate-500 text-xs mt-0.5">{subtitle}</p>
                </div>

                {/* Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                    />
                  </div>
                </div>

                {/* Email Id */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. B.Tech in Computer Science"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Applying For</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. Senior Backend Developer"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Experience (Years)</label>
                    <select
                      name="expYears"
                      value={formData.expYears}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                      <option value="0">0 Years</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3+">3+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Experience (Months)</label>
                    <select
                      name="expMonths"
                      value={formData.expMonths}
                      onChange={handleChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#046AED] focus:bg-white focus:ring-2 focus:ring-blue-500/10 transition-all cursor-pointer"
                    >
                      <option value="0">0 Months</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="9">9 Months</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Resume <span className="text-slate-400 font-normal">(PDF only, max 5MB)</span>
                  </label>
                  <div className="flex items-center gap-2 p-2.5 bg-slate-50/50 border border-dashed border-slate-300 rounded-xl hover:border-[#046AED] transition-all">
                    <label className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-medium px-3 py-2 rounded-lg transition-all inline-flex items-center gap-1.5 shadow-sm">
                      <Upload size={12} />
                      <span>Browse</span>
                      <input type="file" name="resume" accept=".pdf" onChange={handleChange} className="hidden" />
                    </label>
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <FileText size={14} className="text-slate-400 flex-shrink-0" />
                      <span className="text-[11px] text-slate-600 truncate">
                        {formData.resume ? formData.resume.name : "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 px-5 text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-500/30 bg-[#046AED] hover:bg-blue-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* RIGHT PART */}
          <div className="lg:col-span-6 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 text-white space-y-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-blue-300 uppercase bg-blue-500/20 border border-blue-400/30 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                <Sparkles size={12} /> Priority Talent Network
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                Didn't find your exact role?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-md">
                Submit your profile directly to our HR team. We review our talent database weekly before posting open vacancies publicly.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-blue-400 shrink-0" />
                  <span>Direct review by Department Heads</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <Building2 size={14} className="text-blue-400 shrink-0" />
                  <span>Priority consideration for new branches</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full flex items-center justify-center mt-4">
              <img 
                src="images/career/careerform.jpeg" 
                alt="Career Illustration" 
                className="w-full h-auto max-h-[220px] object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}