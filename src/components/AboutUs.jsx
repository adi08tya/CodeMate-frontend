import React from "react";

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mb-4 text-lg">
        CodeMate is a global platform dedicated to connecting developers,
        fostering collaboration, and empowering innovation. Our mission is to
        break down barriers and help developers build meaningful connections
        worldwide.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Our Vision</h2>
      <p className="mb-4">
        To be the leading community where developers collaborate, learn, and
        grow together, regardless of location or background.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Our Team</h2>
      <p>
        We are a passionate group of engineers, designers, and community
        builders committed to making the world of software development more
        connected and inclusive.
      </p>
    </div>
  </div>
);

export default AboutUs;
