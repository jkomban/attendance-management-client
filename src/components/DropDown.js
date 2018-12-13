import React from 'react'
import { withStyles } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const DropDown = ({ name, selection = 'None', handleChange, classes, items }) => {
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="class-selection">{name}</InputLabel>

                <Select
                    value={selection}
                    onChange={handleChange}
                    inputProps={{
                        name: `${name}`,
                        id: 'class-selection',
                    }}
                >
                    {
                        items.map((item, index) =>
                            <MenuItem key={index} value={item.value}>{item.key}</MenuItem>
                        )
                    }

                </Select>
            </FormControl>
        </div>
    )
}

export default withStyles(styles)(DropDown);