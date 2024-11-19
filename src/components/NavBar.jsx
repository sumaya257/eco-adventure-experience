import React from 'react';

const NavBar = () => {
    return (
        <header className="bg-green-700 text-white py-4 sticky top-0 z-50">
            <div className="container mx-auto md:flex justify-between items-center">
                <h1 className="text-2xl font-bold">Eco Adventures</h1>

               
                <nav className="flex space-x-4 justify-center items-center">
                    <a href="/" className="hover:text-green-300">Home</a>
                    <a href="/profile" className="hover:text-green-300">User Profile</a>
                    <a href="/update-profile" className="hover:text-green-300">Update Profile</a>
                    <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                        Login
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;