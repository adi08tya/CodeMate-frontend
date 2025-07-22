import React from "react";

const HelpCenter = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Help Center</h1>
      <p className="mb-8 text-lg">
        Find answers to common questions or reach out for support.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <ul className="mb-8">
        <li className="mb-4">
          <strong>How do I join CodeMate?</strong>
          <br />
          Sign up using your email and start connecting with developers
          instantly.
        </li>
        <li className="mb-4">
          <strong>Is CodeMate free?</strong>
          <br />
          Yes, CodeMate offers a free plan for all users.
        </li>
        <li className="mb-4">
          <strong>How do I reset my password?</strong>
          <br />
          Go to your profile settings and click on "Reset Password."
        </li>
      </ul>
      <p>
        Still need help? Contact our support team at{" "}
        <a
          href="mailto:support@codemate.com"
          className="text-blue-400 underline"
        >
          support@codemate.com
        </a>
        .
      </p>
    </div>
  </div>
);

export default HelpCenter;
