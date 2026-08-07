// import React, { useState } from 'react';

// const AdminControl = () => {
//   const [newAdminEmail, setNewAdminEmail] = useState('');
//   const [newAdminPassword, setNewAdminPassword] = useState('');
//   const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
//   const [createLoading, setCreateLoading] = useState(false);
//   const [createMessage, setCreateMessage] = useState('');

//   const [resetEmail, setResetEmail] = useState('');
//   const [resetPasswordVal, setResetPasswordVal] = useState('');
//   const [resetOtp, setResetOtp] = useState('');
//   const [resetOtpSent, setResetOtpSent] = useState(false);
//   const [resetLoading, setResetLoading] = useState(false);
//   const [resetMessage, setResetMessage] = useState('');

//   const [assignEmail, setAssignEmail] = useState('');
//   const [controlSection, setControlSection] = useState('');
//   const [assignPassword, setAssignPassword] = useState('');
//   const [assignLoading, setAssignLoading] = useState(false);
//   const [assignMessage, setAssignMessage] = useState('');

//   const [deleteEmail, setDeleteEmail] = useState('');
//   const [universalPassword, setUniversalPassword] = useState('');
//   const [deleteOtp, setDeleteOtp] = useState('');
//   const [deleteOtpSent, setDeleteOtpSent] = useState(false);
//   const [deleteLoading, setDeleteLoading] = useState(false);
//   const [deleteMessage, setDeleteMessage] = useState('');

//   const [createOtpSent, setCreateOtpSent] = useState(false);
//   const [createOtp, setCreateOtp] = useState('');

//   const [admins, setAdmins] = useState([]);
//   const [adminsLoading, setAdminsLoading] = useState(false);
//   const [adminsMessage, setAdminsMessage] = useState("");

//   const API_BASE = process.env.NEXT_PUBLIC_API_URL;

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const isStrongPassword = (pass) => pass.length >= 6 && /\d/.test(pass);

//   const callApi = async (url, method, body, setMessage, setLoading,token=null) => {
//     try {
//       setLoading(true);
//       setMessage('');

      
//     const headers = { 'Content-Type': 'application/json' };
//     if (token) {
//       headers['Authorization'] = `Bearer ${token}`;
//     }

      
//       const res = await fetch(url, {
//         method,
//         headers,
//         body: body ? JSON.stringify(body) : undefined,
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Something went wrong');
//       setMessage({ type: 'success', text: data.message || 'Success' });
//       return data;
//     } catch (err) {
//       setMessage({ type: 'error', text: err.message });
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const token = localStorage.getItem('authToken'); 

//    // Fetch admins on mount
//    useEffect(() => {
//     const fetchAdmins = async () => {
//       const data = await callApi(
//         `${API_BASE}/api/admin/list`,
//         "GET",
//         null,
//         setAdminsMessage,
//         setAdminsLoading,
//         token
//       );
//       if (data && data.admins) setAdmins(data.admins);  
//     };
//     fetchAdmins();
//   }, [API_BASE, token]);

//   const sendCreateOtp = async () => {
//     if (!isValidEmail(newAdminEmail))
//       return setCreateMessage({ type: 'error', text: 'Invalid email format' });
  
//     const res = await callApi(`${API_BASE}/api/admin/send-otp-create`, 'POST',
//       { email: newAdminEmail },
//       setCreateMessage, setCreateLoading
//     );
  
//     if (res) setCreateOtpSent(true);
//   };  

//   const createAdmin = async () => {
//     if (!isValidEmail(newAdminEmail))
//       return setCreateMessage({ type: 'error', text: 'Invalid email format' });
//     if (!isStrongPassword(newAdminPassword))
//       return setCreateMessage({ type: 'error', text: 'Password too weak (min 8 chars, include number)' });
//     if (newAdminPassword !== confirmAdminPassword)
//       return setCreateMessage({ type: 'error', text: 'Passwords do not match!' });
//     if (!createOtp)
//       return setCreateMessage({ type: 'error', text: 'OTP is required' });

//     const res = await callApi(`${API_BASE}/api/admin/create`, 'POST',
//       { username: newAdminEmail, password: newAdminPassword, otp:createOtp },
//       setCreateMessage, setCreateLoading, token
//     );

//     if (res) {
//       setNewAdminEmail('');
//       setNewAdminPassword('');
//       setConfirmAdminPassword('');
//       setCreateOtp('');
//       setCreateOtpSent(false);
//     }
//   };

//   const sendResetOtp = async () => {
//     if (!isValidEmail(resetEmail))
//       return setResetMessage({ type: 'error', text: 'Invalid email!' });

//     const res = await callApi(`${API_BASE}/api/admin/request-password-reset`, 'POST',
//       { email: resetEmail },
//       setResetMessage, setResetLoading
//     );
//     if (res) setResetOtpSent(true);
//   };

//   const resetPassword = async () => {
//     if (!resetOtp || !isStrongPassword(resetPasswordVal))
//       return setResetMessage({ type: 'error', text: 'Invalid password or OTP' });

//     const res = await callApi(`${API_BASE}/api/admin/reset-password`, 'POST',
//       { username: resetEmail, password: resetPasswordVal, otp: resetOtp },
//       setResetMessage, setResetLoading,token
//     );

//     if (res) {
//       setResetEmail('');
//       setResetOtp('');
//       setResetPasswordVal('');
//       setResetOtpSent(false);
//     }
//   };

//   const assignControl = async () => {
//     if (!isValidEmail(assignEmail))
//       return setAssignMessage({ type: 'error', text: 'Invalid email' });
//     if (!controlSection)
//       return setAssignMessage({ type: 'error', text: 'Please select a section' });
//     if (!isStrongPassword(assignPassword))
//       return setAssignMessage({ type: 'error', text: 'Password too weak' });

//     const res = await callApi(`${API_BASE}/api/admin/assign-control`, 'POST',
//       { email: assignEmail, section: controlSection, password: assignPassword },
//       setAssignMessage, setAssignLoading,token
//     );

//     if (res) {
//       setAssignEmail('');
//       setAssignPassword('');
//       setControlSection('');
//     }
//   };

//   const sendDeleteOtp = async () => {
//     if (!isValidEmail(deleteEmail))
//       return setDeleteMessage({ type: 'error', text: 'Invalid email!' });

//     const res = await callApi(`${API_BASE}/api/admin/send-otp-delete`, 'POST',
//       { email: deleteEmail },
//       setDeleteMessage, setDeleteLoading
//     );
//     if (res) setDeleteOtpSent(true);
//   };

//   const deleteAdmin = async () => {
//     if (!isStrongPassword(universalPassword))
//       return setDeleteMessage({ type: 'error', text: 'Invalid universal password' });
//     if (!deleteOtp)
//       return setDeleteMessage({ type: 'error', text: 'OTP is required' });

//     const res = await callApi(`${API_BASE}/api/admin/delete`, 'DELETE',
//       { username: deleteEmail, otp: deleteOtp, password: universalPassword },
//       setDeleteMessage, setDeleteLoading,token
//     );

//     if (res) {
//       setDeleteEmail('');
//       setUniversalPassword('');
//       setDeleteOtp('');
//       setDeleteOtpSent(false);
//     }
//   };

//   const renderMessage = (msg) => {
//     if (!msg) return null;
//     return (
//       <div
//         className={`p-2 mt-2 rounded text-sm ${
//           msg.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
//         }`}
//       >
//         {msg.text}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Control Panel</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

//         {/* Create Admin */}
//         {/* <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Create New Admin</h2>
//           <input type="email" placeholder="Admin Email" value={newAdminEmail}
//             onChange={(e) => setNewAdminEmail(e.target.value)} className="input" />
//             <button onClick={sendCreateOtp} className="btn bg-purple-600 hover:bg-purple-700 w-full mb-2" disabled={createLoading}>
//            {createLoading ? 'Sending OTP...' : 'Send OTP'}
//           </button>

//           {createOtpSent && (
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={createOtp}
//           onChange={(e) => setCreateOtp(e.target.value)}
//           className="input"
//   />
// )}

//           <input type="password" placeholder="Password" value={newAdminPassword}
//             onChange={(e) => setNewAdminPassword(e.target.value)} className="input" />
//           <input type="password" placeholder="Confirm Password" value={confirmAdminPassword}
//             onChange={(e) => setConfirmAdminPassword(e.target.value)} className="input" />
//           <button onClick={createAdmin} className="btn bg-blue-600 hover:bg-blue-700 w-full" disabled={createLoading}>
//             {createLoading ? 'Creating...' : 'Create Admin'}
//           </button>
//           {renderMessage(createMessage)}
//         </section> */}


// <section className="bg-white p-6 rounded-xl shadow">
//   <h2 className="text-xl font-semibold mb-4">Create New Admin</h2>

//   {/* Email Input */}
//   <label className="block text-sm font-medium text-gray-700 mb-1">Admin Email</label>
//   <input
//     type="email"
//     placeholder="Enter admin email"
//     value={newAdminEmail}
//     onChange={(e) => setNewAdminEmail(e.target.value)}
//     className="input mb-3"
//   />

//   {/* Send OTP Button */}
//   <button
//     onClick={sendCreateOtp}
//     className="btn bg-purple-600 hover:bg-purple-700 w-full mb-4"
//     disabled={createLoading || !newAdminEmail}
//   >
//     {createLoading ? 'Sending OTP...' : 'Send OTP'}
//   </button>

//   {/* OTP Input (after sending) */}
//   {createOtpSent && (
//     <>
//       <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
//       <input
//         type="text"
//         placeholder="Enter OTP sent to email"
//         value={createOtp}
//         onChange={(e) => setCreateOtp(e.target.value)}
//         className="input mb-4"
//       />
//     </>
//   )}

//   {/* Password Fields */}
//   <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//   <input
//     type="password"
//     placeholder="Enter password"
//     value={newAdminPassword}
//     onChange={(e) => setNewAdminPassword(e.target.value)}
//     className="input mb-3"
//   />

//   <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//   <input
//     type="password"
//     placeholder="Confirm password"
//     value={confirmAdminPassword}
//     onChange={(e) => setConfirmAdminPassword(e.target.value)}
//     className="input mb-4"
//   />

//   {/* Create Button */}
//   <button
//     onClick={createAdmin}
//     className="btn bg-blue-600 hover:bg-blue-700 w-full"
//     disabled={createLoading || !createOtpSent}
//   >
//     {createLoading ? 'Creating...' : 'Create Admin'}
//   </button>

//   {/* Success/Error Message */}
//   {renderMessage(createMessage)}
// </section>


//         {/* Reset Password */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Reset Admin Password</h2>
//           <input type="email" placeholder="Admin Email" value={resetEmail}
//             onChange={(e) => setResetEmail(e.target.value)} className="input" />
//           <button onClick={sendResetOtp} className="btn bg-purple-600 hover:bg-purple-700 w-full mb-4" disabled={resetLoading}>
//             {resetLoading ? 'Sending OTP...' : 'Send OTP'}
//           </button>
//           {resetOtpSent && (
//             <>
//               <input type="password" placeholder="New Password" value={resetPasswordVal}
//                 onChange={(e) => setResetPasswordVal(e.target.value)} className="input" />
//               <input type="text" placeholder="Enter OTP" value={resetOtp}
//                 onChange={(e) => setResetOtp(e.target.value)} className="input" />
//               <button onClick={resetPassword} className="btn bg-yellow-600 hover:bg-yellow-700 w-full">
//                 {resetLoading ? 'Resetting...' : 'Reset Password'}
//               </button>
//             </>
//           )}
//           {renderMessage(resetMessage)}
//         </section>

//         {/* Assign Section Control */}
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Assign Section Control</h2>
//           <input type="email" placeholder="Admin Email" value={assignEmail}
//             onChange={(e) => setAssignEmail(e.target.value)} className="input" />
//           <select value={controlSection} onChange={(e) => setControlSection(e.target.value)} className="input">
//             <option value="">Select Section</option>
//             <option value="leads">Lead Dashboard</option>
//             <option value="invoice">Invoice Dashboard</option>
//             <option value="adminreports">Admin Reports</option>
//             <option value="admincontrol">Admin Controls</option>
//             <option value="blog">Generate Blog</option>
//           </select>
//           <input type="password" placeholder="Enter Password" value={assignPassword}
//             onChange={(e) => setAssignPassword(e.target.value)} className="input" />
//           <button onClick={assignControl} className="btn bg-green-600 hover:bg-green-700 w-full" disabled={assignLoading}>
//             {assignLoading ? 'Assigning...' : 'Assign Control'}
//           </button>
//           {renderMessage(assignMessage)}
//         </section>
//         {/* Delete Admin */}
// {/* 
//         <section className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">Delete Admin</h2>
//           <input type="email" placeholder="Admin Email" value={deleteEmail}
//             onChange={(e) => setDeleteEmail(e.target.value)} className="input" />
//           <button onClick={sendDeleteOtp} className="btn bg-purple-600 hover:bg-purple-700 w-full mb-4" disabled={deleteLoading}>
//             {deleteLoading ? 'Sending OTP...' : 'Send OTP'}
//           </button>
//           {deleteOtpSent && (
//             <>
//               <input type="password" placeholder="Universal Password" value={universalPassword}
//                 onChange={(e) => setUniversalPassword(e.target.value)} className="input" />
//               <input type="text" placeholder="Enter OTP" value={deleteOtp}
//                 onChange={(e) => setDeleteOtp(e.target.value)} className="input" />
//               <button onClick={deleteAdmin} className="btn bg-red-600 hover:bg-red-700 w-full" disabled={deleteLoading}>
//                 {deleteLoading ? 'Deleting...' : 'Delete Admin'}
//               </button>
//             </>
//           )}
//           {renderMessage(deleteMessage)}
//         </section> 
//         */}



        
//       {/* Admin List Section */}
//       <section className="bg-white p-6 rounded-xl shadow max-w-6xl mx-auto mt-8">
//         <h2 className="text-xl font-semibold mb-4">Admin List</h2>

//         {adminsLoading ? (
//           <p>Loading admins...</p>
//         ) : admins.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm border border-gray-200 rounded-lg">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-4 py-2 border">Admin ID</th>
//                   <th className="px-4 py-2 border">Email</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {admins.map((admin) => (
//                   <tr key={admin.id} className="hover:bg-gray-50">
//                     <td className="px-4 py-2 border text-center">{admin.id}</td>
//                     <td className="px-4 py-2 border">{admin.email}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p>No admins found.</p>
//         )}

//         {renderMessage(adminsMessage)}
//       </section>


//       </div>
//     </div>
//   );
// };

// export default AdminControl;



import React, { useState, useEffect } from 'react';

const AdminControl = () => {
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
  const [createLoading, setCreateLoading] = useState(false);
  const [createMessage, setCreateMessage] = useState('');
  const [createOtpSent, setCreateOtpSent] = useState(false);
  const [createOtp, setCreateOtp] = useState('');

  const [resetEmail, setResetEmail] = useState('');
  const [resetPasswordVal, setResetPasswordVal] = useState('');
  const [resetOtp, setResetOtp] = useState('');
  const [resetOtpSent, setResetOtpSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const [assignEmail, setAssignEmail] = useState('');
  const [controlSection, setControlSection] = useState('');
  const [assignPassword, setAssignPassword] = useState('');
  const [assignLoading, setAssignLoading] = useState(false);
  const [assignMessage, setAssignMessage] = useState('');

  const [admins, setAdmins] = useState([]);
  const [adminsLoading, setAdminsLoading] = useState(false);
  const [adminsMessage, setAdminsMessage] = useState('');

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const token = localStorage.getItem('authToken');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pass) => pass.length >= 6 && /\d/.test(pass);

  const callApi = async (url, method, body, setMessage, setLoading, token = null) => {
    try {
      setLoading(true);
      setMessage('');
      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const res = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      setMessage({ type: 'success', text: data.message || 'Success' });
      return data;
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      const data = await callApi(
        `${API_BASE}/api/admin/list`,
        'GET',
        null,
        setAdminsMessage,
        setAdminsLoading,
        token
      );
      if (data && data.admins) setAdmins(data.admins);
    };
    fetchAdmins();
  }, [API_BASE, token]);

  // Create Admin
  const sendCreateOtp = async () => {
    if (!isValidEmail(newAdminEmail))
      return setCreateMessage({ type: 'error', text: 'Invalid email format' });

    const res = await callApi(
      `${API_BASE}/api/admin/send-otp-create`,
      'POST',
      { email: newAdminEmail },
      setCreateMessage,
      setCreateLoading
    );

    if (res) setCreateOtpSent(true);
  };

  const createAdmin = async () => {
    if (!isValidEmail(newAdminEmail))
      return setCreateMessage({ type: 'error', text: 'Invalid email format' });
    if (!isStrongPassword(newAdminPassword))
      return setCreateMessage({ type: 'error', text: 'Password too weak (min 6 chars, include number)' });
    if (newAdminPassword !== confirmAdminPassword)
      return setCreateMessage({ type: 'error', text: 'Passwords do not match!' });
    if (!createOtp)
      return setCreateMessage({ type: 'error', text: 'OTP is required' });

    const res = await callApi(
      `${API_BASE}/api/admin/create`,
      'POST',
      { username: newAdminEmail, password: newAdminPassword, otp: createOtp },
      setCreateMessage,
      setCreateLoading,
      token
    );

    if (res) {
      setNewAdminEmail('');
      setNewAdminPassword('');
      setConfirmAdminPassword('');
      setCreateOtp('');
      setCreateOtpSent(false);
    }
  };

  // Reset Password
  const sendResetOtp = async () => {
    if (!isValidEmail(resetEmail))
      return setResetMessage({ type: 'error', text: 'Invalid email!' });

    const res = await callApi(
      `${API_BASE}/api/admin/request-password-reset`,
      'POST',
      { email: resetEmail },
      setResetMessage,
      setResetLoading
    );
    if (res) setResetOtpSent(true);
  };

  const resetPassword = async () => {
    if (!resetOtp || !isStrongPassword(resetPasswordVal))
      return setResetMessage({ type: 'error', text: 'Invalid password or OTP' });

    const res = await callApi(
      `${API_BASE}/api/admin/reset-password`,
      'POST',
      { username: resetEmail, password: resetPasswordVal, otp: resetOtp },
      setResetMessage,
      setResetLoading,
      token
    );

    if (res) {
      setResetEmail('');
      setResetOtp('');
      setResetPasswordVal('');
      setResetOtpSent(false);
    }
  };

  // Assign Section Control
  const assignControl = async () => {
    if (!isValidEmail(assignEmail))
      return setAssignMessage({ type: 'error', text: 'Invalid email' });
    if (!controlSection)
      return setAssignMessage({ type: 'error', text: 'Please select a section' });
    if (!isStrongPassword(assignPassword))
      return setAssignMessage({ type: 'error', text: 'Password too weak' });

    const res = await callApi(
      `${API_BASE}/api/admin/assign-control`,
      'POST',
      { email: assignEmail, section: controlSection, password: assignPassword },
      setAssignMessage,
      setAssignLoading,
      token
    );

    if (res) {
      setAssignEmail('');
      setAssignPassword('');
      setControlSection('');
    }
  };

  const renderMessage = (msg) => {
    if (!msg) return null;
    return (
      <div
        className={`p-2 mt-2 rounded text-sm ${
          msg.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}
      >
        {msg.text}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Admin Control Panel
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Create Admin Section */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Create New Admin</h2>
          <input
            type="email"
            placeholder="Enter admin email"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
            className="input mb-3"
          />
          <button
            onClick={sendCreateOtp}
            className="btn bg-purple-600 hover:bg-purple-700 w-full mb-4"
            disabled={createLoading || !newAdminEmail}
          >
            {createLoading ? 'Sending OTP...' : 'Send OTP'}
          </button>

          {createOtpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={createOtp}
                onChange={(e) => setCreateOtp(e.target.value)}
                className="input mb-4"
              />
            </>
          )}

          <input
            type="password"
            placeholder="Enter password"
            value={newAdminPassword}
            onChange={(e) => setNewAdminPassword(e.target.value)}
            className="input mb-3"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmAdminPassword}
            onChange={(e) => setConfirmAdminPassword(e.target.value)}
            className="input mb-4"
          />
          <button
            onClick={createAdmin}
            className="btn bg-blue-600 hover:bg-blue-700 w-full"
            disabled={createLoading || !createOtpSent}
          >
            {createLoading ? 'Creating...' : 'Create Admin'}
          </button>
          {renderMessage(createMessage)}
        </section>

        {/* Reset Password Section */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Reset Admin Password</h2>
          <input
            type="email"
            placeholder="Admin Email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            className="input mb-3"
          />
          <button
            onClick={sendResetOtp}
            className="btn bg-purple-600 hover:bg-purple-700 w-full mb-4"
            disabled={resetLoading || !resetEmail}
          >
            {resetLoading ? 'Sending OTP...' : 'Send OTP'}
          </button>

          {resetOtpSent && (
            <>
              <input
                type="password"
                placeholder="New Password"
                value={resetPasswordVal}
                onChange={(e) => setResetPasswordVal(e.target.value)}
                className="input mb-3"
              />
              <input
                type="text"
                placeholder="Enter OTP"
                value={resetOtp}
                onChange={(e) => setResetOtp(e.target.value)}
                className="input mb-4"
              />
              <button
                onClick={resetPassword}
                className="btn bg-yellow-600 hover:bg-yellow-700 w-full"
              >
                {resetLoading ? 'Resetting...' : 'Reset Password'}
              </button>
            </>
          )}
          {renderMessage(resetMessage)}
        </section>

        {/* Assign Section Control */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Assign Section Control</h2>
          <input
            type="email"
            placeholder="Admin Email"
            value={assignEmail}
            onChange={(e) => setAssignEmail(e.target.value)}
            className="input mb-3"
          />
          <select
            value={controlSection}
            onChange={(e) => setControlSection(e.target.value)}
            className="input mb-3"
          >
            <option value="">Select Section</option>
            <option value="leads">Lead Dashboard</option>
            <option value="invoice">Invoice Dashboard</option>
            <option value="adminreports">Admin Reports</option>
            <option value="admincontrol">Admin Controls</option>
            <option value="blog">Generate Blog</option>
            <option value="blogandinvoice">Blog and Invoice</option>
            <option value="blogandleads">Blog and Leads</option>
            <option value="blogandcontrol">Blog and Admin Control</option>
            <option value="invoiceandcontrol">Invoice and Admin Control</option>
            <option value="invoiceandleads">Invoice and Leads</option>
            <option value="superadmin">Super Admin</option>


          </select>
          <input
            type="password"
            placeholder="Enter Password"
            value={assignPassword}
            onChange={(e) => setAssignPassword(e.target.value)}
            className="input mb-4"
          />
          <button
            onClick={assignControl}
            className="btn bg-green-600 hover:bg-green-700 w-full"
            disabled={assignLoading}
          >
            {assignLoading ? 'Assigning...' : 'Assign Control'}
          </button>
          {renderMessage(assignMessage)}
        </section>

        {/* Admin List Section */}
        <section className="bg-white p-6 rounded-xl shadow mx-auto mt-8">
          <h2 className="text-xl font-semibold mb-4">Admin List</h2>
          {adminsLoading ? (
            <p>Loading admins...</p>
          ) : admins.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 border">Admin ID</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Section</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border text-center">{admin.id}</td>
                      <td className="px-4 py-2 border">{admin.email}</td>
                      <td className="px-4 py-2 border">{admin.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No admins found.</p>
          )}
          {/* {renderMessage(adminsMessage)} */}
        </section>
      </div>
    </div>
  );
};

export default AdminControl;
