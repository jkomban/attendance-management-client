import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Tooltip, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RefreshIcon from '@material-ui/icons/Refresh'

// const styles = theme => ({

// })

// const useStyles = makeStyles(styles)


const CustomToolbar = ({ addHandler, refreshHandler = () => { } }) => {
    // const classes = useStyles()
    console.log(`Inside CustomToolbar`)

    return (

        <React.Fragment>
            <Tooltip title={"Add Facility"}>
                <IconButton onClick={addHandler}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Refresh Table"}>
                <IconButton onClick={refreshHandler}>
                    <RefreshIcon />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    )
}

export default CustomToolbar;