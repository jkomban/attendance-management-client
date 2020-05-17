import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'
import PageHeader from '../../common/components/PageHeader'
import Actionbar from '../../common/components/Actionbar-add';
import Page from '../../common/components/Page';
import MUIDatatable from 'mui-datatables';
import FacilityForm from './FacilityForm';
import { useEffect } from 'react';

const styles = theme => ({
    root: {
        background: 'yellow'
    },
    muiTable: {
        flexGrow: 12
    }
})
const useStyles = makeStyles(styles)

const Facility = () => {
    const [actionMode, setActionMode] = useState(false)
    const [initialLoad, setInitialLoad] = useState(true)
    const classes = useStyles()
    const columns = ["id", "Name", "Address", "Phone #", "Primary Email", "Fax"]
    let data = [];
    const dummyHandler = () => { }


    const saveSchoolChangesToDB = async () => {
        console.log("Changes saved to DB");
        setActionMode(false)
    }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    useEffect(() => {

    }, [])


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
                <Actionbar mode={actionMode} changeMode={setActionMode} saveBtnHndlr={saveSchoolChangesToDB} refreshHndlr={refreshDataHandler} />
            </PageHeader>

            <div style={{ margin: '20px 25px', display: 'flex', flexDirection: 'row', flexWrap: "nowrap", flexGrow: 12 }}>
                <MUIDatatable
                    title={'Facility List'}
                    columns={columns}
                    data={data}
                    options={options}
                    style={{ flexGrow: 12, backgroundColor: 'red', color: 'red' }}
                />
                <FacilityForm />
            </div>

        </Page>
    )
}

export default Facility;