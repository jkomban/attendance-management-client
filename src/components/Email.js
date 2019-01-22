import React from 'react'
import { TextField } from '@material-ui/core'

const Email = (props) => {
    const { classes, data, handleChange } = props
    console.log(`Inside Name -> ${JSON.stringify(props)}`)
    return (
        <div className={classes.shift}>
            <TextField
                required
                id="email-id"
                name="emailID"
                label="Email ID"
                value={data}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
        </div>
    )
}

export default Email
