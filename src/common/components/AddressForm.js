import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '16px 16px',
        margin: '10px 10px',
        minWidth: '30%',
    },
    containerLabel: {
        color: theme.palette.action.active,
        fontWeight: theme.typography.fontWeightBold
    }
})

const useStyles = makeStyles(styles)

const Address = ({ mode, address, addressHandler, stateHandler }) => {
    const classes = useStyles()
    console.log(`Inside Address`)

    return (

        <Paper className={classes.container} elevation={3} disabled={!mode} >
            <Typography className={classes.containerLabel}>Address : {String(mode)} </Typography>
            <TextField
                id="address-line-1-id"
                name="addressLine1"
                label="Address line 1"
                margin="normal"
                className={classes.textField}
                value={address.addressLine1 || ''}
                onChange={addressHandler}
                disabled={!mode}
            />
            <TextField
                id="address-line-2-id"
                name="addressLine2"
                label="Address line 2"
                margin="normal"
                className={classes.textField}
                value={address.addressLine2 || ''}
                onChange={addressHandler}
                disabled={!mode}
            />
            <TextField
                id="address-city-id"
                name="city"
                label="City"
                margin="normal"
                className={classes.textField}
                value={address.city || ''}
                onChange={addressHandler}
                disabled={!mode}
            />

            <TextField
                id="address-state-id"
                name="state"
                label="State"
                margin="normal"
                className={classes.textField}
                value={address.state.code || ''}
                onChange={stateHandler}
                disabled={!mode}
            />
            <TextField
                id="address-zipcode-id"
                label="ZipCode"
                name="zipCode"
                margin="normal"
                className={classes.textField}
                value={address.zipCode || ''}
                onChange={addressHandler}
                disabled={!mode}
            />
        </Paper>
    )
}

export default Address;