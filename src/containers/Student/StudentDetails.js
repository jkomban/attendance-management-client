import React from 'react';
import { withStyles } from '@material-ui/core';
import MUIDatatable from 'mui-datatables';

const styles = theme => ({
    root: {
        width: '100%',
        margin: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});


const StudentDetails = ({ title, columns, data, options, classes }) => {
    console.log(data);
    return (
        <div>
            {data && data.length > 0 && <MUIDatatable
                title={'Students List'}
                columns={columns}
                data={data}
                options={options}
            />}
        </div>
    )
}

export default withStyles(styles)(StudentDetails);
