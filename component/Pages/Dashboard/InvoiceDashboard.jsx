import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { useRouter } from "next/navigation";

import { usePrintInvoice } from './dashboardelement/usePrintInvoice';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const formatCurrency = (amt) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amt);

const formatDate = (dateStr) => {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const InvoiceDashboard = () => {
  const navigate = useRouter();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 30;

  const [sortOrder, setSortOrder] = useState('desc');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { handlePrint, PrintContainer } = usePrintInvoice();

  const [idSortOrder, setIdSortOrder] = useState(null); 
// null | 'asc' | 'desc'

const toggleIdSort = () => {
  setIdSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
};


  const fetchAndPrint = async (invoiceNumber) => {
    try {
      // 1️⃣ Get full invoice details (already contains everything)
      const { data: invoiceData } = await axios.get(
        `${API_BASE}/api/invoices/number/${invoiceNumber}`
      );
  
      // console.log("Invoice Data:", invoiceData);
  
      // 2️⃣ Send directly to print hook
      handlePrint(invoiceData);
  
    } catch (err) {
      console.error("Failed to fetch invoice for print:", err);
    }
  };




  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/api/invoices`);
        const data = res.data.map((inv) => ({
          id: inv.invoice_number,
          name: inv.client_name,
          email: inv.client_email || '-',
          phone: inv.client_phone || '-',
          company: inv.company_name || '-',
          location: inv.location || inv.company_name,
          mode: inv.mode,
          invoiceDate: inv.invoice_date,
          date: [inv.invoice_date, inv.due_date]
            .filter(Boolean)
            .map(formatDate),
          paymentMode: inv.payment_method,
          chequeNumber:
            inv.payment_method === 'Cheque'
              ? inv.check_number || '-'
              : '-',
          bankName:
            inv.payment_method === 'Cheque'
              ? inv.bank_name || '-'
              : '-',
          paymentType:
            inv.payment_type === 'Full Payment' ? 'full' : 'partial',
          installmentCount: inv.installment_months || 1,
          courses: inv.courses ? inv.courses.split(', ') : [],
          payments: [
            {
              amount: inv.paid_amount || inv.partial_total,
              date: formatDate(inv.invoice_date),
            },
          ],
          totalAmount:
            inv.total_amount ||
            inv.partial_total ||
            inv.paid_amount ||
            0,
          hasComments: inv.comment_count > 0
        }));
        setInvoices(data);
      } catch (e) {
        console.error('Error fetching invoices:', e);
        setError('Failed to load invoices');
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const token = localStorage.getItem("authToken")

  const openComments = async (invoiceId) => {
    setSelectedInvoiceId(invoiceId);
    setShowCommentModal(true);
  
    try {
      const res = await axios.get(
        `${API_BASE}/api/invoices/${invoiceId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(res.data.comments || []); // always an array
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };
  
  const addComment = async () => {
    if (!newComment.trim()) return;
  
    try {
      await axios.post(
        `${API_BASE}/api/invoices/${selectedInvoiceId}/comments`,
        { comment: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      setNewComment('');
      openComments(selectedInvoiceId); // refresh comments
    } catch (err) {
      console.error("Failed to add comment", err);
    }
  };

  const deleteInvoice = async (invoiceNumber) => {
    const password = prompt('Enter admin password to delete:');
    if (password !== 'qwertyuiop@7686') {
      alert('Incorrect password. Deletion aborted.');
      return;
    }
    if (!window.confirm('Are you sure you want to clear this invoice?'))
      return;
    try {
      await axios.delete(
        `${API_BASE}/api/invoices/${invoiceNumber}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }, }
      );
      setInvoices((prev) => prev.filter((i) => i.id !== invoiceNumber));
    } catch (e) {
      console.error('Failed to clear invoice:', e);
      alert('Failed to clear invoice');
    }
  };

  const handleGenerate = (invoiceData) => {
    navigate.push(`/admindashboard/invoice`, { state: { invoiceData } });
  };

  const exportToExcel = () => {
    const data = filteredInvoices.map((inv) => {
      // Calculate CGST, SGST, Total GST if not already in data
      const paidAmount = inv.payments?.[0]?.amount || 0;
      const courseFee = paidAmount / 1.18; // assuming 18% GST
      const cgst = courseFee * 0.09;
      const sgst = courseFee * 0.09;
      const totalGst = cgst + sgst;
  
      return {
        ID: inv.id,
        Name: inv.name,
        Email: inv.email,
        Phone: inv.phone,
        Company: inv.company,
        InvoiceDate: formatDate(inv.invoiceDate),
        DueDate: formatDate(inv.date?.[1]),
        Location: inv.location,
        Mode: inv.mode,
        PaymentMode: inv.paymentMode,
        ChequeNumber: inv.chequeNumber,
        BankName: inv.bankName,
        PaymentType: inv.paymentType,
        Installments: inv.installmentCount,
        Courses: inv.courses.join(', '),
        PaidAmount: paidAmount,
        TotalAmount: inv.totalAmount,
        // CourseFee: courseFee.toFixed(2),
        CGST: cgst.toFixed(2),
        SGST: sgst.toFixed(2),
        TotalGST: totalGst.toFixed(2),
      };
    });
  
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoices');
    XLSX.writeFile(wb, 'Invoices.xlsx');
  };

  // 🔍 Search & Filter
  const filteredInvoices = invoices
    .filter((inv) => {
      const matchesSearch =
        inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inv.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (inv.company && inv.company.toLowerCase().includes(searchQuery.toLowerCase())); // NEW

      const invoiceDateObj = inv.invoiceDate
        ? new Date(inv.invoiceDate)
        : null;
      const afterStart = startDate
        ? invoiceDateObj >= new Date(startDate)
        : true;
      const beforeEnd = endDate
        ? invoiceDateObj <= new Date(endDate)
        : true;

      return matchesSearch && afterStart && beforeEnd;
    })
    .sort((a, b) => {
      const dateA = a.invoiceDate ? new Date(a.invoiceDate) : 0;
      const dateB = b.invoiceDate ? new Date(b.invoiceDate) : 0;
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  // 📄 Pagination
  const indexOfLast = currentPage * invoicesPerPage;
  const indexOfFirst = indexOfLast - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirst,
    indexOfLast
  );
  const totalPages = Math.ceil(filteredInvoices.length / invoicesPerPage);

  let displayInvoices = [...currentInvoices];

if (idSortOrder) {
  displayInvoices.sort((a, b) =>
    idSortOrder === "asc"
      ? a.id.localeCompare(b.id)
      : b.id.localeCompare(a.id)
  );
}

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  if (loading) return <div className="p-6">Loading invoices...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;




  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Invoice Dashboard
      </h1>

      <PrintContainer/>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by ID, Name, or Email"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded w-64"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={exportToExcel}
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
        >
          Export to Excel
        </button>
        <button
          onClick={toggleSort}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Sort by Date ({sortOrder})
        </button>
        <button
  onClick={toggleIdSort}
  className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700"
>
  Sort ID ({idSortOrder || "off"})
</button>
      </div>

      <div className="overflow-x-auto border rounded-md shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {[
                'ID',
                'Name',
                'Email',
                'Phone',
                "Company",
                'Dates',
                'Location',
                'Learning Mode',
                'Payment Mode',
                'Cheque',
                'Bank',
                'Type',
                'Installs',
                'Courses',
                'Paid',
                'Total',
                'Actions',
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-xs font-semibold text-gray-700 uppercase text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentInvoices.length === 0 && (
              <tr>
                <td colSpan={15} className="text-center py-8">
                  No invoices found.
                </td>
              </tr>
            )}
            {displayInvoices.map((inv, idx) => (
              <tr
                key={inv.id}
                className={idx % 2 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2">{inv.id}</td>
                <td className="px-4 py-2">{inv.name}</td>
                <td className="px-4 py-2">{inv.email}</td>
                <td className="px-4 py-2">{inv.phone}</td>
                <td className="px-4 py-2">{inv.company}</td>
                <td className="px-4 py-2">{inv.date.join(', ')}</td>
                <td className="px-4 py-2">{inv.location}</td>
                <td className="px-4 py-2">{inv.mode}</td>
                <td className="px-4 py-2">{inv.paymentMode}</td>
                <td className="px-4 py-2">{inv.chequeNumber}</td>
                <td className="px-4 py-2">{inv.bankName}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      inv.paymentType === 'full'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {inv.paymentType}
                  </span>
                </td>
                <td className="px-4 py-2">{inv.installmentCount}</td>
                <td className="px-4 py-2">{inv.courses.join(', ')}</td>
                <td className="px-4 py-2">
                  {inv.payments.map((p, i) => (
                    <div key={i}>
                      {formatCurrency(p.amount)} on {p.date}
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2 font-semibold">
                  {formatCurrency(inv.totalAmount)}
                </td>
                <td className="px-4 py-2 space-y-2">
                  <button
                    onClick={() => handleGenerate(inv)}
                    className="bg-blue-600 px-3 py-1 w-full text-white rounded"
                  >
                    Generate
                  </button>
                  <button
                    onClick={() => deleteInvoice(inv.id)}
                    className="bg-red-600 px-3 py-1 w-full text-white rounded"
                  >
                    Delete
                  </button>
                  <button onClick={() => fetchAndPrint(inv.id)} 
                    className='bg-green-600 px-3 py-1 w-full text-white rounded' >
                      Print</button>
                      <button
  onClick={() => openComments(inv.id)}
  className="bg-purple-600 px-3 py-1 w-full text-white rounded"
>
  Comment
</button>
{showCommentModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white w-96 rounded-lg p-5 shadow-lg">
      <h2 className="text-lg font-bold mb-3">
        Comments - Invoice {selectedInvoiceId}
      </h2>

      <div className="max-h-48 overflow-y-auto mb-3 border p-2 rounded">
        {comments.length === 0 && (
          <p className="text-sm text-gray-500">No comments yet.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="mb-2 border-b pb-1">
            <p className="text-sm">{c.comment}</p>
            <p className="text-xs text-gray-400">
              {formatDate(c.created_at)}
            </p><p className="text-xs text-gray-400">
              created by : {c.user_name}
            </p>
          </div>
        ))}
      </div>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full border rounded p-2 text-sm mb-3"
      />

      <div className="flex justify-between">
        <button
          onClick={() => setShowCommentModal(false)}
          className="bg-gray-400 text-white px-4 py-1 rounded"
        >
          Close
        </button>
        <button
          onClick={addComment}
          className="bg-purple-600 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  </div>
)}
{inv.hasComments && (
  <div>
    
  <span className="inline-block w-2 h-2 bg-red-600 rounded-full" title="Has comments"></span>
  <span> check it </span>
  </div>)}
    <button
    onClick={() =>
      navigate.push(`/admindashboard/invoice/update`, {
        state: {
          invoiceData: inv,
          isEdit: true
        }
      })
    }
    className="bg-yellow-500 px-3 py-1 w-full text-white rounded"
  >
    Edit
  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📌 Pagination Controls */}
      <div className="flex flex-wrap justify-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
        

      </div>
    </div>
  );
};

export default InvoiceDashboard;