import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import React from 'react'
import { ExitToApp, FaceOutlined } from '@material-ui/icons'
import { IconButton, Button } from '@material-ui/core'
import { logout } from '../../store/actions/auth-actions'

import Page from './Page'

const style = theme => ({
    root: {
        width: '100%',
        maxWidth: 250,
        background: theme.palette.primary.light
    }
})

const useStyle = makeStyles(style)

const Logout = ({ auth, _logout }) => {
    const logoutHandler = () => {
        console.log(`Logout button clicked`)
        _logout()
    }

    return (
        <Page>
            Are you sure you want to logout ?
            <div style={{ display: 'flex', flexDirection: 'row', margin: '25px 25px' }}>
                <Button variant="contained" onClick={logoutHandler}>Yes</Button>
                <Button variant="outlined">No</Button>
            </div>

        </Page>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _logout: logout
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatachToProps)(Logout);
