import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
})
const useStyles = makeStyles(styles)


const Page = ({ children: Component }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} square>
            {Component}
        </Paper>
    )
}

export default Page