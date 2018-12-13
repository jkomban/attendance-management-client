import React from 'react';
import { withStyles } from '@material-ui/core';

const StudentAdd = ({ data }) => {
    return (
        <div>
            {
                data && <div> ${data} update Student</div>

            }

            {
                !data && <div> New Student form </div>
            }
        </div>
    )
}

export default StudentAdd