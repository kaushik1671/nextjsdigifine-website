"use client";

import React, { useState } from "react";
import { Gift, CheckCircle2 } from "lucide-react";

export default function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourContact: "",
    yourEmail: "",
    friendName: "",
    friendContact: "",
    friendEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/referrals/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          yourName: "",
          yourContact: "",
          yourEmail: "",
          friendName: "",
          friendContact: "",
          friendEmail: "",
        });
      } else {
        alert(result.message || "Failed to submit referral.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Server connection failed. Make sure your Express backend is running.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="referral-form" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#046AED]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#046AED]/10 text-[#046AED] font-semibold text-xs mb-3 border border-[#046AED]/20 shadow-sm">
            <Gift className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Digifine Academy Referral Program</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Refer a Friend & <span className="text-[#046AED]">Earn Rewards</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            Do you have a friend that is keen on starting a career in Digital Marketing, Technology or Graphic Design?
Refer him or her to Digifine Academy through completing the form provided below. Our team will reach out to your referred person.

          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Thank you for referring your friend to Digifine Academy!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Our team will get in touch with your referral with details about our courses and admission procedure.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2.5 bg-[#046AED] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Refer Another Friend
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Your Details Section */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-base font-bold text-[#046AED]">Your Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="yourName"
                      required
                      placeholder="Your Name"
                      value={formData.yourName}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="yourContact"
                      required
                      placeholder="Your Contact Number"
                      value={formData.yourContact}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Id? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="yourEmail"
                    required
                    placeholder="Email Id"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                  />
                </div>
              </div>

              {/* Your Friends Details Section */}
              <div className="space-y-4 pt-4">
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-base font-bold text-[#046AED]">Your Friends Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="friendName"
                      required
                      placeholder="Name"
                      value={formData.friendName}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="friendContact"
                      required
                      placeholder="Contact Number"
                      value={formData.friendContact}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Id? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="friendEmail"
                    required
                    placeholder="Email Id"
                    value={formData.friendEmail}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#046AED] focus:ring-1 focus:ring-[#046AED] transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#046AED] hover:bg-blue-600 disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm text-sm cursor-pointer"
                >
                  {submitting ? "Submitting..." : "Submit Referral"}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}