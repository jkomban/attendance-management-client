import React from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    textField: {
        margin:'5px'
    }
};

const Address = (props) => {
    const { classes }= props
    console.log(`Inside Address ${JSON.stringify(props)}`)
    
    return (
        <div>
            <TextField
                id="address-line-1-id"
                label="Address line 1"
                margin="normal"
                className={classes.textField}
            />
            <TextField
                id="address-line-2-id"
                label="Address line 2"
                margin="normal"
                className={classes.textField}
            />
            <TextField
                id="address-city-id"
                label="City"
                margin="normal"
                className={classes.textField}
            />
            <br/>
            <TextField
                id="address-state-id"
                label="State"
                margin="normal"
                className={classes.textField}
            />
            <TextField
                id="address-zipcode-id"
                label="ZipCode"
                margin="normal"
                className={classes.textField}
            />
        </div>
    )
}

export default withStyles(styles)(Address);