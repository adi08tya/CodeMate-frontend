import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaUserFriends,
} from "react-icons/fa";
import { features, steps } from "../utils/constants";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Landing = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleClick = () => {
    if (user) {
      navigate("/body", { viewTransition: true });
    } else {
      navigate("/signup", { viewTransition: true });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center items-center gap-4 mb-8">
                <FaCode className="text-6xl text-blue-300" />
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  CODEMATE
                </h1>
              </div>

              <h2 className="text-3xl font-semibold mb-6 text-gray-100">
                Where Developers Connect, Collaborate & Create
              </h2>

              <p className="mb-8 text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of developers worldwide. Build connections, share
                knowledge, and collaborate on amazing projects. Your next great
                collaboration starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-blue-500/25"
                  onClick={handleClick}
                >
                  <FaRocket className="mr-2" />
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-100 mb-4">
                Why Choose CodeMate?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to connect, collaborate, and grow as a
                developer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-100 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get started in just a few simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the CodeMate community today and start building meaningful
              connections with developers worldwide.
            </p>
            <button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-xl shadow-blue-500/25 text-lg"
              onClick={handleClick}
            >
              <FaUserFriends className="mr-2" />
              Join CodeMate Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/80 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-2xl text-blue-300" />
                  <span className="text-xl font-bold text-gray-100">
                    CodeMate
                  </span>
                </div>
                <p className="text-gray-400">
                  Connecting developers worldwide through meaningful
                  collaborations and shared knowledge.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-100">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-gray-200 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/careers"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/press"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-100">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      to="/help"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="hover:text-gray-200 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-gray-100">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                Copyright © {new Date().getFullYear()} CodeMate. All rights
                reserved. Made with <FaHeart className="inline text-red-400" />{" "}
                for developers.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
