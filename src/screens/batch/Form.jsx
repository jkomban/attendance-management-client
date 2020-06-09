import React from 'react'
import { makeStyles, Box, Paper, TextField, Typography, Button, Tooltip, IconButton } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { Edit, ArrowForwardIos as ChevronRightIcon, Save } from '@material-ui/icons'
import { useEffect } from 'react';

const styles = theme => {
    console.log(theme)
    return ({
        root: {
            flexGrow: 4,
            height: 'fit-content',
            margin: `0px ${theme.spacing(1)}px`,
            padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px`
        },
        controlContainer: {
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
        },
    })
}
const useStyles = makeStyles(styles)


const Form = ({ isEditMode, batch, panelCloseHandler,
    dataChangeHandler, toggleMode, saveHandler }) => {
    const classes = useStyles()
    console.log("Batch Form")
    console.log(batch);

    const endDateChangeHandler = (e, f, g) => {
        console.log(f)
        const event = {
            target: {
                name: 'endDate',
                value: f
            }
        };
        dataChangeHandler(event)
    }

    useEffect(() => {
        console.log(`UseEffect triggered....`)
    }, [batch])

    return (
        <Paper className={classes.root} elevation={5} variant="elevation" >
            <div className={classes.header}>
                <TextField
                    id="batch-name-id"
                    name="name"
                    label="Batch Name"
                    margin="normal"
                    value={batch.name || ''}
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


            <div className={classes.controlContainer}>
                <TextField
                    id="description-id"
                    name="description"
                    label="Description"
                    margin="normal"
                    value={batch.description || ''}
                    onChange={dataChangeHandler}
                    disabled={!isEditMode}
                />
                <TextField
                    id="start-date-id"
                    name="startDate"
                    label="Start Date"
                    margin="normal"
                    type="date"
                    value={batch.startDate || ''}
                    onChange={dataChangeHandler}
                    disabled={!isEditMode}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        name="endDate"
                        label="End Date"
                        format="yyyy-MM-dd"
                        value={batch.endDate || ''}
                        onChange={endDateChangeHandler}
                    />
                </MuiPickersUtilsProvider>
            </div>

        </Paper>
    )
}

export default Form