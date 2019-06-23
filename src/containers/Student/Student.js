import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { getAllStudents, deleteStudentById } from '../../store/actions/student-actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import StudentDetails from './StudentDetails';
import StudentAdd from './StudentAdd';
import { Tabs, Tab } from '@material-ui/core';
import { List, PersonAdd } from '@material-ui/icons';

const styles = theme => ({
    root: {
        margin: '25px',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class Student extends Component {
    constructor(props) {
        super(props)
        this.id = 0;
        this.classes = props.classes;
        this.currentRowSelected = []
        this.allRowsSelected = []
        this.state = {
            selectedTab: 0,
            selectedUserDetails: null,
            studentsList: [],
            tableData: []
        }
        this.tableColumns = ["id", "Name", "Class", "Batch", "Gender", "Agg.Mark", "emailID"]
        this.tableData = []
        this.data = []
    }
    static callCount = 0;

    async updateTable() {
        this.data.length = 0;
        this.props.students && this.props.students.map(s => {
            return this.data.push([
                s.studentId,
                s.name.firstName + s.name.lastName,
                s.name.middleName,
                2010,
                s.gender,
                93.2,
                s.emailID || ``
            ])
        })
        this.tableData = this.data
        // console.log(this.data)
        // this.setState({ studentsList: _studentsList, tableData: this.data })

    }

    async componentDidMount() {
        console.log(`HERE!!!!! componentDidMount`)
        console.log(this.props)
        console.log(this.state)
        const _studentsList = await this.props.getAllStudents({ pageSize: 10, index: 0 });
        // frame the datatable
        await this.updateTable(_studentsList)
        // this.setState({ selectedTab: 0 })

    }

    async componentWillUnmount() {
        console.log(`I am inside componentWillUnMount`)
    }

    onRowClickHandler = (rowData, rowMeta) => {
    }

    onRowsSelectHandler = function (currentRowSelected, allRowsSelected) {
        console.log(`-------  ROW SELECTED ----- START`)
        this.currentRowSelected = currentRowSelected
        this.allRowsSelected = allRowsSelected
        console.log(`-------  ROW SELECTED ----- END`)
    }

    onCellClickHandler = (colData, cellMeta) => {
        console.log(`-------  CELL CLICKED ----- START`)
        console.log(colData)
        console.log(cellMeta)

        const selectedRow = this.tableData[cellMeta.rowIndex]
        const selectedUser = this.props.students.find(student => {
            if (student.studentId === selectedRow[0])
                return student
        })
        console.log(selectedUser)
        this.setState({ selectedTab: 1, selectedUserDetails: selectedUser })

        /* */
        // cellmeta doesn't have dataIndex to identify correct data after sorting
        console.log(`-------  CELL CLICKED ----- END`)
    }

    onRowsDeleteHandler = async (rowsDeleted) => {
        console.log(`-------  ROWS DELETED  ----- START`)
        console.log(rowsDeleted)
        console.log(this.props.students)
        let promiseList = [];

        for (let i = 0; i < rowsDeleted.data.length; i++) {
            const item = rowsDeleted.data[i];
            const studentToDelete =  this.props.students[item.dataIndex]
            promiseList.push(this.props.deleteStudentById(studentToDelete))
        }

        console.log(promiseList)

        await Promise.all(promiseList)
        console.log(`-------  ROWS DELETED  ----- END`)
    }

    onTabChangeHandler = async (event, value) => {
        if (value === 1) {
            console.log(`TAB 1 selected`)
            this.setState({ selectedTab: value, selectedUserDetails: null })
        }
        else {
            const _studentsList = await this.props.getAllStudents({ pageSize: 10, index: 0 });
            this.updateTable(_studentsList)
            this.setState({ selectedTab: value })
        }

    }


    tableOptions = {
        filter: true,
        filterType: 'dropdown',

        onRowClick: this.onRowClickHandler,
        onCellClick: this.onCellClickHandler,
        onRowsSelect: this.onRowsSelectHandler,
        onRowsDelete: this.onRowsDeleteHandler
    }

    dropdownHandler = (event) => {
        let key = `selected${event.target.name}Id`
        console.log(`student.dropdownHandler() - before 
            [${event.target.name}] [${this.state[key]}] [${event.target.value}]`)
        this.setState({ [key]: event.target.value })
    }

    searchClickHandler = () => {
        console.log(`Search item has been clicked`)
    }

    render() {
        this.updateTable()
        Student.callCount++;
        console.log(`Student.js-> render completed ${Student.callCount} ${JSON.stringify(this.state)}`)
        console.log(this.tableData)

        return (
            <div className={this.classes.root}>
                <Tabs value={this.state.selectedTab} onChange={this.onTabChangeHandler} scrollable scrollButtons="off">
                    <Tab icon={<List />} />
                    <Tab icon={<PersonAdd />} />
                </Tabs>
                {this.state.selectedTab === 0 && <StudentDetails
                    columns={this.tableColumns}
                    data={this.tableData}
                    options={this.tableOptions}
                />}
                {this.state.selectedTab === 1 && <StudentAdd data={this.state.selectedUserDetails} />}


            </div>
        )
    }

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

export default connect(mapStateToProps, mapDispatachToProps)(withStyles(styles)(Student));
