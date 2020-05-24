import React from 'react'
import Page from '../../common/components/Page';
import { Paper, Box, TextField, Typography, Card, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => {
    console.log(theme)
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-end',
            maxWidth: 'fit-content',
            backgroundColor: theme.palette.primary.light,
            padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
            margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        }
    }
});

const Login = () => {
    const classes = useStyles()
    return (
        <Page>
            <Paper className={classes.root} color="primary" elevation={3}>
                <Typography >Login Controller</Typography>
                <Card className={classes.column} variant="outlined">
                    <TextField
                        id="username-id"
                        name="username"
                        label="User Name/Email ID"
                        margin="normal"
                        className={classes.textField}
                        // value={address.addressLine1 || ''}
                        onChange={() => { }}
                    />
                    <TextField
                        id="password-id"
                        name="password"
                        label="Password"
                        margin="normal"
                        className={classes.textField}
                        // value={address.addressLine1 || ''}
                        onChange={() => { }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        // startIcon={<AddIcon />}
                        onClick={() => { }}
                    > Login</Button>
                </Card>
            </Paper>
        </Page>
    )
}

export default Login;