import React from 'react'
import { makeStyles, Box, Paper, TextField, Typography, Button } from '@material-ui/core'
import Address from '../../common/components/AddressForm';
import Contact from '../../common/components/ContactForm';
import ChevronRightIcon from '@material-ui/icons/ArrowRightTwoTone'

const styles = theme => {
    console.log(theme)
    return ({
        root: {
            flexGrow: 12,
            height: 'fit-content',
            margin: `0px ${theme.spacing(1)}px`
        },
        contactAddress: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: "wrap",
            "& >div": {
                flex: 1
            }
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 20px'
        },
        textField: {
            // margin: '10px 20px',
        }
    })
}
const useStyles = makeStyles(styles)

const Form = ({ isEditMode, batch, panelCloseHandler }) => {
    const classes = useStyles()
    console.log("Batch Form")
    console.log(batch);

    return (
        <Paper className={classes.root} elevation={5} variant="elevation" >
            <div className={classes.header}>
                <TextField
                    id="batch-name-id"
                    name="name"
                    label="Batch Name"
                    margin="normal"
                    className={classes.textField}
                    value={batch.name || ''}
                    onChange={() => { }}
                    disabled={!isEditMode} />
                {/* <Button variant="contained" size="small" endIcon={<ChevronRightIcon />}>Close</Button> */}
                <ChevronRightIcon style={{ fontSize: '3em' }} color="primary" onClick={panelCloseHandler} />
            </div>

            <div className={classes.contactAddress}>
                <div>Description: {batch.description}</div>
                <div>Start Date: {batch.startDate}</div>
                <div>End Date: {batch.endDate}</div>
            </div>

        </Paper>
    )
}

export default Form