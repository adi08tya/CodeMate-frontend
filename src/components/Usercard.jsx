import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center w-full max-w-xl bg-white shadow-md rounded-lg p-4 my-6 hover:shadow-lg transition-shadow">
      <img
        src={user.photoUrl}
        alt={user.name}
        className="w-16 h-16 rounded-full object-cover mr-6"
      />
      <div className="flex-1">
        <div className="font-bold text-lg">{user.firstName}</div>
        <div className="text-gray-500">@{user.lastName}</div>
        <div className="text-gray-700 text-sm truncate">{user.bio}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
            Age: {user.age}
          </span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
            Gender: {user.gender}
          </span>
          {user.skills && user.skills.length > 0 && (
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
              Skills: {user.skills.join(", ")}
            </span>
          )}
        </div>
      </div>
      <div className="ml-6 flex space-x-2">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Ignore
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Interested
        </button>
      </div>
    </div>
  );
};

export default UserCard;
