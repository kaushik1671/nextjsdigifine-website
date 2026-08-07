import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Helper function to decode JWT payload (browser-safe)
const decodeToken = (token) => {
  try {
    const payload = token.split('.')[1]; // JWT payload
    const decoded = JSON.parse(atob(payload)); // decode Base64
    return decoded;
  } catch (err) {
    console.error('Failed to decode token:', err);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  // Load admin from token on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded = decodeToken(token);
        const roles = Array.isArray(decoded.role)
          ? decoded.role
          : decoded.role
          ? [decoded.role]
          : [];

        // console.log('Decoded roles from token on mount:', roles);

        setAdmin({
          id:  decoded.id,
          username: decoded.username,
          roles : roles,
        });

        // console.log(admin)

      }
  }, []);

  // Login: store token only
  const loginWithToken = (token) => {
    if (!token) return false;

    const decoded = decodeToken(token);
    if (!decoded) return false;

    const roles = Array.isArray(decoded.role)
      ? decoded.role
      : decoded.role
      ? [decoded.role]
      : [];

    const adminData = {
      id: decoded.id,
      username: decoded.username,
      roles : roles,
    };

    // console.log("admin data",adminData)
    // console.log("authcontext role : ", roles)

    setAdmin(adminData);
    localStorage.setItem('authToken', token);
    // console.log('Decoded roles on login:', roles);
    return true;
  };

  // console.log(admin)

  const logout = () => {
    setAdmin(null);
    // localStorage.removeItem('admin');
    localStorage.removeItem('authToken');
    // sessionStorage.removeItem("authToken");
//     localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ admin, setAdmin, loginWithToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
