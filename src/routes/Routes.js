import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../components/Dashboard';
import Classes from '../components/Classes';

const Routes = () => (

    <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} ></PrivateRoute>
        <PrivateRoute path="/classes" component={Classes} ></PrivateRoute>
    </Switch>
)

export default Routes;
