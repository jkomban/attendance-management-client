import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Paper, TextField, Button } from '@material-ui/core'
import Address from '../../components/Address'
import Name from '../../components/Name'
import Gender from '../../components/Gender'

const styles = {
    textField: {
        margin: '5px'
    },
    button: {
        margin: '5px'
    }
}

class StudentAdd extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.data = props.data
        this.classes = props.classes
        console.log(this.data)
        this.state = {
            formData: this.data
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        console.log(event.target)
    }

    handleSwitch = (event, checked) => {
        event.preventDefault()
        // console.log(event)
        // console.log(checked)
        const value = checked ? 'M' : 'F'
        console.log(this.state)
        console.log(`Switch clicked Gender from[${this.state.formData.gender}] to[${value}]`)
        // const newFormData = Object.assign({}, this.state.formData, { gender: value })
        // console.log(newFormData)
        this.setState({ formData: { gender: value } })
        console.log(this.state)
    }

    getForm = () => {
        return (
            <Paper>
                <Name data={this.state.formData && this.state.formData.name} classes={this.classes} handleChange={this.handleChange} />
                <Gender gender={this.state.formData && this.state.formData.gender} handleSwitch={this.handleSwitch} />

                <TextField
                    id="emaild-id"
                    label="Email ID"
                    defaultValue={(this.state.formData && this.state.formData.email)}
                    className={this.classes.textField}
                    margin="normal"
                />

                <Address data={this.state.formData && this.state.formData.address} handleClick={null} />

                <Button variant="contained" color="primary" className={this.classes.button}>
                    {this.state.formData && "Update"}
                    {!this.state.formData && "Save"}
                </Button>
                <Button variant="outlined" color="primary" className={this.classes.button}>
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