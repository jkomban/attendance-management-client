import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';


const style = theme => {
    console.log(theme)
    return ({
        offset: {
            marginLeft: theme.spacing(2),
            padding: theme.spacing(1),
        }
    })
}

const useStyles = makeStyles(style);

const PageHeader = ({ title }) => {
    const classes = useStyles();

    return (
        <Paper >
            <div className={classes.offset}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
            </div>
        </Paper>


    )
}

export default PageHeader;