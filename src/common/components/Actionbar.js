import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import CancelIcon from '@material-ui/icons/Cancel'
import PrintIcon from '@material-ui/icons/Print'
import RefreshIcon from '@material-ui/icons/Refresh'

const styles = theme => ({
    root: {

    },
    button: {
        margin: `0px ${theme.spacing(1)}px`,
    }
})
const useStyle = makeStyles(styles);

const Actionbar = ({ mode = false, changeMode }) => {
    const classes = useStyle()
    console.log("ACTION BAR " + mode);


    return (
        <Box className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={mode ? <EditIcon /> : <SaveIcon />}
                onClick={() => changeMode(!mode)}
            > {mode ? 'Save' : 'Edit'}</Button>

            {mode &&
                /* Show cancel button only when edit mode is true (cancel)*/
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<CancelIcon />}
                    onClick={() => changeMode(true)}
                > cancel</Button>
            }
            <Button
                variant="contained"
                size="small"
                className={classes.button}
                startIcon={<PrintIcon />}
                onClick={() => { }}
            > Print</Button>
            <Button
                variant="contained"
                size="small"
                className={classes.button}
                startIcon={<RefreshIcon />}
                onClick={() => { }}
            > Refresh</Button>

        </Box>
    )

}

export default Actionbar;