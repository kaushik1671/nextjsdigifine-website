"use client"

import React from "react";

const policySections = [
  {
    title: "No Refund on Registration",
    points: [
      "All fees paid at the time of registration are non-refundable.",
      "Under no circumstances shall the Student be entitled to claim a refund once registration has been completed.",
    ],
  },
  {
    title: "Refunds Subject to Management Discretion",
    points: [
      "Any request for a refund, whether partial or full, shall be entertained solely at the absolute and exclusive discretion of the Management of the Institute.",
      "The decision of the Management shall be final, conclusive, and binding upon the Student without any further obligation on the part of the Institute.",
    ],
  },
  {
    title: "Post Commencement of Batch",
    points: [
      "Once the batch/program has commenced, the Student shall not be entitled to any refund of fees under any circumstances.",
      "The Student shall remain liable to pay the entire course fees irrespective of withdrawal, absence, or discontinuation.",
      "The Institute reserves the right to recover unpaid fees as enrollment blocks a seat that could otherwise be allotted to another candidate.",
    ],
  },
  {
    title: "Freezing, Withdrawal, or Discontinuation",
    points: [
      "Any request for freezing, withdrawal, or discontinuation after commencement shall not relieve the Student from paying full program fees.",
      "Non-attendance, absenteeism, or failure to participate shall not be considered grounds for waiver or reduction of fees.",
    ],
  },
];

export default function CancellationRefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4 text-3xl">
              📄
            </div>

            <div>
              <h1 className="text-3xl font-bold md:text-4xl">
                Cancellation & Refund Policy
              </h1>
              <p className="mt-2 text-blue-100">
                Digifine Institute • Student Registration Terms
              </p>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-blue-50">
            This policy constitutes a binding agreement between the Student and
            Digifine Institute upon registration for any program. By proceeding
            with registration, the Student acknowledges and accepts all terms
            mentioned below.
          </p>
        </div>


        {/* Policy Cards */}
        <div className="space-y-6">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-slate-800">
                    {section.title}
                  </h2>

                  <ul className="mt-4 space-y-3 text-slate-600">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 leading-relaxed"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>


        {/* Acceptance Box */}
        <div className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-7">

          <h2 className="text-xl font-bold text-indigo-900">
            Acceptance of Policy
          </h2>

          <div className="mt-4 space-y-3 text-indigo-800">
            <p>
              ✓ By registering for any program, the Student expressly agrees to
              be bound by this Cancellation & Refund Policy.
            </p>

            <p>
              ✓ The Institute reserves the right to amend, modify, or update
              this Policy at its sole discretion without prior notice.
            </p>
          </div>

        </div>


        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-slate-900 px-8 py-6 text-white md:flex-row">

          <div>
            <h3 className="font-semibold">
              Digifine Institute
            </h3>
            <p className="text-sm text-slate-300">
              Your commitment matters. Please review all terms before enrollment.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
            I Accept & Continue
          </button>

        </div>

      </div>
    </div>
  );
}