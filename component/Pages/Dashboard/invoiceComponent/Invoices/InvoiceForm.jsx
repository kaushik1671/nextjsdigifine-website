import PersonalInfoSection
  from "./PersonalInfoSection";

import LocationSection
  from "./LocationSection";

import CourseSection
  from "./CourseSection";

import PaymentMethodSection
  from "./PaymentMethodSection";

import PaymentTypeSection
  from "./PaymentTypeSection";

import AmountSection
  from "./AmountSection";

const InvoiceForm = ({
  form,
  updateField,
  selectedCourses,
  setSelectedCourses,
  courseOptions,
  setCourseOptions,
  paidCgst,
  paidSgst,
  recalcFromPaidAmount,
}) => {

  return (
    <div className="space-y-6 bg-white p-6 rounded shadow">

      {/* Personal Information */}
      <PersonalInfoSection
        form={form}
        updateField={updateField}
      />

      {/* Location + Mode */}
      <LocationSection
        form={form}
        updateField={updateField}
      />

      {/* Courses */}
      <CourseSection
        selectedCourses={
          selectedCourses
        }
        setSelectedCourses={
          setSelectedCourses
        }
        courseOptions={
          courseOptions
        }
        setCourseOptions={
          setCourseOptions
        }
      />

      {/* Payment Method */}
      <PaymentMethodSection
        form={form}
        updateField={updateField}
      />

      {/* Payment Type */}
      <PaymentTypeSection
        form={form}
        updateField={updateField}
      />

      {/* Amount Section */}
      <AmountSection
        form={form}
        updateField={updateField}
        paidCgst={paidCgst}
        paidSgst={paidSgst}
        recalcFromPaidAmount={
          recalcFromPaidAmount
        }
      />

      <div className="mt-6">
  <label className="block mb-1 font-medium">
    Remark / Notes
  </label>

  <textarea
    value={form.remark}
    onChange={(e) =>
      updateField("remark", e.target.value)
    }
    className="w-full border px-3 py-2 rounded h-24"
    placeholder="Add any extra notes (optional)"
  />
</div>

    </div>
  );
};

export default InvoiceForm;