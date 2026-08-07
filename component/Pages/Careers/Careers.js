"use client";

import ApplicationForm from "../../CourseComponents/ApplicationForm/ApplicationForm";

export default function Careers() {
  const handleFormSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <ApplicationForm 
        heading="Submit your application"
        subheading="If the answer to your question is missing or just want to enquire? Get in touch with us."
        onSubmitSuccess={handleFormSubmit}
      />
    </main>
  );
}