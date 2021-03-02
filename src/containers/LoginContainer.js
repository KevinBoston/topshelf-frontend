import React from 'react';
import UserForm from '../components/UserForm';
import {connect} from 'react-redux'

class LoginContainer extends React.Component {

    determineSignIn() {
        if (this.props.user) {
            return `Welcome ${this.props.user.username}`
        } else {
            return <UserForm />
            
        }

    }
    render() {
        return(
            <div className="LoginContainer">
                {this.determineSignIn()}
            </div>
        )
    }



}

const mapStateToProps = (state) => {
    return {user: state.user}

}

export default connect(mapStateToProps)(LoginContainer)