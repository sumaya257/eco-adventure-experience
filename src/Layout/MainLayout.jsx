import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-[72px]'>
            <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-369px)] container mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;