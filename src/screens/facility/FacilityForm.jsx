import React from 'react'
import { makeStyles } from '@material-ui/core'


const FacilityForm = ({ isAddMode }) => {
    return (
        <div hidden={!isAddMode}>
            Facility form comes here...
        </div>
    )
}

export default FacilityForm