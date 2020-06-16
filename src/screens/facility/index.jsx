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

const Facility = ({ faciliesData = [], _getFacilityDetails, schoolData }) => {
    const [isEditMode, setEditMode] = useState(false)
    const [isDetailPanelOpen, setDetailPanel] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const newFacility = { address: { state: {} }, contact: {} }
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


    const saveHandler = () => {
        console.log("Save button clicked");
        setEditMode(false)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const addressChangeHandler = (e) => {
        console.log(e)
        const temp = { ...selectedFacility }
        if (e.target.name == "state") {
            temp.address.state = temp.address.state || {}
            temp.address.state.code = e.target.value
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
        setSelectedFacility(faciliesData[rowMeta.dataIndex])
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
        _getFacilityDetails: getAllFacilityDetail
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatachToProps)(Facility);