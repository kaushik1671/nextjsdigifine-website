import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";


const EditInvoice = () => {
  const location = useLocation();
  const navigate = useRouter();
  const { invoiceData } = location.state || {}; // fallback handling

  const [form, setForm] = useState(invoiceData || {});

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update logic here: send form back to dashboard via context, state, or server
    // For now, we just log and go back
    console.log('Updated Invoice:', form);
    // navigate.push('/payment'); // or your actual dashboard route
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Invoice</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Student Name</label>
          <input
            type="text"
            value={form.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full mt-1 border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={form.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full mt-1 border px-3 py-2 rounded"
          />
        </div>
        {/* Add more fields as required like paymentMode, dates, etc. */}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditInvoice;
