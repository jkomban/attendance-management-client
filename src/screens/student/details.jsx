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

    const tableColumns = ["id", "Name", "Class", "Batch", "Gender", "Agg.Mark", "emailID"]
    let tableData = [];

    const dummyHandler = () => { }

    const tableOptions = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: dummyHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler
    }
    
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