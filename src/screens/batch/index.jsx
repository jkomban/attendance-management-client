import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Page from '../../common/components/Page';
import PageHeader from '../../common/components/PageHeader'
import Actionbar from '../../common/components/Actionbar-add';
import CustomToolbar from '../../common/components/CustomToolbar';
import MUIDatatable from 'mui-datatables';
import BatchForm from './Form';
import { getAllBatchDetails } from '../../store/actions/batch-action'

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

const Batch = ({ _getAllBatchDetails, batches, schoolData }) => {
    const [actionMode, setActionMode] = useState(false)
    const [isAddMode, setAddMode] = useState(false)
    const [isDetailPanelOpen, setDetailPanel] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const classes = useStyles()
    const [selectedBatch, setSelectedBatch] = useState({})

    const columns = [
        { name: "id", label: 'ID' },
        { name: "name", label: 'code' },
        { name: "description", label: 'Full Name' },
        { name: "startDate", label: 'Start Date' },
        { name: "endDate", label: 'End Date' }
    ]

    useEffect(() => {
        console.log("************ INSIDE USEEFFECT ")
        const getDetails = async () => {
            setInitialLoad(false)
            console.log(`Initial Load about to Happen`)
            console.log(schoolData)
            await _getAllBatchDetails(schoolData.id)
        }

        if (initialLoad)
            getDetails()
    }, [schoolData, batches, initialLoad])

    const dummyHandler = () => { }

    const addDataHandler = () => {
        console.log("Add button clicked " + !isDetailPanelOpen);
        setSelectedBatch({})
        setDetailPanel(true)
        setAddMode(true)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const closeDetailPanel = () => {
        setDetailPanel(false)
    }

    const rowClickHandler = (rowData, rowMeta) => {
        console.log("Row Clicked")
        if (isAddMode)
            setAddMode(false)
        setSelectedBatch(batches[rowMeta.dataIndex])
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
            <PageHeader title="Batches" >
            </PageHeader>

            <div className={classes.container}>
                <div className={classes.muiContainer}>
                    <MUIDatatable
                        title={'Batch List'}
                        columns={columns}
                        data={batches}
                        options={options}
                    />
                </div>
                {isDetailPanelOpen && <BatchForm isEditMode={isAddMode} batch={selectedBatch}
                    panelCloseHandler={closeDetailPanel} />}
            </div>

        </Page>
    )

}

const mapStateToProps = (state) => {
    return {
        schoolData: state.school,
        batches: state.batches
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getAllBatchDetails: getAllBatchDetails
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(Batch);