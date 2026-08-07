// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Logo } from '../../index';
// import { useAuth } from '../../context/AuthContext';
// import ReCAPTCHA from 'react-google-recaptcha';

// const SITE_KEY = '6LeyKIorAAAAAL_x7Q-6Z_mvXCOQt9ewiigw9Tl9'; // v2 Checkbox key

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
//   const [step, setStep] = useState('login'); // Track the login/otp step

//   const navigate = useRouter();
//   const { login } = useAuth();
//   const { setAdmin } = useAuth();
//   const { loginWithToken } = useAuth(); 

//   const reset = () => {
//     localStorage.removeItem('authToken')
//   }


//   const handleCaptchaChange = (token) => {
//     setCaptchaToken(token);
//   };

//   const handleSubmitLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
  

//     if (!captchaToken) {
//       setError('Please complete the CAPTCHA');
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password, captchaResponse: captchaToken }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const success = loginWithToken(data.token);
//         setOtpSent(true);  // OTP sent successfully
//         setStep('otp');    // Switch to OTP input step
//       } else {
//         setError(data.message || 'Invalid username or password');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Something went wrong! Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmitOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, otp }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Store the token
//         localStorage.setItem('authToken',data.token);
//         // setAdmin({ email: username, role:  }); // <-- Set admin here
//         navigate('/admindashboard'); // Redirect to admin dashboard
//       } else {
//         setError(data.message || 'Invalid OTP');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Something went wrong! Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="mb-8 ml-6">
//         <Logo />
//       </div>

//       <form
//         onSubmit={step === 'login' ? handleSubmitLogin : handleSubmitOtp}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{step === 'login' ? 'Admin Login' : 'Enter OTP'}</h2>

//         {error && (
//           <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
//             {error}
//           </div>
//         )}

//         {step === 'login' && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 autoComplete="username"
//                 placeholder="admin@example.com"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="current-password"
//                 placeholder="••••••••"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* reCAPTCHA v2 Checkbox */}
//             <div className="mb-4">
//               <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
//             </div>
//           </>
//         )}

//         {step === 'otp' && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
//               <input
//                 id="otp"
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP sent to your email"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//         >
//           {loading ? (step === 'login' ? 'Logging in...' : 'Verifying OTP...') : (step === 'login' ? 'Login' : 'Verify OTP')}
//         </button>
//         {
//   step === 'login' ? (
//     <button
//       onClick={reset}
//       disabled={loading}
//       className={`w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//     >
//       Reset
//     </button>
//   ) : null
// }
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;



















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Logo } from '../../index';
// import { useAuth } from '../../context/AuthContext';
// import ReCAPTCHA from 'react-google-recaptcha';

// const SITE_KEY = '6LeyKIorAAAAAL_x7Q-6Z_mvXCOQt9ewiigw9Tl9'; // v2 Checkbox key
// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState('login'); // "login" or "otp"

//   const navigate = useRouter();
//   const { loginWithToken, logout } = useAuth();

//   // Reset clears token + context
//   const reset = () => {
//     logout();
//   };

//   const handleCaptchaChange = (token) => {
//     setCaptchaToken(token);
//   };

//   // Step 1: Username + password
//   const handleSubmitLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!captchaToken) {
//       setError('Please complete the CAPTCHA');
//       setLoading(false);
//       return;
//     }

//     // try {
//     //   const response = await fetch(`${API_BASE}/api/auth/login`, {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify({ username, password, captchaResponse: captchaToken }),
//     //   });

//       try {
//         const response = await fetch(`${API_BASE}/api/auth/login`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ username, password}),
//         });

//       const data = await response.json();

//       if (response.ok) {
//         // at this stage you usually *don’t* log in fully,
//         // just wait for OTP verification
//         setStep('otp');
//       } else {
//         setError(data.message || 'Invalid username or password');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong! Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: Verify OTP and finalize login
//   const handleSubmitOtp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(`${API_BASE}/api/auth/verify-otp`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, otp }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const success = loginWithToken(data.token); // update context + storage
//         if (success) {
//           navigate('/admindashboard');
//         } else {
//           setError('Failed to process login token');
//         }
//       } else {
//         setError(data.message || 'Invalid OTP');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong! Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="mb-8 ml-6">
//         <Logo />
//       </div>

//       <form
//         onSubmit={step === 'login' ? handleSubmitLogin : handleSubmitOtp}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           {step === 'login' ? 'Admin Login' : 'Enter OTP'}
//         </h2>

//         {error && (
//           <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
//             {error}
//           </div>
//         )}

//         {step === 'login' && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 autoComplete="username"
//                 placeholder="admin@example.com"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="current-password"
//                 placeholder="••••••••"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* 
//             reCAPTCHA v2 Checkbox
//             <div className="mb-4">
//               <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
//             </div> */}
//           </>
//         )}

//         {step === 'otp' && (
//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
//               Enter OTP
//             </label>
//             <input
//               id="otp"
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP sent to your email"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//             loading ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           {loading
//             ? step === 'login'
//               ? 'Logging in...'
//               : 'Verifying OTP...'
//             : step === 'login'
//             ? 'Login'
//             : 'Verify OTP'}
//         </button>

//         {/* {step === 'login' && (
//           <button
//             type="button"
//             onClick={reset}
//             disabled={loading}
//             className={`w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//               loading ? 'opacity-50 cursor-not-allowed' : ''
//             }`}
//           >
//             Reset
//           </button>
//         )} */}
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;




import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";
import  Logo  from '../../Header/Logo'
import { useAuth } from '../../context/AuthContext';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('login'); // "login" or "otp"

  const navigate = useRouter();
  const { loginWithToken, logout } = useAuth();

  // Reset clears token + context
  const reset = () => {
    logout();
  };

  // Step 1: Username + password
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep('otp');
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP and finalize login
  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        const success = loginWithToken(data.token);
        if (success) {
          navigate.push('/admindashboard');
        } else {
          setError('Failed to process login token');
        }
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 ml-6">
        <Logo />
      </div>

      <form
        onSubmit={step === 'login' ? handleSubmitLogin : handleSubmitOtp}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {step === 'login' ? 'Admin Login' : 'Enter OTP'}
        </h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
            {error}
          </div>
        )}

        {step === 'login' && (
          <>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                placeholder="admin@example.com"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                placeholder="••••••••"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {step === 'otp' && (
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP sent to your email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading
            ? step === 'login'
              ? 'Logging in...'
              : 'Verifying OTP...'
            : step === 'login'
            ? 'Login'
            : 'Verify OTP'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
