import React, { useState, useRef,useEffect, useCallback , lazy, Suspense} from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import axios from 'axios';
// import InvoiceDesign from './dashboardelement/InvoiceDesign';
const InvoiceDesign = lazy(()=> import('./dashboardelement/InvoiceDesign.jsx'))
// import InvoiceDesign from './dashboardelement/InvoiceDesign.jsx';

// import ReactToPrint from "react-to-print";


import { useLocation } from 'react-router-dom';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const Invoice = () => {
  const invoiceRef = useRef(null);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [formLocked, setFormLocked] = useState(false);

  const [invoiceReady, setInvoiceReady] = useState(false);

  const [courseOptions, setCourseOptions] = useState([
      {name:'Ai Powered Post Graduate Program in Digital Marketing'},
      {name:'Ai Powered Master\'s Program in Digital Marketing'},
      {name:'MBA Level Ai Powered Marketing & Data Analytics Program'},
      {name:'Digifine Graduate Digital Marketing Program'},
      {name:'Digifine Executive Digital Marketing Program'},
      {name:'Graphic Design Graduate Program'},
      {name:'Masters In Graphic Design & Video Editing Program'},
      {name:'Masters In Multimedia Graphic Design & Animation Program'},
      {name:'E-commerce Website Development'},
      {name:'Master\'s in Full Stack Developer Program'},
      {name:'Master\'s in Full Stack Developer Program (Python)'},
      {name:'Master\'s in Data Analytics Program'},
      {name:'Master\'s in Data Science Ai Program'},
      {name:'Data Science & Machine Learning Program'},
      {name:'Master\'s in Data Science, Machine Learning & Ai Program'},
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState('');

  const [form, setForm] = useState({
    companyName: 'Digifine',
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    mode:'',
    paymentMethod: '',
    paymentType: '',
    totalAmount: '',
    paidAmount: '',
    bankName: '',
    chequeNumber: '',
    installments: 1,
    remark: '',
  });

  const [paidCourseFee, setPaidCourseFee] = useState(0);
  const [paidCgst, setPaidCgst] = useState(0);
  const [paidSgst, setPaidSgst] = useState(0);

  const [showInvoice, setShowInvoice] = useState(false);
  const [isInvoiceSaved, setIsInvoiceSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [previousPaidTotal, setPreviousPaidTotal] = useState(0);

  const location = useLocation();

useEffect(() => {
  const incomingData = location.state?.invoiceData;

  if (incomingData) {
    setForm((prev) => ({
      ...prev,
      ...incomingData,
      totalAmount: incomingData.totalAmount?.toString() || '',
      paidAmount: incomingData.paidAmount?.toString() || '',
    }));

    if (incomingData.selectedCourses) {
      setSelectedCourses(incomingData.selectedCourses.map(c => c.name || c));
    }

    // Recalculate paid tax portions
    if (incomingData.paidAmount) {
      recalcFromPaidAmount(incomingData.paidAmount);
    }

    // Optionally set invoice number if it's coming
    if (incomingData.invoiceNumber) {
      setInvoiceNumber(incomingData.invoiceNumber);
    }
  }
}, [location.state]);

  


  const fetchPreviousPayments = async (email,courses) => {
    try {
      const res = await axios.get(`${API_BASE}/api/invoices/payments`, {
        params: {
          email,
          courses: courses.join(','),
          companyName: form.companyName || 'Digifine', // <-- include this
        },
      });setPreviousPaidTotal(parseFloat(res.data.totalPaid || 0));}
      catch (err) {
      console.error("Error fetching previous payments:", err);
      setPreviousPaidTotal(0);
    }
  };

  const totalPaidSoFar = parseFloat(previousPaidTotal || 0);
  const remaining = parseFloat(previousPaidTotal || 0);

  

  useEffect(() => {
    if (form.email && selectedCourses.length > 0) {
      fetchPreviousPayments(form.email, selectedCourses);
    }
  }, [form.email, selectedCourses]);
  

  const formatCurrency = (num) => Number(num).toFixed(2);

  const recalcFromPaidAmount = useCallback((paidStr) => {
    const paid = parseFloat(paidStr);
    if (isNaN(paid) || paid < 0) {
      setPaidCourseFee(0);
      setPaidCgst(0);
      setPaidSgst(0);
      return;
    }
    const fee = paid / 1.18;
    setPaidCourseFee(fee);
    setPaidCgst(fee * 0.09);
    setPaidSgst(fee * 0.09);
  }, []);

  const handlePaidAmountChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, paidAmount: val }));
    recalcFromPaidAmount(val);
  };

  const handleTotalAmountChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, totalAmount: val }));
  };

  const handleSelectedCoursesChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    setSelectedCourses(options);
  };

  const handleAddCourse = () => {
    const trimmedName = newCourseName.trim();
    if (!trimmedName) return alert('Course name cannot be empty');
if (courseOptions.some((c) => c.name.toLowerCase() === trimmedName.toLowerCase()))
  return alert('Course already exists');

setCourseOptions([...courseOptions, { name: trimmedName }]);
setSelectedCourses((prev) => [...prev, trimmedName]);
setNewCourseName('');


    const updatedCourses = [...courseOptions, { name: trimmedName }];
    const updatedSelected = [...selectedCourses, trimmedName];

    setCourseOptions(updatedCourses);
    setSelectedCourses(updatedSelected);
    setNewCourseName('');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const isValidPhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // For Indian numbers
    return phoneRegex.test(phone);
  };

  const isFormValid = () => {
    const {
      name,
      email,
      phone,
      date,
      location,
      mode,
      paymentMethod,
      paymentType,
      totalAmount,
      paidAmount,
    } = form;

    if (!name || !email || !phone || !date || !location || !mode || !paymentMethod || !paymentType)
      return false;

    if (!isValidEmail(email)) return false;
  if (!isValidPhone(phone)) return false;

    if (!totalAmount || isNaN(totalAmount) || parseFloat(totalAmount) < 0) return false;
    if (paidAmount === '' || isNaN(paidAmount) || parseFloat(paidAmount) < 0) return false;

    if (selectedCourses.length === 0) return false;
    if (paymentMethod === 'Cheque' && (!form.bankName || !form.chequeNumber)) return false;
    if (paymentType === 'partial' && (!form.installments || form.installments < 1)) return false;

    return true;
  };

  const handleInvoiceGeneration = async () => {
    if (!isFormValid()) {
      alert('Please fill all required fields and select courses correctly.');
      return;
    }
    if (isInvoiceSaved) {
      setShowInvoice(true); // just show the invoice without saving again
      setFormLocked(true);
      return;
    }
    setShowInvoice(true);
    try {
      await handleSaveInvoice();  // saves invoice and sets invoiceNumber state
      setShowInvoice(true);       // then show invoice preview with updated number
      setFormLocked(true);
    } finally {
      setIsSaving(false);
    }
  };
  

  const handleSaveInvoice = async () => {
    if (isInvoiceSaved) return;
    setIsSaving(true);
    try {
      const total = parseFloat(form.totalAmount);
      const paid = parseFloat(form.paidAmount);
      const remaining = (total - paid).toFixed(2);

      const payload = {
        ...form,
        paymentType: form.paymentType === 'full' ? 'Full Payment' : 'Partial Payment',
        selectedCourses: selectedCourses.map((name) => ({ name })),
        courseFee: formatCurrency(paidCourseFee),
        cgst: formatCurrency(paidCgst),
        sgst: formatCurrency(paidSgst),
        totalAmount: total.toFixed(2),
        remainingAmount: remaining,
        installments: form.paymentType === 'partial' ? form.installments : 1,
      };

      const token = localStorage.getItem("authToken")

      const response = await axios.post(`${API_BASE}/api/invoices`, payload,{
        headers: {
          Authorization: `Bearer ${token}`,
        }, }
      );

      const {
        invoiceNumber,
        previousPaidTotal: updatedTotalPaid,
        paidAmount,
        totalAmount,
      } = response.data;

      setInvoiceNumber(invoiceNumber);
      // setPreviousPaidTotal(parseFloat(updatedTotalPaid));
      alert('Invoice saved successfully!');
      
      setIsInvoiceSaved(true);
    } catch (error) {
      alert('Failed to save invoice. ' + (error.response?.data?.error || error.message));
      setIsInvoiceSaved(false);
    } finally {
      setIsSaving(false);
    }
  };

  const resetInvoiceForm = () => {
    setForm({
      companyName: 'Digifine',
      name: '',
      email: '',
      phone: '',
      date: '',
      location: '',
      paymentMethod: '',
      paymentType: '',
      totalAmount: '',
      paidAmount: '',
      bankName: '',
      chequeNumber: '',
      installments: 1,
      remark : '',
    });
    setSelectedCourses([]);
    setCourseOptions([
      {name:'Ai Powered Post Graduate Program in Digital Marketing'},
      {name:'Ai Powered Master\'s Program in Digital Marketing'},
      {name:'MBA Level Ai Powered Marketing & Data Analytics Program'},
      {name:'Digifine Graduate Digital Marketing Program'},
      {name:'Digifine Executive Digital Marketing Program'},
      {name:'Graphic Design Graduate Program'},
      {name:'Masters In Graphic Design & Video Editing Program'},
      {name:'Masters In Multimedia Graphic Design & Animation Program'},
      {name:'E-commerce Website Development'},
      {name:'Master\'s in Full Stack Developer Program'},
      {name:'Master\'s in Full Stack Developer Program (Python)'},
      {name:'Master\'s in Data Analytics Program'},
      {name:'Master\'s in Data Science Ai Program'},
      {name:'Data Science & Machine Learning Program'},
      {name:'Master\'s in Data Science, Machine Learning & Ai Program'},
    ]);
    setPaidCourseFee(0);
    setPaidCgst(0);
    setPaidSgst(0);
    setShowInvoice(false);
    setIsInvoiceSaved(false);
    setFormLocked(false);
  };

  useEffect(() => {
    if (showInvoice) {
      // Give React time to paint invoice
      const timer = setTimeout(() => setInvoiceReady(true), 300);
      return () => clearTimeout(timer);
    }
  }, [showInvoice]);

  const handleExportPDF = async () => {
    // const jsPDFModule = await import("jspdf");
    const { default: jsPDF } = await import("jspdf");
    // console.log(jsPDFModule)
    // const jsPDF = jsPDFModule.default;
    // const html2canvas = await import("html2canvas");
    const { default: html2canvas } = await import("html2canvas");

    if (!invoiceRef.current) return;

    const canvas = await html2canvas(invoiceRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/webp');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    let heightLeft = pdfHeight;
    let position = 0;

    pdf.addImage(imgData, 'webp', 0, position, pageWidth, pdfHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'webp', 0, position, pageWidth, pdfHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`Invoice-${form.name}-${form.date}.pdf`);
    // resetInvoiceForm();
  };

  const handlePrint = () =>{
    const invoiceEl = document.getElementById("invoice-print");
    // console.log("Invoice innerHTML:", invoiceEl?.innerHTML);
    if (!invoiceEl) {
      alert("Invoice not ready yet.");
      return;
    }
    if (!invoiceReady) {
      alert("Invoice is still loading. Please wait a moment and try again.");
      return;
    }
    window.print();
  };


  return (
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
        
       {/* All other form components unchanged... */}
       <h2 className="text-3xl font-bold text-center text-gray-800">Create Invoice</h2>
        {/* Company selection */}
        <div>
         <label className="block mb-1 font-medium">Select Company:</label>
         <select
          name="companyName"
          value={form.companyName}
          onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        >
          {['Digifine Academy', 'ADBIZIT', 'Digifine'].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Personal and contact info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['name', 'email', 'phone', 'date'].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium capitalize">{field}:</label>
            <input
              type={field === 'date' ? 'date' : 'text'}
              name={field}
              value={form[field]}
              onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
              className={`w-full border px-3 py-2 rounded ${
                field === 'email' && form.email && !isValidEmail(form.email) ? 'border-red-500' : ''
              }`}
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
{/* Show error only for email field */}
{field === 'email' && form.email && !isValidEmail(form.email) && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
      )}

      {/* Show error only for phone field */}
      {field === 'phone' && form.phone && !isValidPhone(form.phone) && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number.</p>
      )}
          </div>
        ))}
      </div>

      {/* Location selection */}
      <div>
        <label className="block mb-1 font-medium">Location:</label>
        <select
          name="location"
          value={form.location}
          onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        >
          <option value="">Select Location</option>
          {['Andheri', 'Vashi', 'Pune','Hyderabad', 'Online', 'Offline'].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>


      <div>
        <label className="block mb-1 font-medium">Mode:</label>
        <select
          name="mode"
          value={form.mode}
          onChange={(e) => setForm((prev) => ({ ...prev, mode: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        >
          <option value="">Select Mode</option>
          {['Online', 'Offline'].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>


      {/* Courses section */}
      <div>
        <label className="block mb-1 font-medium">Courses (select):</label>
        <select
          multiple
          value={selectedCourses}
          onChange={handleSelectedCoursesChange}
          className="w-full border px-3 py-2 rounded h-32"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        >
          {courseOptions.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Add new course */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="New Course Name"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            className="flex-grow border px-3 py-2 rounded"
            // disabled={isSaving}
            disabled={isSaving || formLocked}

          />
          <button
            onClick={handleAddCourse}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            // disabled={isSaving}
            disabled={isSaving || formLocked}

          >
            Add Course
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <label className="block mb-1 font-medium">Payment Method:</label>
        <div className="flex flex-wrap gap-3">
          {['Cash', 'Credit Card', 'Google Pay', 'Cheque','Finance','Bank Transfer',"UPI"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={form.paymentMethod === method}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: e.target.value,
                    bankName: '',
                    chequeNumber: '',
                  }))
                }
                // disabled={isSaving}
                disabled={isSaving || formLocked}

              />
              {method}
            </label>
          ))}
        </div>

        {/* Show extra fields for Check */}
        {form.paymentMethod === 'Cheque' && (
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Bank Name"
              value={form.bankName}
              onChange={(e) => setForm((prev) => ({ ...prev, bankName: e.target.value }))}
              className="border px-3 py-2 rounded"
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
            <input
              type="text"
              placeholder="cheque Number"
              value={form.chequeNumber}
              onChange={(e) => setForm((prev) => ({ ...prev, chequeNumber: e.target.value }))}
              className="border px-3 py-2 rounded"
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
          </div>
        )}
      </div>

      {/* Payment Type */}
      <div>
        <label className="block mb-1 font-medium">Payment Type:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="full"
              checked={form.paymentType === 'full'}
              onChange={(e) => setForm((prev) => ({ ...prev, paymentType: e.target.value, installments: 1 }))}
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
            Full Payment
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="partial"
              checked={form.paymentType === 'partial'}
              onChange={(e) => setForm((prev) => ({ ...prev, paymentType: e.target.value }))}
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
            Partial Payment
          </label>
        </div>

        {/* Show installments only if Partial Payment */}
        {form.paymentType === 'partial' && (
          <div className="mt-3">
            <label className="block mb-1 font-medium">Number of Installments:</label>
            <input
              type="number"
              min="1"
              value={form.installments}
              onChange={(e) => setForm((prev) => ({ ...prev, installments: e.target.value }))}
              className="w-24 border px-3 py-2 rounded"
              // disabled={isSaving}
              disabled={isSaving || formLocked}

            />
          </div>
        )}
      </div>

      {/* Total Amount (includes GST) */}
      <div>
        <label className="block mb-1 font-medium">Total Amount (including GST):</label>
        <input
          type="number"
          min="0"
          value={form.totalAmount}
          onChange={handleTotalAmountChange}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        />
      </div>

      {/* Paid Amount (includes GST) */}
      <div>
        <label className="block mb-1 font-medium">Paid Amount (including GST):</label>
        <input
          type="number"
          min="0"
          value={form.paidAmount}
          onChange={handlePaidAmountChange}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          disabled={isSaving || formLocked}

        />
      </div>

      {/* Show CGST and SGST from Total Amount */}
      <div className="flex gap-6">
        <div>
          <label className="block mb-1 font-medium">CGST (9%):</label>
          <input
            type="text"
            value={formatCurrency(paidCgst)}
            readOnly
            className="w-40 border px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">SGST (9%):</label>
          <input
            type="text"
            value={formatCurrency(paidSgst)}
            readOnly
            className="w-40 border px-3 py-2 rounded bg-gray-100"
          />
        </div>
      </div>

      
      <div className="mt-6">
  <label className="block mb-1 font-medium">
    Remark / Notes
  </label>

  <textarea
    value={form.remark}
onChange={(e) =>
  setForm((prev) => ({
    ...prev,
    remark: e.target.value,
  }))
}
    className="w-full border px-3 py-2 rounded h-24"
    placeholder="Add any extra notes (optional)"
  />
</div>

       {/* Action Buttons: Generate, Print, PDF */}
       <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleInvoiceGeneration}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 disabled:opacity-50"
          disabled={isSaving || isInvoiceSaved}
        >
          {isSaving ? 'Saving...' : isInvoiceSaved ? 'Invoice Saved' : 'Generate Invoice'}
        </button>

        {showInvoice && (
          <>
            <button
              onClick={handlePrint}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Print
            </button>
            <button
              onClick={handleExportPDF}
              className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
            >
              Export as PDF
            </button>
          </>
        )}


<button
    onClick={resetInvoiceForm}
    className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
  >
    Reset Invoice
  </button>
      </div>

      {/* Invoice Preview (renders only after generating) */}
      {showInvoice && (
          <Suspense fallback={<div>loading.....</div>}>
        <div ref={invoiceRef} id="invoice-print" className="-6  rounded bg-gray-50">
<InvoiceDesign
  name={form.name}
  email={form.email}
  invoiceNumber={invoiceNumber}
  phone={form.phone}
  date={form.date}
  location={form.location}
  mode={form.mode}
  selectedCourses={selectedCourses.map((name) => ({ name }))}
  paymentMethod={form.paymentMethod}
  paymentType={form.paymentType}
  courseFee={paidCourseFee}
  cgst={paidCgst}
  sgst={paidSgst}
  previousPaidTotal={parseFloat(previousPaidTotal)}
  totalAmount={parseFloat(form.totalAmount)}
  paidAmount={parseFloat(form.paidAmount)}
  installments={form.installments}
  companyName={form.companyName}
  checkNumber={form.chequeNumber}
  bankName={form.bankName}
  remark = {form.remark}
/>

        </div>
</Suspense>

      )}
    </div>  
  );
};

export default Invoice;



























// import {
//   useRef,
//   useState,
//   Suspense
// } from "react";

// import Loader
//   from "./invoiceComponent/Invoices/Loader";

// import ActionButtons
//   from "./invoiceComponent/Invoices/ActionButtons";

// import InvoicePreview
//   from "./invoiceComponent/Invoices/InvoicePreview";

// import InvoiceForm
//   from "./invoiceComponent/Invoices/InvoiceForm";

// import {
//   useInvoiceForm
// } from "./invoiceComponent/hooks/useInvoiceForm";

// import {
//   useInvoiceCalculation
// } from "./invoiceComponent/hooks/useInvoiceCalculation";

// import {
//   usePreviousPayments
// } from "./invoiceComponent/hooks/usePreviousPayments";

// import {
//   validateInvoiceForm
// } from "./invoiceComponent/utils/validation";

// import {
//   exportInvoicePDF
// } from "./invoiceComponent/utils/pdfExport";

// import {
//   printInvoice
// } from "./invoiceComponent/utils/printInvoice";

// import {
//   COURSES
// } from "./invoiceComponent/constants/courses";

// const Invoice = () => {

//   const invoiceRef = useRef(null);

//   const [
//     showInvoice,
//     setShowInvoice
//   ] = useState(false);

//   const [
//     invoiceReady,
//     setInvoiceReady
//   ] = useState(false);

//   const [
//     selectedCourses,
//     setSelectedCourses
//   ] = useState([]);

//   const [
//     courseOptions,
//     setCourseOptions
//   ] = useState(COURSES);

//   const {
//     form,
//     updateField
//   } = useInvoiceForm();

//   const {
//     paidCourseFee,
//     paidCgst,
//     paidSgst,
//     recalcFromPaidAmount
//   } = useInvoiceCalculation();

//   const {
//     previousPaidTotal
//   } = usePreviousPayments(
//     form.email,
//     selectedCourses,
//     form.companyName
//   );

//   const handleGenerate = () => {

//     const error =
//       validateInvoiceForm(
//         form,
//         selectedCourses
//       );

//     if (error) {
//       alert(error);
//       return;
//     }

//     setShowInvoice(true);

//     setTimeout(() => {
//       setInvoiceReady(true);
//     }, 300);
//   };

//   const handleReset = () => {

//     window.location.reload();

//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto">

//       <h1 className="text-3xl font-bold mb-6">
//         Create Invoice
//       </h1>

//       <InvoiceForm
//         form={form}
//         updateField={updateField}
//         selectedCourses={
//           selectedCourses
//         }
//         setSelectedCourses={
//           setSelectedCourses
//         }
//         courseOptions={
//           courseOptions
//         }
//         setCourseOptions={
//           setCourseOptions
//         }
//         paidCgst={paidCgst}
//         paidSgst={paidSgst}
//         recalcFromPaidAmount={
//           recalcFromPaidAmount
//         }
//       />

//       <ActionButtons
//         onGenerate={
//           handleGenerate
//         }
//         onPrint={() =>
//           printInvoice(
//             invoiceReady,
//             invoiceRef.current
//           )
//         }
//         onPDF={() =>
//           exportInvoicePDF(
//             invoiceRef,
//             `Invoice-${form.name}-${form.date}.pdf`
//           )
//         }
//         onReset={handleReset}
//         showInvoice={
//           showInvoice
//         }
//       />

//       {showInvoice && (
//         <Suspense
//           fallback={<Loader />}
//         >
//           <InvoicePreview
//             invoiceRef={invoiceRef}
//             invoiceData={{
//               ...form,
//               selectedCourses,
//               paidCourseFee,
//               paidCgst,
//               paidSgst,
//               previousPaidTotal,
//             }}
//           />
//         </Suspense>
//       )}

//     </div>
//   );
// };

// export default Invoice;