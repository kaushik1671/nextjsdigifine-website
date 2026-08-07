import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const InvoiceDesignPage = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  // Example mock data; in production, fetch this from state or backend
  const allInvoices = [
    {
      id: 'INV001',
      name: 'John Doe',
      location: 'Pune',
      date: ['2025-06-01', '2025-07-01'],
      paymentMode: 'Cheque',
      chequeNumber: '123456',
      paymentType: 'partial',
      installmentCount: 2,
      courses: ['Digital Marketing Graduate Program'],
      payments: [
        { amount: 4000, date: '2025-06-01' },
        { amount: 4000, date: '2025-07-01' },
      ],
      totalAmount: 10000,
    },
    {
      id: 'INV002',
      name: 'Jane Smith',
      location: 'Online',
      date: ['2025-06-01'],
      paymentMode: 'Google Pay',
      chequeNumber: '',
      paymentType: 'full',
      installmentCount: 1,
      courses: ['Digital Marketing Executive Program'],
      payments: [{ amount: 12000, date: '2025-06-01' }],
      totalAmount: 12000,
    },
  ];

  useEffect(() => {
    const foundInvoice = allInvoices.find(inv => inv.id === id);
    setInvoice(foundInvoice);
  }, [id]);

  if (!invoice) {
    return <p className="p-4 text-red-600 font-semibold">Invoice not found</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Invoice ID: {invoice.id}</h2>
      <p><strong>Name:</strong> {invoice.name}</p>
      <p><strong>Location:</strong> {invoice.location}</p>
      <p><strong>Payment Type:</strong> {invoice.paymentType}</p>
      <p><strong>Total Amount:</strong> ₹{invoice.totalAmount}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Payments:</h3>
        <ul className="list-disc ml-6">
          {invoice.payments.map((p, idx) => (
            <li key={idx}>₹{p.amount} on {p.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvoiceDesignPage;
