import React, { useState } from 'react';

export default function ApplicationForm({ title, subtitle, availableRoles, selectedRole, onFormSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: selectedRole || '',
    portfolioUrl: '',
    resumeFile: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onFormSubmit) onFormSubmit(formData);
  };

  return (
    <section id="apply-form" className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-slate-400 text-sm sm:text-base">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name *</label>
              <input 
                type="text" 
                name="fullName" 
                required 
                value={formData.fullName} 
                onChange={handleChange} 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Applying For Position *</label>
              <select 
                name="role" 
                required 
                value={formData.role || selectedRole} 
                onChange={handleChange} 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="">Select a Role</option>
                {availableRoles?.map((r, i) => (
                  <option key={i} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Upload Resume (PDF / DOCX) *</label>
            <input 
              type="file" 
              name="resumeFile" 
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange} 
              className="w-full bg-slate-900 border border-slate-800 text-slate-400 rounded-xl px-4 py-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Portfolio / GitHub Link</label>
            <input 
              type="url" 
              name="portfolioUrl" 
              value={formData.portfolioUrl} 
              onChange={handleChange} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="https://github.com/yourusername"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Cover Letter / Additional Note</label>
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="Tell us briefly why you'd be a great fit..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}