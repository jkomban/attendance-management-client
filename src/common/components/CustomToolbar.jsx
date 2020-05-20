import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Box, Tooltip, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RefreshIcon from '@material-ui/icons/Refresh'

const styles = theme => ({

})

const useStyles = makeStyles(styles)


const CustomToolbar = () => {
    const classes = useStyles()
    console.log(`Inside CustomToolbar`)

    return (

        <React.Fragment>
            <Tooltip title={"Add"}>
                <IconButton onClick={() => { }}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={"Refresh"}>
                <IconButton onClick={() => { }}>
                    <RefreshIcon />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    )
}

export default CustomToolbar;