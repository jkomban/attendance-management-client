import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Paper, TextField, Button, Typography } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'
import Address from '../../components/Address'
import Name from '../../components/Name'
import Gender from '../../components/Gender'
import Email from '../../components/Email'

const styles = {
    textField: {
        margin: '5px'
    },
    button: {
        margin: '5px'
    },
    heading: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1.25rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        padding: '14px 24px',
    },
    shift: {
        paddingRight: '14px',
        paddingLeft: '14px'
    },
    genderLabel: {
        color: 'rgba(0, 0, 0, 0.54)',
        letterSpacing: '0em',
        fontSize: '.78rem',
        lineHeight: '1.0rem'
    }
}

class StudentAdd extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.data = props.data
        this.heading = (this.data && this.data.studentId) ? 'Update Student' : 'Add Student'
        this.clearData = {
            studentId: (this.data && this.data.studentId),
            name: {
                firstName: (this.data && this.data.name.firstName) || '',
                middleName: (this.data && this.data.name.middleName) || '',
                lastName: (this.data && this.data.name.lastName) || ''
            },
            dob: (this.data && this.data.dob) || undefined,
            emailID: (this.data && this.data.email) || '',
            gender: (this.data && this.data.gender) || 'F',
            address: {
                addressline1: (this.data && this.data.address.addressline1) || '',
                addressline2: (this.data && this.data.address.addressline2) || '',
                city: (this.data && this.data.address.city) || '',
                zipCode: (this.data && this.data.address.zipCode) || '',
                state: (this.data && this.data.address.state) || ''
            }
        }
        this.classes = props.classes
        console.log(this.clearData)
        this.state = {
            formData: this.clearData
        }
    }

    nameChangeHandler = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetvalue = event.target.value
        console.log(`nameChangeHandler()-> [${targetName}:${targetvalue}] `)
        const nameState = { ...this.state.formData.name }
        nameState[targetName] = targetvalue
        const newFormDataState = Object.assign({}, this.state.formData, { name: nameState })
        console.log(newFormDataState)
        this.setState({ formData: newFormDataState })
    }

    addressChangeHandler = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(`addressChangeHandler()-> [${targetName}:${targetValue}] `)
        const addressState = { ...this.state.formData.address }
        addressState[targetName] = targetValue
        const newFormDataState = Object.assign({}, this.state.formData, { address: addressState })
        console.log(newFormDataState)
        this.setState({ formData: newFormDataState })
    }

    handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        console.log(event.target)
    }

    handleSwitch = (event, checked) => {
        event.preventDefault()
        const value = checked ? 'M' : 'F'
        const newFormDataState = Object.assign({}, this.state.formData, { gender: value })
        console.log(`Switch clicked Gender from[${this.state.formData.gender}] to[${value}]`)
        this.setState({ formData: newFormDataState })
        console.log(newFormDataState)
    }

    handleClearClick = (event) => {
        event.preventDefault()
        console.log(`handleClearClick ${JSON.stringify(this.clearData)}`)
        this.setState({ formData: this.clearData })
    }

    handleDateChange = (dob) => {
        console.log(`Inside handleDateChange() - dob[${dob}]`)
        const newFormDataState = Object.assign({}, this.state.formData, { dob: dob })
        this.setState({ formData: newFormDataState })
        console.log(newFormDataState)
    }

    emailIDChangeHandler = (event) => {
        event.preventDefault()
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(`Inside emailIDChangeHandler() - emailID[${targetValue}]`)
        const newFormDataState = Object.assign({}, this.state.formData, { emailID: targetValue })
        this.setState({ formData: newFormDataState })
    }

    getForm = () => {
        return (
            <Paper>
                <div>
                    <Typography
                        variant="h6"
                        className={this.classes.heading}>
                        {this.heading}
                    </Typography>
                </div>
                <Name
                    data={this.state.formData && this.state.formData.name}
                    classes={this.classes}
                    handleChange={this.nameChangeHandler} />
                <Gender
                    gender={this.state.formData && this.state.formData.gender}
                    classes={this.classes}
                    handleSwitch={this.handleSwitch} />

                <div className={this.classes.shift}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <InlineDatePicker
                            label="Birth date"
                            value={this.state.formData.dob}
                            onChange={this.handleDateChange}
                            format="dd/MM/yyyy"
                        />
                    </MuiPickersUtilsProvider>


                </div>

                {/* <TextField
                        id="emaild-id"
                        name="email"
                        label="Email ID"
                        value={(this.state.formData && this.state.formData.email)}
                        className={this.classes.textField}
                        margin="normal"
                    /> */}
                <Email
                    data={this.state.formData && this.state.formData.emailID}
                    handleChange={this.emailIDChangeHandler}
                    classes ={this.classes}
                />

                <Address
                    data={this.state.formData && this.state.formData.address}
                    handleChange={this.addressChangeHandler}
                    classes={this.classes}
                    className={this.classes.shift} />

                <Button variant="contained" color="primary" className={this.classes.button}>
                    {this.state.formData && "Update"}
                    {!this.state.formData && "Save"}
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={this.classes.button}
                    onClick={this.handleClearClick}
                >
                    Clear
                </Button>

            </Paper>
        )
    }

    render() {
        console.log((this.data && (this.data.gender === 'M' ? "primary" : "secondary")) || "secondary")

        return (
            <div>
                {this.getForm(this.data)}
            </div >
        )
    }

}

export default withStyles(styles)(StudentAdd)