import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PageHeader from '../../common/components/PageHeader';
import MUIDatatable from 'mui-datatables';

const styles = theme => ({
    root: {
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    schoolDetails: {
        height: '30%',
        padding: '15px 15px'
    }

})
const useStyles = makeStyles(styles)

const School = () => {
    const classes = useStyles()
    console.log(`School details here..`)
    console.log(classes.schoolDetails)

    const columns = ["id", "Name", "Address", "Phone #", "Primary Email", "Fax"]
    let data = [];

    const dummyHandler = () => { }

    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: dummyHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler
    }


    return (
        <div className={classes.root}>
            <PageHeader title="School" />
            <div className={classes.container}>
                <div className={classes.schoolDetails}>
                    Name : Bhavans</div>
                <div style={{ margin: '10px 10px' }}>
                    < MUIDatatable
                        title={'Facilities'}
                        columns={columns}
                        data={data}
                        options={options}
                    />
                </div>

            </div>
        </div>
    )
}

export default School;