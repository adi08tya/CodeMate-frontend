import React from "react";

const ContactUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4 text-lg">
        We'd love to hear from you! Fill out the form below or email us at{" "}
        <a
          href="mailto:support@codemate.com"
          className="text-blue-400 underline"
        >
          support@codemate.com
        </a>
        .
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 bg-gray-700/50 text-gray-100"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 bg-gray-700/50 text-gray-100"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            className="w-full border rounded px-3 py-2 bg-gray-700/50 text-gray-100"
            rows="4"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default ContactUs;
