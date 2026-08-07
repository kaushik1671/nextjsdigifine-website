// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const AdminRoute = ({ children }) => {
//   const { admin } = useAuth();

//   if (!admin || admin.role !== 'admin') {
//     // Redirect to login if not logged in as admin
//     return <Navigate to="/admin" replace />;
//   }

//   return children;
// };

// export default AdminRoute;


import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children, allowedRoles }) => {
  const { admin } = useAuth();

  // console.log(admin)

  // Not logged in → redirect to login
  if (!admin) {
    return <Navigate to="/admin" replace />;
  }

  // Normalize roles to always be an array
  const roles = Array.isArray(admin.roles)
    ? admin.roles
    : admin.role
    ? [admin.role]
    : [];

  // console.log("admin route",roles)
  // console.log("admin id",admin.id)

  // Superadmin bypass (case-insensitive)
  if (roles.some(r => r.toLowerCase() === 'superadmin')) return children;

  // Normalize allowedRoles to array
  const allowed = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  // Check if at least one role matches allowedRoles
  if (allowedRoles && !roles.some(role => allowed.includes(role))) {
    return <Navigate to="/admindashboard/unauthorized" replace />;
  }

  return children;
};

export default AdminRoute;

