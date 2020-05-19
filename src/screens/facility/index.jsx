import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import PageHeader from '../../common/components/PageHeader'
import Actionbar from '../../common/components/Actionbar-add';
import Page from '../../common/components/Page';
import MUIDatatable from 'mui-datatables';
import FacilityForm from './FacilityForm';
import { useEffect } from 'react';
import { getAllFacilityDetail } from '../../store/actions/facility-action'

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

const Facility = ({ faciliesData = [], _getFacilityDetails }) => {
    const [actionMode, setActionMode] = useState(false)
    const [isAddMode, setAddMode] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const [transformedData, setTransformedData] = useState([])
    const [selectedFacility, setSelectedFacility] = useState({ address: { state: {} }, contact: {} })
    const classes = useStyles()

    const columns = [
        { name: "id", label: 'ID' },
        { name: "name", label: 'Name' },
        { name: "address.addressLine1", label: 'Address' },
        { name: "address.addressLine2", label: 'Address' },
        { name: "contact.phone1", label: 'Phone#1' },
        { name: "contact.fax", label: 'Fax' },
        { name: "contact.email1", label: 'Email#1' },
        { name: "contact.email2", label: 'Email#2' },
    ]
    let data = [];
    const dummyHandler = () => { }
    console.log(faciliesData)
    console.log(selectedFacility)


    const saveSchoolChangesToDB = async () => {
        console.log("Changes saved to DB");
        setActionMode(false)
    }

    const addDataHandler = () => {
        console.log("Add button clicked");

        setAddMode(!isAddMode)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }


    useEffect(() => {
        const getDetails = async () => {
            setInitialLoad(false)
            await _getFacilityDetails()
        }

        if (initialLoad)
            getDetails()
    }, [faciliesData, initialLoad, selectedFacility])


    const rowClickHandler = (rowData, rowMeta) => {
        console.log("Row Clicked")
        // console.log(rowData)
        console.log(rowMeta)
        setSelectedFacility(faciliesData[rowMeta.dataIndex])
        setAddMode(true)
    }

    const cellClickHandler = (...rest) => {
        // console.log("Cell Clicked")
        // console.log(rest)
    }

    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: rowClickHandler,
        onCellClick: cellClickHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler
    }

    return (
        <Page>
            <PageHeader title="Facilities" >
                <Actionbar mode={actionMode} changeMode={setActionMode} saveBtnHndlr={saveSchoolChangesToDB} refreshHndlr={refreshDataHandler} addDataHandler={addDataHandler} />
            </PageHeader>

            <div className={classes.container}>
                <div className={classes.muiContainer}>
                    <MUIDatatable
                        title={'Facility List'}
                        columns={columns}
                        data={faciliesData}
                        options={options}
                    />
                </div>
                {isAddMode && <FacilityForm isEditMode={isAddMode} facility={selectedFacility} />}
            </div>

        </Page>
    )
}

const mapStateToProps = (state) => {
    return {
        faciliesData: state.facilities
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getFacilityDetails: getAllFacilityDetail
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(Facility);