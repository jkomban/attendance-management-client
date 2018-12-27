import React from 'react'
import { withStyles } from '@material-ui/core';
import { FormControlLabel, Switch, Typography } from '@material-ui/core'

// const styles = {
//     genderLabel: {
//         color: 'rgba(0, 0, 0, 0.54)',
//         letterSpacing: '0em',
//         fontSize: '.78rem',
//         lineHeight: '1.0rem'
//     },
//     shift: {}
// }

const Gender = (props) => {
    const { classes, gender, handleSwitch } = props
    console.log(`Inside Gender -> ${JSON.stringify(props)}`)
    return (
        <div className={classes.shift}>
            <Typography variant="subtitle1" className={classes.genderLabel}>Gender</Typography>
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
        </div>
    )
}

export default Gender
