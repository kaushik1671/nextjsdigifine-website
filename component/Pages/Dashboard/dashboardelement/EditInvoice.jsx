import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouter } from "next/navigation";


const EditInvoice = () => {
  const { state } = useLocation();
  const navigate = useRouter();

  const [formData, setFormData] = useState(state.invoiceData);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentChange = (index, field, value) => {
    const updatedPayments = [...formData.payments];
    updatedPayments[index][field] = value;
    setFormData(prev => ({
      ...prev,
      payments: updatedPayments
    }));
  };

//   const handleSubmit = () => {
//     // In real use case: you'd update the global state or context or call an API
//     console.log('Updated Invoice:', formData);
//     alert('Invoice updated!');
//     navigate('/admindashboard/payment'); // back to dashboard
//   };

const savedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    const updatedInvoices = savedInvoices.map(inv =>
    inv.id === formData.id ? formData : inv
    );

const handleSubmit = () => {
    // const savedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    // const updatedInvoices = savedInvoices.map(inv =>
    //   inv.id === formData.id ? formData : inv
    // );
    const savedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];

  // If invoices are empty, this will fail silently.
  if (savedInvoices.length === 0) {
    alert("Error: No invoices found in localStorage.");
    return;
  }

  const updatedInvoices = savedInvoices.map(inv =>
    inv.id === formData.id ? formData : inv
  );

    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
  
    alert('Invoice updated!');
    navigate.push('/admindashboard/payment'); // this navigates back to InvoiceDashboard
  };
  
  

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Invoice: {formData.id}</h1>

      <div className="space-y-4">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full border p-2"
          placeholder="Student Name"
        />

        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full border p-2"
          placeholder="Location"
        />

        <input
          type="text"
          value={formData.paymentMode}
          onChange={(e) => handleChange('paymentMode', e.target.value)}
          className="w-full border p-2"
          placeholder="Payment Mode"
        />

        {formData.paymentMode === 'Cheque' && (
          <input
            type="text"
            value={formData.chequeNumber}
            onChange={(e) => handleChange('chequeNumber', e.target.value)}
            className="w-full border p-2"
            placeholder="Cheque Number"
          />
        )}

        <div>
          <label>Payments:</label>
          {formData.payments.map((payment, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <input
                type="number"
                value={payment.amount}
                onChange={(e) => handlePaymentChange(index, 'amount', parseFloat(e.target.value))}
                className="border p-2 w-1/2"
              />
              <input
                type="date"
                value={payment.date}
                onChange={(e) => handlePaymentChange(index, 'date', e.target.value)}
                className="border p-2 w-1/2"
              />
            </div>
          ))}
        </div>

        <input
          type="number"
          value={formData.totalAmount}
          onChange={(e) => handleChange('totalAmount', parseFloat(e.target.value))}
          className="w-full border p-2"
          placeholder="Total Amount"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditInvoice;
