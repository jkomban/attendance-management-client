import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import { Paper, IconButton, Card, CardContent, Tooltip, Box } from '@material-ui/core';
import { ContactMail, Edit } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // padding: '16px 16px',
        // margin: '5px 10px',
        minWidth: '30%'
    },
    containerLabel: {
        color: theme.palette.action.active,
        fontWeight: theme.typography.fontWeightBold
    },
    root: {
        minWidth: 275,
        height: 'fit-content'
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

const Contact = ({ isEditMode = false, data, contactHandler, toggleEditMode }) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            {!isEditMode &&
                <Card className={classes.root} variant="outlined">
                    <CardContent >
                        <Box style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: 'center'
                        }}>
                            <Box style={{ display: 'flex', color: 'grey', flexDirection: 'row' }}>
                                <ContactMail />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Contact
                            </Typography>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Tooltip title="Edit">
                                    <IconButton onClick={toggleEditMode} ><Edit style={{ color: 'grey' }} /></IconButton>
                                </Tooltip>

                                <Tooltip title="Copy">
                                    <IconButton>
                                        <svg style={{ fill: 'gray', height: '20px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Box>
                        <Box>
                            <Typography variant="h6" component="h6">
                                Ph: {data.phone1}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                Jolene St.
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                28078 Huntersville NC, USA
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

            }

            {isEditMode &&
                <Paper className={classes.container} elevation={3} >
                    <Typography className={classes.containerLabel}>Contact</Typography>
                    <TextField
                        id="contact_ph_1_id"
                        name="phone1"
                        label="Phone#1"
                        margin="normal"
                        value={data.phone1 || ''}
                        className={classes.textField}
                        onChange={contactHandler}
                        disabled={!isEditMode}
                    />
                    <TextField
                        id="contact_ph_2_id"
                        name="phone2"
                        label="Phone#2"
                        margin="normal"
                        value={data.phone2 || ''}
                        className={classes.textField}
                        onChange={contactHandler}
                        disabled={!isEditMode}
                    />
                    <TextField
                        id="contact_fac_id"
                        name="fax"
                        label="Fax"
                        margin="normal"
                        value={data.fax || ''}
                        className={classes.textField}
                        onChange={contactHandler}
                        disabled={!isEditMode}
                    />
                    <TextField
                        id="contact_email_1_id"
                        name="email1"
                        label="Email#1"
                        margin="normal"
                        value={data.email1 || ''}
                        className={classes.textField}
                        onChange={contactHandler}
                        disabled={!isEditMode}
                    />
                    <TextField
                        id="contact_email_2_id"
                        name="email2"
                        label="Email#2"
                        margin="normal"
                        value={data.email2 || ''}
                        className={classes.textField}
                        onChange={contactHandler}
                        disabled={!isEditMode}
                    />
                </Paper>

            }

        </React.Fragment>
    )

}

export default Contact;