import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice.js";
import { useDispatch, useSelector } from "react-redux";
import {
  FaCode,
  FaSearch,
  FaUserPlus,
  FaUserFriends,
  FaEnvelope,
} from "react-icons/fa";
import {MdPersonRemove } from "react-icons/md";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);

  const fetchConnections = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addConnections(res.data.data || []));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  useEffect(() => {
    if (connections && connections.length > 0) {
      const filtered = connections.filter(
        (connection) =>
          connection.firstName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          connection.lastName
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          connection.skills?.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredConnections(filtered);
    } else {
      setFilteredConnections([]);
    }
  }, [searchTerm, connections]);

  const handleRemoveConnection = async (connectionId) => {
    try {
      await axios.delete(`${BASE_URL}/user/connections/${connectionId}`, {
        withCredentials: true,
      });
      // Refresh connections after removal
      fetchConnections();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = (connection) => {
    // Implement messaging functionality
    console.log("Send message to:", connection);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-300 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading connections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50 opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-4xl text-blue-300" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              CodeMate
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            My Connections
          </h2>
          <p className="text-gray-400">
            Connect with fellow developers and collaborators
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search connections by name or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
            />
          </div>
        </div>

        {/* Connections Stats */}
        <div className="mb-8">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">
                  {connections?.length || 0}
                </div>
                <div className="text-gray-400 text-sm">Total Connections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">
                  {filteredConnections.length}
                </div>
                <div className="text-gray-400 text-sm">Showing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connections Grid */}
        {connections && connections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map((connection, index) => (
              <div
                key={connection._id || index}
                className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={
                      connection.photoUrl ||
                      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    }
                    alt={`${connection.firstName} ${connection.lastName}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-100">
                      {connection.firstName} {connection.lastName}
                    </h3>
                  </div>
                </div>


                {/* Skills */}
                {connection.skills && connection.skills.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {connection.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {connection.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded-full text-xs">
                          +{connection.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleSendMessage(connection)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-colors"
                  >
                    <FaEnvelope className="text-xs" />
                    Message
                  </button>
                  <button
                    onClick={() => handleRemoveConnection(connection._id)}
                    className="px-3 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-sm font-medium hover:bg-red-500/30 transition-colors"
                    title="Remove Connection"
                  >
                    <MdPersonRemove />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 max-w-md mx-auto">
              <FaUserFriends className="text-6xl text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No Connections Yet
              </h3>
              <p className="text-gray-400 mb-6">
                Start building your network by connecting with other developers
                and collaborators.
              </p>
              <Link to="/body/feed">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors flex items-center gap-2 mx-auto">
                  <FaUserPlus />
                  Explore Developers
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* No Search Results */}
        {searchTerm &&
          filteredConnections.length === 0 &&
          connections &&
          connections.length > 0 && (
            <div className="text-center py-8">
              <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 max-w-md mx-auto">
                <FaSearch className="text-4xl text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  No Results Found
                </h3>
                <p className="text-gray-400">
                  No connections match your search for "{searchTerm}"
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Connections;
