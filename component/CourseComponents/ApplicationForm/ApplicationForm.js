"use client";

import { useState } from "react";

export default function ApplicationForm({
  heading = "Submit your application",
  subheading = "If the answer to your question missing or just want to enquire? Get in touch with us.",
  illustrationUrl = "https://illustrations.popsy.co/amber/work-from-home.svg",
  onSubmitSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    jobTitle: "",
    expYears: "",
    expMonths: "",
    resume: null,
  });

  const [fileName, setFileName] = useState("Upload your resume");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    } else {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans antialiased w-full">
      {/* Header */}
      <section className="pt-12 pb-6 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {heading}
          </h1>
          <p className="text-sm text-gray-500 mt-2">{subheading}</p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="pb-16 pt-4 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Left Side */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Application Form
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="w-full px-3 py-2 border border-red-500 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-300 pr-8"
                        required
                      />
                      <span className="absolute inset-y-0 right-2.5 flex items-center text-red-500 text-xs font-bold">
                        ⓘ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Id */}
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-300"
                    required
                  />
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Your Qualification
                  </label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. MBA, Graduate, Diploma"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-300"
                  />
                </div>

                {/* Job Title Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Job Title:
                  </label>
                  <select
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    <option value="">Select</option>
                    <option value="Full Stack Developer Trainer">
                      Full Stack Developer Trainer
                    </option>
                    <option value="Digital Marketing Specialist">
                      Digital Marketing Specialist
                    </option>
                    <option value="Graphic & UI/UX Designer">
                      Graphic & UI/UX Designer
                    </option>
                    <option value="Academic Counselor">
                      Academic Counselor
                    </option>
                  </select>
                </div>

                {/* Experience in Years & Months */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Experience in Years:
                    </label>
                    <select
                      name="expYears"
                      value={formData.expYears}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      <option value="">Select</option>
                      <option value="0">0 Years</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3+">3+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Experience in Months:
                    </label>
                    <select
                      name="expMonths"
                      value={formData.expMonths}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                      <option value="">Select</option>
                      <option value="0">0 Months</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="9">9 Months</option>
                    </select>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">
                    Resume (upload only pdf and file &lt; 5MB)
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <label className="bg-black text-white px-3 py-2 text-xs font-medium cursor-pointer hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-1">
                      Choose File <span className="text-xs">📎</span>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-xs text-gray-400 px-3 truncate">
                      {fileName}
                    </span>
                  </div>
                </div>

                {/* Lime Green Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#b5d518] hover:bg-[#a1be12] text-gray-900 font-bold rounded-md shadow-sm transition-all text-sm flex items-center justify-center gap-2 mt-2"
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Illustration Right Side */}
            <div className="lg:col-span-7 flex justify-center items-end h-full pt-6 lg:pt-0">
              <div className="w-full h-full min-h-[360px] bg-slate-50 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                {illustrationUrl ? (
                  <img
                    src={illustrationUrl}
                    alt="Career Illustration"
                    className="max-h-[380px] w-auto object-contain"
                  />
                ) : (
                  <p className="text-xs text-gray-400">
                    Pass illustrationUrl prop to display custom image
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}