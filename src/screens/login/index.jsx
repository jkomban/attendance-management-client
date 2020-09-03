import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleLogin from 'react-google-login';
import { Link as Router, Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { authenticate } from '../../store/actions/auth-actions'
import { getSchoolDetail as anotherFunction } from '../../store/actions/school-actions'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({ _authenticate, auth, _getSchoolDetail }) => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const authenticateUser = () => {
        _authenticate({ userName, password })
        setPassword('')
    }

    const gAuthSuccess = (content) => {
        console.log(content)
        _authenticate(content)
    }

    const gAuthFailure = (content) => {
        console.log(content)
    }

    useEffect(() => {
        if (auth.authenticated) {
            console.log("Authenticated ", auth.authenticated)
            _getSchoolDetail()
        }
    }, [auth])


    return (

        < Container component="main" maxWidth="xs" >
            {auth.authenticated && <Redirect to="/dashboard" />}
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={authenticateUser}
                    >
                        Sign In
                    </Button>
                    <GoogleLogin
                        clientId=""
                        onSuccess={gAuthSuccess}
                        onFailure={gAuthFailure}
                        buttonText="Login"
                        redirectUri="/home"
                    />
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Router to="/signup">
                                {/* <Link variant="body2"> */}
                                {"Don't have an account? Sign Up"}
                                {/* </Link> */}
                            </Router>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container >
    );
}

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        auth: state.auth
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _authenticate: authenticate,
        _getSchoolDetail: anotherFunction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatachToProps)(Login);
