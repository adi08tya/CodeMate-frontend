import React from "react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-lg">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your information.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        Information We Collect
      </h2>
      <p>
        We collect information you provide when you sign up, use our services,
        or contact us.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">
        How We Use Information
      </h2>
      <p>
        Your information is used to provide and improve our services,
        communicate with you, and ensure platform security.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal
        information at any time.
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
