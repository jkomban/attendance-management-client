import React from 'react';
import { makeStyles } from '@material-ui/core';
import MUIDatatable from 'mui-datatables';

const styles = theme => ({
    root: {
        margin: theme.spacing(3),
        overflowX: 'auto',
    }
});

const useStyles = makeStyles(styles);

const StudentDetails = ({ title, columns, data, options }) => {
    const classes = useStyles();
    console.log(data);
    return (
        <div className={classes.root}>
            <MUIDatatable
                title={'Students List'}
                columns={columns}
                data={data}
                options={options}
            />
        </div>
    )
}

export default StudentDetails;