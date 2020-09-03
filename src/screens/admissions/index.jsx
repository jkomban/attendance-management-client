import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { getAllApplications } from '../../store/actions/admission-actions'
import Page from '../../common/components/Page';
import PageHeader from '../../common/components/PageHeader'
import CustomToolbar from '../../common/components/CustomToolbar';
import MUIDatatable from 'mui-datatables';
import BatchForm from '../batch/Form';

const styles = theme => {
    console.log(theme)
    return ({
        root: {
            width: '100%'
        },
        container: {
            display: 'flex',
            flexDirection: 'center',
            margin: '10px 20px',
        },
        schoolDetails: {
            padding: '0px 25px',
            textAlign: 'center',
        }

    })
}
const useStyles = makeStyles(styles)

const Admissions = ({ admissionsData, _getAllApplications }) => {
    const classes = useStyles()
    const [isEditMode, setEditMode] = useState(false)
    const [isDetailPanelOpen, setDetailPanel] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true);
    const [selectedAdmission, setSelectedAdmission] = useState({})

    const columns = [
        { name: "id", label: 'ID' },
        { name: "name", label: 'code' },
        { name: "description", label: 'Full Name' },
        { name: "startDate", label: 'Start Date' },
        { name: "endDate", label: 'End Date' }
    ]

    const dummyHandler = () => { }

    const batchChangeHandler = (e) => {
        console.log(e)
        const temp = { ...selectedAdmission }
        temp[e.target.name] = e.target.value
        console.log(temp)
        setSelectedAdmission(temp)
    }

    const addDataHandler = () => {
        console.log("Add button clicked " + !isDetailPanelOpen);
        setSelectedAdmission({})
        setDetailPanel(true)
        setEditMode(true)
    }

    const saveHandler = async () => {
        console.log(`Save handler`)
        console.log(selectedAdmission)
        // if (selectedAdmission.id)
        //     await _updateBatch(selectedBatch, schoolData.id)
        // else
        //     await _addBatch(selectedBatch, schoolData.id)
        // await _getAllBatchDetails(schoolData.id)
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
        // setSelectedBatch(batches[rowMeta.dataIndex])
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


    useEffect(() => {
        const getDetails = async () => {
            setInitialLoad(false)
            await _getAllApplications()
        }


        if (initialLoad)
            getDetails();
    }, [admissionsData, initialLoad])


    return (
        <Page>
            <PageHeader title="Batches" >
            </PageHeader>

            <div className={classes.container}>
                <div className={classes.muiContainer}>
                    <MUIDatatable
                        title={'Batch List'}
                        columns={columns}
                        data={selectedAdmission}
                        options={options}
                    />
                </div>
                {isDetailPanelOpen && <BatchForm isEditMode={isEditMode}
                    batch={selectedAdmission}
                    toggleMode={setEditMode}
                    dataChangeHandler={batchChangeHandler}
                    saveHandler={saveHandler}
                    panelCloseHandler={closeDetailPanel} />}
            </div>
        </Page>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        admissionsData: state.admissions
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getAllApplications: getAllApplications,
    }, dispatch)
}

// export default School;
export default connect(mapStateToProps, mapDispatachToProps)(Admissions);