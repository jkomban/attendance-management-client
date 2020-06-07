import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Page from '../../common/components/Page';
import PageHeader from '../../common/components/PageHeader'
import Actionbar from '../../common/components/Actionbar-add';
import CustomToolbar from '../../common/components/CustomToolbar';
import MUIDatatable from 'mui-datatables';
import FacilityForm from '../facility/FacilityForm';
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
    const newFacility = { address: { state: {} }, contact: {} }
    const [selectedFacility, setSelectedFacility] = useState(newFacility)

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
    }, [schoolData, batches])

    const dummyHandler = () => { }

    const addDataHandler = () => {
        console.log("Add button clicked");

        setAddMode(!setDetailPanel)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const closeDetailPanel = () => {
        setDetailPanel(false)
    }
    const openDetailPanelForAdd = () => {
        // setSelectedFacility(newFacility)
        setDetailPanel(true)
    }

    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: dummyHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler,
        customToolbar: () => <CustomToolbar addHandler={addDataHandler} />
    }

    return (
        <Page>
            <PageHeader title="Batches" >
                <Actionbar mode={actionMode} changeMode={setActionMode}
                    saveBtnHndlr={dummyHandler} refreshHndlr={refreshDataHandler} addDataHandler={addDataHandler} />
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
                {isDetailPanelOpen && <FacilityForm isEditMode={isAddMode} facility={dummyHandler}
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