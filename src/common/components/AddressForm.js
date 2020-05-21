import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, CardActions, Button, Box } from '@material-ui/core'

const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '16px 16px',
        margin: '10px 10px',
        minWidth: '30%',
    },
    containerLabel: {
        color: theme.palette.action.active,
        fontWeight: theme.typography.fontWeightBold
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

const useStyles = makeStyles(styles)

const Address = ({ isEditMode, address = { state: {} }, addressHandler, stateHandler }) => {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>
    console.log(`Inside Address`)

    return (
        <React.Fragment>
            {!isEditMode && (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Address
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" component="h2">
                                12802 Hopewell Ave 107
                        </Typography>
                            <Typography variant="h6" component="h2">
                                Jolene St.
                        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                28078 Huntersville NC,
                        </Typography>
                        </Box>
                    </CardContent>
                </Card>
            )
            }
            {
                isEditMode && (
                    <Paper className={classes.container} elevation={3} disabled={!isEditMode} >

                        <Typography className={classes.containerLabel}>Address : {String(isEditMode)} </Typography>
                        <TextField
                            id="address-line-1-id"
                            name="addressLine1"
                            label="Address line 1"
                            margin="normal"
                            className={classes.textField}
                            value={address.addressLine1 || ''}
                            onChange={addressHandler}
                            disabled={!isEditMode}
                        />
                        <TextField
                            id="address-line-2-id"
                            name="addressLine2"
                            label="Address line 2"
                            margin="normal"
                            className={classes.textField}
                            value={address.addressLine2 || ''}
                            onChange={addressHandler}
                            disabled={!isEditMode}
                        />
                        <TextField
                            id="address-city-id"
                            name="city"
                            label="City"
                            margin="normal"
                            className={classes.textField}
                            value={address.city || ''}
                            onChange={addressHandler}
                            disabled={!isEditMode}
                        />

                        <TextField
                            id="address-state-id"
                            name="state"
                            label="State"
                            margin="normal"
                            className={classes.textField}
                            value={address.state.code || ''}
                            onChange={stateHandler}
                            disabled={!isEditMode}
                        />
                        <TextField
                            id="address-zipcode-id"
                            label="ZipCode"
                            name="zipCode"
                            margin="normal"
                            className={classes.textField}
                            value={address.zipCode || ''}
                            onChange={addressHandler}
                            disabled={!isEditMode}
                        />
                    </Paper>
                )
            }
        </React.Fragment>
    )
}

export default Address;