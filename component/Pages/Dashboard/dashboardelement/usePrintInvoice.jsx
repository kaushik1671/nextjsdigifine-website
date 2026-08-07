
import { useState } from "react";
import InvoiceDesign from "./InvoiceDesign.jsx"; 

export function usePrintInvoice() {
  const [printInvoice, setPrintInvoice] = useState(null);

 

  const handlePrint = (rawInvoiceData) => {
    // ✅ Directly use backend fields
    const invoiceData = {
      name: rawInvoiceData.client_name,
      email: rawInvoiceData.client_email,
      invoiceNumber: rawInvoiceData.invoice_number,
      phone: rawInvoiceData.client_phone,
      date: rawInvoiceData.invoice_date,
      location: rawInvoiceData.location,
      mode: rawInvoiceData.mode,
      selectedCourses: rawInvoiceData.selectedCourses?.map(c => ({ name: c })) || [],
      paymentMethod: rawInvoiceData.payment_method,
      paymentType: rawInvoiceData.payment_type,
      courseFee: Number(rawInvoiceData.courseFee) || 0,
      cgst: Number(rawInvoiceData.cgst) || 0,
      sgst: Number(rawInvoiceData.sgst) || 0,
      previousPaidTotal: Number(rawInvoiceData.previousPaidTotal) || 0,
      totalAmount: Number(rawInvoiceData.totalAmount) || 0,
      paidAmount: Number(rawInvoiceData.paidAmount) || 0,
      installments: rawInvoiceData.installment_months || 1,
      companyName: rawInvoiceData.company_name,
      checkNumber: rawInvoiceData.check_number,
      bankName: rawInvoiceData.bank_name,
    };


    setPrintInvoice(invoiceData);
    // console.log("Mapped invoice data:", invoiceData);

    setTimeout(() => {
      window.print();
    }, 800); 
  };
 
 
  window.onafterprint = () => {
    setPrintInvoice(null);
  };

  const PrintContainer = () =>
    printInvoice ? (
      <div id="invoice-print" className="p-6 rounded bg-gray-50">
        <InvoiceDesign {...printInvoice} />
      </div>
    ) : null;

  return { handlePrint, PrintContainer };
}