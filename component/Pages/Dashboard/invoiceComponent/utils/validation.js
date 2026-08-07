export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const validateInvoiceForm = (
  form,
  selectedCourses
) => {
  if (!form.name) return 'Name required';

  if (!isValidEmail(form.email))
    return 'Invalid Email';

  if (!isValidPhone(form.phone))
    return 'Invalid Phone';

  if (!form.location)
    return 'Location required';

  if (selectedCourses.length === 0)
    return 'Select courses';

  return null;
};