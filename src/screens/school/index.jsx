import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import MUIDatatable from 'mui-datatables';
import PageHeader from '../../common/components/PageHeader';
import Address from '../../common/components/Address';
import { getSchoolDetail } from '../../store/actions/school-actions'
import { Typography } from '@material-ui/core';

const styles = theme => ({
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
const useStyles = makeStyles(styles)

const School = ({ schoolData, _getSchoolDetails }) => {
    const classes = useStyles()
    console.log(`School details here..`)
    console.log(schoolData)

    const columns = ["id", "Name", "Address", "Phone #", "Primary Email", "Fax"]
    let data = [];

    const dummyHandler = () => { }

    useEffect(() => {
        _getSchoolDetails()
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
            <PageHeader title="School" />
            <div className={classes.container}>
                <div id="school-info" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.schoolDetails}> <Typography variant="h3">{schoolData.name}</Typography></div>
                    <Address data={schoolData.address}></Address>
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