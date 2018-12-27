import React from 'react'
import { withStyles } from '@material-ui/core';
import { FormControlLabel, Switch } from '@material-ui/core'

const styles = {

}

const Gender = (props) => {
    const { classes, gender, handleSwitch } = props
    console.log(`Inside Gender -> ${JSON.stringify(gender)}`)
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={(gender && (gender === 'M' ? true : false)) || false}
                    value={gender || 'M'}
                    color={(gender && (gender === 'M' ? "primary" : "secondary")) || "secondary"}
                    onChange={handleSwitch}
                />
            }
            label={(gender && (gender === 'M' ? 'Male' : 'Female')) || 'Female'}
            labelPlacement="end"
        />
    )
}

export default withStyles(styles)(Gender)
