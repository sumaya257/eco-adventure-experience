import { Link, NavLink, useNavigate } from 'react-router-dom';

const AdventureExperiences = ({ adventures }) => {
  const navigate = useNavigate();

  // Handle the Explore button click
  const handleExplore = (id) => {
    const isLoggedIn = false; // Replace with actual authentication check
    if (isLoggedIn) {
      navigate(`/adventure/${id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Adventure Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center hover:scale-105 transform transition-all duration-300"
            >
              {/* Left side: Text content */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800">{adventure.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  {adventure.ecoFriendlyFeatures.join(', ')}
                </p>
                <NavLink to={`/adventure/${adventure.id}`}
                  className="btn btn-primary mt-4  bg-green-500 text-white py-2 px-4 rounded-md text-sm hover:bg-green-600 focus:outline-none">
                  Explore Now
                </NavLink>
              </div>

              {/* Right side: Image */}
              <div className="w-1/2">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureExperiences;
