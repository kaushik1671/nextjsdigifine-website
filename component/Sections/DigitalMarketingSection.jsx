// import React, { useState } from 'react';
// import Input from '../Header/Input'; // Import your Input component

// const DigitalMarketingSection = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     city: 'Mumbai', // Default city
//   });

//   const [errors, setErrors] = useState({
//     phone: '',
//   });

//   // Handle changes to the form inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Custom phone validation
//     if (name === 'phone') {
//       // Phone validation: Only numbers, exactly 10 digits
//       if (!/^\d{0,10}$/.test(value)) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: 'Phone number should only contain digits and be at most 10 digits long.',
//         }));
//       } else if (value.length === 10) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: '', // Clear error when valid
//         }));
//       } else {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           phone: 'Phone number must be exactly 10 digits.',
//         }));
//       }
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Check if there are any errors before submitting
//     if (errors.phone) {
//       alert('Please fix the errors before submitting.');
//       return;
//     }
//     alert(`Form Submitted:
//       Name: ${formData.fullName}
//       Email: ${formData.email}
//       Phone: ${formData.phone}
//       City: ${formData.city}`);
//     // Here you can handle form submission, like sending data to a backend or email service
//   };

//   return (
//     <div className="w-full py-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between">
//         {/* Left Section: Text content */}
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Digital Marketing Courses with Placements in Mumbai</h2>
//           <p className="text-lg text-gray-700">
//             Digifine Academy offers highly advanced Digital Marketing Courses with placements in Mumbai. We aim to bring accessible, impactful, and highly effective digital marketing education to our students and pave their way to a revolutionary and rewarding digital future.
//           </p>
//         </div>

//         {/* Right Section: Form */}
//         <div className="w-full md:w-1/2">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download Brochure</h3>
//           <form onSubmit={handleFormSubmit} className="space-y-6">
//             {/* Full Name Input */}
//             <Input
//               label="Full Name"
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//             />

//             {/* Email Input */}
//             <Input
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />

//             {/* Phone Input */}
//             <Input
//               label="Phone Number"
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//               pattern="^\d{10}$" // Only accept 10-digit phone numbers
//               maxLength={10}
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

//             {/* City Selection (Dropdown) */}
//             <div className="w-full">
//               <label htmlFor="city" className="inline-block mb-1 pl-1 text-lg font-medium text-gray-700">Select City</label>
//               <select
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               >
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Pune">Pune</option>
//               </select>
//             </div>

//             {/* Submit Button*/}
//             <button
//               type="submit"
//               className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
//             >
//               Download Brochure
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DigitalMarketingSection;

import React, { useState } from 'react';
import Input from '../Header/Input'; // Import your Input component

const DigitalMarketingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai', // Default city
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  // Handle changes to the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Custom phone validation
    if (name === 'phone') {
      // Phone validation: Only numbers, exactly 10 digits
      if (!/^\d{0,10}$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: 'Phone number should only contain digits and be at most 10 digits long.',
        }));
      } else if (value.length === 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: '', // Clear error when valid
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: 'Phone number must be exactly 10 digits.',
        }));
      }
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if there are any errors before submitting
    if (errors.phone) {
      alert('Please fix the errors before submitting.');
      return;
    }
    alert(`Form Submitted:
      Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      City: ${formData.city}`);
    // Here you can handle form submission, like sending data to a backend or email service
  };

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Left Section: Text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Digital Marketing Courses with Placements in Mumbai</h2>
          <p className="text-lg text-gray-700">
            Digifine Academy offers highly advanced Digital Marketing Courses with placements in Mumbai. We aim to bring accessible, impactful, and highly effective digital marketing education to our students and pave their way to a revolutionary and rewarding digital future.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download Brochure</h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Full Name Input */}
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            {/* Email Input */}
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            {/* Phone Input */}
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="^\d{10}$" // Only accept 10-digit phone numbers
              maxLength={10}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            {/* City Selection (Dropdown) */}
            <div className="w-full">
              <label htmlFor="city" className="inline-block mb-1 pl-1 text-lg font-medium text-gray-700">Select City</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            <button
  type="submit"
  className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 block sm:inline-block sm:ml-0 sm:text-left mx-auto"
>
  Download Brochure
</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingSection;
