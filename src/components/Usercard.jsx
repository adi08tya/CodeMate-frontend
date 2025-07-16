import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        
        {/* Profile Image */}
        <div className="relative">
          <img 
            src={user.photoUrl || "https://via.placeholder.com/400x200?text=Profile"} 
            alt={`${user.firstName} ${user.lastName}`}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {user.age} years
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          
          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
            {user.firstName} {user.lastName}
          </h2>
          
          {/* About */}
          {user.about && (
            <p className="text-gray-600 text-sm mb-4 text-center">
              {user.about}
            </p>
          )}
          
          {/* Skills */}
          {user.skills && user.skills.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {user.skills.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {user.skills.length > 3 && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    +{user.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Ignore
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
