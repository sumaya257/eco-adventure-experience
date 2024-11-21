import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-10">
            {/* Container */}
            <div className="container mx-auto  md:flex justify-between px-10">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">About Eco Adventures</h3>
                    <p className="text-gray-400 text-sm">
                        Discover eco-friendly travel experiences that blend adventure <br></br> with sustainability.Join us in exploring the world responsibly.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
                        <li><NavLink to="/myprofile" className="text-gray-400 hover:text-white">My Profile</NavLink></li>
                        <li><NavLink to="/updateprofile" className="text-gray-400 hover:text-white">Update Profile</NavLink></li>
                        <li><NavLink to="/login" className="text-gray-400 hover:text-white">Login</NavLink></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className='font-bold text-xl mb-4'>Contact Us</h2>
                    <div className='flex space-x-4 items-center'>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500"
                    >
                        <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
                    </a>
                    </div>
                </div>

            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-gray-500 text-sm">© 2024 Eco Adventures. All Rights Reserved.</p>
            </div>
        </footer>


    );
};

export default Footer;