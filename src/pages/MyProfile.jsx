import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../assets/provider/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="card bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
          Welcome, {user?.displayName || "Guest"}!
        </h2>

        {/* User Info */}
        <div className="flex flex-col items-center">
          {/* User Image */}
          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt="User"
            className="w-36 h-36 rounded-xl border-4 border-green-600 mb-4"
          />
          {/* User Details */}
          <p className="text-gray-600 text-lg">
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p className="text-gray-600 text-lg">
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
        </div>

        {/* Update Profile Button */}
        <div className="mt-6 text-center">
          <Link
            to="/updateprofile"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
