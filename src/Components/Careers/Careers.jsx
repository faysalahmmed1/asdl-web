import React from "react";

const Careers = () => (
  <div className="p-8 bg-white">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Careers</h1>
    <p className="text-lg text-gray-700 mb-6">
      Join our team to build a promising career in IT and digital services.
    </p>

    {/* Placeholder for job listings */}
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Job Title 1</h2>
        <p className="text-gray-600">Location: Remote/Hybrid</p>
        <p className="text-gray-600">Job Description: Brief description...</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Job Title 2</h2>
        <p className="text-gray-600">Location: Remote/Hybrid</p>
        <p className="text-gray-600">Job Description: Brief description...</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  </div>
);

export default Careers;
