import React from 'react';
import { Button } from '@material-ui/core';
import PageHeader from '../components/PageHeader';

const Dashboard = () => {
    return (

        <div style={{ width: '100%' }}>
            <PageHeader title="Dashboard" />
            <Button variant="contained" color="primary">dashboard</Button>
        </div>
    )
};

export default Dashboard;
