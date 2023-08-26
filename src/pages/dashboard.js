import React from 'react';
import DashboardLayout from '../components/Layouts/DashboardLayout'

const Dashboard = () => {
    return (
        <div>
            <p>Page</p>            
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
    return <DashboardLayout>{page}</DashboardLayout>
}