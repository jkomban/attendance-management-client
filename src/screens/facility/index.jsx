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

const styles = theme => ({
    root: {
        background: 'yellow'
    },
    muiTable: {
        flexGrow: 12
    }
})
const useStyles = makeStyles(styles)

const Facility = ({ faciliesData = [], _getFacilityDetails }) => {
    const [actionMode, setActionMode] = useState(false)
    const [isAddMode, setAddMode] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const [transformedData, setTransformedData] = useState([])
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
    }, [faciliesData, initialLoad])



    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: dummyHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler
    }

    return (
        <Page>
            <PageHeader title="Facilities" >
                <Actionbar mode={actionMode} changeMode={setActionMode} saveBtnHndlr={saveSchoolChangesToDB} refreshHndlr={refreshDataHandler} addDataHandler={addDataHandler} />
            </PageHeader>

            <div style={{ margin: '20px 25px',  flexDirection: 'row', flexWrap: "nowrap", flexGrow: 12 }}>
                <MUIDatatable
                    title={'Facility List'}
                    columns={columns}
                    data={faciliesData}
                    options={options}
                    // style={{ flexGrow: 12, backgroundColor: 'red', color: 'red' }}
                />
                <FacilityForm isAddMode={isAddMode} />
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