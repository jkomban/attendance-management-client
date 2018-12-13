import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, headerHandler, ...rest }) => {
    // console.log(rest)
           
    if(rest.location.pathname.indexOf("dashboard")>-1){
        console.log("It happened")
        headerHandler('This is new title')
    }else{
        console.log(`It will never happen`)
        console.log(rest.location.pathname.indexOf("dashboard"))
    }
    
    return (
        <Route
            {...rest}
            render={
                props =>
                    localStorage.getItem("authToken") ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: props.location }
                                }}
                            />
                        )
            }
        />
    )

};