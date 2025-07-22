import React from "react";

const TermsOfService = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4 text-lg">
        Please read these terms and conditions carefully before using CodeMate.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing or using CodeMate, you agree to be bound by these terms.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        2. User Responsibilities
      </h2>
      <p>
        You agree to use the platform in accordance with all applicable laws and
        not to misuse the service.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Limitation of Liability
      </h2>
      <p>
        CodeMate is provided "as is" without warranties of any kind. We are not
        liable for any damages arising from use of the platform.
      </p>
    </div>
  </div>
);

export default TermsOfService;
