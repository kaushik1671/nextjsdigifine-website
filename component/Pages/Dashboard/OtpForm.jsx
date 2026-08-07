import React, { useState } from 'react';

const OtpForm = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter the OTP');
    } else {
      onSubmit(otp); // Pass OTP to parent component or submit to server
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter the OTP sent to your email</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OtpForm;
