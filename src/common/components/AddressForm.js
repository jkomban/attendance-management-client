import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, CardActions, Button, Box, Tooltip, IconButton } from '@material-ui/core'
import { Business, Edit } from '@material-ui/icons'
// import ContentCopy from '../svg/ContentCopy_24x24';

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
        height: 'fit-content'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        margin: `${theme.spacing(.5)}px ${theme.spacing(.5)}px`,
    },
    pos: {
        marginBottom: 12,
    },
})

const useStyles = makeStyles(styles)

const Address = ({ isEditMode = false, address = { state: {} }, addressHandler, stateHandler, toggleEditMode }) => {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>
    console.log(`Inside Address`)

    return (
        <React.Fragment>
            {!isEditMode && (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Box style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>
                            <Box style={{ display: 'flex', color: 'grey', flexDirection: 'row' }} >
                                <Business />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Address
                                </Typography>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Tooltip title="Edit">
                                    <IconButton onClick={toggleEditMode}><Edit style={{ color: 'grey' }} /></IconButton>
                                </Tooltip>

                                <Tooltip title="Copy">
                                    <IconButton>
                                        <svg style={{ fill: 'gray', height: '20px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h5" component="h2">
                                {address.addressLine1}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {address.addressLine2}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {address.city || "Huntersville"}, {address.state && address.state.code}, {address.country && address.country.code} - {address.zipCode}
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
        </React.Fragment >
    )
}

export default Address;