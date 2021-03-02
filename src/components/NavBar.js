import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class NavBar extends React.Component {

     greeting() {
          if (this.props.user) {
               return `Greetings ${this.props.user.username}`
          } else {
               return (
                    <NavLink exact to='/' className="NavBarLink">
                         Please Signin
                    </NavLink>
               )
          }
     }


    render() {
         return(
          <div className="NavBar">
                <NavLink exact to='/' className="NavBarLink">
                     Home
                </NavLink>
                <NavLink to='/items' className='NavBarLink'>
                     All Item stuff
                </NavLink>
               {this.greeting()}
        </div>
        )
     }  
}
const mapStateToProps = (state) => {
     return {user: state.user}
}

export default connect(mapStateToProps)(NavBar);