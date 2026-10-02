"use client";

import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Course filter
  const [courseFilter, setCourseFilter] = useState("all");

  // Selected enquiry for details
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // ==============================
  // TOTAL ENQUIRIES
  // ==============================

  const totalEnquiries = enquiries.length;

  // ==============================
  // FETCH ENQUIRIES
  // ==============================

  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_BASE}/api/enquiries`);

      if (!response.ok) {
        throw new Error("Failed to fetch enquiries");
      }

      const result = await response.json();

      if (result.success) {
        setEnquiries(result.data || []);
      } else {
        setEnquiries([]);
      }
    } catch (error) {
      console.error("Error fetching enquiries:", error);
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // ==============================
  // AVAILABLE COURSES
  // ==============================
  // Database me jo courses actually hain
  // wahi dropdown me show honge

  const availableCourses = [
    ...new Set(
      enquiries
        .map((enquiry) => enquiry.course?.trim())
        .filter(Boolean)
    ),
  ];

  // ==============================
  // SEARCH + COURSE FILTER
  // ==============================

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const searchText = search.trim().toLowerCase();

    const name = enquiry.name?.toString().toLowerCase() || "";
    const email = enquiry.email?.toString().toLowerCase() || "";
    const phone = enquiry.phone?.toString().toLowerCase() || "";

    const matchesSearch =
      name.includes(searchText) ||
      email.includes(searchText) ||
      phone.includes(searchText);

    const enquiryCourse =
      enquiry.course?.trim().toLowerCase() || "";

    const selectedCourse =
      courseFilter?.trim().toLowerCase() || "";

    const matchesCourse =
      courseFilter === "all" ||
      enquiryCourse === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  // ==============================
  // CLEAR FILTERS
  // ==============================

  const clearFilters = () => {
    setSearch("");
    setCourseFilter("all");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-gray-900">

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Manage and view all career enquiries
        </p>

      </div>


      {/* ========================================= */}
      {/* STAT CARD */}
      {/* ========================================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

          <p className="text-gray-600 text-sm font-medium">
            Total Enquiries
          </p>

          <h2 className="text-4xl font-bold mt-2 text-gray-900">
            {totalEnquiries}
          </h2>

        </div>

      </div>


      {/* ========================================= */}
      {/* SEARCH + FILTER */}
      {/* ========================================= */}

      <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* SEARCH */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Enquiries
            </label>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email or phone..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

          </div>


          {/* COURSE FILTER */}

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filter by Course
            </label>

            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >

              <option value="all">
                All Courses
              </option>

              {availableCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}

            </select>

          </div>

        </div>


        {/* CLEAR FILTER */}

        {(search || courseFilter !== "all") && (

          <div className="mt-4">

            <button
              onClick={clearFilters}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>


      {/* ========================================= */}
      {/* RESULT COUNT */}
      {/* ========================================= */}

      <div className="mb-4 flex items-center justify-between">

        <p className="text-sm text-gray-600">

          Showing{" "}

          <span className="font-semibold text-gray-900">
            {filteredEnquiries.length}
          </span>

          {" "}of{" "}

          <span className="font-semibold text-gray-900">
            {totalEnquiries}
          </span>

          {" "}enquiries

        </p>

      </div>


      {/* ========================================= */}
      {/* LOADING */}
      {/* ========================================= */}

      {loading && (

        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">

          <p className="text-gray-600">
            Loading enquiries...
          </p>

        </div>

      )}


      {/* ========================================= */}
      {/* TABLE */}
      {/* ========================================= */}

      {!loading && (

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-gray-900">

              {/* TABLE HEADER */}

              <thead className="bg-gray-100 text-gray-700">

                <tr>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    ID
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Name
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Email
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Phone
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    City
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Mode
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Course
                  </th>

                  <th className="p-4 text-left text-sm font-semibold whitespace-nowrap">
                    Action
                  </th>

                </tr>

              </thead>


              {/* TABLE BODY */}

              <tbody>

                {filteredEnquiries.length > 0 ? (

                  filteredEnquiries.map((enquiry) => (

                    <tr
                      key={enquiry.id}
                      className="border-t border-gray-200 hover:bg-gray-50 transition"
                    >

                      {/* ID */}

                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                        {enquiry.id}
                      </td>


                      {/* NAME */}

                      <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">
                        {enquiry.name || "-"}
                      </td>


                      {/* EMAIL */}

                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                        {enquiry.email || "-"}
                      </td>


                      {/* PHONE */}

                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                        {enquiry.phone || "-"}
                      </td>


                      {/* CITY */}

                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                        {enquiry.city || "-"}
                      </td>


                      {/* MODE */}

                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                        {enquiry.mode || "-"}
                      </td>


                      {/* COURSE */}

                      <td className="p-4 text-sm text-gray-900 min-w-[250px]">
                        {enquiry.course || "-"}
                      </td>


                      {/* ACTION */}

                      <td className="p-4 whitespace-nowrap">

                        <button
                          onClick={() => setSelectedEnquiry(enquiry)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                        >
                          View Details
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="p-10 text-center"
                    >

                      <p className="text-gray-600 font-medium">
                        No enquiries found
                      </p>

                      <p className="text-gray-400 text-sm mt-1">
                        Try changing your search or course filter.
                      </p>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      )}


      {/* ========================================= */}
      {/* DETAILS MODAL */}
      {/* ========================================= */}

      {selectedEnquiry && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto text-gray-900">

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between p-6 border-b border-gray-200">

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Enquiry Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Enquiry ID: #{selectedEnquiry.id}
                </p>

              </div>


              {/* CLOSE */}

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 text-2xl"
              >
                ×
              </button>

            </div>


            {/* MODAL BODY */}

            <div className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                {/* NAME */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Name
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.name || "-"}
                  </p>

                </div>


                {/* EMAIL */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold text-gray-900 mt-1 break-all">
                    {selectedEnquiry.email || "-"}
                  </p>

                </div>


                {/* PHONE */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Phone
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.phone || "-"}
                  </p>

                </div>


                {/* CITY */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    City
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.city || "-"}
                  </p>

                </div>


                {/* MODE */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Mode
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.mode || "-"}
                  </p>

                </div>


                {/* COURSE */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Course
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.course || "-"}
                  </p>

                </div>


                {/* IP */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    IP Address
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.ip || "-"}
                  </p>

                </div>


                {/* BROWSER */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Browser
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.browser || "-"}
                  </p>

                </div>


                {/* OS */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Operating System
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.os || "-"}
                  </p>

                </div>


                {/* DATE TIME */}

                <div className="bg-gray-50 rounded-lg p-4">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Date & Time
                  </p>

                  <p className="font-semibold text-gray-900 mt-1">
                    {selectedEnquiry.date_time || "-"}
                  </p>

                </div>

              </div>


              {/* PAGE URL */}

              <div className="bg-gray-50 rounded-lg p-4 mt-5">

                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Page URL
                </p>

                <p className="font-semibold text-gray-900 mt-1 break-all">
                  {selectedEnquiry.page_url || "-"}
                </p>

              </div>

            </div>


            {/* MODAL FOOTER */}

            <div className="p-6 border-t border-gray-200 flex justify-end">

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}