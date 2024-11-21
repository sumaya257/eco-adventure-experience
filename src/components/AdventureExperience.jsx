import { NavLink, useNavigate } from 'react-router-dom';

const AdventureExperiences = ({ adventures }) => {
  

  return (
    <section className="w-full lg:w-8/12 mx-auto px-4 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Adventure Experiences
        </h2>
        <div className="flex flex-col gap-8 rounded-l-xl">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{adventure.title}</h3>
                <p className="text-sm md:text-base text-gray-500 mt-4">
                  {adventure.ecoFriendlyFeatures.join(', ')}
                </p>
                <p className="text-gray-600 mt-2">{adventure.shortDescription}</p>
                <NavLink
                  to={`/adventure/${adventure.id}`}
                  className="mt-6 inline-block bg-green-500 text-white py-2 px-6 rounded-md text-sm md:text-base hover:bg-green-600 focus:outline-none"
                >
                  Explore Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureExperiences;
