import React from "react";

const Clients = () => (
  <div className="p-8 bg-gray-50">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">International Clients</h1>
    <p className="text-lg text-gray-700 mb-6">
      See how ASDL has helped companies across the globe.
    </p>

    {/* Placeholder for client testimonials */}
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Client Name 1</h2>
        <p className="text-gray-600 italic">"ASDL’s services greatly improved our operations."</p>
        <p className="text-sm text-gray-500">— CEO, Client Company</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Client Name 2</h2>
        <p className="text-gray-600 italic">"Exceptional support and expertise from the ASDL team."</p>
        <p className="text-sm text-gray-500">— Director, Client Company</p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold">Client Name 3</h2>
        <p className="text-gray-600 italic">"A trusted partner for our digital transformation needs."</p>
        <p className="text-sm text-gray-500">— Manager, Client Company</p>
      </div>
    </div>
  </div>
);

export default Clients;
