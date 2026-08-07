import React from "react";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-md text-center">
        <div className="text-red-500 text-6xl mb-4">
          🚫
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-6">
          You're not authorized person to view this section. <br />
          Please do not proceed any further.
        </p>
        <a
          href="/"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Unauthorized;
