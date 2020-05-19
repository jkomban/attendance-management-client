import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '16px 16px',
        margin: '10px 10px',
        minWidth: '30%'
    },
    containerLabel: {
        color: theme.palette.action.active,
        fontWeight: theme.typography.fontWeightBold
    }
})

const useStyles = makeStyles(styles)

const Contact = ({ mode = false, data, contactHandler }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.container} elevation={3} >
            <Typography className={classes.containerLabel}>Contact</Typography>
            <TextField
                id="contact_ph_1_id"
                name="phone1"
                label="Phone#1"
                margin="normal"
                value={data.phone1 || ''}
                className={classes.textField}
                onChange={contactHandler}
                disabled={!mode}
            />
            <TextField
                id="contact_ph_2_id"
                name="phone2"
                label="Phone#2"
                margin="normal"
                value={data.phone2 || ''}
                className={classes.textField}
                onChange={contactHandler}
                disabled={!mode}
            />
            <TextField
                id="contact_fac_id"
                name="fax"
                label="Fax"
                margin="normal"
                value={data.fax || ''}
                className={classes.textField}
                onChange={contactHandler}
                disabled={!mode}
            />
            <TextField
                id="contact_email_1_id"
                name="email1"
                label="Email#1"
                margin="normal"
                value={data.email1 || ''}
                className={classes.textField}
                onChange={contactHandler}
                disabled={!mode}
            />
            <TextField
                id="contact_email_2_id"
                name="email2"
                label="Email#2"
                margin="normal"
                value={data.email2 || ''}
                className={classes.textField}
                onChange={contactHandler}
                disabled={!mode}
            />

        </Paper>
    )

}

export default Contact;