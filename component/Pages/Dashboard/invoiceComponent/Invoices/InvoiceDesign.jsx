import React from "react";

/* =========================
   HELPERS
========================= */

// const formatCurrency = (value) =>
//   `₹${(value || 0).toFixed(2)}`;

const formatCurrency = (value) => {
  const num = Number(value);

  if (isNaN(num)) return "₹0.00";

  return `₹${num.toFixed(2)}`;
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Date(
    dateStr
  ).toLocaleDateString(
    "en-IN",
    options
  );
};

/* =========================
   NUMBER TO WORDS
========================= */

const numberToWordsIndian = (
  num
) => {

  const a = [
    '', 'One', 'Two',
    'Three', 'Four',
    'Five', 'Six',
    'Seven', 'Eight',
    'Nine', 'Ten',
    'Eleven', 'Twelve',
    'Thirteen', 'Fourteen',
    'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen',
    'Nineteen',
  ];

  const b = [
    '', '', 'Twenty',
    'Thirty', 'Forty',
    'Fifty', 'Sixty',
    'Seventy', 'Eighty',
    'Ninety',
  ];

  const convert = (n) => {

    if (n < 20)
      return a[n];

    if (n < 100)
      return (
        b[Math.floor(n / 10)] +
        (n % 10
          ? ` ${a[n % 10]}`
          : '')
      );

    if (n < 1000)
      return (
        a[Math.floor(n / 100)] +
        ' Hundred' +
        (n % 100
          ? ` and ${convert(n % 100)}`
          : '')
      );

    if (n < 100000)
      return (
        convert(
          Math.floor(n / 1000)
        ) +
        ' Thousand ' +
        convert(n % 1000)
      );

    if (n < 10000000)
      return (
        convert(
          Math.floor(n / 100000)
        ) +
        ' Lakh ' +
        convert(n % 100000)
      );

    return (
      convert(
        Math.floor(n / 10000000)
      ) +
      ' Crore ' +
      convert(n % 10000000)
    );
  };

  return `Rupees ${convert(
    Math.floor(num)
  )} Only`;
};

/* =========================
   COMPONENT
========================= */

const InvoiceDesign = ({
  invoiceData
}) => {

  const {
    name,
    email,
    phone,
    date,
    location,
    mode,
    remark,
    selectedCourses,
    paymentMethod,
    paymentType,
    paidCourseFee,
    paidCgst,
    paidSgst,
    totalAmount,
    paidAmount,
    installments,
    companyName,
    chequeNumber,
    bankName,
    invoiceNumber,
    previousPaidTotal,
  } = invoiceData;

  const balance =
    totalAmount -
    (paidAmount +
      previousPaidTotal);

  return (

    <div className="
      max-w-4xl
      mx-auto
      bg-white
      p-8
      border
      shadow
    ">

      {/* HEADER */}

      <div className="
        flex
        justify-between
        mb-8
      ">

        <div>

          <h1 className="
            text-3xl
            font-bold
          ">
            INVOICE
          </h1>

          <p>
            Invoice Date:
            {" "}
            {formatDate(date)}
          </p>

          <p>
            Invoice No:
            {" "}
            {invoiceNumber}
          </p>

        </div>

        <div className="text-right">

          <img
            src={
              companyName === "ADBIZIT"
                ? "/images/logo/adbizit.webp"
                : "/images/logo/digi-logo.webp"
            }
            alt="logo"
            className="h-12 ml-auto"
          />

          <p className="mt-2">
            {companyName}
          </p>

          <p>
            Mumbai,
            Maharashtra
          </p>

        </div>

      </div>

      {/* CUSTOMER */}

      <div className="
        border-y
        py-4
        mb-8
      ">

        <h2 className="
          text-xl
          font-semibold
          mb-2
        ">
          Customer Details
        </h2>

        <p>
          <strong>Name:</strong>
          {" "}
          {name}
        </p>

        <p>
          <strong>Email:</strong>
          {" "}
          {email}
        </p>

        <p>
          <strong>Phone:</strong>
          {" "}
          {phone}
        </p>

        <p>
          <strong>Location:</strong>
          {" "}
          {location}
        </p>

        <p>
          <strong>Mode:</strong>
          {" "}
          {mode}
        </p>

      </div>

      {/* COURSES */}

      <div className="mb-8">

        <h2 className="
          text-xl
          font-semibold
          mb-4
        ">
          Courses
        </h2>

        <table className="
          w-full
          border
        ">

          <thead>

            <tr className="bg-gray-100">

              <th className="
                border
                px-4
                py-2
                text-left
              ">
                Course
              </th>

              <th className="
                border
                px-4
                py-2
                text-right
              ">
                Fees
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="
                border
                px-4
                py-2
              ">

                {selectedCourses.map(
                  (course, idx) => (
                    <div key={idx}>
                      {course}
                    </div>
                  )
                )}

              </td>

              <td className="
                border
                px-4
                py-2
                text-right
              ">

                {formatCurrency(
                  totalAmount
                )}

              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* PAYMENT SUMMARY */}

      <div className="
        max-w-sm
        ml-auto
        border
        p-4
        rounded
        space-y-2
      ">

        <h2 className="
          text-xl
          font-semibold
        ">
          Payment Summary
        </h2>

        <div className="
          flex
          justify-between
        ">
          <span>
            Payment Method
          </span>

          <span>
            {paymentMethod}
          </span>
        </div>

        {paymentMethod ===
          "Cheque" && (
          <>
            <div className="
              flex
              justify-between
            ">
              <span>
                Bank Name
              </span>

              <span>
                {bankName}
              </span>
            </div>

            <div className="
              flex
              justify-between
            ">
              <span>
                Cheque No
              </span>

              <span>
                {chequeNumber}
              </span>
            </div>
          </>
        )}

        <div className="
          flex
          justify-between
        ">
          <span>
            CGST
          </span>

          <span>
            {formatCurrency(
              paidCgst
            )}
          </span>
        </div>

        <div className="
          flex
          justify-between
        ">
          <span>
            SGST
          </span>

          <span>
            {formatCurrency(
              paidSgst
            )}
          </span>
        </div>

        <div className="
          flex
          justify-between
          font-bold
        ">
          <span>
            Total
          </span>

          <span>
            {formatCurrency(
              totalAmount
            )}
          </span>
        </div>

        <div className="
          flex
          justify-between
        ">
          <span>
            Paid
          </span>

          <span>
            {formatCurrency(
              paidAmount
            )}
          </span>
        </div>

        <div className="
          flex
          justify-between
          text-red-600
          font-bold
        ">
          <span>
            Balance
          </span>

          <span>
            {formatCurrency(
              balance
            )}
          </span>
        </div>

        <div className="
          text-sm
          italic
          text-gray-600
        ">

          (
          {numberToWordsIndian(
            totalAmount
          )}
          )

        </div>

      </div>

      {/* SIGNATURE */}

      {paymentType ===
        "full" && (

        <div className="
          mt-16
          text-right
        ">

          <h2 className="
            text-lg
            font-bold
            italic
          ">
            Siddharth Mehta
          </h2>

          <p>
            Authorized Signature
          </p>

        </div>
      )}

    {remark && (
  <div className="mt-6 border-t pt-4">
    <h3 className="font-semibold">Remarks</h3>
    <p className="text-sm text-gray-700 mt-1">
      {remark}
    </p>
  </div>
)}

      {/* FOOTER */}

      <div className="
        mt-12
        text-center
        text-sm
        text-gray-500
      ">

        This is a
        system-generated invoice.

      </div>

    </div>
  );
};

export default InvoiceDesign;