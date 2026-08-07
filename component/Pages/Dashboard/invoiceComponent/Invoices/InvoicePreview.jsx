import { memo } from "react";

import InvoiceDesign
  from "./InvoiceDesign";

const InvoicePreview = ({
  invoiceRef,
  invoiceData,
}) => {
  return (
    <div
      ref={invoiceRef}
      id="invoice-print"
    >
      <InvoiceDesign
        invoiceData={invoiceData}
      />
    </div>
  );
};

export default memo(
  InvoicePreview
);