import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportInvoicePDF = async (
  invoiceRef,
  fileName
) => {
  if (!invoiceRef.current) return;

  const canvas = await html2canvas(
    invoiceRef.current,
    {
      scale: 2,
      useCORS: true,
    }
  );

  const imgData =
    canvas.toDataURL("image/png");

  const pdf = new jsPDF(
    "p",
    "mm",
    "a4"
  );

  const pageWidth =
    pdf.internal.pageSize.getWidth();

  const pageHeight =
    pdf.internal.pageSize.getHeight();

  const imgProps =
    pdf.getImageProperties(imgData);

  const pdfHeight =
    (imgProps.height * pageWidth) /
    imgProps.width;

  let heightLeft = pdfHeight;

  let position = 0;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    position,
    pageWidth,
    pdfHeight
  );

  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - pdfHeight;

    pdf.addPage();

    pdf.addImage(
      imgData,
      "PNG",
      0,
      position,
      pageWidth,
      pdfHeight
    );

    heightLeft -= pageHeight;
  }

  pdf.save(fileName);
};