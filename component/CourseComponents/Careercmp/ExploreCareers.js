"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { 
  Search, MapPin, AlertCircle, ArrowRight, X, Briefcase, 
  CheckCircle2, Clock, Share2, UploadCloud, Link2, FileText 
} from "lucide-react";

export default function ExploreCareers() {
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Application Form State
  const [appForm, setAppForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    portfolio_url: "",
    cover_letter: "",
    resume: null,
  });

  // Fetch Jobs from Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/jobs/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setJobs(data.data);
      })
      .catch((err) => console.error("Error loading jobs:", err))
      .finally(() => setLoadingJobs(false));
  }, []);

  // Dynamic Location Count Logic
  const counts = useMemo(() => {
    return {
      all: jobs.length,
      andheri: jobs.filter((j) => j.location === "Mumbai - Andheri").length,
      vashi: jobs.filter((j) => j.location === "Navi Mumbai - Vashi").length,
      hyd: jobs.filter((j) => j.location === "Hyderabad").length,
    };
  }, [jobs]);

  // Filtering Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        (job.tags && job.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesLocation && matchesSearch;
    });
  }, [jobs, searchTerm, selectedLocation]);

  // Real Submit Handler for Modal
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("job_id", activeJob.id);
      formData.append("job_title", activeJob.title);
      formData.append("first_name", appForm.first_name);
      formData.append("last_name", appForm.last_name);
      formData.append("email", appForm.email);
      formData.append("phone", appForm.phone);
      formData.append("linkedin_url", appForm.linkedin_url);
      formData.append("portfolio_url", appForm.portfolio_url);
      formData.append("cover_letter", appForm.cover_letter);
      if (appForm.resume) {
        formData.append("resume", appForm.resume);
      }

      const res = await fetch("http://localhost:5000/api/jobs/apply", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsApplying(false);
          setActiveJob(null);
          setAppForm({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            linkedin_url: "",
            portfolio_url: "",
            cover_letter: "",
            resume: null,
          });
        }, 2500);
      } else {
        alert(result.message || "Failed to submit application");
      }
    } catch (err) {
      alert("Server error while submitting application.");
    } finally {
      setSubmitting(false);
    }
  };

  const tabs = [
    { label: "All Openings", value: "All", count: counts.all },
    { label: "Mumbai - Andheri", value: "Mumbai - Andheri", count: counts.andheri },
    { label: "Navi Mumbai - Vashi", value: "Navi Mumbai - Vashi", count: counts.vashi },
    { label: "Hyderabad", value: "Hyderabad", count: counts.hyd },
  ];

  return (
    <section id="career-section" className="py-16 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Career Opportunities
          </h2>
          <p className="text-slate-600 mt-3 text-base font-normal">
            Find your role across our global locations or search by domain.
          </p>
        </div>

        {/* 2. Search Bar & Location Tabs */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/90 mb-10 shadow-sm space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by job title, skill, or department..."
              className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-[#046AED] focus:ring-2 focus:ring-blue-500/25 transition-all text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              if (tab.count === 0 && tab.value !== "All") return null;
              const isActive = selectedLocation === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedLocation(tab.value)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap border flex items-center gap-2 shadow-xs cursor-pointer ${
                    isActive
                      ? "bg-[#046AED] text-white border-[#046AED] shadow-blue-500/20"
                      : "bg-white text-slate-600 hover:bg-slate-100 border-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Job Cards Grid */}
        {loadingJobs ? (
          <div className="text-center py-20 text-slate-500">Loading open positions...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setActiveJob(job);
                  setIsApplying(false);
                }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold tracking-wider px-3 py-1 bg-blue-50 text-[#046AED] rounded-full border border-blue-100">
                      {job.department}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#046AED] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {job.posted}
                  </span>
                  <span className="text-sm font-bold text-[#046AED] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    View Job <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loadingJobs && filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mt-6">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching positions found</h3>
            <p className="text-slate-500 text-sm mt-1">Post jobs from your Admin Dashboard or adjust filters.</p>
          </div>
        )}

      </div>

      {/* 4. Detail & Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100 relative shrink-0">
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!isApplying && (
                <>
                  <div className="mb-3">
                    <span className="inline-flex text-[11px] font-bold tracking-wide px-3 py-1 bg-blue-50 text-[#046AED] rounded-full border border-blue-100">
                      {activeJob.department}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                    {activeJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600 font-medium">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      {activeJob.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      {activeJob.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {activeJob.experience}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto grow bg-white">
              {!isApplying ? (
                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">About the Role</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {activeJob.fullDescription}
                    </p>
                  </section>
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Key Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-slate-600 marker:text-slate-400">
                      {activeJob.responsibilities?.map((item, idx) => (
                        <li key={idx} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2.5 text-[15px] text-slate-600 marker:text-slate-400">
                      {activeJob.requirements?.map((item, idx) => (
                        <li key={idx} className="pl-2">{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto w-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900">Submit Application</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Applying for <span className="font-semibold text-slate-700">{activeJob.title}</span>
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-16 text-center space-y-4">
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
                      <p className="text-slate-500">
                        Thank you for applying. Our talent acquisition team will review your profile.
                      </p>
                    </div>
                  ) : (
                    <form id="job-apply-form" onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name *</label>
                          <input
                            required
                            type="text"
                            value={appForm.first_name}
                            onChange={(e) => setAppForm({ ...appForm, first_name: e.target.value })}
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name *</label>
                          <input
                            required
                            type="text"
                            value={appForm.last_name}
                            onChange={(e) => setAppForm({ ...appForm, last_name: e.target.value })}
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                          <input
                            required
                            type="email"
                            value={appForm.email}
                            onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                          <input
                            required
                            type="tel"
                            value={appForm.phone}
                            onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                            <FaLinkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn URL *
                          </label>
                          <input
                            required
                            type="url"
                            value={appForm.linkedin_url}
                            onChange={(e) => setAppForm({ ...appForm, linkedin_url: e.target.value })}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Link2 className="w-4 h-4 text-slate-500" /> Portfolio / GitHub
                          </label>
                          <input
                            type="url"
                            value={appForm.portfolio_url}
                            onChange={(e) => setAppForm({ ...appForm, portfolio_url: e.target.value })}
                            placeholder="https://github.com/username"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume / CV *</label>
                        <div className="relative group">
                          <input
                            type="file"
                            required
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setAppForm({ ...appForm, resume: e.target.files[0] })}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className={`w-full p-6 rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all ${appForm.resume ? 'border-[#046AED] bg-blue-50' : 'border-slate-300 bg-slate-50 group-hover:border-[#046AED]'}`}>
                            {appForm.resume ? (
                              <>
                                <FileText className="w-8 h-8 text-[#046AED] mb-2" />
                                <span className="text-sm font-medium text-slate-700 text-center truncate w-full px-4">{appForm.resume.name}</span>
                                <span className="text-xs text-[#046AED] mt-1 font-semibold">Click to change file</span>
                              </>
                            ) : (
                              <>
                                <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                                <span className="text-sm font-medium text-slate-700">Click to upload or drag and drop</span>
                                <span className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter / Note (Optional)</label>
                        <textarea
                          rows="3"
                          value={appForm.cover_letter}
                          onChange={(e) => setAppForm({ ...appForm, cover_letter: e.target.value })}
                          placeholder="Tell us why you are a great fit..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#046AED] bg-slate-50 focus:bg-white resize-none"
                        />
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {!submitted && (
              <div className="px-6 sm:px-8 py-5 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center gap-3 shrink-0">
                {!isApplying ? (
                  <>
                    <button
                      onClick={() => setIsApplying(true)}
                      className="w-full sm:w-auto flex-1 bg-[#046AED] hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl text-base font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20"
                    >
                      Apply For Position
                    </button>
                    <button className="w-full sm:w-auto p-3.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center gap-2 font-medium">
                      <Share2 className="w-5 h-5" /> <span className="sm:hidden">Share Job</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-200 bg-slate-100 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      form="job-apply-form"
                      disabled={submitting}
                      className="w-full sm:w-auto flex-1 bg-[#046AED] hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl text-base font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20"
                    >
                      {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}