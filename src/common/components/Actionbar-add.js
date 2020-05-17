import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import CancelIcon from '@material-ui/icons/Cancel'
import PrintIcon from '@material-ui/icons/Print'
import RefreshIcon from '@material-ui/icons/Refresh'
import AddIcon from '@material-ui/icons/AddCircle'

const styles = theme => ({
    root: {

    },
    button: {
        margin: `0px ${theme.spacing(1)}px`,
    }
})
const useStyle = makeStyles(styles);

const Actionbar = ({ mode = false, changeMode, saveBtnHndlr, refreshHndlr, addDataHandler }) => {
    const classes = useStyle()
    // console.log("ACTION BAR " + mode);


    return (
        <Box className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={addDataHandler}
            > Add</Button>
            {!mode &&
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<EditIcon />}
                    onClick={() => changeMode(true)}
                > Edit</Button>
            }
            {mode &&
                /* Show cancel button only when edit mode is true (cancel)*/
                <React.Fragment>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={saveBtnHndlr}
                    > Save</Button>
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        className={classes.button}
                        startIcon={<CancelIcon />}
                        onClick={() => changeMode(false)}
                    > cancel</Button>
                </React.Fragment>
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
                onClick={refreshHndlr}
            > Refresh</Button>

        </Box>
    )

}

export default Actionbar;