import React from 'react';
import { withStyles } from '@material-ui/core'
import DropDown from '../../components/DropDown'
import SearchButton from '../../components/SearchButton'
import { Grid, Paper } from '@material-ui/core'

const styles = {
    root: {
        flexGrow: 1,
    },

}
const studentSearch = ({ selectedClassId, selectedBatchId, handleChange, handleClick, classes }) => {

    let classList = [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
        { key: 3, value: 3 }
    ]
    let defaultClass = 1

    let batchList = [
        { key: 2010, value: "2010" },
        { key: 2011, value: "2011" },
    ]
    let defaultBatch = 2010

    return (
        <div className={classes.root}>
            <Paper>
                <Grid container direction="row">
                    <Grid item >
                        <DropDown
                            name="Class"
                            items={classList}
                            selection={selectedClassId}
                            handleChange={handleChange}></DropDown>
                    </Grid>
                    <Grid item >
                        <DropDown
                            name="Batch"
                            selection={selectedBatchId}
                            items={batchList}
                            handleChange={handleChange}></DropDown>
                    </Grid>
                    <SearchButton handleClick={handleClick} />
                </Grid>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(studentSearch);