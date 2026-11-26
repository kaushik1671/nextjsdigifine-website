"use client";

import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useRouter, usePathname } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// ✅ COURSE CATEGORY MAP
const courseOptionsMap = {
  digital: [
    "MBA Level Program AI Powered Marketing Data Analytics Program",
    "AI Powered PG Program in Digital Marketing with Corporate Simulation",
    "Post Graduate Program Ai Powered Digital Marketing",
    "Master Program in Digital Marketing",
    "Graduate Program in Digital Marketing",
    "Advanced Executive Program in Digital Marketing",
    "Coorparate Simulation in Digital Marketing"
  ],
  ds: [
    "Masters Certifica  tion in Data Science and Machine Learning with Ai",
    "Masters Certification in Data Science and Machine Learning",
    "Masters Certification in Data Analytics with Gen AI",
    "Coorparate Simulation in DSML AI"
  ],
  fsd: [
    "Master Certification in Full Stack Developer with Ai & Cloud Engineering",
    "Masters Certification in Full Stack Developer Java",
    "Masters Certification in Full Stack Developer Python",
    "Coorparate Simulation in Full Stack Developer Python"
  ],
  design: [
    "AI Powered Graphic Designing and Animation Program with Corporate Simulation",
    "Master Certification in Multimedia Design and Animation Program",
    "Master Certification in Graphic Design Program",
    "Graduate Graphic Design Program",
    "Master Certification in Video Editing and Motion Graphics Program",
    "Master Certification in UI and UX Design Program",
    "Coorparate Simulation in Graphic design"
  ],
  all: [
    "MBA Level Program AI Powered Marketing Data Analytics Program",
    "AI Powered PG Program in Digital Marketing with Corporate Simulation",
    "Post Graduate Program AI Powered Digital Marketing",
    "Master Program in Digital Marketing",
    "Graduate Program in Digital Marketing",
    "Advanced Executive Program in Digital Marketing",
    "Coorparate Simulation in Digital Marketing",
    "AI Powered Graphic Designing and Animation Program with Corporate Simulation",
    "Master Certification in Multimedia Design and Animation Program",
    "Master Certification in Graphic Design Program",
    "Graduate Graphic Design Program",
    "Master Certification in Video Editing and Motion Graphics Program",
    "Master Certification in UI and UX Design Program",
    "Coorparate Simulation in Graphic design",
    "Masters Certification in Data Science and Machine Learning with AI",
    "Masters Certification in Data Science and Machine Learning",
    "Masters Certification in Data Analytics",
    "Master Certification in Full Stack Developer with AI & Cloud Engineering",
    "Masters Certification in Full Stack Developer Java",
    "Masters Certification in Full Stack Developer Python",
    "Coorparate Simulation in Full Stack Developer Python",
    "Coorparate Simulation in DSML AI"
  ]
};

// ✅ FORM FIELD COMPONENT
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

// ✅ MAIN FORM
const CareerForm = ({
  courseTitle = "Get the Course Brochure",
  style,
  redirectlink = 'course-brochures',
  btntext = "Download Brochure",
}) => {
  const navigate = useRouter();
  const pathname = usePathname() || "";
  const lowerPath = pathname.toLowerCase();

  let category = "all";

  if (
    lowerPath.includes("full-stack") ||
    lowerPath.includes("fullstack") ||
    lowerPath.includes("fsd")
  ) {
    category = "fsd";
  } else if (
    lowerPath.includes("data-science") ||
    lowerPath.includes("da-dsml") ||
    lowerPath.includes("data") ||
    lowerPath.includes("analytics") ||
    lowerPath.includes("machine-learning")
  ) {
    category = "ds";
  } else if (
    lowerPath.includes("graphic") ||
    lowerPath.includes("design") ||
    lowerPath.includes("video") ||
    lowerPath.includes("animation")
  ) {
    category = "design";
  } else if (
    lowerPath.includes("digitalmarketing") ||
    lowerPath.includes("marketing")
  ) {
    category = "digital";
  }

  const courseOptions = courseOptionsMap[category] || [];

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

  // ✅ SAFELY FETCH METADATA WITHOUT BREAKING
  useEffect(() => {
    let isMounted = true;

    const fetchMetadata = async () => {
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      const platform = typeof navigator !== 'undefined' ? (navigator.platform || '') : '';

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

      if (os === 'Linux' && /Chrome|Edg|Brave/.test(ua) && !/Android/.test(ua)) {
        os = 'Windows';
      }

      // Browser Detection
      let browser = 'Unknown';
      if (/Edg/.test(ua)) {
        browser = 'Edge';
      } else if (/\bBrave\b/i.test(ua) || (typeof navigator !== 'undefined' && navigator.brave)) {
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

      const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
      const dateTime = new Date().toISOString();

      let clientIp = '';
      try {
        const res = await fetch('https://api.ipify.org?format=json').catch(() => null);

        if (res && res.ok) {
          const data = await res.json();
          clientIp = data.ip || '';
        } else {
          const fallbackRes = await fetch('https://api64.ipify.org?format=json').catch(() => null);
          if (fallbackRes && fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            clientIp = fallbackData.ip || '';
          }
        }
      } catch (err) {
        console.warn("IP fetch skipped/failed cleanly:", err);
      }

      if (isMounted) {
        setFormData(prev => ({
          ...prev,
          ip: clientIp,
          browser,
          os,
          pageUrl,
          dateTime,
        }));
      }
    };

    fetchMetadata();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email';
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Enter 10 digit number';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading || submitted) return;
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/enquiries/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit form");
      }

      setSubmitted(true);

      setTimeout(() => {
        const safeRedirectProp = redirectlink.replace(
          "ds-course-brochures",
          "ds-course-brochures"
        );

        let finalRedirect = safeRedirectProp;

        if (lowerPath.includes("da-dsml-course-brochures")) {
          finalRedirect = lowerPath.includes("vashi")
            ? "/vashi-da-dsml-course-brochures"
            : "/da-dsml-course-brochures";
        } else if (lowerPath.includes("hyderabad")) {
          const hydRedirects = {
            digital: "/hyderabad-course-brochures",
            ds: "/hyderabad-ds-course-brochures",
            fsd: "/hyderabad-fsd-course-brochures",
          };
          finalRedirect = hydRedirects[category] || safeRedirectProp;
        } else if (lowerPath.includes("vashi")) {
          const vashiRedirects = {
            digital: "/vashi-course-brochures",
            ds: "/vashi-da-dsml-course-brochures",
            fsd: "/vashi-fsd-course-brochures",
            design: "/vashi-graphic-design-curriculum",
          };
          finalRedirect = vashiRedirects[category] || safeRedirectProp;
        } else if (category === "ds" && safeRedirectProp === "course-brochures") {
          finalRedirect = "/ds-course-brochures";
        }

        navigate.push(finalRedirect);
      }, 500);

    } catch (err) {
      alert(err?.message ? `Error: ${err.message}` : 'Error submitting form');
      setLoading(false);
    }
  };

  return (
    <div
      className={`max-w-full mx-auto bg-white ${style} flex flex-col gap-3`}
      style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '2rem',
      }}
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        {courseTitle}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Name */}
        <FormField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          errorMessage={errors.name}
        />

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row gap-4">
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

        {/* City + Mode */}
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            label="Choose City"
            type="select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            options={['Mumbai', 'Navi Mumbai', 'Hyderabad', 'Others']}
            className="w-full"
          />

          <FormField
            label="Choose Mode"
            type="select"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            options={['Online', 'Offline']}
            className="w-full"
          />
        </div>

        {/* Course */}
        <FormField
          label="Choose Course"
          type="select"
          name="course"
          value={formData.course}
          onChange={handleChange}
          options={courseOptions}
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full py-3 bg-[#046AED] text-white rounded-md flex items-center justify-center hover:opacity-90 disabled:opacity-60 transition"
        >
          <FaPaperPlane className="mr-2" />
          {loading ? 'Downloading...' : btntext}
        </button>

        {submitted && (
          <p className="text-green-500 text-center">
            Submitted Successfully!
          </p>
        )}

      </form>
    </div>
  );
};

export default CareerForm;


// "use client";

// import React, { useState, useEffect } from 'react';
// import { FaPaperPlane } from 'react-icons/fa';
// import { useRouter, usePathname } from "next/navigation";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// // ✅ COURSE CATEGORY MAP
// const courseOptionsMap = {
//   digital: [
//     "MBA Level Program AI Powered Marketing Data Analytics Program",
//     "AI Powered PG Program in Digital Marketing with Corporate Simulation",
//     "Post Graduate Program Ai Powered Digital Marketing",
//     "Master Program in Digital Marketing",
//     "Graduate Program in Digital Marketing",
//     "Advanced Executive Program in Digital Marketing",
//     "Coorparate Simulation in Digital Marketing"
//   ],
//   ds: [
//     "Masters Certifica  tion in Data Science and Machine Learning with Ai",
//     "Masters Certification in Data Science and Machine Learning",
//     "Masters Certification in Data Analytics with Gen AI",
//     "Coorparate Simulation in DSML AI"
//   ],
//   fsd: [
//     "Master Certification in Full Stack Developer with Ai & Cloud Engineering",
//     "Masters Certification in Full Stack Developer Java",
//     "Masters Certification in Full Stack Developer Python",
//     "Coorparate Simulation in Full Stack Developer Python"
//   ],
//   design: [
//     "AI Powered Graphic Designing and Animation Program with Corporate Simulation",
//     "Master Certification in Multimedia Design and Animation Program",
//     "Master Certification in Graphic Design Program",
//     "Graduate Graphic Design Program",
//     "Master Certification in Video Editing and Motion Graphics Program",
//     "Master Certification in UI and UX Design Program",
//     "Coorparate Simulation in Graphic design"
//   ],
//   all: [
//     "MBA Level Program AI Powered Marketing Data Analytics Program",
//     "AI Powered PG Program in Digital Marketing with Corporate Simulation",
//     "Post Graduate Program AI Powered Digital Marketing",
//     "Master Program in Digital Marketing",
//     "Graduate Program in Digital Marketing",
//     "Advanced Executive Program in Digital Marketing",
//     "Coorparate Simulation in Digital Marketing",
//     "AI Powered Graphic Designing and Animation Program with Corporate Simulation",
//     "Master Certification in Multimedia Design and Animation Program",
//     "Master Certification in Graphic Design Program",
//     "Graduate Graphic Design Program",
//     "Master Certification in Video Editing and Motion Graphics Program",
//     "Master Certification in UI and UX Design Program",
//     "Coorparate Simulation in Graphic design",
//     "Masters Certification in Data Science and Machine Learning with AI",
//     "Masters Certification in Data Science and Machine Learning",
//     "Masters Certification in Data Analytics",
//     "Master Certification in Full Stack Developer with AI & Cloud Engineering",
//     "Masters Certification in Full Stack Developer Java",
//     "Masters Certification in Full Stack Developer Python",
//     "Coorparate Simulation in Full Stack Developer Python",
//     "Coorparate Simulation in DSML AI"
//   ]
// };

// // ✅ PURE REUSABLE FORM FIELD COMPONENT
// const FormField = ({ label, type, name, value, onChange, options = [], errorMessage, className }) => {
//   return (
//     <div className={`flex flex-col gap-2 ${className}`}>
//       <label htmlFor={name} className="text-gray-700 text-left">{label}</label>

//       {type === 'select' ? (
//         <select
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         >
//           <option value="" disabled>Select an option</option>
//           {options.map(option => (
//             <option key={option} value={option}>{option}</option>
//           ))}
//         </select>
//       ) : (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//       )}

//       {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
//     </div>
//   );
// };

// // ✅ MAIN FORM COMPONENT
// const CareerForm = ({
//   courseTitle = "Get the Course Brochure",
//   style,
//   redirectlink = 'course-brochures',
//   btntext = "Download Brochure"
// }) => {
//   const navigate = useRouter();
//   const pathname = usePathname();

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Category determination based on active route
//   let category = "all";
//   if (
//     pathname.includes("full-stack") ||
//     pathname.includes("fullstack") ||
//     pathname.includes("fsd")
//   ) {
//     category = "fsd";
//   } else if (
//     pathname.includes("data-science") ||
//     pathname.includes("data") ||
//     pathname.includes("analytics") ||
//     pathname.includes("machine-learning")
//   ) {
//     category = "ds";
//   } else if (
//     pathname.includes("graphic") ||
//     pathname.includes("design") ||
//     pathname.includes("video")
//   ) {
//     category = "design";
//   } else if (
//     pathname.includes("digitalmarketing") ||
//     pathname.includes("marketing")
//   ) {
//     category = "digital";
//   }

//   const courseOptions = courseOptionsMap[category] || courseOptionsMap.all;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: '',
//     mode: '',
//     course: '',
//     ip: '',
//     browser: '',
//     os: '',
//     pageUrl: '',
//     dateTime: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Fetch full metadata (OS, Browser, IP with fallbacks, URL, Timestamp)
//   useEffect(() => {
//     let isMounted = true;

//     const fetchMetadata = async () => {
//       const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
//       const platform = typeof navigator !== 'undefined' ? (navigator.platform || '') : '';

//       // OS Detection
//       let os = 'Unknown';
//       if (/Win/.test(platform)) {
//         os = 'Windows';
//       } else if (/Mac/.test(platform)) {
//         os = 'MacOS';
//       } else if (/Linux/.test(platform)) {
//         os = 'Linux';
//       } else if (/Android/.test(ua)) {
//         os = 'Android';
//       } else if (/iPhone|iPad|iPod/.test(ua)) {
//         os = 'iOS';
//       }

//       if (os === 'Linux' && /Chrome|Edg|Brave/.test(ua) && !/Android/.test(ua)) {
//         os = 'Windows';
//       }

//       // Browser Detection
//       let browser = 'Unknown';
//       if (/Edg/.test(ua)) {
//         browser = 'Edge';
//       } else if (/\bBrave\b/i.test(ua) || (typeof navigator !== 'undefined' && navigator.brave)) {
//         browser = 'Brave';
//       } else if (/Chrome/.test(ua) && !/Edg/.test(ua)) {
//         browser = 'Chrome';
//       } else if (/Firefox/.test(ua)) {
//         browser = 'Firefox';
//       } else if (/Safari/.test(ua) && !/Chrome/.test(ua)) {
//         browser = 'Safari';
//       } else if (/MSIE|Trident/.test(ua)) {
//         browser = 'Internet Explorer';
//       }

//       const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
//       const dateTime = new Date().toISOString();

//       // IP Fetch with Fallback
//       let ip = 'Unknown';
//       try {
//         const res = await fetch('https://api.ipify.org?format=json');
//         if (!res.ok) throw new Error('Primary IP fetch failed');
//         const data = await res.json();
//         ip = data.ip || 'Unknown';
//       } catch (err) {
//         console.warn("ipify blocked/failed, trying fallback service...", err);
//         try {
//           const fallbackRes = await fetch('https://ipapi.co/json/');
//           if (fallbackRes.ok) {
//             const fallbackData = await fallbackRes.json();
//             ip = fallbackData.ip || 'Unknown';
//           }
//         } catch (fallbackErr) {
//           console.error("All IP fetch attempts failed:", fallbackErr);
//         }
//       }

//       if (isMounted) {
//         setFormData(prev => ({
//           ...prev,
//           ip,
//           browser,
//           os,
//           pageUrl,
//           dateTime,
//         }));
//       }
//     };

//     fetchMetadata();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const formErrors = {};
//     let isValid = true;

//     if (!formData.name.trim()) {
//       formErrors.name = 'Name is required';
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       formErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       formErrors.phone = 'Phone number must be 10 digits';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       const response = await fetch(`${API_BASE}/api/enquiries/submit-form`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         alert('Error: ' + (errorData.error || 'Failed to submit'));
//         setLoading(false);
//         return;
//       }

//       setSubmitted(true);

//       const selectedCourse = formData.course;

//       // Reset user form fields
//       setFormData(prev => ({
//         ...prev,
//         name: '',
//         email: '',
//         phone: '',
//         city: '',
//         mode: '',
//         course: '',
//       }));

//       // Combined Redirect Logic (handles both Hyderabad dynamic routes & course keyword matching)
//       setTimeout(() => {
//         let finalRedirect = redirectlink;

//         if (pathname.toLowerCase().includes("hyderabad")) {
//           const hydRedirects = {
//             digital: "/hyderabad-course-brochures",
//             ds: "/hyderabad-ds-course-brochures",
//             fsd: "/hyderabad-fsd-course-brochures",
//           };
//           finalRedirect = hydRedirects[category] || redirectlink;
//         } else if (!redirectlink || redirectlink === "course-brochures") {
//           const course = selectedCourse.toLowerCase();

//           if (course.includes("digital marketing")) {
//             finalRedirect = "/course-brochures";
//           } else if (course.includes("graphic design") || course.includes("video editing") || course.includes("multimedia") || course.includes("animation")) {
//             finalRedirect = "/graphic-design-curriculum";
//           } else if (
//             course.includes("data science") ||
//             course.includes("full stack") ||
//             course.includes("python") ||
//             course.includes("data analytics") ||
//             course.includes("ml") ||
//             course.includes("ai")
//           ) {
//             finalRedirect = "/ds-course-brochures";
//           } else {
//             finalRedirect = "/course-brochures";
//           }
//         }

//         navigate.push(finalRedirect);
//       }, 500);

//     } catch (err) {
//       console.error('Submit error:', err);
//       alert('Something went wrong while submitting the form.');
//     } finally {
//       setLoading(false);
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <div
//       className={`max-w-full mx-auto bg-white rounded-lg ${style} flex flex-col gap-3`}
//       style={{
//         backgroundSize: '500px',
//         height: 'full',
//         border: '1px solid #ddd',
//         borderRadius: '7px',
//         padding: '2rem',
//       }}
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center">
//         {courseTitle}
//       </h2>

//       <form onSubmit={handleSubmit} className="w-full">
//         <div className="flex flex-col gap-6">

//           {/* Name Field */}
//           <FormField
//             label="Name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             errorMessage={errors.name}
//             className="w-full"
//           />

//           {/* Email & Phone */}
//           <div className="flex flex-row flex-wrap gap-3 md:flex-nowrap">
//             <FormField
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               errorMessage={errors.email}
//               className="w-full"
//             />
//             <FormField
//               label="Phone Number"
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               errorMessage={errors.phone}
//               className="w-full"
//             />
//           </div>

//           {/* City & Mode */}
//           <div className="flex flex-row flex-wrap gap-3 md:flex-nowrap">
//             <FormField
//               label="Choose City"
//               type="select"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               options={['Mumbai', 'Navi Mumbai', 'Hyderabad', 'Others']}
//               className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <FormField
//               label="Choose Mode"
//               type="select"
//               name="mode"
//               value={formData.mode}
//               onChange={handleChange}
//               options={['Online', 'Offline']}
//               className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Dynamic Course Select based on Route Category */}
//           <FormField
//             label="Choose Course"
//             type="select"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             options={courseOptions}
//             className="w-full md:max-w-full max-w-md truncate overflow-hidden whitespace-nowrap appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 px-6 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 ${
//               loading ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//           >
//             <FaPaperPlane className="mr-2" />
//             {loading ? 'Downloading.....' : btntext}
//           </button>

//           {/* Success Message */}
//           {submitted && (
//             <p className="text-green-500 text-center mt-4">Form Submitted Successfully!</p>
//           )}

//         </div>
//       </form>
//     </div>
//   );
// };

// export default CareerForm;