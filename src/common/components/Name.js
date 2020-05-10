import React from 'react'
// import { withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core'



const Name = (props) => {
    const { classes, data, handleChange } = props
    console.log(`Inside Name -> ${JSON.stringify(props)}`)
    return (
        <div className={classes.shift}>
            <TextField
                required
                id="first-name-id"
                name="firstName"
                label="First Name"
                value={(data && data.firstName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
            <TextField
                id="middle-name-id"
                name="middleName"
                label="Middle Name"
                value={(data && data.middleName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
            <TextField
                id="last-name-id"
                name="lastName"
                label="Last Name"
                value={(data && data.lastName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
        </div>
    )
}

export default Name
