import React from 'react'
// import { withStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core'



const Name = (props) => {
    const { classes, data , handleChange} = props
    console.log(`Inside Name -> ${JSON.stringify(classes)}`)
    return (
        <div>
            <TextField
                required
                id="first-name-id"
                name="first-name-id"
                label="First Name"
                defaultValue={(data && data.firstName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
            <TextField
                id="middle-name-id"
                name="middle-name-id"
                label="Middle Name"
                defaultValue={(data && data.middleName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
            <TextField
                id="second-name-id"
                name="second-name-id"
                label="Second Name"
                defaultValue={(data && data.lastName)}
                className={classes.textField}
                margin="normal"
                onChange={handleChange}
            />
        </div>
    )
}

export default Name
