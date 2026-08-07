// src/pages/NotFound.jsx
import {lazy, Suspense} from 'react'
// import { Link } from 'react-router-dom';
import Link from "next/link";
// import CareerForm from './CareerForm';

const CareerForm = lazy(()=>import('../../Container/CareerForm'))

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
        This page is under construction or doesn't exist.
      </h2>
      <p className="text-gray-600 mt-4 max-w-md">
        Sorry for the inconvenience! We're working on it. If you were expecting something here, feel free to reach out and let us know by filling out the form.
      </p>

    <div className='my-6'>
      <CareerForm/>
      </div>
      <div className="my-6 space-x-4">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
