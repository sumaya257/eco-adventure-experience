import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../assets/provider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <header className="bg-green-700 text-white p-3">
            <div className="container mx-auto md:flex justify-between items-center">
                <h1 className="text-2xl font-bold">Eco Adventures</h1>

               
                <nav className="flex space-x-4 justify-center items-center">
                    <NavLink to="/" className="hover:text-green-300">Home</NavLink>
                    <NavLink to="/myprofile" className="hover:text-green-300">
                    {user && user?.email?
                        <div className='relative group'>
                        <img className="w-16 h-16 rounded-full border border-gray-300" src={user.photoURL} alt=""/>
                        <p className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{user.displayName}</p>
                        </div>:'User Profile'}
                    </NavLink>
                    <NavLink to='/updateprofile' className="hover:text-green-300">Update Profile</NavLink>
                    
                    {
                        user && user?.email? <button onClick={logOut}>LogOut</button>:<button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                        <NavLink to={'/login'}> Login</NavLink>   
                        </button>
                    }

                </nav>
            </div>
        </header>
    );
};

export default NavBar;