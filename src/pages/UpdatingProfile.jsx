import React, { useState, useContext } from 'react';
import { AuthContext } from '../assets/provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdatingProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext); // Access user and updateUserProfile from AuthContext
  const [name, setName] = useState(user?.displayName || ''); // Initialize with current user's name
  const [photoURL, setPhotoURL] = useState(user?.photoURL || ''); // Initialize with current user's photo URL
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true); // Start loading

    try {
      // Validation: Ensure both fields are filled
      if (!name || !photoURL) {
        setError('Please fill in all fields.');
        setLoading(false);
        return;
      }

      // Update user profile using the context function
      await updateUserProfile({ displayName: name, photoURL });

      setSuccess('Profile updated successfully!');
      setTimeout(() => {
        navigate('/myprofile'); // Redirect to profile page after a short delay
      }, 2000);
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
          Update Your Information
        </h2>

        {/* Display success or error messages */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
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
              required
            />
          </div>

          {/* Photo URL Input */}
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
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn ${loading ? 'btn-disabled' : 'btn-primary'}`}
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Updating...' : 'Update Information'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatingProfile;
