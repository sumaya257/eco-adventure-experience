import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import DynamicTitle from '../components/DynamicTitle';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <div className='h-[72px] sticky top-0 z-50 backdrop-blur-3xl mb-10'>
            <NavBar></NavBar>
            </div>
            <DynamicTitle></DynamicTitle>
            <div className='min-h-[calc(100vh-369px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;