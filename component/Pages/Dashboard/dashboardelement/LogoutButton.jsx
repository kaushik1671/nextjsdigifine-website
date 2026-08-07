import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Correct import
import { useRouter } from "next/navigation";


const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useRouter();

  const handleLogout = () => {
    logout();
    navigate.push('/admin/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
