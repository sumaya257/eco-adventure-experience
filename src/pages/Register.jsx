import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit=(e)=>{
                 e.preventDefault();
                 const form = new FormData(e.target)
                 console.log(form)
                 const name=form.get('name')
                 const photo=form.get('photo')
                 const email=form.get('email')
                 const password=form.get('password')
                 console.log({name,email,photo,password})
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="card bg-white w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="card-body">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                     
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input name='photo' type="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {/* Login Link */}
                    <p className="text-center text-gray-500 mt-4">
                        Already have an account?
                        <span className="text-red-500">
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;