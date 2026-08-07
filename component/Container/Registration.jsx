"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    agreed: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.phone.length < 10) newErrors.phone = "Enter valid phone";
    if (!formData.guardian_phone.trim())
      newErrors.guardian_phone = "Guardian phone is required";
    if (!formData.course) newErrors.course = "Select a course";
    if (!formData.branch) newErrors.branch = "Select a branch";
    if (!formData.mode) newErrors.mode = "Select a mode";
    if (!formData.guardian_name.trim())
      newErrors.guardian_name = "Guardian name is required";
    if (!formData.course_field)
      newErrors.course_field = "Select course field";
    if (!formData.agreed)
      newErrors.agreed = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const handleModeSelect = (selectedMode) => {
    setFormData({ ...formData, mode: selectedMode });
    setErrors({ ...errors, mode: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/registrations`,
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

      // ✅ SUCCESS → REDIRECT
      router.push("/payment");

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Left Section - Blue Hero Banner */}
        <div className="bg-[#2563eb] text-white p-8 md:p-12 md:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Start Your Career Journey 🚀
          </h1>
          <p className="text-blue-100 text-sm md:text-base mb-8 leading-relaxed">
            Join our industry-ready programs in AI, Digital Marketing, Full Stack Development, Data Science, and more.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <span className="text-sm font-medium">Industry Expert Trainers</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <span className="text-sm font-medium">100% Placement Assistance</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <span className="text-sm font-medium">Live Project Experience</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 md:p-12 md:w-7/12 bg-white">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Register Now</h2>
            <p className="text-gray-500 text-sm mt-1">Fill your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Grid 1: Name & Guardian Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Name</label>
                <input
                  name="guardian_name"
                  placeholder="Guardian name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.guardian_name && <p className="text-red-500 text-xs mt-1">{errors.guardian_name}</p>}
              </div>
            </div>

            {/* Grid 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  name="phone"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Guardian Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Guardian Phone</label>
              <input
                name="guardian_phone"
                placeholder="Guardian phone number"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.guardian_phone && <p className="text-red-500 text-xs mt-1">{errors.guardian_phone}</p>}
            </div>

            {/* Grid 3: Course Field & Branch */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Course Field</label>
                <select
                  name="course_field"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Field</option>
                  <option value="IT">IT</option>
                  <option value="GD">GD</option>
                  <option value="DM">DM</option>
                </select>
                {errors.course_field && <p className="text-red-500 text-xs mt-1">{errors.course_field}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Branch</label>
                <select
                  name="branch"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Branch</option>
                  <option>Mumbai</option>
                  <option>Navi Mumbai</option>
                  <option>Hyderabad</option>
                </select>
                {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
              </div>
            </div>

            {/* Course Select */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Course</label>
              <select
                name="course"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Course</option>
                <option>MBA Digital Marketing</option>
                <option>Data Science</option>
                <option>Full Stack</option>
              </select>
              {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
            </div>

            {/* Learning Mode Toggle Buttons */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Learning Mode</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleModeSelect("Online")}
                  className={`py-2 text-sm font-medium rounded-lg border transition-all ${
                    formData.mode === "Online"
                      ? "border-blue-600 text-blue-600 bg-blue-50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Online
                </button>
                <button
                  type="button"
                  onClick={() => handleModeSelect("Offline")}
                  className={`py-2 text-sm font-medium rounded-lg border transition-all ${
                    formData.mode === "Offline"
                      ? "border-blue-600 text-blue-600 bg-blue-50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Offline
                </button>
              </div>
              {errors.mode && <p className="text-red-500 text-xs mt-1">{errors.mode}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  onChange={handleChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Refund Policy
                  </a>
                  .
                </span>
              </label>
              {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 mt-4 text-sm"
            >
              {loading ? "Submitting..." : "Register Now"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}