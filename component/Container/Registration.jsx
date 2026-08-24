"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function Registration() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    guardian_name: "",
    guardian_phone: "",
    email: "",
    phone: "",
    course_field: "",
    course: "",
    branch: "",
    mode: "",
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.includes("@"))
      newErrors.email = "Valid email required";

    if (formData.phone.length < 10)
      newErrors.phone = "Enter valid phone";

    if (!formData.guardian_phone?.trim())
      newErrors.guardian_phone = "Guardian phone is required";

    if (!formData.guardian_name.trim())
      newErrors.guardian_name = "Guardian name is required";

    if (!formData.course_field)
      newErrors.course_field = "Select course field";

    if (!formData.course)
      newErrors.course = "Select a course";

    if (!formData.branch)
      newErrors.branch = "Select a branch";

    if (!formData.mode)
      newErrors.mode = "Select a mode";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "Please accept the Terms & Conditions";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });

  setErrors({
    ...errors,
    [name]: ""
  });
};
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${API_BASE}/api/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong");
        return;
      }

      router.push("/payment");
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
  
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">

    {/* Left Side Banner */}
    <div className="lg:flex flex-col justify-center bg-blue-600 text-white p-10">
      <h1 className="text-4xl font-bold leading-tight mb-4">
        Start Your Career Journey 🚀
      </h1>

      <p className="text-blue-100 text-lg leading-relaxed">
        Join our industry-ready programs in AI, Digital Marketing,
        Full Stack Development, Data Science, and more.
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-white/20 p-2 rounded-full">✔</span>
          <p>Industry Expert Trainers</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-white/20 p-2 rounded-full">✔</span>
          <p>100% Placement Assistance</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-white/20 p-2 rounded-full">✔</span>
          <p>Live Project Experience</p>
        </div>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="p-6 sm:p-8 lg:p-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Register Now
        </h2>
        <p className="text-gray-500 mt-2">
          Fill your details to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Guardian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Guardian Name
            </label>

            <input
              type="text"
              name="guardian_name"
              onChange={handleChange}
              value={formData.guardian_name}
              placeholder="Guardian name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {errors.guardian_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guardian_name}
              </p>
            )}
          </div>
        </div>

        

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="Enter phone number"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
  <label className="block mb-1 text-sm font-semibold text-gray-700">
    Guardian Phone
  </label>

  <input
    type="text"
    name="guardian_phone"
    onChange={handleChange}
    value={formData.guardian_phone}
    placeholder="Guardian phone number"
    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
  />

  {errors.guardian_phone && (
    <p className="text-red-500 text-sm mt-1">
      {errors.guardian_phone}
    </p>
  )}
</div>

        {/* Course Field + Branch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Course Field
            </label>

            <select
              name="course_field"
              onChange={handleChange}
              value={formData.course_field}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Field</option>
              <option value="IT">IT</option>
              <option value="GD">GD</option>
              <option value="DM">DM</option>
            </select>

            {errors.course_field && (
              <p className="text-red-500 text-sm mt-1">
                {errors.course_field}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">
              Branch
            </label>

            <select
              name="branch"
              onChange={handleChange}
              value={formData.branch}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Branch</option>
              <option>Mumbai</option>
              <option>Navi Mumbai</option>
              <option>Hyderabad</option>
            </select>

            {errors.branch && (
              <p className="text-red-500 text-sm mt-1">
                {errors.branch}
              </p>
            )}
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Course
          </label>

          <select
            name="course"
            onChange={handleChange}
            value={formData.course}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Course</option>

            <option>
              MBA- Level Digital Marketing Program
            </option>

            <option>
              AI Powered Post Graduation Program in Digital Marketing
            </option>

            <option>
              AI Powered Graphic Design & Video Editing Program
            </option>

            <option>
              Master Certification in Data Science, ML & AI Program
            </option>

            <option>
              Master Certification in Data Science & ML Program
            </option>

            <option>
              Full Stack Development Program with AI and Cloud Engineering
            </option>

            <option>
              AI Powered Data Analytics Program
            </option>
          </select>

          {errors.course && (
            <p className="text-red-500 text-sm mt-1">
              {errors.course}
            </p>
          )}
        </div>

        {/* Mode */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Learning Mode
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label
              className={`border rounded-xl p-3 cursor-pointer flex items-center justify-center font-medium transition ${
                formData.mode === "Online"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <input
                type="radio"
                name="mode"
                value="Online"
                checked={formData.mode === "Online"}
                onChange={handleChange}
                className="hidden"
              />
              Online
            </label>

            <label
              className={`border rounded-xl p-3 cursor-pointer flex items-center justify-center font-medium transition ${
                formData.mode === "Offline"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 hover:border-blue-400"
              }`}
            >
              <input
                type="radio"
                name="mode"
                value="Offline"
                checked={formData.mode === "Offline"}
                onChange={handleChange}
                className="hidden"
              />
              Offline
            </label>
          </div>

          {errors.mode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mode}
            </p>
          )}
        </div>

        {/* agree */}
        <div>
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      name="agreeTerms"
      checked={formData.agreeTerms}
      onChange={handleChange}
      className="mt-1 h-4 w-4 text-blue-600 rounded"
    />

    <span className="text-sm text-gray-700">
      I agree to the{" "}
      <a
        href="/terms-and-conditions"
        target="_blank"
        className="text-blue-600 hover:underline font-medium"
      >
        Terms & Conditions
      </a>{" "}
      and{" "}
      <a
        href="/privacy-policy"
        target="_blank"
        className="text-blue-600 hover:underline font-medium"
      >
        Refund Policy
      </a>.
    </span>
  </label>

  {errors.agreeTerms && (
    <p className="text-red-500 text-sm mt-2">
      {errors.agreeTerms}
    </p>
  )}
</div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.01]"
          }`}
        >
          {loading ? "Submitting..." : "Register Now"}
        </button>
      </form>
    </div>
  </div>
</div>
  );
}