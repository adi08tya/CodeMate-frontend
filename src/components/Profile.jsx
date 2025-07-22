import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCode } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const Profile = () => {
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-300 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/50 to-black/50 opacity-20"></div>
      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-4xl text-blue-300" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              CodeMate
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">
            Profile Preview
          </h2>
          <p className="text-gray-400">View your profile information</p>
        </div>
        {/* Profile Card */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700/50 flex flex-col items-center w-full">
          {/* Profile Picture */}
          <div className="mb-3 flex flex-col items-center">
            <img
              src={
                userData.photoUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-600 shadow-lg"
            />
          </div>
          {/* Name & Email */}
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-100 mb-1">
              {userData.firstName} {userData.lastName}
            </h3>
            <p className="text-blue-300 text-base font-mono bg-gray-900/40 rounded px-2 py-1 inline-block">
              {userData.emailId}
            </p>
          </div>
          <hr className="w-full border-gray-700 mb-4" />
          {/* About */}
          <div className="w-full mb-4">
            <h4 className="text-gray-300 font-semibold mb-1 text-sm uppercase tracking-wider">
              About
            </h4>
            <p className="text-gray-400 bg-gray-700/40 rounded-lg p-3 min-h-[48px]">
              {userData.about || "No about info provided."}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
            {/* Age */}
            <div className="flex-1 bg-gray-900/30 rounded-lg p-4 flex flex-col items-center">
              <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Age
              </span>
              <span className="text-gray-100 text-lg font-semibold">
                {userData.age || "-"}
              </span>
            </div>
            {/* Gender */}
            <div className="flex-1 bg-gray-900/30 rounded-lg p-4 flex flex-col items-center">
              <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                Gender
              </span>
              <span className="text-gray-100 text-lg font-semibold">
                {userData.gender || "-"}
              </span>
            </div>
          </div>
          {/* Skills */}
          <div className="w-full mb-6">
            <h4 className="text-gray-300 font-semibold mb-1 text-sm uppercase tracking-wider">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {userData.skills && userData.skills.length > 0 ? (
                userData.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">No skills added.</span>
              )}
            </div>
          </div>
          {/* Edit Profile Button */}
          <div className="w-full flex justify-center">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors shadow-xl shadow-blue-500/25 flex justify-between items-center gap-1.5"
              onClick={() => navigate("/body/editprofile")}
            >
              <MdModeEditOutline />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
