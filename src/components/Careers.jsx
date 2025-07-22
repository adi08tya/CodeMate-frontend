import React from "react";

const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <p className="mb-4 text-lg">
        Join CodeMate and help shape the future of developer collaboration! We
        value creativity, diversity, and a passion for technology.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Why Work With Us?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Remote-friendly culture</li>
        <li>Opportunities for growth</li>
        <li>Inclusive and diverse team</li>
        <li>Cutting-edge projects</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Open Positions</h2>
      <p>
        Currently, there are no open positions. Please check back soon or send
        your resume to careers@codemate.com for future opportunities!
      </p>
    </div>
  </div>
);

export default Careers;
