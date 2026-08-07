// import axios from "axios";

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_URL;

// export const saveInvoice = async (
//   payload
// ) => {
//   const token =
//     localStorage.getItem("authToken");

//   const res = await axios.post(
//     `${API_BASE}/api/invoices`,
//     payload,
//     {
//       headers: {
//         Authorization:
//           `Bearer ${token}`,
//       },
//     }
//   );

//   return res.data;
// };

// export const fetchPreviousPayments =
//   async (
//     email,
//     courses,
//     companyName
//   ) => {
//     const res = await axios.get(
//       `${API_BASE}/api/invoices/payments`,
//       {
//         params: {
//           email,
//           courses: courses.join(","),
//           companyName,
//         },
//       }
//     );

//     return res.data;
//   };


// services/invoiceService.js

import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/**
 * Save invoice
 */
export const saveInvoice = async (payload) => {
  const token = localStorage.getItem("authToken");

  const res = await axios.post(
    `${API_BASE}/api/invoices`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/**
 * Fetch previous payments
 */
export const fetchPreviousPayments = async (
  email,
  courses,
  companyName
) => {
  const res = await axios.get(
    `${API_BASE}/api/invoices/payments`,
    {
      params: {
        email,
        courses: courses.join(","),
        companyName,
      },
    }
  );

  return res.data;
};