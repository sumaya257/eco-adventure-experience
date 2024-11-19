import { useParams, useLoaderData } from 'react-router-dom';

const AdventureDetails = () => {
  // Get the adventure ID from the URL parameters
  const { id } = useParams();
  // Get all adventure data from the loader
  const adventures = useLoaderData();

  // Find the specific adventure based on the ID
  const adventure = adventures.find((adv) => adv.id == id);

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
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default AdventureDetails;
