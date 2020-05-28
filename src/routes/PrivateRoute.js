import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const PrivateRoute = ({ auth, component: Component, ...rest }) => {
    console.log(rest)
    console.log(auth)

    if (rest.location.pathname.indexOf("dashboard") > -1) {
        console.log("It happened")
    } else {
        console.log(`It will never happen`)
        // console.log(rest.location.pathname.indexOf("dashboard"))
    }

    return (
        <Route
            {...rest}
            render={
                props =>
                    auth.authenticated ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/signin",
                                    state: { from: props.location }
                                }}
                            />
                        )
            }
        />
    )

};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatachToProps)(PrivateRoute);
