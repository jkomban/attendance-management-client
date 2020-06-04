import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../common/components/Dashboard';
import Classes from '../common/components/Classes';
import StudentScreen from '../screens/student';
import SchoolScreen from '../screens/school';
import FacilityScreen from '../screens/facility';
import LoginScreen from '../screens/login';
import SignUpScreen from '../screens/sign-up';
import LogoutScreen from '../common/components/Logout';
import BatchScreen from '../screens/batch';

const Routes = props => {
    // console.log(props)
    return (
        <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
            <PrivateRoute exact path="/classes" component={Classes} ></PrivateRoute>
            <PrivateRoute exact path="/students" component={StudentScreen}></PrivateRoute>
            <PrivateRoute exact path="/school" component={SchoolScreen}></PrivateRoute>
            <PrivateRoute exact path="/facilities" component={FacilityScreen}></PrivateRoute>
            <PrivateRoute exact path="/batch" component={BatchScreen}></PrivateRoute>
            <Route exact path="/signin" component={LoginScreen} />
            <Route exact path="/signup" component={SignUpScreen} />
            <PrivateRoute exact path="/logout" component={LogoutScreen} />
        </Switch>
    )
}

export default Routes;
