// import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FiCopy } from 'react-icons/fi';

// const LogoutButton = lazy(() => import('./dashboardelement/LogoutButton'));

// const courseOptions = ['All', 'Web Development', 'Data Science', 'AI & ML'];

// const AdminDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [filters, setFilters] = useState({
//     course: 'All',
//     search: '',
//     startDate: null,
//     endDate: null
//   });

//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const navigate = useRouter();

//   // Format date & time in YYYY-MM-DD HH:mm
//   const formatDateTime = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     if (isNaN(date)) return dateString;
//     return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/enquiries');
//         const data = await res.json();

//         let filtered = [...data];

//         if (filters.course !== 'All') {
//           filtered = filtered.filter((item) =>
//             item.course.toLowerCase() === filters.course.toLowerCase()
//           );
//         }

//         if (filters.search.trim() !== '') {
//           filtered = filtered.filter((item) =>
//             item.stdname.toLowerCase().includes(filters.search.toLowerCase()) ||
//             item.stdemail.toLowerCase().includes(filters.search.toLowerCase()) ||
//             item.course.toLowerCase().includes(filters.search.toLowerCase())
//           );
//         }

//         if (filters.startDate && filters.endDate) {
//           const start = new Date(filters.startDate);
//           const end = new Date(filters.endDate);
//           filtered = filtered.filter((item) => {
//             const formDate = new Date(item.formsubmitdate);
//             return formDate >= start && formDate <= end;
//           });
//         }

//         setStudents(filtered);
//         setPage(1); // reset to first page when filters change
//       } catch (err) {
//         console.error('Error fetching students:', err);
//       }
//     };

//     fetchData();
//   }, [filters]);

//   const exportToCSV = () => {
//     const headers = [
//       'ID', 'Page URL', 'Name', 'Email', 'Phone', 'Location', 'Course',
//       'Status', 'Form Date', 'IP', 'Browser', 'Created', 'Updated'
//     ];

//     const rows = students.map((std) => [
//       std.stdID,
//       std.pageurl,
//       std.stdname,
//       std.stdemail,
//       std.stdphone,
//       std.location,
//       std.course,
//       std.formstatus,
//       formatDateTime(std.formsubmitdate),
//       std.iPaddress,
//       std.browser,
//       formatDateTime(std.entrycreatedate),
//       formatDateTime(std.entryupdatedate),
//     ]);

//     const csvContent =
//       'data:text/csv;charset=utf-8,' +
//       [headers, ...rows]
//         .map((e) => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
//         .join('\n');

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement('a');
//     link.setAttribute('href', encodedUri);
//     link.setAttribute('download', 'student_data.csv');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const copyToClipboard = () => {
//     const headers = [
//       'ID', 'Page URL', 'Name', 'Email', 'Phone', 'Location', 'Course',
//       'Status', 'Form Date', 'IP', 'Browser', 'Created', 'Updated'
//     ];

//     const textData = [
//       headers.join(' | '),
//       ...students.map((std) =>
//         [
//           std.stdID,
//           std.pageurl,
//           std.stdname,
//           std.stdemail,
//           std.stdphone,
//           std.location,
//           std.course,
//           std.formstatus,
//           formatDateTime(std.formsubmitdate),
//           std.iPaddress,
//           std.browser,
//           formatDateTime(std.entrycreatedate),
//           formatDateTime(std.entryupdatedate)
//         ].join(' | ')
//       )
//     ].join('\n');

//     navigator.clipboard.writeText(textData)
//       .then(() => alert('All leads copied to clipboard!'))
//       .catch(err => console.error('Failed to copy', err));
//   };

//   const copySingleLead = (std) => {
//     const textData = [
//       `ID: ${std.stdID}`,
//       `Page URL: ${std.pageurl}`,
//       `Name: ${std.stdname}`,
//       `Email: ${std.stdemail}`,
//       `Phone: ${std.stdphone}`,
//       `Location: ${std.location}`,
//       `Course: ${std.course}`,
//       `Status: ${std.formstatus}`,
//       `Form Date: ${formatDateTime(std.formsubmitdate)}`,
//       `IP: ${std.iPaddress}`,
//       `Browser: ${std.browser}`,
//       `Created: ${formatDateTime(std.entrycreatedate)}`,
//       `Updated: ${formatDateTime(std.entryupdatedate)}`
//     ].join('\n');

//     navigator.clipboard.writeText(textData)
//       .then(() => alert(`Lead ${std.stdID} copied to clipboard!`))
//       .catch(err => console.error('Failed to copy', err));
//   };

//   const startIndex = (page - 1) * rowsPerPage;
//   const paginatedStudents = students.slice(startIndex, startIndex + rowsPerPage);
//   const totalPages = Math.ceil(students.length / rowsPerPage);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
//           📊 NEW ENQUIRY
//         </h1>
//         <div className="flex gap-3">
//           <button
//             onClick={() => navigate('/invoice')}
//             className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
//           >
//             Go to Invoice
//           </button>
//           <Suspense fallback={<div className="text-gray-600">Loading logout...</div>}>
//             <LogoutButton />
//           </Suspense>
//         </div>
//       </header>

//       {/* Filters */}
//       <section className="flex flex-wrap gap-6 mb-6">
//         <div className="flex flex-col min-w-[200px]">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">
//             Search Course:
//           </label>
//           <input
//             type="text"
//             value={filters.search}
//             onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//             placeholder="Type course name..."
//             className="rounded-md border border-gray-300 px-3 py-2"
//           />
//         </div>

//         <div className="flex flex-col min-w-[200px]">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">
//             Filter by Course:
//           </label>
//           <select
//             value={filters.course}
//             onChange={(e) => setFilters({ ...filters, course: e.target.value })}
//             className="rounded-md border border-gray-300 px-3 py-2"
//           >
//             {courseOptions.map((course) => (
//               <option key={course} value={course}>{course}</option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">From:</label>
//           <DatePicker
//             selected={filters.startDate}
//             onChange={(date) => setFilters({ ...filters, startDate: date })}
//             className="rounded-md border px-3 py-2"
//             placeholderText="Start Date"
//             dateFormat="yyyy-MM-dd"
//             isClearable
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="block text-sm font-semibold text-gray-700 mb-1">To:</label>
//           <DatePicker
//             selected={filters.endDate}
//             onChange={(date) => setFilters({ ...filters, endDate: date })}
//             className="rounded-md border px-3 py-2"
//             placeholderText="End Date"
//             dateFormat="yyyy-MM-dd"
//             isClearable
//           />
//         </div>

//         <div className="flex items-end gap-3">
//           <button
//             onClick={exportToCSV}
//             className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700"
//           >
//             Export CSV
//           </button>
//           <button
//             onClick={copyToClipboard}
//             className="bg-gray-600 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 flex items-center gap-2"
//           >
//             <FiCopy /> Copy Leads
//           </button>
//         </div>
//       </section>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200 max-w-full">
//         <table className="min-w-full divide-y divide-gray-200 text-sm text-left table-fixed">
//           <thead className="bg-gray-50 sticky top-0">
//             <tr>
//               <th className="px-4 py-3 w-12">ID</th>
//               <th className="px-4 py-3 w-40">Page URL</th>
//               <th className="px-4 py-3 w-32">Name</th>
//               <th className="px-4 py-3 w-40">Email</th>
//               <th className="px-4 py-3 w-24">Phone</th>
//               <th className="px-4 py-3 w-24">Location</th>
//               <th className="px-4 py-3 w-24">Course</th>
//               <th className="px-4 py-3 w-20">Status</th>
//               <th className="px-4 py-3 w-20">Browser</th>
//               <th className="px-4 py-3 w-20">IP Address</th>
//               <th className="px-4 py-3 w-28">Form Date</th>
//               <th className="px-4 py-3 w-12">Copy</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedStudents.length > 0 ? (
//               paginatedStudents.map((std) => (
//                 <tr key={std.stdID} className="hover:bg-blue-50">
//                   <td className="px-4 py-2">{std.stdID}</td>
//                   <td className="px-4 py-2 truncate">{std.pageurl}</td>
//                   <td className="px-4 py-2">{std.stdname}</td>
//                   <td className="px-4 py-2 truncate">{std.stdemail}</td>
//                   <td className="px-4 py-2">{std.stdphone}</td>
//                   <td className="px-4 py-2">{std.location}</td>
//                   <td className="px-4 py-2">{std.course}</td>
//                   <td className="px-4 py-2">{std.formstatus}</td>
//                   <td className="px-4 py-2">{std.browser}</td>
//                   <td className="px-4 py-2">{std.iPaddress}</td>
//                   <td className="px-4 py-2">{formatDateTime(std.formsubmitdate)}</td>
//                   <td className="px-4 py-2 text-center">
//                     <button
//                       onClick={() => copySingleLead(std)}
//                       className="text-gray-500 hover:text-gray-800"
//                       title="Copy this lead"
//                     >
//                       <FiCopy />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="12" className="px-4 py-8 text-center text-gray-500 italic">
//                   No results found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className='mt-6'>
//           <label className="mr-2">Rows per page:</label>
//           <select
//             value={rowsPerPage}
//             onChange={(e) => {
//               setRowsPerPage(Number(e.target.value));
//               setPage(1);
//             }}
//             className="border px-2 py-1 rounded"
//           >
//             {[5, 10, 25, 50, 100, 300, 500].map((n) => (
//               <option key={n} value={n}>{n}</option>
//             ))}
//           </select>
//         </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
        

//         <div className="flex gap-1 flex-wrap">
//           {[...Array(totalPages)].map((_, idx) => (
//             <button
//               key={idx + 1}
//               onClick={() => setPage(idx + 1)}
//               className={`px-3 py-1 border rounded ${page === idx + 1 ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
//             >
//               {idx + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCopy } from 'react-icons/fi';

const courseOptions = ['All', 'Web Development', 'Data Science', 'AI & ML'];

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({
    course: 'All',
    search: '',
    startDate: null,
    endDate: null
  });

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false); // loading state
  const [fetched, setFetched] = useState(false); // fetched status


  const formatDateTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setFetched(false);
      try {
        const res = await fetch(`${API_BASE}/api/enquiries`);
        const data = await res.json();

        let filtered = [...data];

        if (filters.course !== 'All') {
          filtered = filtered.filter((item) =>
            item.course.toLowerCase() === filters.course.toLowerCase()
          );
        }

        if (filters.search.trim() !== '') {
          filtered = filtered.filter((item) =>
            item.stdname.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.stdemail.toLowerCase().includes(filters.search.toLowerCase()) ||
            item.course.toLowerCase().includes(filters.search.toLowerCase())
          );
        }

        if (filters.startDate && filters.endDate) {
          const start = new Date(filters.startDate);
          const end = new Date(filters.endDate);
          filtered = filtered.filter((item) => {
            const formDate = new Date(item.formsubmitdate);
            return formDate >= start && formDate <= end;
          });
        }

        setStudents(filtered);
        setPage(1);
      } catch (err) {
        console.error('Error fetching students:', err);
      } finally {
        setLoading(false);
        setFetched(true);
      }
    };

    fetchData();
  }, [filters]);

  const exportToCSV = () => {
    const headers = [
      'ID', 'Page URL', 'Name', 'Email', 'Phone', 'Location', 'Course',
      'Status', 'Form Date', 'IP', 'Browser', 'Created', 'Updated'
    ];

    const rows = students.map((std) => [
      std.stdID,
      std.pageurl,
      std.stdname,
      std.stdemail,
      std.stdphone,
      std.location,
      std.course,
      std.formstatus,
      formatDateTime(std.formsubmitdate),
      std.iPaddress,
      std.browser,
      formatDateTime(std.entrycreatedate),
      formatDateTime(std.entryupdatedate),
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows]
        .map((e) => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'student_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = () => {
    const headers = [
      'ID', 'Page URL', 'Name', 'Email', 'Phone', 'Location', 'Course',
      'Status', 'Form Date', 'IP', 'Browser', 'Created', 'Updated'
    ];

    // Use tab-separated format for Excel compatibility
    const textData = [
      headers.join('\t'),
      ...students.map((std) =>
        [
          std.stdID,
          std.pageurl,
          std.stdname,
          std.stdemail,
          std.stdphone,
          std.location,
          std.course,
          std.formstatus,
          formatDateTime(std.formsubmitdate),
          std.iPaddress,
          std.browser,
          formatDateTime(std.entrycreatedate),
          formatDateTime(std.entryupdatedate)   
        ].join('\t')
      )
    ].join('\n');

    const cleanData = textData.replace(/\r/g, '');

    navigator.clipboard.writeText(cleanData)
      .then(() => alert('All leads copied to clipboard in Excel-friendly format!'))
      .catch(err => console.error('Failed to copy', err));
  };

  const copySingleLead = (std) => {
    const textData = [
      std.stdID,
      std.pageurl,
      std.stdname,
      std.stdemail,
      std.stdphone,
      std.location,
      std.course,
      std.formstatus,
      formatDateTime(std.formsubmitdate),
      std.iPaddress,
      std.browser,
      formatDateTime(std.entrycreatedate),
      formatDateTime(std.entryupdatedate)
    ].join('\t'); // tab separated for Excel

    const cleanData = textData.replace(/\n/g, '').replace(/\r/g, '');

    navigator.clipboard.writeText(cleanData)
      .then(() => alert(`Lead ${std.stdID} copied to clipboard!`))
      .catch(err => console.error('Failed to copy', err));
  };

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedStudents = students.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(students.length / rowsPerPage);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
          📊 NEW ENQUIRY
        </h1>
      </header>

      {/* Filters */}
      <section className="flex flex-wrap gap-6 mb-6">
        <div className="flex flex-col min-w-[200px]">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Search Course:
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="Type course name..."
            className="rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="flex flex-col min-w-[200px]">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Filter by Course:
          </label>
          <select
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.target.value })}
            className="rounded-md border border-gray-300 px-3 py-2"
          >
            {courseOptions.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-gray-700 mb-1">From:</label>
          <DatePicker
            selected={filters.startDate}
            onChange={(date) => setFilters({ ...filters, startDate: date })}
            className="rounded-md border px-3 py-2"
            placeholderText="Start Date"
            dateFormat="yyyy-MM-dd"
            isClearable
          />
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-gray-700 mb-1">To:</label>
          <DatePicker
            selected={filters.endDate}
            onChange={(date) => setFilters({ ...filters, endDate: date })}
            className="rounded-md border px-3 py-2"
            placeholderText="End Date"
            dateFormat="yyyy-MM-dd"
            isClearable
          />
        </div>

        <div className="flex items-end gap-3">
          <button
            onClick={exportToCSV}
            className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700"
          >
            Export CSV
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-gray-600 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 flex items-center gap-2"
          >
            <FiCopy /> Copy Leads
          </button>
        </div>
      </section>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center text-gray-600 italic mb-4">
          Please wait, fetching enquiries...
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200 max-w-full">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left table-fixed">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 w-12">ID</th>
              <th className="px-4 py-3 w-40">Page URL</th>
              <th className="px-4 py-3 w-32">Name</th>
              <th className="px-4 py-3 w-40">Email</th>
              <th className="px-4 py-3 w-24">Phone</th>
              <th className="px-4 py-3 w-24">Location</th>
              <th className="px-4 py-3 w-24">Course</th>
              <th className="px-4 py-3 w-20">Status</th>
              <th className="px-4 py-3 w-20">Browser</th>
              <th className="px-4 py-3 w-20">IP Address</th>
              <th className="px-4 py-3 w-28">Form Date</th>
              <th className="px-4 py-3 w-12">Copy</th>
            </tr>
          </thead>
          <tbody>
            {paginatedStudents.length > 0 ? (
              paginatedStudents.map((std) => (
                <tr key={std.stdID} className="hover:bg-blue-50">
                  <td className="px-4 py-2">{std.stdID}</td>
                  <td className="px-4 py-2 truncate">{std.pageurl}</td>
                  <td className="px-4 py-2">{std.stdname}</td>
                  <td className="px-4 py-2 truncate">{std.stdemail}</td>
                  <td className="px-4 py-2">{std.stdphone}</td>
                  <td className="px-4 py-2">{std.location}</td>
                  <td className="px-4 py-2">{std.course}</td>
                  <td className="px-4 py-2">{std.formstatus}</td>
                  <td className="px-4 py-2">{std.browser}</td>
                  <td className="px-4 py-2">{std.iPaddress}</td>
                  <td className="px-4 py-2">{formatDateTime(std.formsubmitdate)}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => copySingleLead(std)}
                      className="text-gray-500 hover:text-gray-800"
                      title="Copy this lead"
                    >
                      <FiCopy />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              !loading && (
                <tr>
                  <td colSpan="12" className="px-4 py-8 text-center text-gray-500 italic">
                    No results found.
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      <div className='mt-6'>
        <label className="mr-2">Rows per page:</label>
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setPage(1);
          }}
          className="border px-2 py-1 rounded"
        >
          {[5, 10, 25, 50, 100, 300, 500].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-1 flex-wrap">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 border rounded ${page === idx + 1 ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* All fetched message */}
      {fetched && !loading && students.length > 0 && (
        <div className="text-center text-green-600 mt-6 font-semibold">
          ✅ All enquiries have been fetched
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
