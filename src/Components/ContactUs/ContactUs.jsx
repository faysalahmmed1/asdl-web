import React from "react";

const ContactUs = () => (
  <div className="p-8 bg-gray-100">
    <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
    
    <form className="space-y-4 mb-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Your Email"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Message:</label>
        <textarea
          name="message"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Your Message"
          rows="5"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>

    <p className="text-lg text-gray-700 mb-4">Find us on Google Maps</p>
    <div className="w-full h-64 bg-gray-300 rounded-lg">
      {/* Google Maps placeholder */}
    </div>
  </div>
);

export default ContactUs;
