import { useState, useCallback } from "react";

export const useInvoiceCalculation = () => {
  const [paidCourseFee, setPaidCourseFee] =
    useState(0);

  const [paidCgst, setPaidCgst] =
    useState(0);

  const [paidSgst, setPaidSgst] =
    useState(0);

  const recalcFromPaidAmount =
    useCallback((paidStr) => {
      const paid =
        parseFloat(paidStr);

      if (isNaN(paid)) {
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

  return {
    paidCourseFee,
    paidCgst,
    paidSgst,
    recalcFromPaidAmount,
  };
};