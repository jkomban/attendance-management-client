import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../common/components/Dashboard';
import Classes from '../common/components/Classes';
import StudentScreen from '../screens/student';
import SchoolScreen from '../screens/school';
import FacilityScreen from '../screens/facility'

const Routes = props => {
    // console.log(props)
    return (
        <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
            <PrivateRoute exact path="/classes" component={Classes} ></PrivateRoute>
            <PrivateRoute exact path="/students" component={StudentScreen}></PrivateRoute>
            <PrivateRoute exact path="/school" component={SchoolScreen}></PrivateRoute>
            <PrivateRoute exact path="/facilities" component={FacilityScreen}></PrivateRoute>
        </Switch>
    )
}

export default Routes;
