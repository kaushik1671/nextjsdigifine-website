import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const AdminActivityDashboard = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const token = localStorage.getItem('authToken'); // ✅ grab token
        const res = await axios.get(`${API_BASE}/api/admin-log/admin-activity`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach it
          },
        });
        setLogs(res.data);
      } catch (err) {
        console.error('Error fetching logs:', err);
      }
    };
  
    fetchLogs();
  }, []);
  

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Admin Activity Logs</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">Admin</th>
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{log.username}</td>
              <td className="border px-4 py-2">{log.action}</td>
              <td className="border px-4 py-2">
                {new Date(log.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminActivityDashboard;

