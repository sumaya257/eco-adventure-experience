import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../assets/provider/AuthProvider';

const Login = () => {
    const {userLogin,setUser} = useContext(AuthContext)
    const handleSubmit = (e)=>{
         e.preventDefault()
         const form = e.target
         const email = form.email.value
         const password = form.password.value
         console.log(email,password)
         
         userLogin(email, password)
         .then(result=>{
            const user = result.user
            setUser(user)
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Wrong credentials')
          });
          
        
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-bold text-center mb-6">newTitle</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* Password Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password'
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>

                    {/* Social Login */}
                    <div className="divider my-4">OR</div>
                    <div className="form-control">
                        <button
                            type="button"
                            className="btn btn-outline btn-accent"
                        >
                            Login with Google
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-gray-500 mt-4">
                        Don't have an account?
                        <span className="text-red-500">
                            <Link to="/register"> Register</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
