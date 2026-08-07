import React from "react";
 
export default function Payment() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 flex justify-center">
      
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
          Registration Successful
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Please complete your payment to confirm your admission
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT - QR */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Scan & Pay</h2>

            <img
              src="/images/qr.jpeg" //
              alt="QR Code"
              className="w-64 mx-auto border rounded-lg shadow"
            />

            {/* <p className="text-sm text-gray-500 mt-3">
              Scan using any UPI app
            </p> */}
          </div>

          {/* RIGHT - BANK DETAILS */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Bank Details
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><b>Account Name:</b> Digifine Academy LLP</p>
              <p><b>Account Number:</b> 50200095285300</p>
              <p><b>IFSC Code:</b> HDFC0000086</p>
              <p><b>Bank:</b> HDFC Bank</p>
              <p><b>Account Type:</b> Current Account</p>
              <p><b>Branch:</b> Vishal Hall Branch</p>
              <p><b>UPI Mobile:</b> 8879025425</p>
              <p><b>Name on UPI:</b> Siddharth Mehta</p>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          After payment, please share the screenshot with our team for confirmation.
        </div>

      </div>
    </div>
  );
}