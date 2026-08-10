"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2, FileText } from "lucide-react";

export default function CareerPageWithImage() {
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
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* SINGLE CONTAINER WRAPPER FOR ENTIRE SECTION */}
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-200/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* LEFT PART: Application Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 space-y-4 my-auto"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for applying. Our talent acquisition team will review your details and reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-md cursor-pointer"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
                  We're Hiring
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Join Our Team</h2>
                <p className="text-slate-500 text-xs mt-1">Fill out the form below to apply for your desired role.</p>
              </div>

              {/* Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                  />
                </div>
              </div>

              {/* Email Id */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Your Qualification */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech in Computer Science"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Job Title (Changed from Select dropdown to text input) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Applying For</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Senior Backend Developer"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Experience in Years & Months */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Experience (Years)</label>
                  <select
                    name="expYears"
                    value={formData.expYears}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                  >
                    <option value="0">0 Years</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3+">3+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Experience (Months)</label>
                  <select
                    name="expMonths"
                    value={formData.expMonths}
                    onChange={handleChange}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Resume <span className="text-slate-400 font-normal">(PDF only, max 5MB)</span>
                </label>
                <div className="flex items-center gap-3 p-3 bg-slate-50/50 border border-dashed border-slate-300 rounded-xl hover:border-blue-500 transition-all">
                  <label className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-all inline-flex items-center gap-2 shadow-sm">
                    <Upload size={14} />
                    <span>Browse</span>
                    <input type="file" name="resume" accept=".pdf" onChange={handleChange} className="hidden" />
                  </label>
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileText size={16} className="text-slate-400 flex-shrink-0" />
                    <span className="text-xs text-slate-600 truncate">
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
                className="w-full mt-3 py-3.5 px-6 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 bg-[#046AED] hover:bg-blue-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </div>

        {/* RIGHT PART: Image Container */}
        <div className="lg:col-span-6 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-slate-50 p-8 sm:p-12 flex items-center justify-center h-full border-t lg:border-t-0 lg:border-l border-slate-200/80">
          <div className="w-full flex items-center justify-center">
            <img 
              src="images/career/careerform.jpeg" 
              alt="Career Illustration" 
              className="w-full h-auto max-h-[600px] object-contain drop-shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
}