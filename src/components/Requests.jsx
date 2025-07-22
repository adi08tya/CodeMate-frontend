import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { BASE_URL } from "../utils/constants";
import { FaCode, FaUserPlus, FaCheck, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await axios.get(BASE_URL + "/user/requests", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data || []));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const reviewRequest = async (status,_id) => {
    try {
        await axios.post(BASE_URL + "/request/review/" + status + "/" + _id , {} ,{withCredentials:true})
        dispatch(removeRequest(_id));
        status === "accepted"
          ? toast.success("Request accepted")
          : toast.error("Request rejected");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-300 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50 opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-4xl text-blue-300" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              CodeMate
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Connection Requests
          </h2>
          <p className="text-gray-400">
            Manage your incoming connection requests
          </p>
        </div>

        {/* Requests Stats */}
        <div className="mb-8">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">
                {requests?.length || 0}
              </div>
              <div className="text-gray-400 text-sm">Pending Requests</div>
            </div>
          </div>
        </div>

        {/* Requests List */}
        {requests && requests.length > 0 ? (
          <div className="space-y-4">
            {requests.map((request, index) => (
              <div
                key={request._id || index}
                className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        request.fromUserId.photoUrl ||
                        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                      }
                      alt={`${request.firstName} ${request.lastName}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">
                        {request.fromUserId.firstName}{" "}
                        {request.fromUserId.lastName}
                      </h3>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => reviewRequest("accepted" , request._id)}
                      className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors flex items-center gap-2"
                      title="Accept Request"
                    >
                      <FaCheck />
                      Accept
                    </button>
                    <button
                      onClick={() => reviewRequest("rejected" ,request._id)}
                      className="px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors flex items-center gap-2"
                      title="Reject Request"
                    >
                      <FaTimes />
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 max-w-md mx-auto">
              <FaUserPlus className="text-6xl text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No Requests
              </h3>
              <p className="text-gray-400">
                You don't have any pending connection requests at the moment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
