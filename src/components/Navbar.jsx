import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCode, FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleLogout = async () => {
    await axios.post(BASE_URL + "/auth/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    closeMenus();
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenus}
          >
            <FaCode className="text-2xl text-blue-300" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              CodeMate
            </span>
          </Link>

          {/* Desktop Navigation */}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/body"
                className={`text-sm font-medium transition-colors ${
                  isActive("/body")
                    ? "text-blue-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Home
              </Link>
              <Link
                to="/body/feed"
                className={`text-sm font-medium transition-colors ${
                  isActive("/body/feed")
                    ? "text-blue-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Feed
              </Link>
              <Link
                to="/explore"
                className={`text-sm font-medium transition-colors ${
                  isActive("/explore")
                    ? "text-blue-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Explore
              </Link>
              <Link
                to="/projects"
                className={`text-sm font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-blue-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Projects
              </Link>
            </div>
          )}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative ">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8">
                    <img
                      className="rounded-full"
                      src={
                        user.photoUrl ||
                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                      }
                      alt=""
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {user?.firstName || "User"}
                  </span>
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2">
                    <Link
                      to="/body/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      onClick={closeMenus}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/body/connections"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      onClick={closeMenus}
                    >
                      Connections
                    </Link>
                    <hr className="border-gray-700 my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors flex items-center space-x-2"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-700">
              {user && (
                <div>
                  {" "}
                  <Link
                    to="/"
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive("/")
                        ? "text-blue-300 bg-gray-700"
                        : "text-gray-300 hover:text-blue-300 hover:bg-gray-700"
                    }`}
                    onClick={closeMenus}
                  >
                    Home
                  </Link>
                  <Link
                    to="/feed"
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive("/feed")
                        ? "text-blue-300 bg-gray-700"
                        : "text-gray-300 hover:text-blue-300 hover:bg-gray-700"
                    }`}
                    onClick={closeMenus}
                  >
                    Feed
                  </Link>
                  <Link
                    to="/explore"
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive("/explore")
                        ? "text-blue-300 bg-gray-700"
                        : "text-gray-300 hover:text-blue-300 hover:bg-gray-700"
                    }`}
                    onClick={closeMenus}
                  >
                    Explore
                  </Link>
                  <Link
                    to="/projects"
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive("/projects")
                        ? "text-blue-300 bg-gray-700"
                        : "text-gray-300 hover:text-blue-300 hover:bg-gray-700"
                    }`}
                    onClick={closeMenus}
                  >
                    Projects
                  </Link>{" "}
                  <hr className="border-gray-700 my-2" />
                </div>
              )}

              {/* Mobile Auth Buttons */}
              {user ? (
                <>
                  <Link
                    to="/body/profile"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-gray-700 transition-colors"
                    onClick={closeMenus}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-300 hover:bg-gray-700 transition-colors"
                    onClick={closeMenus}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    onClick={closeMenus}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
