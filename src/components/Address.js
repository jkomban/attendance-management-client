import React from 'react'
import { TextField } from '@material-ui/core'

const Address = (props) => {
    const { classes, data , handleChange} = props
    console.log(`Inside Address ${JSON.stringify(props)}`)

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
                value={data && data.state}
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