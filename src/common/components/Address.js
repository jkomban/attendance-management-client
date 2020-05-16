import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const styles = {
    shift: {
        paddingRight: '14px',
        paddingLeft: '14px'
    }
}
const useStyles = makeStyles(styles)

const Address = ({ data }) => {

    const classes = useStyles()

    const [address, setAddress] = useState({
        addressLine1: (data && data.addressLine1) || '',
        addressLine2: (data && data.addressLine2) || '',
        city: (data && data.city) || '',
        zipCode: (data && data.zipCode) || '',
        state: (data && data.state) || ''
    })

    const handleChange = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(`handleChange()-> [${targetName}:${targetValue}] `)
        const addressState = { ...this.state.formData.address }
        addressState[targetName] = targetValue;
    }

    console.log(`Inside Address ${JSON.stringify(data)}`)

    return (
        <div className={classes.shift}>
            <TextField
                id="address-line-1-id"
                name="addressLine1"
                label="Address line 1"
                margin="normal"
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
            <br />
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
        </div>
    )
}

export default Address;