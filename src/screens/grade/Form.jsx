import React from 'react'
import { makeStyles, Paper, TextField, Tooltip, IconButton } from '@material-ui/core'
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


const Form = ({ isEditMode, grade, panelCloseHandler,
    dataChangeHandler, toggleMode, saveHandler }) => {
    const classes = useStyles()
    console.log("Grade Form")
    console.log(grade);



    useEffect(() => {
        console.log(`UseEffect triggered....`)
    }, [grade])

    return (
        <Paper className={classes.root} elevation={5} variant="elevation" >
            <div className={classes.header}>
                <TextField
                    id="grade-name-id"
                    name="name"
                    label="Grade Name"
                    margin="normal"
                    value={grade.name || ''}
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
                    id="level-id"
                    name="level"
                    label="Level"
                    margin="normal"
                    value={grade.level || ''}
                    onChange={dataChangeHandler}
                    disabled={!isEditMode}
                />
                <TextField
                    id="description-id"
                    name="description"
                    label="Description"
                    margin="normal"
                    value={grade.description || ''}
                    onChange={dataChangeHandler}
                    disabled={!isEditMode}
                />
            </div>

        </Paper>
    )
}

export default Form