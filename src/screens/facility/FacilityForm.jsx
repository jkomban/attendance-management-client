import React from 'react'
import { makeStyles, Box, Paper, TextField, Typography } from '@material-ui/core'
import Address from '../../common/components/AddressForm';
import Contact from '../../common/components/ContactForm';

const styles = theme => {
    console.log(theme)
    return ({
        root: {
            flexGrow: 12,
            height: 'fit-content',
            margin: `0px ${theme.spacing(1)}px`
        },
        contactAddress: {
            display: 'flex',
            "& >div": {
                flex: 1
            }
        },
        textField: {
            margin: '10px 20px',
            display: 'flex',
            flex: 1
        }
    })
}
const useStyles = makeStyles(styles)

const FacilityForm = ({ isEditMode, facility }) => {
    const classes = useStyles()
    console.log("FacilityForm")
    console.log(facility);

    return (
        <Paper className={classes.root} elevation={5} variant="elevation" >
            <TextField
                id="facility-name-id"
                name="name"
                label="Facility Name"
                margin="normal"
                className={classes.textField}
                value={facility.name || ''}
                onChange={() => { }}
                disabled={!isEditMode}
            />
            <div className={classes.contactAddress}>
                <Address mode={isEditMode} address={facility.address} />
                <Contact mode={isEditMode} data={facility.contact} contactHandler={() => { }} />
            </div>

        </Paper>
    )
}

export default FacilityForm