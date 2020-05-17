import React from 'react'
import { Box, makeStyles, Paper } from '@material-ui/core'

const styles = theme => ({
    root: {
        width: '100%'
    }
})
const useStyles = makeStyles(styles)


const Page = ({ children: Component }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {Component}
        </Paper>
    )
}

export default Page