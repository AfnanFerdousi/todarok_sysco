import React from 'react';
import Sidebar from './Sidebar'; 

const MainLayout = ({children}) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            <div className="flex-1">
              {children}
            </div>
        </div>
    );
};

export default MainLayout;
