import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../components/Dashboard';
import Classes from '../components/Classes';
import Student from '../containers/Student/Student'

const Routes = ({headerHandler}) => {
    return(
        <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} headerHandler={headerHandler}></PrivateRoute>
        <PrivateRoute path="/classes" component={Classes} ></PrivateRoute>
        <PrivateRoute path="/students" component={Student}></PrivateRoute>
        </Switch>
    )
}

export default Routes;
