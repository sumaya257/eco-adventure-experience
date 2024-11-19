import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import AdventureExperience from '../components/AdventureExperience';

const Home = () => {
  // Fetch data from the loader
  const adventures = useLoaderData();

  return (
    <div className="space-y-8">
      {/* Banner Section */}
      <Banner/>

      {/* Adventure Experiences Section */}
      <AdventureExperience adventures={adventures} />

      {/* Additional Sections */}
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-2xl font-bold">Why Choose Eco Adventures?</h2>
        <p className="text-center mt-4 px-4">
          Experience nature responsibly and sustainably with our carefully curated eco-adventure packages.
        </p>
      </div>
      <div className="bg-green-100 py-8">
        <h2 className="text-center text-2xl font-bold">Join Our Community</h2>
        <p className="text-center mt-4 px-4">
          Connect with other adventure enthusiasts and share your experiences in our community forums.
        </p>
      </div>
    </div>
  );
};

export default Home;
