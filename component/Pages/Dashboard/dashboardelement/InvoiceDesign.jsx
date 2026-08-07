import React from "react";

// Format ₹ currency
const formatCurrency = (value) => `₹${(value || 0).toFixed(2)}`;

// Format date to "dd Mon yyyy"
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(dateStr).toLocaleDateString("en-IN", options);
};


const numberToWordsIndian = (num) => {
  const a = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
  ];
  const b = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
  ];

  const convert = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + a[n % 10] : '');
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 !== 0 ? ' and ' + convert(n % 100) : '');
    if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 !== 0 ? ' ' + convert(n % 1000) : '');
    if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 !== 0 ? ' ' + convert(n % 100000) : '');
    return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 !== 0 ? ' ' + convert(n % 10000000) : '');
  };

  const integerPart = Math.floor(num);
  const decimalPart = Math.round((num - integerPart) * 100);

  let words = `Rupees ${convert(integerPart)} Only`;
  if (decimalPart > 0) {
    words = `Rupees ${convert(integerPart)} and Paise ${convert(decimalPart)} Only`;
  }

  return words;
};



// Header
const Header = ({ companyName, date, invoiceNumber, dueDate }) => (
  <div className="flex justify-between items-start mb-8">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
      <p className="text-sm text-gray-500 mt-3">Invoice Date: {formatDate(date)}</p>
      {invoiceNumber && <p className="text-sm text-gray-500">Invoice No: {invoiceNumber}</p>}
      {dueDate && <p className="text-sm text-gray-500">Due Date: {formatDate(dueDate)}</p>}
    </div>
    <div className="text-right">
      <div className="flex justify-end">
        <img
          src={
            companyName === "ADBIZIT"
              ? "/images/logo/adbizit.webp"
              : "/images/logo/digi-logo.webp"
          }
          alt={`${companyName} Logo`}
          loading="lazy"
          className="mb-2 object-contain"
          style={{ 
            height: '48px',         // or '40px' for smaller logo
            maxWidth: '180px',      // cap width to prevent huge scaling
            filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.3))', }}
        />
      </div>
      {/* <div className="text-sm text-gray-600">www.{companyName}.com</div> */}
      <div className="text-sm text-gray-600 mt-2">
        303, A Wing, Vertex Vikas, Near Court Lane,
        <br />
        Andheri (East), Mumbai - 400069
      </div>
      <div className="text-sm text-gray-600 mt-1">+91 81690 04863</div>
      <div className="text-sm text-gray-600">info@adbizit.com</div>
      <div className="text-sm text-gray-600">{companyName === "Digifine" ? 'GSTIN: 27DIXPM9929N1ZT' : companyName === "Digifine Academy" ? "GSTIN: 27AAWFD3957H1ZT" : null }</div>
    </div>
  </div>
);

// Customer Info
const CustomerDetails = ({ name, email, phone, location, mode ,invoiceNumber }) => (
  <div className="mb-8 border-t border-b border-gray-300 py-4">
    <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Location:</strong> {location}</p>
    <p><strong>Mode:</strong> {mode}</p>
    {/* <p><strong>invoiceNumber:</strong> {invoiceNumber}</p> */}
    {invoiceNumber && <p><strong>Invoice No:</strong> {invoiceNumber}</p>}
  </div>
);

// Course Table
const CoursesTable = ({ selectedCourses = [], baseAmount = 0 , totalAmount = 0 , paidAmount = 0}) => {
  const perCoursePrice = selectedCourses.length
    ? baseAmount / selectedCourses.length
    : 0;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Courses Enrolled</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Course</th>
            <th className="border px-4 py-2 text-right">TotalCourse Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {/* {selectedCourses.map((course, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border px-4 py-2">{course.name}</td>
              <td className="border px-4 py-2 text-right">
                {/* {formatCurrency(perCoursePrice)} */}
            {/*    {formatCurrency(totalAmount)}

              </td>
            </tr>
          ))} */}

<tr>
  <td className="border px-4 py-2">
    {selectedCourses.map((course, idx) => (
      <div key={idx}>{course.name}</div>
    ))}
  </td>
  <td className="border px-4 py-2 text-right">
    {formatCurrency(totalAmount)}
  </td>
</tr>

        </tbody>
      </table>
    </div>
  );
};



// Payment Summary
const PaymentSummary = ({
  paymentMethod,
  bankName,
  checkNumber,
  paymentType,
  installments,
  courseFee,
  cgst,
  sgst,
  totalAmount,
  paidAmount,
  previousPaidTotal,
}) => {
  const totalPaidIncludingPrevious = (paidAmount || 0) + (previousPaidTotal || 0);
  const balance = totalAmount - totalPaidIncludingPrevious;


  let paymentStatus = "Paid";
  let statusColor = "text-green-600";

  if (balance > 0) {
    paymentStatus = "Pending";
    statusColor = "text-red-600";
  } else if (balance < 0) {
    paymentStatus = "Overpaid";
    statusColor = "text-blue-600";
  }

  // console.log({
  //   totalAmount,
  //   paidAmount,
  //   previousPaidTotal,
  //   balance: totalAmount - paidAmount  - previousPaidTotal
  // });

  const paidAmoutWGST = paidAmount / 1.18


  return (
    <div className="mb-8 max-w-sm ml-auto border border-gray-300 p-4 rounded text-sm space-y-2">
      <h2 className="text-xl font-semibold mb-3">Payment Summary</h2>

      <div className="flex justify-between">
        <span>Payment Method:</span>
        <span>{paymentMethod}</span>
      </div>

      {paymentMethod === "Cheque" && bankName && (
        <div className="flex justify-between">
          <span>Bank Name:</span>
          <span>{bankName}</span>
        </div>
      )}

      {paymentMethod === "Cheque" && checkNumber && (
        <div className="flex justify-between">
          <span>Check Number:</span>
          <span>{checkNumber}</span>
        </div>
      )}

      <div className="flex justify-between">
        <span>Payment Type:</span>
        <span>
          {paymentType === "full" ? "Full Payment" : `${installments} months Installments`}
        </span>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="flex justify-between font-medium">
        <span>Fees Paid (Without GST):</span>
        <span>{formatCurrency(paidAmoutWGST)}</span>
      </div>

      <div className="flex justify-between">
        <span>CGST (9%):</span>
        <span>{formatCurrency(cgst)}</span>
      </div>

      <div className="flex justify-between">
        <span>SGST (9%):</span>
        <span>{formatCurrency(sgst)}</span>
      </div>

      <div className="flex justify-between font-semibold border-t pt-2">
        <span>Total Fees (incl. GST):</span>
        <span>{formatCurrency(totalAmount)}</span>
      </div>

      <div className="text-sm italic text-gray-600">
      (In words: {numberToWordsIndian(totalAmount)})
      </div>

      {previousPaidTotal > 0 && (
  <div className="flex justify-between">
    <span>Previously Paid:</span>
    <span>{formatCurrency(previousPaidTotal)}</span>
  </div>
)}


      <div className="flex justify-between">
        <span>Fees Paid (incl GSt):</span>
        <span>{formatCurrency(paidAmount)}</span>
      </div>

      <div className={`flex justify-between font-bold text-lg border-t pt-2 ${statusColor}`}>
        <span>Balance Fees:</span>
        <span>{formatCurrency(balance)}</span>
      </div>

      <div className={`text-right font-semibold ${statusColor}`}>
        Status: {paymentStatus}
      </div>
    </div>
  );
};

// Signature (only for full payment)
const SignatureBlock = ({ signatureImg, paymentType , }) =>
  paymentType === "full" ? (
    <div className="mt-16 max-w-xs ml-auto text-center">
      {/* {signatureImg && (
        <img
          src={signatureImg}
          alt="Authorized Signature"
          className="mx-auto mb-2 h-16 object-contain"
          style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.3))" }}
        />
      )} */}
      <h2 className="text-lg font-bold italic text-gray-800 tracking-wider">
  Siddharth Mehta
</h2>
      <div className="border-t border-gray-500 pt-1 text-sm font-semibold">
        Authorized Digital Signature
      </div>
    </div>
  ) : null;

// Footer
const FooterNote = (remark) => (
  <>
<div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
    This is a system-generated invoice. There is no need for a physical stamp.
  </div>
  </>
  
);

// Main Invoice Design
const InvoiceDesign = ({
  name,
  email,
  phone,
  date,
  location,
  mode,
  selectedCourses,
  paymentMethod,
  paymentType,
  courseFee,
  cgst,
  sgst,
  totalAmount,
  paidAmount,
  installments,
  signatureImg = "/images/logo/digi-logo.svg",
  companyName,
  checkNumber,
  bankName,
  invoiceNumber,
  dueDate,
  previousPaidTotal,
  remark,
}) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md border border-gray-300 print:shadow-none print:border print:p-6 print:max-w-full">
      <Header {...{ companyName, date, invoiceNumber, dueDate }} />
      <CustomerDetails {...{ name, email, phone, location, mode ,invoiceNumber}} />
      <CoursesTable selectedCourses={selectedCourses} baseAmount={courseFee} paidAmount={paidAmount} totalAmount={totalAmount} />
      <PaymentSummary
        {...{
          paymentMethod,
          bankName,
          checkNumber,
          paymentType,
          installments,
          courseFee,
          cgst,
          sgst,
          totalAmount,
          paidAmount,
          previousPaidTotal,
        }}
      />
      <SignatureBlock {...{ signatureImg, paymentType,remark }} />
      {remark && (
  <div className="mt-8 border-t border-gray-300 pt-4">
    <h3 className="text-lg font-semibold mb-2">
      Remarks
    </h3>

    <p className="text-gray-700 whitespace-pre-line">
      {remark}
    </p>
  </div>
)}
      <FooterNote />
    </div>
  );
};

export default InvoiceDesign;