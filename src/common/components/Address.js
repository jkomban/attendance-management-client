import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

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

const Address = ({ data }) => {

    const classes = useStyles()

    const [address, setAddress] = useState(data)

    const handleChange = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(`handleChange()-> [${targetName}:${targetValue}] `)
    }

    console.log(`Inside Address ${JSON.stringify(data)}`)

    return (
        <Paper className={classes.container} elevation={3}>
            <Typography className={classes.containerLabel}>Address</Typography>
            <TextField
                id="address-line-1-id"
                name="addressLine1"
                label="Address line 1"
                margin="normal"
                variant="filled"
                value={data && data.addressLine1}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="address-line-2-id"
                name="addressLine2"
                label="Address line 2"
                margin="normal"
                value={data && data.addressLine2}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="address-city-id"
                name="city"
                label="City"
                margin="normal"
                value={data && data.city}
                className={classes.textField}
                onChange={handleChange}
            />
            <TextField
                id="address-state-id"
                name="state"
                label="State"
                margin="normal"
                className={classes.textField}
                value={data && data.state.code}
                onChange={handleChange}
            />
            <TextField
                id="address-zipcode-id"
                label="ZipCode"
                name="zipCode"
                margin="normal"
                className={classes.textField}
                value={data && data.zipCode}
                onChange={handleChange}
            />
        </Paper>
    )
}

export default Address;