import React from "react";

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center py-16 px-4">
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 max-w-3xl w-full text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="mb-8 text-lg">
        Insights, stories, and tips from the CodeMate community.
      </p>
      <div className="space-y-8">
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold mb-2">
            How to Build Your First Open Source Project
          </h2>
          <p className="text-gray-400 mb-1">By Jane Doe | April 2024</p>
          <p>
            Learn the basics of open source, how to get started, and best
            practices for collaborating with others.
          </p>
        </div>
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold mb-2">
            Remote Collaboration: Tools and Tips
          </h2>
          <p className="text-gray-400 mb-1">By John Smith | March 2024</p>
          <p>
            Discover the best tools and strategies for working effectively with
            distributed teams.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
