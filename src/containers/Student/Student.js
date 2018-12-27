import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { StudentS } from '../../services'
import StudentDetails from './StudentDetails';
import StudentAdd from './StudentAdd';
import { Tabs, Tab } from '@material-ui/core';
import { List, PersonAdd } from '@material-ui/icons';

// import StudentSearch from './student-search'

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
        this.state = {
            selectedClassId: 1,
            selectedBatchId: 2010,
            selectedTab: 0,
            selectedUserDetails: null,
            studentsList: [],
            tableData: []
        }
        this.tableColumns = ["id", "Name", "Class", "Batch", "Gender", "Agg.Mark", "emailID"]
        this.data = []
    }

    componentDidMount() {
        const _studentsList = StudentS.getAllStudentDetails();
        console.log(_studentsList)
        // frame the datatable
        _studentsList.map(s => {
            this.data.push([
                s.studentId,
                s.name.firstName + s.name.lastName,
                s.name.middleName,
                2010,
                s.gender,
                93.2,
                s.email
            ])
        })
        console.log(this.data)
        this.setState({ studentsList: _studentsList, tableData:this.data })


    }

    onRowClickHandler = (rowData, rowMeta) => {
        console.log(`Row clicked -- ${rowData}`)
        console.log(rowMeta)
    }
    onCellClickHandler = (colData, cellMeta) => {
        const selectedUser = this.state.studentsList[cellMeta.rowIndex]
        console.log(selectedUser)
        this.setState({ selectedTab: 1, selectedUserDetails: selectedUser })
        console.log(`Cell Clicked - retreiving information for ${selectedUser.studentId}-${selectedUser.name.firstName}`)

    }

    onTabChangeHandler = (event, value) => {
        if (value === 1)
            this.setState({ selectedTab: value, selectedUserDetails: null })
        else
            this.setState({ selectedTab: value })
    }

    tableOptions = {
        filterType: 'checkbox',
        onRowClick: this.onRowClickHandler,
        onCellClick: this.onCellClickHandler
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
        console.log(`Student.js-> render completed`)
        return (
            <div className={this.classes.root}>
                <Tabs value={this.state.selectedTab} onChange={this.onTabChangeHandler} scrollable scrollButtons="off">
                    <Tab icon={<List />} />
                    <Tab icon={<PersonAdd />} />
                </Tabs>
                {this.state.selectedTab === 0 && <StudentDetails
                    columns={this.tableColumns}
                    data={this.state.tableData}
                    options={this.tableOptions}
                />}
                {this.state.selectedTab === 1 && <StudentAdd data={this.state.selectedUserDetails}/>}


            </div>
        )
    }

}

export default withStyles(styles)(Student);
