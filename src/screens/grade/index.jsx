import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Page from '../../common/components/Page';
import PageHeader from '../../common/components/PageHeader'
import CustomToolbar from '../../common/components/CustomToolbar';
import MUIDatatable from 'mui-datatables';
import GradeForm from './Form';
import { getAllGradeDetails, addGrade, updateGrade } from '../../store/actions/grade-action'

const styles = () => ({
    root: {
        background: 'yellow'
    },
    muiTable: {
        flexGrow: 12
    },
    container: {
        margin: '20px 25px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "nowrap",
        flexGrow: 1
    },
    muiContainer: {
        flexGrow: 8
    }
})
const useStyles = makeStyles(styles)

const Grade = ({ _getAllGradeDetails, _updateGrade, _addGrade, grades, schoolData }) => {
    const [isEditMode, setEditMode] = useState(false)
    const [isDetailPanelOpen, setDetailPanel] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const classes = useStyles()
    const [selectedGrade, setSelectedGrade] = useState({})

    const columns = [
        { name: "id", label: 'ID' },
        { name: "name", label: 'code' },
        { name: "level", label: 'Level' },
        { name: "description", label: 'Description' },
    ]

    useEffect(() => {
        console.log("************ INSIDE USEEFFECT ")
        const getDetails = async () => {
            setInitialLoad(false)
            console.log(`Initial Load about to Happen`)
            console.log(schoolData)
            await _getAllGradeDetails(schoolData.id)
        }

        if (initialLoad)
            getDetails()
    }, [schoolData, grades, initialLoad])

    const dummyHandler = () => { }

    const dataChangeHandler = (e) => {
        console.log(e)
        const temp = { ...selectedGrade }
        temp[e.target.name] = e.target.value
        console.log(temp)
        setSelectedGrade(temp)
    }

    const addDataHandler = () => {
        console.log("Add button clicked " + !isDetailPanelOpen);
        setSelectedGrade({})
        setDetailPanel(true)
        setEditMode(true)
    }

    const saveHandler = async () => {
        console.log(`Save handler`)
        console.log(selectedGrade)
        if (selectedGrade.id)
            await _updateGrade(selectedGrade, schoolData.id)
        else
            await _addGrade(selectedGrade, schoolData.id)
        await _getAllGradeDetails(schoolData.id)
        setEditMode(false)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const closeDetailPanel = () => {
        setDetailPanel(false)
    }

    const rowClickHandler = (rowData, rowMeta) => {
        console.log("Row Clicked")
        if (isEditMode)
            setEditMode(false)
        setSelectedGrade(grades[rowMeta.dataIndex])
        setDetailPanel(true)
    }

    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: rowClickHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler,
        customToolbar: () => <CustomToolbar addHandler={addDataHandler} refreshHandler={refreshDataHandler} />
    }

    return (
        <Page>
            <PageHeader title="Grades" >
            </PageHeader>

            <div className={classes.container}>
                <div className={classes.muiContainer}>
                    <MUIDatatable
                        title={'Grade List'}
                        columns={columns}
                        data={grades}
                        options={options}
                    />
                </div>
                {isDetailPanelOpen && <GradeForm isEditMode={isEditMode}
                    grade={selectedGrade}
                    toggleMode={setEditMode}
                    dataChangeHandler={dataChangeHandler}
                    saveHandler={saveHandler}
                    panelCloseHandler={closeDetailPanel} />}
            </div>
        </Page>
    )

}

const mapStateToProps = (state) => {
    console.log(state)

    return {
        schoolData: state.school,
        grades: state.grades
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getAllGradeDetails: getAllGradeDetails,
        _updateGrade: updateGrade,
        _addGrade: addGrade
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(Grade);