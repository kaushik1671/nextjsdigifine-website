// import { useLocation, useNavigate } from "react-router-dom";
import UpdateInvoiceForm from "./UpdateInvoiceForm";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const InvoicePage = () => {
  const location = useLocation();
  const navigate = useRouter();

  const isEdit = location.state?.isEdit || false;
  const invoiceData = location.state?.invoiceData || null;

  if (isEdit && !invoiceData) {
    return <div className="p-6 text-red-600">No invoice data found to edit.</div>;
  }

//   console.log("Invoice Data:", invoiceData); // should now show

  const handleSubmit = async (formData) => {
    // console.log(formData)
    try {
      if (isEdit) {
        await axios.put(
          `${API_BASE}/api/invoices/${invoiceData.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
          }
        );
      } else {
        await axios.post(
          `${API_BASE}/api/invoices`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
          }
        );
      }

      navigate.push("/admindashboard");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UpdateInvoiceForm
      initialData={invoiceData}
      isEdit={isEdit}
      onSubmit={handleSubmit}
    />
  );
};

export default InvoicePage;
