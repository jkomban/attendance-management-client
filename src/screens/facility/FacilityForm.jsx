import React, { useEffect } from 'react'
import { makeStyles, Box, Paper, TextField, Tooltip, IconButton } from '@material-ui/core'
import Address from '../../common/components/AddressForm';
import Contact from '../../common/components/ContactForm';
import { Edit, ArrowForwardIos as ChevronRightIcon, Save } from '@material-ui/icons'

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
            margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
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

const FacilityForm = ({ isEditMode, facility, panelCloseHandler, dataChangeHandler, toggleMode, saveHandler, addressChangeHandler }) => {
    const classes = useStyles()
    console.log("FacilityForm: ", isEditMode)
    console.log(facility);

    const stateHandler = e => {
        e.preventDefault()
        addressHandler(e)
    }

    const addressHandler = (event) => {
        event.preventDefault()
        addressChangeHandler(event)
    }

    useEffect(() => {

    }, [facility])

    return (
        <Paper className={classes.root} elevation={5} variant="elevation" >
            <div className={classes.header}>
                <TextField
                    id="facility-name-id"
                    name="name"
                    label="Facility Name"
                    margin="normal"
                    className={classes.textField}
                    value={facility.name || ''}
                    onChange={dataChangeHandler}
                    disabled={!isEditMode} />
                <div>
                    {
                        !isEditMode &&
                        <Tooltip title="Edit">
                            <IconButton onClick={() => { toggleMode(true) }}>
                                <Edit style={{ color: 'primary' }} />
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        isEditMode &&
                        <Tooltip title="Save">
                            <IconButton onClick={saveHandler}>
                                <Save style={{ color: 'primary' }} />
                            </IconButton>
                        </Tooltip>
                    }

                    <Tooltip title="Close">
                        <IconButton onClick={panelCloseHandler}>
                            <ChevronRightIcon style={{}} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>

            <div className={classes.contactAddress}>
                <Address isEditMode={isEditMode} address={facility.address} addressHandler={addressHandler} stateHandler={stateHandler} />
                <Contact isEditMode={isEditMode} data={facility.contact || {}} contactHandler={() => { }} />
            </div>

        </Paper>
    )
}

export default FacilityForm