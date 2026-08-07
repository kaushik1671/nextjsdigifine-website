"use client"

import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// ✅ PURE REUSABLE FORM FIELD COMPONENT
const FormField = ({ label, type, name, value, onChange, options = [], errorMessage, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-gray-700 text-left">{label}</label>

      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select an option</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}

      {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
    </div>
  );
};

// ✅ MAIN FORM COMPONENT
const CareerForm = ({ courseTitle = "Get the Course Brochure", style, redirectlink = 'course-brochures', btntext = "Download Brochure" }) => {
  const navigate = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    mode: '',
    course: '',
    ip: '',
    browser: '',
    os: '',
    pageUrl: '',
    dateTime: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMetadata = async () => {
      const ua = navigator.userAgent;
      const platform = navigator.platform || '';

      // OS Detection
      let os = 'Unknown';
      if (/Win/.test(platform)) {
        os = 'Windows';
      } else if (/Mac/.test(platform)) {
        os = 'MacOS';
      } else if (/Linux/.test(platform)) {
        os = 'Linux';
      } else if (/Android/.test(ua)) {
        os = 'Android';
      } else if (/iPhone|iPad|iPod/.test(ua)) {
        os = 'iOS';
      }

      // Edge case fix: if Linux but Chrome/Edge/Brave, likely Windows
      if (os === 'Linux' && /Chrome|Edg|Brave/.test(ua) && !/Android/.test(ua)) {
        os = 'Windows';
      }

      // Browser Detection
      let browser = 'Unknown';
      if (/Edg/.test(ua)) {
        browser = 'Edge';
      } else if (/\bBrave\b/i.test(ua) || navigator.brave) {
        browser = 'Brave';
      } else if (/Chrome/.test(ua) && !/Edg/.test(ua)) {
        browser = 'Chrome';
      } else if (/Firefox/.test(ua)) {
        browser = 'Firefox';
      } else if (/Safari/.test(ua) && !/Chrome/.test(ua)) {
        browser = 'Safari';
      } else if (/MSIE|Trident/.test(ua)) {
        browser = 'Internet Explorer';
      }

      const pageUrl = window.location.href;
      const dateTime = new Date().toISOString();

      // IP Fetch with Fallback
      let ip = 'Unknown';
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        if (!res.ok) throw new Error('Primary IP fetch failed');
        const data = await res.json();
        ip = data.ip;
      } catch (err) {
        console.warn("ipify blocked/failed, trying fallback service...", err);
        try {
          const fallbackRes = await fetch('https://ipapi.co/json/');
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            ip = fallbackData.ip;
          }
        } catch (fallbackErr) {
          console.error("All IP fetch attempts failed:", fallbackErr);
        }
      }

      setFormData(prev => ({
        ...prev,
        ip,
        browser,
        os,
        pageUrl,
        dateTime,
      }));
    };

    fetchMetadata();
  }, []);

  // ✅ INPUT HANDLER
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ VALIDATION
  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/enquiries/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert('Error: ' + (errorData.error || 'Failed to submit'));
        setLoading(false);
        return;
      }

      setSubmitted(true);

      const selectedCourse = formData.course; // ✅ FIX

      setFormData(prev => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        city: '',
        mode: '',
        course: '',
      }));

      setTimeout(() => {
        let finalRedirect = redirectlink;
        const course = selectedCourse.toLowerCase(); // ✅ use stored value

        if (!redirectlink || redirectlink === "course-brochures") {
          if (course.includes("digital marketing")) {
            finalRedirect = "/course-brochures";
          } else if (course.includes("graphic design") || course.includes("video editing")) {
            finalRedirect = "/graphic-design-curriculum";
          } else if (
            course.includes("data science") ||
            course.includes("full stack") ||
            course.includes("python") ||
            course.includes("data analytics") ||
            course.includes("ml") ||
            course.includes("ai")
          ) {
            finalRedirect = "/it-course-brochures";
          } else {
            finalRedirect = "/course-brochures";
          }
        }

        navigate.push(finalRedirect);
      }, 500);
    } catch (err) {
      console.error('Submit error:', err);
      alert('Something went wrong while submitting the form.');
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div
      className={`max-w-full mx-auto p-6 bg-white rounded-lg ${style} flex flex-col gap-3`}
      style={{
        backgroundSize: '500px',
        height: 'full',
        border: '1px solid #ddd',
        borderRadius: '7px',
        padding: '2rem',
      }}
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {courseTitle}
      </h2>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-6">
          <FormField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            errorMessage={errors.name}
            className="w-full"
          />
          <div className="flex flex-row flex-wrap gap-3 md:flex-nowrap">
            <FormField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              errorMessage={errors.email}
              className="w-full"
            />
            <FormField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              errorMessage={errors.phone}
              className="w-full"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-3 md:flex-nowrap">
            <FormField
              label="Choose City"
              type="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              options={['Mumbai', 'Navi Mumbai', 'Hyderabad', 'Others']}
              className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FormField
              label="Choose Mode"
              type="select"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              options={['Online', 'Offline']}
              className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <FormField
            label="Choose Course"
            type="select"
            name="course"
            value={formData.course}
            onChange={handleChange}
            options={[
              "MBA- Level Digital Marketing Program",
              "AI Powered Post Graduation Program in Digital Marketing",
              "AI Powered Graphic Design & Video Editing Program",
              "Master Certification in Data Science, ML & AI Program",
              "Master Certification in Data Science & ML Program",
              "Full Stack Development Program with AI and Cloud Engineering",
              "AI Powered Data Analytics Program"
            ]}
            className="w-full md:max-w-full max-w-md truncate overflow-hidden whitespace-nowrap appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FaPaperPlane className="mr-2" />
            {loading ? 'Downloading.....' : btntext}
          </button>

          {submitted && (
            <p className="text-green-500 text-center mt-4">Form Submitted Successfully!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CareerForm;