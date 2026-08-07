import { useEffect, useState, useCallback } from "react";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const UpdateInvoiceForm = ({ initialData = {}, onSubmit, fetchPreviousPayments }) => {
  const location = usePathname();
  const navigate = useRouter();

  /* -------------------- COURSE OPTIONS -------------------- */
  const [courseOptions, setCourseOptions] = useState([
    {name:'Ai Powered Post Graduate Program in Digital Marketing'},
      {name:'Ai Powered Master\'s Program in Digital Marketing'},
      {name:'MBA Level Ai Powered Marketing & Data Analytics Program'},
      {name:'Digifine Graduate Digital Marketing Program'},
      {name:'Digifine Executive Digital Marketing Program'},
      {name:'Graphic Design Graduate Program'},
      {name:'Masters In Graphic Design & Video Editing Program'},
      {name:'Masters In Multimedia Graphic Design & Animation Program'},
      {name:'E-commerce Website Development'},
      {name:'Master\'s in Full Stack Developer Program'},
      {name:'Master\'s in Full Stack Developer Program (Python)'},
      {name:'Master\'s in Data Analytics Program'},
      {name:'Master\'s in Data Science Ai Program'},
      {name:'Data Science & Machine Learning Program'},
      {name:'Master\'s in Data Science, Machine Learning & Ai Program'},
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [newCourseName, setNewCourseName] = useState("");

  /* -------------------- FORM STATE -------------------- */
  const [form, setForm] = useState({
    companyName: "Digifine",
    name: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    mode: "",
    paymentMethod: "",
    paymentType: "",
    totalAmount: "",
    paidAmount: "",
    bankName: "",
    chequeNumber: "",
    installments: 1
  });

  /* -------------------- TAX STATES -------------------- */
  const [paidCourseFee, setPaidCourseFee] = useState(0);
  const [paidCgst, setPaidCgst] = useState(0);
  const [paidSgst, setPaidSgst] = useState(0);
  const [previousPaidTotal, setPreviousPaidTotal] = useState(0);

  useEffect(() => {
    if (!initialData) return;
  
    setForm(prev => ({
      ...prev,
      companyName: initialData.company || "Digifine",
      name: initialData.name || "",
      email: initialData.email || "",
      phone: initialData.phone || "",
      date: initialData.invoiceDate || "",
      location: initialData.location || "",
      mode: initialData.mode || "",
      paymentMethod: initialData.paymentMode || "",
      paymentType: initialData.paymentType || "",
      totalAmount: initialData.totalAmount || "",
      paidAmount: initialData.payments?.[0]?.amount || "",
      bankName: initialData.bankName || "",
      chequeNumber: initialData.chequeNumber || "",
      installments: initialData.installmentCount || 1
    }));
  
    setSelectedCourses(
      Array.isArray(initialData.courses)
        ? initialData.courses
        : initialData.courses
        ? initialData.courses.split(", ")
        : []
    );
  
  }, [initialData]);


  /* -------------------- GST RECALC -------------------- */
  const recalcFromPaidAmount = useCallback((paidStr) => {
    const paid = parseFloat(paidStr);
    if (isNaN(paid) || paid < 0) {
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

  /* -------------------- HANDLERS -------------------- */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePaidAmountChange = (e) => {
    const val = e.target.value;
    setForm(prev => ({ ...prev, paidAmount: val }));
    recalcFromPaidAmount(val);
  };

  const handleSelectedCoursesChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setSelectedCourses(options);
  };

  const handleAddCourse = () => {
    const trimmed = newCourseName.trim();
    if (!trimmed) return alert("Course name cannot be empty");

    if (courseOptions.some(c => c.name.toLowerCase() === trimmed.toLowerCase()))
      return alert("Course already exists");

    setCourseOptions([...courseOptions, { name: trimmed }]);
    setSelectedCourses(prev => [...prev, trimmed]);
    setNewCourseName("");
  };

  /* -------------------- FETCH PREVIOUS PAYMENTS -------------------- */
  useEffect(() => {
    if (form.email && selectedCourses.length > 0 && fetchPreviousPayments) {
      fetchPreviousPayments(form.email, selectedCourses)
        .then(total => setPreviousPaidTotal(total))
        .catch(() => setPreviousPaidTotal(0));
    }
  }, [form.email, selectedCourses, fetchPreviousPayments]);

  const formatDateForInput = (isoDate) => {
    if (!isoDate) return '';
    const d = new Date(isoDate);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /* -------------------- VALIDATION -------------------- */
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone);

  const isFormValid = () => {
    const {
      name,
      email,
      phone,
      date,
      location,
      mode,
      paymentMethod,
      paymentType,
      totalAmount,
      paidAmount
    } = form;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !date ||
      !location.trim() ||
      !mode ||
      !paymentMethod ||
      !paymentType
    )
      return false;

    if (!isValidEmail(email)) return false;
    if (!isValidPhone(phone)) return false;
    if (
      totalAmount === "" ||
      isNaN(Number(totalAmount)) ||
      Number(totalAmount) <= 0
    )
      return false;
    
    if (
      paidAmount === "" ||
      isNaN(Number(paidAmount)) ||
      Number(paidAmount) < 0
    )
      return false;
    if (selectedCourses.length === 0) return false;

    if (
      paymentType === "partial" &&
      (!form.installments || Number(form.installments) < 1)
    )
      return false;

    return true;
  };

  /* -------------------- SUBMIT -------------------- */
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!isFormValid()) {
  //     alert("Please fill all required fields correctly");
  //     return;
  //   }

  //   const payload = onSubmit({
  //     ...form,
  //     selectedCourses,
  //     paymentType: form.paymentType === 'full' ? 'Full Payment' : 'Partial Payment'
  //   });

  //   console.log("navigate krra hu")
  //   navigate('/admindashboard/payment'); // or your actu al dashboard route

  //   // console.log("i am working")
  //   // console.log(payload)

    
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    alert("Please fill all required fields correctly");
    return;
  }

  try {
    await onSubmit({
      ...form,
      selectedCourses,
      paymentType:
        form.paymentType === "full"
          ? "Full Payment"
          : "Partial Payment",
    });

    // console.log("navigating...");
    navigate.push("/admindashboard/payment");

  } catch (err) {
    console.error(err);
  }
};


  /* -------------------- UI -------------------- */
  return (
    <form
    onSubmit={handleSubmit}
    className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
  >
    <h2 className="text-3xl font-bold text-center">Update Invoice</h2>
  
    {/* Company & Date */}
    <div className="grid grid-cols-2 gap-4">
    <select
          name="companyName"
          value={form.companyName}
          onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}

        >
          {['Digifine Academy', 'ADBIZIT', 'Digifine'].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      {/* <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="border p-2 w-full"
      /> */}
      <input
  type="date"
  value={formatDateForInput(form.date)} // dueDate from invoiceData
  onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
  className="border px-2 py-1 w-full"
/>
    </div>
  
    {/* Personal Fields */}
    <div className="grid grid-cols-2 gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
  name="email"
  value={form.email}
  readOnly
  placeholder="Email"
  className="border p-2 w-full bg-gray-100 cursor-not-allowed"
/>
    </div>
  
    <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Phone"
      className="border p-2 w-full"
    />
  
    {/* Location & Mode */}
      {/* Location selection */}
      <div>
        <label className="block mb-1 font-medium">Location:</label>
        <select
          name="location"
          value={form.location}
          onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          // disabled={isSaving || formLocked}

        >
          <option value="">Select Location</option>
          {['Andheri', 'Vashi', 'Pune','Hyderabad', 'Online', 'Offline'].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Mode:</label>
        <select
          name="mode"
          value={form.mode}
          onChange={(e) => setForm((prev) => ({ ...prev, mode: e.target.value }))}
          className="w-full border px-3 py-2 rounded"
          // disabled={isSaving}
          // disabled={isSaving || formLocked}

        >
          <option value="">Select Mode</option>
          {['Online', 'Offline'].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Payment Method:</label>
        <div className="flex flex-wrap gap-3">
          {['Cash', 'Credit Card', 'Google Pay', 'Cheque','Finance','Bank Transfer',"UPI"].map((method) => (
            <label key={method} className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={form.paymentMethod === method}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    paymentMethod: e.target.value,
                    bankName: '',
                    chequeNumber: '',
                  }))
                }
                // disabled={isSaving}
                // disabled={isSaving || formLocked}

              />
              {method}
            </label>
          ))}
        </div>

        {/* Show extra fields for Check */}
        {form.paymentMethod === 'Cheque' && (
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Bank Name"
              value={form.bankName}
              onChange={(e) => setForm((prev) => ({ ...prev, bankName: e.target.value }))}
              className="border px-3 py-2 rounded"
              // disabled={isSaving}
              // disabled={isSaving || formLocked}

            />
            <input
              type="text"
              placeholder="cheque Number"
              value={form.chequeNumber}
              onChange={(e) => setForm((prev) => ({ ...prev, chequeNumber: e.target.value }))}
              className="border px-3 py-2 rounded"
              // disabled={isSaving}
              // disabled={isSaving || formLocked}

            />
          </div>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Courses (select):</label>
        <select
          multiple
          value={selectedCourses}
          onChange={handleSelectedCoursesChange}
          className="w-full border px-3 py-2 rounded h-32"
          // disabled={isSaving}
          // disabled={isSaving || formLocked}

        >
          {courseOptions.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Add new course */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="New Course Name"
            value={newCourseName}
            onChange={(e) => setNewCourseName(e.target.value)}
            className="flex-grow border px-3 py-2 rounded"
            // disabled={isSaving}
            // disabled={isSaving || formLocked}

          />
          <button
            type="button"
            onClick={handleAddCourse}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            // disabled={isSaving}
            // disabled={isSaving || formLocked}

          >
            Add Course
          </button>
        </div>
      </div>


      {/* Payment Type */}
      <div>
        <label className="block mb-1 font-medium">Payment Type:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="full"
              checked={form.paymentType === 'full'}
              onChange={(e) => setForm((prev) => ({ ...prev, paymentType: e.target.value, installments: 1 }))}
              // disabled={isSaving}
              // disabled={isSaving || formLocked}

            />
            Full Payment
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="partial"
              checked={form.paymentType === 'partial'}
              onChange={(e) => setForm((prev) => ({ ...prev, paymentType: e.target.value }))}
              // disabled={isSaving}
              // disabled={isSaving || formLocked}

            />
            Partial Payment
          </label>
        </div>

        {/* Show installments only if Partial Payment */}
        {form.paymentType === 'partial' && (
          <div className="mt-3">
            <label className="block mb-1 font-medium">Number of Installments:</label>
            <input
              type="number"
              min="1"
              value={form.installments}
              onChange={(e) => setForm((prev) => ({ ...prev, installments: e.target.value }))}
              className="w-24 border px-3 py-2 rounded"
              // disabled={isSaving}
              // disabled={isSaving || formLocked}

            />
          </div>
        )}
      </div>

    {/* Payment Section */}
    <div className="grid grid-cols-2 gap-4">
      <div><label>Total Amount : </label>
      <input
        type="number"
        name="totalAmount"
        value={form.totalAmount}
        onChange={handleChange}
        placeholder="Total Amount"
        className="border p-2 w-full"
      />
  </div>
      
  <div>
  <label>Paid Amount : </label>

<input
  type="number"
  name="paidAmount"
  value={form.paidAmount}
  onChange={handlePaidAmountChange}
  placeholder="Paid Amount"
  className="border p-2 w-full"
/>
  </div>
    </div>
  
    {/* GST Info */}
    {/* <div className="flex gap-6">
      <div>CGST: {paidCgst.toFixed(2)}</div>
      <div>SGST: {paidSgst.toFixed(2)}</div>
    </div>
  
    <div>Previous Paid: {previousPaidTotal}</div> */}
  
    <button
      type="submit"
      className="bg-yellow-600 text-white px-6 py-3 rounded w-full"
    >
      Update Invoice
    </button>
  </form>
  );
};

export default UpdateInvoiceForm;