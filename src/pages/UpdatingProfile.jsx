import React, { useState, useContext } from 'react';
import { AuthContext } from '../assets/provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdatingProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [error, setError] = useState('');
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Update Your Information
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Update Information</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatingProfile;
