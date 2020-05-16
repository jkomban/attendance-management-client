import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const style = theme => {
    // console.log(theme)
    return ({
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })
}

const useStyles = makeStyles(style);

const PageHeader = ({ title, children: Component }) => {
    const classes = useStyles();
    return (
        <Paper >
            <Box px={'25px'} py={1} className={classes.root}>
                <Typography variant="h6">
                    {title}
                </Typography>
                {Component}
            </Box>
        </Paper>


    )
}

export default PageHeader;