import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import PageHeader from '../../common/components/PageHeader'
import CustomToolbar from '../../common/components/CustomToolbar';
import Page from '../../common/components/Page';
import MUIDatatable from 'mui-datatables';
import FacilityForm from './FacilityForm';
import { useEffect } from 'react';
import { getAllFacilityDetail, addFacility, updateFacility } from '../../store/actions/facility-action'

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

const Facility = ({ faciliesData = [], _getFacilityDetails, schoolData, _addFacility, _updateFacility }) => {
    const [isEditMode, setEditMode] = useState(false)
    const [isDetailPanelOpen, setDetailPanel] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const newFacility = { address: { state: {} }, contact: {}, school: schoolData }
    const [selectedFacility, setSelectedFacility] = useState(newFacility)
    const classes = useStyles()

    const columns = [
        { name: "id", label: 'ID' },
        { name: "name", label: 'Name' },
        { name: "address.addressLine1", label: 'Address' },
        { name: "contact.phone1", label: 'Phone#1' },
        { name: "contact.fax", label: 'Fax' },
        { name: "contact.email1", label: 'Email#1' },
    ]
    const dummyHandler = () => { }
    console.log(faciliesData)
    console.log(selectedFacility)
    console.log(schoolData)


    const saveHandler = async () => {
        console.log("Save button clicked");

        if (selectedFacility.id) {
            await _updateFacility(selectedFacility)
            console.log("Updating facility")
        } else {
            await _addFacility(selectedFacility)
            console.log("Adding facility...")
        }

        setEditMode(false)
        setDetailPanel(false)
        setInitialLoad(true)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const contactHandler = (e) => {
        const temp = { ...selectedFacility }
        temp.contact[e.target.name] = e.target.value
        console.log(temp)
        setSelectedFacility(temp)

    }

    const addressChangeHandler = (e) => {
        console.log(e)
        const temp = { ...selectedFacility }
        if (e.target.name === "state") {
            temp.address.state = temp.address.state || {}
            temp.address.state.code = e.target.value
            /** TODO 
             * Remove hard coding..
            */
            temp.address.state.id = 3
            temp.address.country = temp.address.country || {}
            temp.address.country.id = 3
        } else {
            temp.address[e.target.name] = e.target.value
        }

        console.log(temp)
        console.log(temp === selectedFacility)
        setSelectedFacility(temp)
    }

    const dataChangeHandler = (e) => {
        console.log(e)
        const temp = { ...selectedFacility }
        temp[e.target.name] = e.target.value
        setSelectedFacility(temp)
    }

    const closeDetailPanel = () => {
        setDetailPanel(false)
    }
    const openDetailPanelForAdd = () => {
        setSelectedFacility(newFacility)
        setDetailPanel(true)
    }


    useEffect(() => {
        const getDetails = async () => {
            setInitialLoad(false)
            console.log(`Initial Load about to Happen`)
            console.log(schoolData)
            await _getFacilityDetails(schoolData.id)
        }

        if (initialLoad)
            getDetails()
    }, [faciliesData, initialLoad, selectedFacility, schoolData])


    const rowClickHandler = (rowData, rowMeta) => {
        console.log("Row Clicked")
        // console.log(rowData)
        console.log(rowMeta)
        const temp = JSON.parse(JSON.stringify(faciliesData[rowMeta.dataIndex]))
        setSelectedFacility(temp)
        setDetailPanel(true)
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
        onRowsDelete: dummyHandler,
        customToolbar: () => <CustomToolbar addHandler={openDetailPanelForAdd} refreshHandler={refreshDataHandler} />
    }

    return (
        <Page>
            <PageHeader title="Facilities" >
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
                {isDetailPanelOpen &&
                    <FacilityForm
                        isEditMode={isEditMode}
                        toggleMode={setEditMode}
                        facility={selectedFacility}
                        dataChangeHandler={dataChangeHandler}
                        addressChangeHandler={addressChangeHandler}
                        saveHandler={saveHandler}
                        contactHandler={contactHandler}
                        panelCloseHandler={closeDetailPanel} />}
            </div>
        </Page>
    )
}

const mapStateToProps = (state) => {
    return {
        faciliesData: state.facilities,
        schoolData: state.school
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getFacilityDetails: getAllFacilityDetail,
        _addFacility: addFacility,
        _updateFacility: updateFacility
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(Facility);