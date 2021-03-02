import React from 'react';
import {connect} from 'react-redux'
import {createUser} from '../actions/UserActions'

class UserForm extends React.Component {

        
    constructor() {
        super();

        this.state = {
            username: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.createUser(this.state)
        this.setState({
            username: ""
        })
    }

    render() {
        return(
            <div className="UserFormContainer">
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username here" />
                <button type="submit" disabled={this.state.username===""}>Submit</button>
            </form>
            </div>


        )
    }

}
export default connect(null, {createUser})(UserForm)