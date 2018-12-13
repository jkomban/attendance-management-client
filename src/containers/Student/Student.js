import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
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
            selectedUserDetails: null
        }
        this.tableColumns = ["id", "Name", "Class", "Batch", "Gender", "Agg.Mark"]
        this.data = [
            [1102, "Kuttiraja V", "10-A", 2010, "M", 82.5],
            [1242, "John P", "10-B", 2010, "M", 85.3],
            [1123, "Vaidy V", "10-C", 2010, "M", 88.2],
            [1423, "Krishna S", "10-D", 2010, "M", 89.9],
            [1323, "Ram S", "10-E", 2010, "M", 92.8],
            [1126, "Tim", "11-A", 2010, "M", 99.9]
        ]
    }

    onRowClickHandler = (rowData, rowMeta) => {
        console.log(`Row clicked -- ${rowData}`)
        console.log(rowData)
        console.log(rowMeta)
    }
    onCellClickHandler = (colData, cellMeta) => {
        const selectedUser = this.data[cellMeta.rowIndex]
        this.setState({ selectedTab: 1, selectedUserDetails: selectedUser })
        console.log(`Cell Clicked - retreiving information for ${selectedUser[0]}-${selectedUser[1]}`)

    }

    onTabChangeHandler = (event, value) => {
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
        return (
            <div className={this.classes.root}>
                <Tabs value={this.state.selectedTab} onChange={this.onTabChangeHandler} scrollable scrollButtons="off">
                    <Tab icon={<List />} />
                    <Tab icon={<PersonAdd />} />
                </Tabs>
                {this.state.selectedTab === 0 && <StudentDetails
                    columns={this.tableColumns}
                    data={this.data}
                    options={this.tableOptions}
                />}
                {this.state.selectedTab === 1 && <StudentAdd data={this.state.selectedUserDetails}>Item Two</StudentAdd>}

                {/* <StudentSearch
                    selectedClassId={this.state.selectedClassId}
                    selectedBatchId={this.state.selectedBatchId}
                    handleChange={this.dropdownHandler}
                    handleClick={this.searchClickHandler}>
                </StudentSearch> */}


            </div>
        )
    }

}

export default withStyles(styles)(Student);
