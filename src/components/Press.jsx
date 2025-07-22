import React from "react";

const Press = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Press</h1>
      <p className="mb-4 text-lg">
        For press inquiries, please contact us at{" "}
        <a href="mailto:press@codemate.com" className="text-blue-400 underline">
          press@codemate.com
        </a>
        .
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Latest News</h2>
      <ul className="list-disc ml-6">
        <li>April 2024: CodeMate reaches 100,000 users worldwide!</li>
        <li>March 2024: CodeMate launches new collaboration features.</li>
      </ul>
    </div>
  </div>
);

export default Press;
