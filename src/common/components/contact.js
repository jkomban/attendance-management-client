import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '25px 0px',
        margin: '10px 10px'
    },
    containerLabel: {
        color: theme.palette.action.active,
        fontWeight: theme.typography.fontWeightBold
    }
})

const useStyles = makeStyles(styles)

const Contact = ({ data }) => {
    const classes = useStyles()

    const handleChange = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(`handleChange()-> [${targetName}:${targetValue}] `)
    }

    return (
        <Paper className={classes.container} elevation={3}>
            <Typography className={classes.containerLabel}>Contact</Typography>
            <TextField
                id="contact_ph_1_id"
                name="phone1"
                label="Phone#1"
                margin="normal"
                variant="filled"
                value={data && data.phone1}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="contact_ph_2_id"
                name="phone2"
                label="Phone#2"
                margin="normal"
                variant="filled"
                value={data && data.phone2}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="contact_fac_id"
                name="fax"
                label="Fax"
                margin="normal"
                variant="filled"
                value={data && data.fax}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="contact_email_1_id"
                name="email1"
                label="Email#1"
                margin="normal"
                variant="filled"
                value={data && data.email1}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="contact_email_2_id"
                name="email2"
                label="Email#2"
                margin="normal"
                variant="filled"
                value={data && data.email2}
                className={classes.textField}
                onChange={handleChange}
            />

        </Paper>
    )

}

export default Contact;