import { useParams, useLoaderData, NavLink } from 'react-router-dom';
import { useState } from 'react';

const AdventureDetails = () => {
  // Get the adventure ID from the URL parameters
  const { id } = useParams();
  // Get all adventure data from the loader
  const adventures = useLoaderData();

  // Find the specific adventure based on the ID
  const adventure = adventures.find((adv) => adv.id == id);

  const [modalOpen, setModalOpen] = useState(false); // Modal visibility state

  // Function to handle the "Talk with Expert" button click
  const handleTalkWithExpert = () => {
    const currentHour = new Date().getHours();

    // Check if the current time is between 10:00am and 8:00pm
    if (currentHour >= 10 && currentHour <= 20) {
      // Open Google Meet in a new tab if within business hours
      window.open('https://meet.google.com', '_blank');
    } else {
      // Show modal with consultation times outside business hours
      setModalOpen(true);
    }
  };

  // Close modal function
  const closeModal = () => {
    setModalOpen(false);
  };

  if (!adventure) {
    return <p>Adventure not found.</p>;
  }

  return (
    <section className="py-12 bg-gray-100 border rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          {adventure.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-20">
          {/* Left side: Image */}
          <div>
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-full object-cover border rounded-xl"
            />
          </div>

          {/* Right side: Adventure Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Adventure Overview</h3>
            <p className="text-sm text-gray-500 mt-2">{adventure.shortDescription}</p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Cost</h4>
              <p className="text-sm text-gray-600">${adventure.cost}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Location</h4>
              <p className="text-sm text-gray-600">{adventure.location}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Duration</h4>
              <p className="text-sm text-gray-600">{adventure.duration}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Max Group Size</h4>
              <p className="text-sm text-gray-600">{adventure.maxGroupSize}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Special Instructions</h4>
              <ul className="text-sm text-gray-500">
                {adventure.specialInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800">Features</h3>
              <ul className="text-sm text-gray-500 mt-2">
                {adventure.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-500 mt-4">{adventure.description}</p>

            {/* Talk with Expert Button */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleTalkWithExpert}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Talk with Expert
              </button>
              <NavLink
                to='/'
                className="px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-blue-600"
              >
                Back to home
              </NavLink>
            </div>
          </div>
        </div>

        {/* Modal for consultation time */}
        {modalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-xl w-1/2"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Consultation Times</h2>
              <p className="text-gray-600">Our expert is available between 10:00 AM and 8:00 PM.</p>
              <p className="text-gray-600 mt-4">Please check back during those hours for a live consultation.</p>
              <div className="mt-6 text-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdventureDetails;
