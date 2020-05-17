import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MUIDatatable from 'mui-datatables';
import PageHeader from '../../common/components/PageHeader';
import Address from '../../common/components/Address';
import Contact from '../../common/components/contact';
import { getSchoolDetail, updateSchoolDetail, updateEditInfo } from '../../store/actions/school-actions'
import { Typography, Paper, TextField } from '@material-ui/core';
import Actionbar from '../../common/components/Actionbar';
import { useState } from 'react';

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
            height: '30%',
            padding: '0px 25px',
            textAlign: 'center',
        }

    })
}
const useStyles = makeStyles(styles)

const School = ({ schoolData, _getSchoolDetails, _updateSchoolDetails, _updateEditInfo }) => {
    const classes = useStyles()
    const [actionMode, setActionMode] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true)
    const missionStmt = "To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.\
    To Provide an Environment of Learning that enhances Dissemination of Knowledge.To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.\
    To Provide an Environment of Learning that enhances Dissemination of Knowledge.To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.\
    To Provide an Environment of Learning that enhances Dissemination of Knowledge.To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.\
    To Provide an Environment of Learning that enhances Dissemination of Knowledge.To Nurture Research and Innovation for the betterment of Life and Progress of the Nation."  ;

    // console.log(`School details here..`)
    // console.log(schoolData)

    const columns = ["id", "Name", "Address", "Phone #", "Primary Email", "Fax"]
    let data = [];


    const saveSchoolChangesToDB = async () => {
        console.log("Changes saved to DB");
        await _updateSchoolDetails(schoolData)
        setActionMode(false)
    }


    const dummyHandler = () => { }

    const refreshDataHandler = () => {
        setInitialLoad(true)
    }

    const stateHandler = e => {
        e.preventDefault()
        const newSchoolData = JSON.parse(JSON.stringify(schoolData))
        newSchoolData.address.state.code = e.target.value
        _updateEditInfo(newSchoolData)
    }

    const addressHandler = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        const newSchoolData = JSON.parse(JSON.stringify(schoolData))
        newSchoolData.address[targetName] = targetValue
        _updateEditInfo(newSchoolData)
    }

    const contactHandler = (e) => {
        e.preventDefault()
        const targetName = e.target.name
        const targetValue = e.target.value
        console.log(`${targetName}|${targetValue}`)
        const newSchoolData = JSON.parse(JSON.stringify(schoolData))
        newSchoolData.contact[targetName] = targetValue
        console.log(newSchoolData.contact)
        _updateEditInfo(newSchoolData)
    }

    useEffect(() => {
        const getDetails = async () => {
            setInitialLoad(false)
            await _getSchoolDetails()
            // setAddress(schoolData.address)
        }


        if (initialLoad)
            getDetails();
    }, [schoolData, initialLoad, actionMode])

    const options = {
        filter: true,
        filterType: 'dropdown',
        onRowClick: dummyHandler,
        onCellClick: dummyHandler,
        onRowsSelect: dummyHandler,
        onRowsDelete: dummyHandler
    }


    return (
        <div className={classes.root}>
            <PageHeader title="School" >
                <Actionbar mode={actionMode} changeMode={setActionMode} saveBtnHndlr={saveSchoolChangesToDB} refreshHndlr={refreshDataHandler} />
            </PageHeader>
            <div className={classes.container}>
                <div id="school-info" style={{ display: 'flex', flexDirection: 'column', minWidth: '90%' }}>
                    <div className={classes.schoolDetails}> <Typography variant="h3">{schoolData.name}</Typography></div>
                    <Paper style={{ margin: '10px 10px', padding: '20px 20px', width: '70%', display: 'flex', alignSelf: 'center', textAlign: 'justify' }} elevation={0}>
                        <TextField id="mission-statement" multiline value={missionStmt} style={{ width: '100%' }} disabled={!actionMode}>

                        </TextField>
                    </Paper>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Address mode={actionMode} address={schoolData.address} addressHandler={addressHandler} stateHandler={stateHandler} ></Address>
                        <Contact mode={actionMode} data={schoolData.contact} contactHandler={contactHandler}></Contact>
                    </div>
                </div>


                {/* <div style={{ margin: '10px 10px' }}>
                    < MUIDatatable
                        title={'Facilities'}
                        columns={columns}
                        data={data}
                        options={options}
                    />
                </div> */}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        schoolData: state.school
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getSchoolDetails: getSchoolDetail,
        _updateSchoolDetails: newData => updateSchoolDetail(newData),
        _updateEditInfo: updateEditInfo
    }, dispatch)
}

// export default School;
export default connect(mapStateToProps, mapDispatachToProps)(School);