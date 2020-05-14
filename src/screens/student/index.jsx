import React, { useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getAllStudents, deleteStudentById } from '../../store/actions/student-actions'
import StudetDetails from './details';

const styles = theme => ({
    root: {
        width: '100%'
    },
    button: {
        marginTop: '15px',
    }
})

const useStyles = makeStyles(styles)

const Student = ({ students, getAllStudents, ...restProps }) => {
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



    useEffect(() => {
        // get data
        console.log(`................... DATA LOADING`)
        getAllStudents({ pageSize: 10, index: 0 })

    }, [])

    return (
        <div className={classes.root}>

            {/* <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<PersonAdd />}
                >Add</Button> */}

            <StudetDetails columns={tableColumns} data={tableData} options={tableOptions}></StudetDetails>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(`Student.mapStateToProps() - ${JSON.stringify(state)}`)
    return {
        students: state.students
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        getAllStudents,
        deleteStudentById
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatachToProps)(Student);