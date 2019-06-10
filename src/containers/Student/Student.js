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
        this.currentRowSelected = []
        this.allRowsSelected = []
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

    async componentDidMount() {
        const _studentsList = await StudentS.getAllStudentDetails();
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
                s.email || ``
            ])
        })
        console.log(this.data)
        this.setState({ studentsList: _studentsList, tableData: this.data })


    }

    onRowClickHandler = (rowData, rowMeta) => {
        console.log(`Row clicked -- ${rowData}`)
        console.log(rowMeta)
        if (this.allRowsSelected.length !== 0) {
            console.log(`There are selected rows`);
        } else {
            console.log(`No rows selected`)
            const selectedRow = this.state.tableData[rowMeta.dataIndex]
            console.log(`Selected ID:${selectedRow[0]}`)
            const selectedUser = this.state.studentsList.find(student => {
                if (student.studentId === selectedRow[0])
                    return student
            })
            console.log(selectedUser)
            this.setState({ selectedTab: 1, selectedUserDetails: selectedUser })
            console.log(`Cell Clicked - retreiving information for ${selectedUser.studentId}-${selectedUser.name.firstName}`)
        }
    }
    onRowsSelectHandler = (currentRowSelected, allRowsSelected) => {
        console.log(`Inside Row selected`)
        this.currentRowSelected = currentRowSelected
        this.allRowsSelected = allRowsSelected
    }
    onCellClickHandler = (colData, cellMeta) => {
        // console.log(colData)
        // console.log(cellMeta)
        console.log(`Cell Clicked`)
        /* */
        // cellmeta doesn't have dataIndex to identify correct data after sorting
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
        onCellClick: this.onCellClickHandler,
        onRowsSelect: this.onRowsSelectHandler
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
                {this.state.selectedTab === 1 && <StudentAdd data={this.state.selectedUserDetails} />}


            </div>
        )
    }

}

export default withStyles(styles)(Student);
