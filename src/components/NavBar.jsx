import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../assets/provider/AuthProvider';

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <header className="bg-green-700 text-white p-3">
            <div className="container mx-auto md:flex justify-between items-center">
                <h1 className="text-2xl font-bold">Eco Adventures</h1>

               
                <nav className="flex space-x-4 justify-center items-center">
                    <NavLink to="/" className="hover:text-green-300">Home</NavLink>
                    <a href="/profile" className="hover:text-green-300">{user && user.name}</a>
                    <a href="/update-profile" className="hover:text-green-300">Update Profile</a>
                    <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                    <NavLink to={'/login'}> Login</NavLink>   
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;