import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;