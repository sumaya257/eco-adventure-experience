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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          {adventure.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={adventure.image}
              alt={adventure.title}
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Features</h3>
            <ul className="text-sm text-gray-500 mt-2">
              {adventure.ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">{adventure.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureDetails;
