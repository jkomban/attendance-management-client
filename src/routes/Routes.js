import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';

const Routes = () => (
    <BrowserRouter basename="/">
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}></Route>
                <PrivateRoute path="/header" component={Header} ></PrivateRoute>
            </Switch>
        </div>
    </BrowserRouter >
)

export default Routes;
