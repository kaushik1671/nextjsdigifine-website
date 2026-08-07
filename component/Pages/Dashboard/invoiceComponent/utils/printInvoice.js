export const printInvoice = (
  invoiceReady,
  invoiceEl
) => {
  if (!invoiceEl) {
    alert("Invoice not ready");
    return;
  }

  if (!invoiceReady) {
    alert("Invoice still loading");
    return;
  }

  window.print();
};