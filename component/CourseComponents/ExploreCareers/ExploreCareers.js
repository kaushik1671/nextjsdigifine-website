"use client";

import React, { useState, useMemo } from "react";
import { FaLinkedin } from "react-icons/fa";
import { 
  Search, MapPin, AlertCircle, ArrowRight, X, Briefcase, 
  CheckCircle2, Clock, Share2, UploadCloud, Link2, FileText 
} from "lucide-react";

// Mock Data - Added 3 new jobs
const JOBS_DATA = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "ENGINEERING",
    location: "Mumbai - Andheri",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "Build high-performance web applications using React, Next.js and modern CSS frameworks.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    posted: "2 days ago",
    fullDescription: "Build high-performance web applications using React, Next.js and modern CSS frameworks. We are looking for a skilled developer to build robust user interfaces, optimize web performance, and collaborate with UX teams.",
    responsibilities: [
      "Develop responsive UI components from Figma design wireframes.",
      "Optimize applications for maximum speed and scalability.",
      "Collaborate with backend engineers to integrate RESTful APIs."
    ],
    requirements: [
      "Strong proficiency in HTML, CSS, JavaScript, and React.",
      "Experience with Tailwind CSS and responsive layout design.",
      "Familiarity with version control (Git)."
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "ENGINEERING",
    location: "Hyderabad",
    type: "Full-Time",
    experience: "3-5 Years",
    description: "Drive end-to-end web platform architecture using Node.js and modern frontend tools.",
    tags: ["Node.js", "React", "MongoDB"],
    posted: "Just now",
    fullDescription: "Architect and deliver modern full-stack web platforms using Node.js backend services and React frontend tools.",
    responsibilities: [
      "Build scalable RESTful services and microservices in Node.js.",
      "Design database schema in MongoDB/PostgreSQL.",
      "Develop modular, reusable frontend components in React."
    ],
    requirements: [
      "Hands-on experience with Node.js, Express, and MongoDB.",
      "Strong core JavaScript and React concepts.",
      "Good understanding of cloud deployment (AWS/Vercel) and CI/CD."
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    department: "MARKETING",
    location: "Navi Mumbai - Vashi",
    type: "Full-Time",
    experience: "1-3 Years",
    description: "Manage lead generation, Google/Meta ad campaigns, and brand growth strategies.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
    posted: "1 day ago",
    fullDescription: "Drive target user acquisition, manage performance marketing campaigns, and refine brand growth strategies.",
    responsibilities: [
      "Set up, monitor, and optimize Google Ads and Meta campaigns.",
      "Track marketing funnel conversions and cost metrics.",
      "Work closely with content & graphics teams for ad creatives."
    ],
    requirements: [
      "Proven track record in paid performance marketing.",
      "Familiarity with SEO tools (Ahrefs, SEMrush) and Analytics.",
      "Data-driven mindset with strong analytical skills."
    ]
  },
  {
    id: 4,
    title: "SAP ABAP Trainee",
    department: "ENGINEERING",
    location: "Mumbai - Andheri",
    type: "Internship",
    experience: "0-1 Years",
    description: "Learn and develop enterprise-level business applications utilizing SAP ABAP technology.",
    tags: ["SAP ABAP", "ERP", "Programming"],
    posted: "3 days ago",
    fullDescription: "Kickstart your career in enterprise resource planning. We are seeking enthusiastic freshers or early professionals to undergo rigorous training and work on real-world SAP ABAP development tasks.",
    responsibilities: [
      "Assist in coding, testing, and debugging SAP ABAP programs.",
      "Work closely with senior developers to understand business requirements.",
      "Document technical specifications and system designs."
    ],
    requirements: [
      "Basic understanding of programming logic and object-oriented concepts.",
      "Prior exposure or certification in SAP ABAP is a huge plus.",
      "Strong problem-solving mindset and willingness to learn."
    ]
  },
  {
    id: 5,
    title: "Video Content Creator and Graphic Designer",
    department: "Video & Graphics",
    location: "Mumbai - Andheri",
    type: "Internship",
    experience: "0-1 Years",
    description: "Create engaging video content and compelling graphics for our digital platforms.",
    tags: ["Video Editing", "Graphic Design", "Content Creation"],
    posted: "3 days ago",
    fullDescription: "Join our creative team to produce high-quality video content and visual assets that drive engagement and brand awareness across digital platforms.",
    responsibilities: [
      "Design engaging graphics, banners, social media posts, and marketing collateral using tools like Photoshop, Illustrator, or Canva.",
      "Edit and produce high-quality video content for YouTube, Instagram Reels, and promotional campaigns.",
      "Collaborate with the marketing team to brainstorm creative concepts and visual strategies."
    ],
    requirements: [
      "Proficiency in video editing and graphic design software (Adobe Premiere Pro, After Effects, Photoshop, Illustrator, etc.).",
      "A strong portfolio showcasing previous video editing and design projects.",
      "Creative mindset with a good eye for aesthetics, typography, and color theory."
    ]
  },
  {
    id: 6,
    title: "Content Moderation Associate",
    department: "OPERATIONS",
    location: "Navi Mumbai - Vashi",
    type: "Full-Time",
    experience: "0-2 Years",
    description: "Review user-generated content to ensure platform safety and compliance with community guidelines.",
    tags: ["Trust & Safety", "Content Review", "Policy"],
    posted: "5 days ago",
    fullDescription: "Play a crucial role in keeping our digital platforms safe. You will review text, images, and videos to identify and remove content that violates our community standards.",
    responsibilities: [
      "Evaluate high volumes of user-generated content daily.",
      "Identify trends in policy violations and report to team leads.",
      "Maintain a high level of accuracy and quality in moderation decisions."
    ],
    requirements: [
      "Excellent comprehension skills and cultural awareness.",
      "Ability to handle sensitive or explicit content professionally.",
      "Willingness to work in rotational shifts if required."
    ]
  }
];

export default function ExploreCareers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  // Dynamic Location Count Logic
  const counts = useMemo(() => {
    return {
      all: JOBS_DATA.length,
      andheri: JOBS_DATA.filter((j) => j.location === "Mumbai - Andheri").length,
      vashi: JOBS_DATA.filter((j) => j.location === "Navi Mumbai - Vashi").length,
      hyd: JOBS_DATA.filter((j) => j.location === "Hyderabad").length,
    };
  }, []);

  // Filtering Logic
  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesLocation && matchesSearch;
    });
  }, [searchTerm, selectedLocation]);

  // Submit Handler for Modal
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsApplying(false);
      setActiveJob(null);
      setFileName(""); 
    }, 2500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
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
              className="w-full pl-12 pr-4 py-3.5 bg-white text-slate-900 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/25 transition-all text-sm font-medium"
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
                      ? "bg-blue-600 text-white border-blue-600 shadow-blue-500/20"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => {
                setActiveJob(job);
                setIsApplying(false);
                setFileName("");
              }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag, index) => (
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
                <span className="text-sm font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  View Job <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 mt-6">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching positions found</h3>
            <p className="text-slate-500 text-sm mt-1">Try adjusting your location filter or search query.</p>
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
                    <span className="inline-flex text-[11px] font-bold tracking-wide px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
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

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto grow bg-white scrollbar-thin scrollbar-thumb-slate-200">
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
                /* --- PROFESSIONAL APPLICATION FORM --- */
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
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      
                      {/* Personal Info Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name *</label>
                          <input required type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name *</label>
                          <input required type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                          <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                          <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                      </div>

                      {/* Links Section */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
                            <FaLinkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn URL *
                          </label>
                          <input required type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Link2 className="w-4 h-4 text-slate-500" /> Portfolio / GitHub
                          </label>
                          <input type="url" placeholder="https://github.com/username" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white" />
                        </div>
                      </div>

                      {/* Resume Upload - Professional UI */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Resume / CV *</label>
                        <div className="relative group">
                          <input 
                            type="file" 
                            required 
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className={`w-full p-6 rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all ${fileName ? 'border-blue-400 bg-blue-50' : 'border-slate-300 bg-slate-50 group-hover:border-blue-400 group-hover:bg-slate-100'}`}>
                            {fileName ? (
                              <>
                                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                                <span className="text-sm font-medium text-slate-700 text-center truncate w-full px-4">{fileName}</span>
                                <span className="text-xs text-blue-600 mt-1 font-semibold">Click to change file</span>
                              </>
                            ) : (
                              <>
                                <UploadCloud className="w-8 h-8 text-slate-400 mb-2 group-hover:text-blue-500 transition-colors" />
                                <span className="text-sm font-medium text-slate-700">Click to upload or drag and drop</span>
                                <span className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Cover Letter (Optional) */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter / Note (Optional)</label>
                        <textarea rows="3" placeholder="Tell us why you are a great fit..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50 hover:bg-white focus:bg-white resize-none"></textarea>
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
                      className="w-full sm:w-auto flex-1 bg-[#0F62FE] hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl text-base font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20"
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
                      onClick={handleFormSubmit}
                      className="w-full sm:w-auto flex-1 bg-[#0F62FE] hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl text-base font-semibold transition-all cursor-pointer shadow-md shadow-blue-500/20"
                    >
                      Submit Application
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