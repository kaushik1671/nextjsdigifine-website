import { useState } from "react";

export const useInvoiceForm = () => {
  const [form, setForm] = useState({
    companyName: 'Digifine',
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    mode: '',
    paymentMethod: '',
    paymentType: '',
    totalAmount: '',
    paidAmount: '',
    bankName: '',
    chequeNumber: '',
    installments: 1,
    remark: "", 
  });

  const updateField = (
    field,
    value
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    form,
    setForm,
    updateField,
  };
};