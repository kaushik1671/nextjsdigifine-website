import {
  useEffect,
  useState
} from "react";

import {
  fetchPreviousPayments
} from "../services/invoiceServices";

export const usePreviousPayments = (
  email,
  selectedCourses,
  companyName
) => {
  const [
    previousPaidTotal,
    setPreviousPaidTotal
  ] = useState(0);

  useEffect(() => {
    const loadPayments =
      async () => {
        if (
          !email ||
          selectedCourses.length === 0
        ) return;

        try {
          const res =
            await fetchPreviousPayments(
              email,
              selectedCourses,
              companyName
            );

          setPreviousPaidTotal(
            parseFloat(
              res.totalPaid || 0
            )
          );
        } catch (err) {
          console.error(err);
        }
      };

    loadPayments();
  }, [
    email,
    selectedCourses,
    companyName
  ]);

  return {
    previousPaidTotal,
  };
};