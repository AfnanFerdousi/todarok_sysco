import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;