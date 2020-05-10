import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../common/components/Dashboard';
import Classes from '../common/components/Classes';
import Student from '../containers/Student/Student'
import StudentScreen from '../screens/student';

const Routes = ({headerHandler}) => {
    return(
        <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} headerHandler={headerHandler}></PrivateRoute>
        <PrivateRoute path="/classes" component={Classes} ></PrivateRoute>
        {/* <PrivateRoute path="/students" component={Student}></PrivateRoute> */}
        <PrivateRoute path="/students" component={StudentScreen}></PrivateRoute>
        </Switch>
    )
}

export default Routes;
