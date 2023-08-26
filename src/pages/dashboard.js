import React from 'react';
import DashboardLayout from '../components/Layouts/DashboardLayout'
import Head from 'next/head';

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className='h-screen flex items-center max-ps-[153px] ps-[20%]'>
                <h1 className='font-montserrat text-[#000] max-text-[130px] text-7xl font-medium'>Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page){
    return <DashboardLayout>{page}</DashboardLayout>
}