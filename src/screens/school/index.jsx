import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MUIDatatable from 'mui-datatables';
import PageHeader from '../../common/components/PageHeader';
import Address from '../../common/components/Address';
import Contact from '../../common/components/contact';
import { getSchoolDetail } from '../../store/actions/school-actions'
import { Typography, Paper } from '@material-ui/core';
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
            flexDirection: 'column',
            // backgroundColor: 'blue',
            margin: '10px 20px'
        },
        schoolDetails: {
            height: '30%',
            padding: '0px 25px',
            textAlign: 'center',
        }

    })
}
const useStyles = makeStyles(styles)

const School = ({ schoolData, _getSchoolDetails }) => {
    const [address, setAddress] = useState(schoolData.address);
    const classes = useStyles()
    const [actionMode, setActionMode] = useState(true);

    console.log(`School details here..`)
    console.log(schoolData)

    const columns = ["id", "Name", "Address", "Phone #", "Primary Email", "Fax"]
    let data = [];




    const dummyHandler = () => { }

    const saveAddressChange = (newAddress) => {
        console.log("New address received")
        console.log(newAddress)
        setAddress(newAddress)
    }

    useEffect(() => {
        _getSchoolDetails()
        console.log(`------- USEEFFECT `)
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
        <div className={classes.root}>
            <PageHeader title="School" >
                <Actionbar mode={actionMode} changeMode={setActionMode} />
            </PageHeader>
            <div className={classes.container}>
                <div id="school-info" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.schoolDetails}> <Typography variant="h3">{schoolData.name}</Typography></div>
                    <Paper style={{ margin: '10px 10px', padding: '20px 20px', width: '70%', display: 'flex', alignSelf: 'center', textAlign: 'justify' }} elevation={0}>
                        <Typography id="mission-statement" variant="body1">
                            To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.
                            To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.
                            To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.
                            To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.
                            To Provide an Environment of Learning that enhances Dissemination of Knowledge. To Nurture Research and Innovation for the betterment of Life and Progress of the Nation.
                        </Typography>
                    </Paper>

                    <Address data={schoolData.address} saveHandler={saveAddressChange} ></Address>
                    {/* <Contact data={schoolData.contact}></Contact> */}
                </div>


                <div style={{ margin: '10px 10px' }}>
                    < MUIDatatable
                        title={'Facilities'}
                        columns={columns}
                        data={data}
                        options={options}
                    />
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(`School.mapStateToProps() - ${JSON.stringify(state)}`)
    console.log(state);

    return {
        schoolData: state.school
    }
}

const mapDispatachToProps = (dispatch) => {
    return bindActionCreators({
        _getSchoolDetails: getSchoolDetail
    }, dispatch)
}

// export default School;
export default connect(mapStateToProps, mapDispatachToProps)(School);