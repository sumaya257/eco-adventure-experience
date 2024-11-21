import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import AdventureExperience from '../components/AdventureExperience';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Home = () => {
    // Fetch data from the loader
    const adventures = useLoaderData();

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Duration of the animation
            once: true, // Animation happens once
        });
    }, []);

    return (
        <div className="space-y-8">
            {/* Banner Section */}
            <Banner />

            {/* Adventure Experiences Section */}
            <AdventureExperience adventures={adventures} />

            {/* "Why Choose Eco Adventures?" Section */}
            <div
                className="bg-gray-100 py-12"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1500"
                data-aos-easing="ease-out-cubic"
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Why Choose Eco Adventures?</h2>
                    <p className="mt-4 text-gray-600 text-lg px-6 md:px-12">
                        Explore the beauty of nature responsibly and sustainably. Our eco-adventure packages are designed to minimize environmental impact while maximizing your connection with nature.
                    </p>
                    <div className="flex justify-center mt-6">
                        <a
                            href="https://www.google.com/search?q=eco+adventures+journal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white py-2 px-6 rounded-md text-sm md:text-base hover:bg-green-600 focus:outline-none"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* "Join Our Community" Section */}
            <div
                className="bg-green-100 py-12"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-offset="200"
                data-aos-duration="1500"
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-800">Join Our Community</h2>
                    <p className="mt-4 text-gray-700 text-lg px-6 md:px-12">
                        Connect with fellow adventure enthusiasts, share your stories, and gain inspiration for your next journey. Together, we make responsible exploration more enjoyable.
                    </p>
                    <p className="mt-2 text-gray-600 text-sm px-6">
                        Sign up to access exclusive benefits, including early access to eco-tours, personalized recommendations, and our monthly newsletter packed with tips for sustainable travel.
                    </p>
                    <div className="flex justify-center mt-6">
                        <NavLink
                            to="/login"
                            className="bg-gray-800 text-white py-2 px-6 rounded-md text-sm md:text-base hover:bg-gray-900 focus:outline-none"
                        >
                            Join Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
